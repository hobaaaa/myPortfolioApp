import { AnimatedSection } from "@/components/AnimatedSection";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
  index?: number;
};

function ServiceIcon({ label }: { label: string }) {
  const iconClass = "h-4.5 w-4.5";

  switch (label) {
    case "Kurumsal":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M4 20V7l8-4 8 4v13" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );
    case "Landing":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M7 10h10" />
          <path d="M7 14h6" />
        </svg>
      );
    case "E-Ticaret":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M6 6h15l-1.5 7.5H8L6 4H3" />
          <circle cx="9" cy="19" r="1.2" />
          <circle cx="18" cy="19" r="1.2" />
        </svg>
      );
    case "Uygulama":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M8 9h8" />
          <path d="M8 13h5" />
        </svg>
      );
    case "SaaS":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M12 4l8 4-8 4-8-4 8-4z" />
          <path d="M4 12l8 4 8-4" />
          <path d="M4 16l8 4 8-4" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M12 3l7 3v5c0 5-3.4 8.4-7 10-3.6-1.6-7-5-7-10V6l7-3z" />
          <path d="M9.5 12l1.8 1.8L15 10.2" />
        </svg>
      );
  }
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <AnimatedSection delay={index * 0.07}>
      <article className="soft-line-card group flex h-full flex-col p-6 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-100 transition duration-500 group-hover:border-accent/25 group-hover:bg-accent/10">
              <ServiceIcon label={service.label} />
            </span>
            <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-sky-100">
              {service.label}
            </span>
          </div>
          <span className="text-base font-medium text-white/55">0{index + 1}</span>
        </div>

        <h3 className="mt-5 font-display text-2xl font-semibold leading-tight">
          {service.title}
        </h3>
        <p className="mt-3 text-[15px] leading-7 text-slate-200">{service.summary}</p>
        <p className="mt-2 text-sm leading-7 text-slate-400">{service.detail}</p>

        <ul className="mt-5 space-y-2.5 text-sm text-slate-200">
          {service.deliverables.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-[22px] border border-white/10 bg-white/[0.025] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-100/75">Sonuç</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {service.outcomes.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-[#0b1a2c] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>
    </AnimatedSection>
  );
}
