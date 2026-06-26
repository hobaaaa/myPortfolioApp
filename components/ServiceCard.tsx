import { AnimatedSection } from "@/components/AnimatedSection";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
  index?: number;
};

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <AnimatedSection delay={index * 0.07}>
      <article className="soft-line-card group h-full p-6 md:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-sky-100">
            {service.label}
          </span>
          <span className="text-sm text-white/45">0{index + 1}</span>
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold">{service.title}</h3>
        <p className="mt-3 text-base leading-7 text-slate-200">{service.summary}</p>
        <p className="mt-3 text-sm leading-7 text-slate-400">{service.detail}</p>
        <ul className="mt-5 space-y-3 text-sm text-slate-200">
          {service.deliverables.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </AnimatedSection>
  );
}
