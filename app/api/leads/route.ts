import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  website?: string;
  interest?: string;
  message?: string;
  source?: string;
  companySite?: string;
};

function isValidUrl(value: string) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;

  if (payload.companySite) {
    return NextResponse.json({
      ok: true,
      message: "Talebiniz alındı."
    });
  }

  if (!payload.name?.trim() || !payload.email?.trim() || !payload.phone?.trim()) {
    return NextResponse.json(
      { message: "Lütfen ad, e-posta ve telefon alanlarını doldurun." },
      { status: 400 }
    );
  }

  if (!payload.website?.trim() || !isValidUrl(payload.website.trim())) {
    return NextResponse.json(
      { message: "Lütfen geçerli bir web sitesi adresi paylaşın." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      "Talebiniz alındı. Mevcut sitenizi inceleyip öncelikli notlarla size kısa süre içinde dönüş yapacağız."
  });
}
