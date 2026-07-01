"use client";

import { useState } from "react";
import { serviceInterestOptions } from "@/data/leadForm";

type LeadCaptureFormProps = {
  formId: string;
  eyebrow: string;
  title: string;
  description: string;
  submitLabel: string;
  successMessage: string;
  helperText: string;
  source: string;
  requireWebsite?: boolean;
};

type LeadFormState = {
  name: string;
  email: string;
  phone: string;
  company_name: string;
  website_url: string;
  service_interest: string;
  message: string;
  source: string;
  company_site: string;
};

function createInitialState(source: string): LeadFormState {
  return {
    name: "",
    email: "",
    phone: "",
    company_name: "",
    website_url: "",
    service_interest: serviceInterestOptions[0],
    message: "",
    source,
    company_site: ""
  };
}

export function LeadCaptureForm({
  formId,
  eyebrow,
  title,
  description,
  submitLabel,
  successMessage,
  helperText,
  source,
  requireWebsite = false
}: LeadCaptureFormProps) {
  const [formState, setFormState] = useState<LeadFormState>(() => createInitialState(source));
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
      setFeedback(result.message ?? successMessage);
      setFormState(createInitialState(source));
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Form gönderimi sırasında bir sorun oluştu.";
      setStatus("error");
      setFeedback(message);
    }
  }

  function updateField<K extends keyof LeadFormState>(field: K, value: LeadFormState[K]) {
    setFormState((current) => ({
      ...current,
      [field]: value
    }));
  }

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      className="panel rounded-[32px] p-7 md:p-9"
      aria-label={title}
    >
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h2 className="font-display text-3xl font-semibold md:text-[2.4rem]">{title}</h2>
        <p className="text-sm leading-7 text-slate-300 md:text-base">{description}</p>
      </div>

      <input type="hidden" name="source" value={formState.source} readOnly />

      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${formId}-company-site`}>Web sitesi</label>
        <input
          id={`${formId}-company-site`}
          name="company_site"
          tabIndex={-1}
          autoComplete="off"
          value={formState.company_site}
          onChange={(event) => updateField("company_site", event.target.value)}
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
            name="company_name"
            value={formState.company_name}
            onChange={(event) => updateField("company_name", event.target.value)}
            placeholder="Firma Adı"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/40 focus:bg-white/10"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="mb-2 block text-sm font-medium text-slate-200">Web Sitesi URL</span>
          <input
            required={requireWebsite}
            type="url"
            name="website_url"
            value={formState.website_url}
            onChange={(event) => updateField("website_url", event.target.value)}
            placeholder="https://ornek.com"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/40 focus:bg-white/10"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="mb-2 block text-sm font-medium text-slate-200">Hizmet İlgisi</span>
          <select
            name="service_interest"
            value={formState.service_interest}
            onChange={(event) => updateField("service_interest", event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent/40 focus:bg-white/10"
          >
            {serviceInterestOptions.map((option) => (
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
          placeholder="İhtiyacınızı, hedefinizi veya mevcut sitede geliştirilmesini istediğiniz alanları kısaca paylaşabilirsiniz."
          className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/40 focus:bg-white/10"
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="button-primary min-w-[190px]"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Gönderiliyor..." : submitLabel}
        </button>
        <p
          className={`text-sm leading-6 ${
            status === "error" ? "text-rose-300" : "text-slate-300"
          }`}
          aria-live="polite"
        >
          {feedback || helperText}
        </p>
      </div>
    </form>
  );
}
