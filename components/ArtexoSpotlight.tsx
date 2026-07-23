import Image from "next/image";
import Link from "next/link";

type ArtexoSpotlightProps = {
  compact?: boolean;
};

const artexoHighlights = [
  "\u00c7ok kirac\u0131l\u0131 organization yap\u0131s\u0131",
  "Online randevu ve m\u00fc\u015fteri takibi",
  "Admin paneli ve public booking ak\u0131\u015f\u0131"
];

const audienceText =
  "Kuaf\u00f6r, berber, g\u00fczellik salonu, klinik, psikolog, fizyoterapist, diyetisyen, veteriner ve randevu ile \u00e7al\u0131\u015fan di\u011fer i\u015fletmeler.";

const capabilityPills = [
  "Public Booking URL",
  "Admin ve Customer Paneli",
  "Email Bildirimleri"
];

export function ArtexoSpotlight({ compact = false }: ArtexoSpotlightProps) {
  return (
    <section className={compact ? "pt-2" : "section-space"}>
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(8,20,35,0.92),rgba(12,31,52,0.9)_44%,rgba(77,182,244,0.12))] px-6 py-8 shadow-panel md:px-8 md:py-9">
            <p className="eyebrow text-mist">{"DG Digital \u00dcr\u00fcn\u00fc"}</p>
            <h2 className="heading-lg mt-4 max-w-3xl">
              {"Artexo, randevu ile \u00e7al\u0131\u015fan i\u015fletmeler i\u00e7in geli\u015ftirdi\u011fimiz SaaS platformudur."}
            </h2>
            <p className="body-lg mt-4 max-w-3xl">
              {"Kuaf\u00f6r, g\u00fczellik salonu, klinik ve benzeri i\u015fletmeler i\u00e7in online rezervasyon, personel bazl\u0131 uygunluk ve operasyon y\u00f6netimini tek bir yap\u0131da toplar. DG Digital taraf\u0131nda tasarlanan ve geli\u015ftirilen \u00f6zel \u00fcr\u00fcn \u00f6rneklerimizden biridir."}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.artexo.app/"
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                {"Artexo\u2019yu \u0130ncele"}
              </a>
              <Link href="/iletisim" className="button-secondary">
                {"Benzer \u00dcr\u00fcn Geli\u015ftirelim"}
              </Link>
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-white/[0.03] p-4 shadow-panel">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#081320] p-5">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/16 blur-3xl" />
              <div className="relative flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-sky-200/70">Artexo</p>
                  <p className="mt-2 font-display text-3xl font-semibold text-white">
                    {"Randevu Platformu"}
                  </p>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  {"Canl\u0131 \u00dcr\u00fcn"}
                </div>
              </div>

              <div className="relative mt-5 grid gap-4 md:grid-cols-[1.02fr_0.98fr]">
                <div className="rounded-[24px] border border-white/10 bg-[#0b1a2d] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-100/70">
                    {"Hedef Kitle"}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{audienceText}</p>

                  <div className="mt-5 overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03]">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src="/artexo-images/artexo-logo.png"
                        alt="Artexo uygulamas\u0131ndan tan\u0131t\u0131m g\u00f6rseli"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 22vw, 100vw"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  {artexoHighlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent shadow-soft" />
                        <p className="text-sm leading-6 text-white">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {capabilityPills.map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
