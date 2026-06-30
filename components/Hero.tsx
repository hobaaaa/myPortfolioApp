import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

const trustPoints = [
  "WordPress ve Next.js ile kurumsal web siteleri",
  "E-ticaret sistemleri ve dönüşüm odaklı landing page yapıları",
  "Google'ın doğru okuyacağı teknik içerik ve metadata düzeni"
];

const services = [
  { label: "WordPress", value: "Kolay yönetilen ve güçlü kurumsal siteler" },
  { label: "Next.js", value: "Daha hızlı, modern ve ölçeklenebilir altyapı" },
  { label: "SaaS", value: "Randevu ve özel ürün arayüzleri geliştirme" }
];

export function Hero() {
  return (
    <section className="relative pb-8 pt-0 md:pb-12">
      <div className="shell">
        <div className="grid items-center gap-7 lg:grid-cols-[0.94fr_1.06fr] lg:gap-8">
          <AnimatedSection className="relative">
            <div className="absolute -left-6 top-6 hidden h-32 w-32 rounded-full bg-accentDeep/30 blur-3xl md:block" />
            <p className="eyebrow">Web Tasarım . Web Geliştirme . WordPress . Next.js</p>
            <h1 className="heading-xl mt-4 max-w-3xl">
              Web siteniz markanızın seviyesini ilk bakışta hissettirsin.
            </h1>
            <p className="body-lg mt-4 max-w-2xl">
              Kurumsal web sitesi, e-ticaret altyapısı, landing page ve gelişen
              SaaS ürünleri için; modern görünen, güven veren ve yerel
              müşterilere ulaşmayı destekleyen dijital yapılar kuruyorum.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link href="/iletisim" className="button-primary">
                Teklif Al
              </Link>
              <Link href="/portfolio" className="button-secondary">
                Projeleri İncele
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4">
                <p className="text-xs uppercase tracking-[0.24em] text-sky-200/70">
                  Odak
                </p>
                <p className="mt-2 text-sm leading-6 text-white">
                  Web tasarım, yazılım ve satışa yakın dijital deneyimler
                </p>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4">
                <p className="text-xs uppercase tracking-[0.24em] text-sky-200/70">
                  Altyapı
                </p>
                <p className="mt-2 text-sm leading-6 text-white">
                  WordPress, Next.js ve gelişen SaaS ürün akışları
                </p>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4">
                <p className="text-xs uppercase tracking-[0.24em] text-sky-200/70">
                  Teknik kalite
                </p>
                <p className="mt-2 text-sm leading-6 text-white">
                  Metadata, alt metinler ve temiz sayfa hiyerarşisi
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {trustPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3 transition duration-500 hover:translate-x-1 hover:border-accent/35"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent shadow-soft" />
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="relative">
            <div className="absolute -right-4 top-8 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-3 shadow-panel">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[28px] bg-[#08111d]">
                <Image
                  src="/images/hero-studio.png"
                  alt="Web tasarım ve yazılım projeleri için profesyonel çalışma alanı"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071320] via-[#071320]/12 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 flex flex-wrap gap-3">
                  <div className="rounded-full border border-white/10 bg-[#071320]/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur">
                    Yerel aramaya uyumlu içerik
                  </div>
                  <div className="rounded-full border border-white/10 bg-[#071320]/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur">
                    Modern tasarım dili
                  </div>
                </div>
              </div>

              <div className="grid gap-4 px-2 pb-2 pt-5 md:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <p className="eyebrow text-accent">Öne çıkan odak</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold">
                    Tasarım, yazılım ve teknik düzen aynı sistemde çözülür.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    Buradaki SEO odağı, verdiğimiz ana hizmet değil; ürettiğimiz
                    sitelerin Google tarafından daha doğru okunmasını sağlayan
                    teknik düzenin işin içine baştan dahil edilmesidir.
                  </p>
                </div>

                <div className="space-y-3">
                  {services.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-white/10 bg-[#0a1a2c]/70 p-4 transition duration-500 hover:-translate-y-1 hover:border-accent/35 hover:bg-[#0d2035]"
                    >
                      <p className="text-xs uppercase tracking-[0.22em] text-sky-200/70">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white">
                        {item.value}
                      </p>
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
