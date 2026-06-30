import type { ReactNode } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  visual?: ReactNode;
};

export function PageHero({ eyebrow, title, description, visual }: PageHeroProps) {
  return (
    <section className="pb-7 pt-5 md:pb-9 md:pt-7">
      <div className="shell">
        <div
          className={`grid gap-6 ${visual ? "lg:grid-cols-[0.94fr_1.06fr] lg:items-center" : ""}`}
        >
          <AnimatedSection className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(20,81,181,0.22),rgba(8,20,35,0.1)_36%,rgba(77,182,244,0.12))] px-6 py-10 md:px-10 md:py-12">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-accent/16 blur-3xl" />
            <div className="relative max-w-4xl">
              <p className="eyebrow text-mist">{eyebrow}</p>
              <h1 className="heading-lg mt-4">{title}</h1>
              <p className="body-lg mt-4 max-w-3xl">{description}</p>
            </div>
          </AnimatedSection>

          {visual ? <AnimatedSection delay={0.08}>{visual}</AnimatedSection> : null}
        </div>
      </div>
    </section>
  );
}
