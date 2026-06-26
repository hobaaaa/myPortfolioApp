import { AnimatedSection } from "@/components/AnimatedSection";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="pb-8 pt-2 md:pb-10 md:pt-4">
      <div className="shell">
        <AnimatedSection className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(20,81,181,0.22),rgba(8,20,35,0.1)_36%,rgba(77,182,244,0.12))] px-6 py-10 md:px-10 md:py-12">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-accent/16 blur-3xl" />
          <div className="relative max-w-4xl">
            <p className="eyebrow text-mist">{eyebrow}</p>
            <h1 className="heading-lg mt-4">{title}</h1>
            <p className="body-lg mt-4 max-w-3xl">{description}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
