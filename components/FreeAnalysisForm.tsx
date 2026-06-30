"use client";

import { useState } from "react";
import { analysisInterestOptions } from "@/data/freeAnalysis";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  interest: string;
  message: string;
  source: string;
  companySite: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  interest: analysisInterestOptions[0],
  message: "",
  source: "free_analysis",
  companySite: ""
};

export function FreeAnalysisForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Form gönderimi sırasında bir sorun oluştu.");
      }

      setStatus("success");
      setFeedback(
        result.message ??
          "Talebiniz alındı. İnceleme planını paylaşmak için size kısa süre içinde dönüş yapacağız."
      );
      setFormState(initialState);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Form gönderimi sırasında bir sorun oluştu.";
      setStatus("error");
      setFeedback(message);
    }
  }

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setFormState((current) => ({
      ...current,
      [field]: value
    }));
  }

  return (
    <form
      id="analysis-form"
      onSubmit={handleSubmit}
      className="panel rounded-[32px] p-7 md:p-9"
      aria-label="Ücretsiz web sitesi analizi talep formu"
    >
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-accent">Ücretsiz Analiz Formu</p>
        <h2 className="font-display text-3xl font-semibold md:text-[2.4rem]">
          Ücretsiz analiz talep edin.
        </h2>
        <p className="text-sm leading-7 text-slate-300 md:text-base">
          Sitenizi teknik yapı, mesaj netliği ve dönüşüm potansiyeli açısından inceleyip
          öncelikli geliştirme başlıklarını sizinle paylaşalım.
        </p>
      </div>

      <input type="hidden" name="source" value={formState.source} readOnly />

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="companySite">Web sitesi</label>
        <input
          id="companySite"
          name="companySite"
          tabIndex={-1}
          autoComplete="off"
          value={formState.companySite}
          onChange={(event) => updateField("companySite", event.target.value)}
        />
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">Ad Soyad</span>
          <input
            required
            type="text"
            name="name"
            value={formState.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Ad Soyad"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/40 focus:bg-white/10"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">E-posta</span>
          <input
            required
            type="email"
            name="email"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="ornek@firma.com"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/40 focus:bg-white/10"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">Telefon</span>
          <input
            required
            type="tel"
            name="phone"
            value={formState.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="0553 666 23 53"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/40 focus:bg-white/10"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">Firma Adı</span>
          <input
            type="text"
            name="company"
            value={formState.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Firma Adı"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/40 focus:bg-white/10"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="mb-2 block text-sm font-medium text-slate-200">Web Sitesi URL</span>
          <input
            required
            type="url"
            name="website"
            value={formState.website}
            onChange={(event) => updateField("website", event.target.value)}
            placeholder="https://ornek.com"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/40 focus:bg-white/10"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="mb-2 block text-sm font-medium text-slate-200">Hizmet İlgisi</span>
          <select
            name="interest"
            value={formState.interest}
            onChange={(event) => updateField("interest", event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent/40 focus:bg-white/10"
          >
            {analysisInterestOptions.map((option) => (
              <option key={option} value={option} className="bg-[#081423] text-white">
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-medium text-slate-200">Mesaj / Not</span>
        <textarea
          name="message"
          rows={6}
          value={formState.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Mevcut sitenizde hangi alanların zayıf kaldığını düşünüyorsanız kısaca paylaşabilirsiniz."
          className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/40 focus:bg-white/10"
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="button-primary min-w-[190px]"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Gönderiliyor..." : "Analiz Talep Et"}
        </button>
        <p
          className={`text-sm leading-6 ${
            status === "error" ? "text-rose-300" : "text-slate-300"
          }`}
          aria-live="polite"
        >
          {feedback ||
            "Talebiniz teknik inceleme için alınır. Uygun başlıklarla kısa bir yol haritası paylaşılır."}
        </p>
      </div>
    </form>
  );
}
