import { BrandLogo } from "@/components/BrandLogo";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

const stats = [
  { label: "Web tasarım", value: "Marka seviyesini yükselten arayüzler" },
  { label: "Landing page", value: "Daha net teklif ve daha güçlü dönüşüm akışı" },
  { label: "Geliştirme", value: "Modern, hızlı ve sürdürülebilir altyapı" }
];

const numbers = [
  { value: "09:00-18:00", label: "Çalışma saatleri" },
  { value: "Tek partner", label: "Hızlı iletişim ve direkt karar akışı" },
  { value: "Dark premium", label: "Güçlü görsel dil ve rafine detaylar" }
];

export function Hero() {
  return (
    <section className="relative pb-12 pt-2 md:pb-18 md:pt-6">
      <div className="shell">
        <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <AnimatedSection className="relative">
            <div className="absolute -left-6 top-6 hidden h-32 w-32 rounded-full bg-accentDeep/30 blur-3xl md:block" />
            <BrandLogo className="mb-6" />
            <p className="eyebrow">Creative Digital Solutions</p>
            <h1 className="heading-xl mt-5 max-w-3xl">
              Markanızı dijitalde daha güçlü, daha temiz ve daha profesyonel gösteren web deneyimleri.
            </h1>
            <p className="body-lg mt-5 max-w-2xl">
              Kurumsal web sitesi, landing page ve modern arayüz projelerinde;
              yalnızca şık bir görüntü değil, güven veren bir sunum ve doğru
              dönüşüm akışı kuruyorum.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/iletisim" className="button-primary">
                Projeyi Konuşalım
              </Link>
              <Link href="/portfolio" className="button-secondary">
                Projeleri İncele
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {numbers.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/30"
                >
                  <p className="font-display text-2xl text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12} className="relative">
            <div className="absolute -right-4 top-8 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-3 shadow-panel">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[28px]">
                <Image
                  src="/images/hero-studio.png"
                  alt="DG Digital studio çalışma alanı"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071320] via-[#071320]/12 to-transparent" />
              </div>

              <div className="grid gap-4 px-2 pb-2 pt-5 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="eyebrow text-accent">Ne yapıyorum?</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold">
                    Görsel kaliteyi, içerik düzenini ve teknik tarafı tek elde topluyorum.
                  </h2>
                </div>

                <div className="space-y-3">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-white/10 bg-[#0a1a2c]/70 p-4 transition duration-300 hover:border-accent/35"
                    >
                      <p className="text-xs uppercase tracking-[0.22em] text-sky-200/70">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
