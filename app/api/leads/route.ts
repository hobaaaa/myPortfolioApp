import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company_name?: string;
  website_url?: string;
  service_interest?: string;
  message?: string;
  source?: string;
  company_site?: string;
};

type InsertedLead = {
  id?: string;
  created_at?: string;
};

type ResendError = {
  statusCode?: number;
  message?: string;
  name?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const resendFallbackFrom = "DG Digital <onboarding@resend.dev>";

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  return value;
}

function getSuccessMessage(source: string) {
  return source === "free_analysis"
    ? "Talebiniz alındı. Mevcut sitenizi inceleyip öncelikli notlarla size kısa süre içinde dönüş yapacağız."
    : "Mesajınız alındı. Projenizi değerlendirmek için size kısa süre içinde dönüş yapacağız.";
}

function normalizePayload(payload: LeadPayload) {
  return {
    name: payload.name?.trim() ?? "",
    email: payload.email?.trim().toLowerCase() ?? "",
    phone: payload.phone?.trim() || null,
    company_name: payload.company_name?.trim() || null,
    website_url: payload.website_url?.trim() || null,
    service_interest: payload.service_interest?.trim() || null,
    message: payload.message?.trim() || null,
    source: payload.source?.trim() || "website_contact",
    company_site: payload.company_site?.trim() ?? ""
  };
}

async function insertLead(payload: ReturnType<typeof normalizePayload>) {
  const supabaseUrl = getRequiredEnv("NEXT_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY");

  const response = await fetch(`${supabaseUrl}/rest/v1/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: "return=representation"
    },
    body: JSON.stringify([
      {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        company_name: payload.company_name,
        website_url: payload.website_url,
        service_interest: payload.service_interest,
        message: payload.message,
        source: payload.source
      }
    ]),
    cache: "no-store"
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Supabase insert failed: ${errorText}`);
  }

  const data = (await response.json()) as InsertedLead[];
  return data[0];
}

function buildLeadEmailHtml(payload: ReturnType<typeof normalizePayload>, leadId?: string) {
  const rows = [
    ["Lead ID", leadId ?? "-"],
    ["Kaynak", payload.source],
    ["Ad Soyad", payload.name],
    ["E-posta", payload.email],
    ["Telefon", payload.phone ?? "-"],
    ["Firma", payload.company_name ?? "-"],
    ["Web Sitesi", payload.website_url ?? "-"],
    ["Hizmet İlgisi", payload.service_interest ?? "-"],
    ["Mesaj", payload.message ?? "-"]
  ];

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
      <h2 style="margin:0 0 16px">Yeni DG Digital Lead Bildirimi</h2>
      <table style="width:100%;border-collapse:collapse">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding:10px 12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600;width:180px">${label}</td>
                  <td style="padding:10px 12px;border:1px solid #e2e8f0">${value}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

async function sendWithResend(fromEmail: string, payload: ReturnType<typeof normalizePayload>, leadId?: string) {
  const resendApiKey = getRequiredEnv("RESEND_API_KEY");
  const contactToEmail = getRequiredEnv("CONTACT_TO_EMAIL");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [contactToEmail],
      reply_to: payload.email,
      subject: `Yeni Lead: ${payload.name} (${payload.source})`,
      html: buildLeadEmailHtml(payload, leadId)
    }),
    cache: "no-store"
  });

  if (response.ok) {
    return;
  }

  const errorText = await response.text();
  let parsedError: ResendError | null = null;

  try {
    parsedError = JSON.parse(errorText) as ResendError;
  } catch {
    parsedError = null;
  }

  const error = new Error(`Resend send failed: ${errorText}`) as Error & {
    resendError?: ResendError;
  };
  error.resendError = parsedError ?? undefined;

  throw error;
}

async function sendLeadNotification(payload: ReturnType<typeof normalizePayload>, leadId?: string) {
  const contactFromEmail = getRequiredEnv("CONTACT_FROM_EMAIL");

  try {
    await sendWithResend(contactFromEmail, payload, leadId);
    return { sent: true as const, from: contactFromEmail };
  } catch (error) {
    const resendError = (error as Error & { resendError?: ResendError }).resendError;
    const shouldRetryWithFallback =
      resendError?.statusCode === 403 &&
      resendError?.name === "validation_error" &&
      resendError?.message?.includes("domain is not verified");

    if (!shouldRetryWithFallback) {
      throw error;
    }

    await sendWithResend(resendFallbackFrom, payload, leadId);
    return { sent: true as const, from: resendFallbackFrom };
  }
}

export async function POST(request: Request) {
  try {
    const rawPayload = (await request.json()) as LeadPayload;
    const payload = normalizePayload(rawPayload);

    if (payload.company_site) {
      return NextResponse.json({
        ok: true,
        message: "Talebiniz alındı."
      });
    }

    if (!payload.name) {
      return NextResponse.json({ message: "Lütfen ad soyad alanını doldurun." }, { status: 400 });
    }

    if (!payload.email) {
      return NextResponse.json({ message: "Lütfen e-posta alanını doldurun." }, { status: 400 });
    }

    if (!emailPattern.test(payload.email)) {
      return NextResponse.json(
        { message: "Lütfen geçerli bir e-posta adresi paylaşın." },
        { status: 400 }
      );
    }

    const insertedLead = await insertLead(payload);

    try {
      await sendLeadNotification(payload, insertedLead?.id);
    } catch (notificationError) {
      console.error("Lead notification failed", notificationError);
    }

    return NextResponse.json({
      ok: true,
      message: getSuccessMessage(payload.source)
    });
  } catch (error) {
    console.error("Lead submission failed", error);

    return NextResponse.json(
      {
        message:
          "Talebiniz şu anda alınamadı. Lütfen kısa süre sonra tekrar deneyin veya doğrudan e-posta ile ulaşın."
      },
      { status: 500 }
    );
  }
}
