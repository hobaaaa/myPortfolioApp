import { AnimatedSection } from "@/components/AnimatedSection";

function NextLogo() {
  return (
    <svg viewBox="0 0 80 80" className="h-8 w-8" fill="none">
      <circle cx="40" cy="40" r="39" stroke="currentColor" strokeOpacity=".16" />
      <path d="M28 24v32h4V33.7l18.2 22.3H56V24h-4v22.3L33.8 24H28z" fill="currentColor" />
    </svg>
  );
}

function WordPressLogo() {
  return (
    <svg viewBox="0 0 80 80" className="h-8 w-8" fill="none">
      <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="4" />
      <path d="M24 31c2 0 3.7-.3 5.2-.8l8.6 25.5 5.4-16.1-3.8-10.4c1.9-.1 3.6-.3 3.6-.3 1.7-.2 1.5-2.6-.2-2.5 0 0-5.2.4-8.6.4-3.2 0-8.3-.4-8.3-.4-1.7-.1-1.9 2.4-.2 2.5 0 0 1.5.2 3.1.3l4.6 12.6-6.5 19.5L24 31zM57.1 29.3c1.4 2.6 2.2 5.7 2.2 8.9 0 6.8-3.4 12.9-8.6 16.5l7.2-20.9c1.3-3.3 1.1-5.8-.8-4.5z" fill="currentColor" />
    </svg>
  );
}

function WooLogo() {
  return (
    <svg viewBox="0 0 80 80" className="h-8 w-8" fill="none">
      <rect x="10" y="18" width="60" height="44" rx="14" fill="currentColor" fillOpacity=".14" stroke="currentColor" strokeOpacity=".18" />
      <path d="M23 48l4.2-15h4.5l3.2 9.6 3.2-9.6H43L47.2 48h-3.8l-2.2-8.3-3 8.3h-3.1l-3-8.3-2.2 8.3H23zm30.8-15c5 0 8.2 3.3 8.2 7.6 0 4.6-3.2 7.7-8.2 7.7s-8.2-3.1-8.2-7.7c0-4.3 3.2-7.6 8.2-7.6zm0 3.1c-2.5 0-4.3 1.8-4.3 4.5s1.8 4.6 4.3 4.6 4.3-1.9 4.3-4.6-1.8-4.5-4.3-4.5z" fill="currentColor" />
    </svg>
  );
}

function SupabaseLogo() {
  return (
    <svg viewBox="0 0 80 80" className="h-8 w-8" fill="none">
      <path d="M48.3 16c1.8 0 2.8 2 1.7 3.4L29.7 47.7h16.6c2.1 0 3.3 2.5 2 4.2L34.9 67.2c-1 1.1-2.9.4-2.9-1.1V50.8H24c-2.1 0-3.3-2.5-2-4.2L45.4 17c.7-.7 1.7-1 2.9-1z" fill="currentColor" />
    </svg>
  );
}

function TypeScriptLogo() {
  return (
    <svg viewBox="0 0 80 80" className="h-8 w-8" fill="none">
      <rect x="14" y="14" width="52" height="52" rx="12" fill="currentColor" fillOpacity=".14" stroke="currentColor" strokeOpacity=".18" />
      <path d="M28 35h18v4h-7v19h-4V39h-7v-4zm21.6 11.6c1.2 1 2.7 1.8 4.8 1.8 1.7 0 2.8-.7 2.8-1.9 0-1.1-.8-1.6-3.4-2.5-3.1-1.1-5.1-2.2-5.1-5 0-3 2.4-5.1 6.3-5.1 2.7 0 4.6.6 6 1.5l-1.4 3.1c-1.2-.7-2.7-1.2-4.6-1.2-1.6 0-2.5.7-2.5 1.7 0 1.1 1 1.5 3.6 2.5 3.3 1.2 4.9 2.5 4.9 5.1 0 3-2.3 5.2-6.8 5.2-2.9 0-5.4-.8-6.8-1.9l2.2-3.3z" fill="currentColor" />
    </svg>
  );
}

const technologies = [
  { name: "Next.js", logo: <NextLogo /> },
  { name: "WordPress", logo: <WordPressLogo /> },
  { name: "WooCommerce", logo: <WooLogo /> },
  { name: "Supabase", logo: <SupabaseLogo /> },
  { name: "TypeScript", logo: <TypeScriptLogo /> }
];

const loopItems = [...technologies, ...technologies];

export function TechnologyStrip() {
  return (
    <section className="pb-6 md:pb-8">
      <div className="shell">
        <AnimatedSection className="rounded-[28px] border border-white/10 bg-white/[0.025] p-4 shadow-panel">
          <p className="eyebrow text-accent">Çalıştığımız Teknolojiler</p>

          <div className="marquee-mask mt-4">
            <div className="marquee-track">
              {loopItems.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="mx-2 flex min-w-[180px] items-center gap-4 rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-5 py-4 text-white transition duration-500 hover:-translate-y-1 hover:border-accent/25"
                  aria-label={item.name}
                  title={item.name}
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-100">
                    {item.logo}
                  </span>
                  <span className="text-sm font-medium tracking-[0.08em] text-white">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
