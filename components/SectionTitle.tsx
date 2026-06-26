import { AnimatedSection } from "@/components/AnimatedSection";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionTitleProps) {
  return (
    <AnimatedSection
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="eyebrow text-accent">{eyebrow}</p>
      <h2 className="heading-lg mt-3">{title}</h2>
      <p className="body-lg mt-4">{description}</p>
    </AnimatedSection>
  );
}
