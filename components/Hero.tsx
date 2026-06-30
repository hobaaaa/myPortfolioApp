import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

const trustPoints = [
  "Kurumsal sunumla güven veren web deneyimleri",
  "WordPress ve Next.js ile esnek geliştirme altyapısı",
  "Yerel aramalara uyumlu teknik içerik kurgusu",
];

const featureCards = [
  {
    title: "Odak",
    text: "Web tasarım ve satışa yakın dijital deneyimler",
  },
  {
    title: "Altyapı",
    text: "WordPress, Next.js ve ölçeklenebilir modüller",
  },
  {
    title: "Teknik kalite",
    text: "Metadata, alt metin ve güçlü sayfa hiyerarşisi",
  },
];

function CircleIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-100">
      {children}
    </span>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" />
    </svg>
  );
}

function StackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 4l8 4-8 4-8-4 8-4z" />
      <path d="M4 12l8 4 8-4" />
      <path d="M4 16l8 4 8-4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 3l7 3v5c0 5-3.4 8.4-7 10-3.6-1.6-7-5-7-10V6l7-3z" />
      <path d="M9.5 12l1.8 1.8L15 10.2" />
    </svg>
  );
}

export function Hero() {
  const icons = [
    <SparkIcon key="spark" />,
    <StackIcon key="stack" />,
    <ShieldIcon key="shield" />,
  ];

  return (
    <section className="relative pb-8 pt-5 md:pb-10 md:pt-7">
      <div className="shell">
        <div className="grid items-center gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-10">
          <AnimatedSection className="relative">
            <div className="absolute -left-6 top-6 hidden h-32 w-32 rounded-full bg-accentDeep/30 blur-3xl md:block" />
            <p className="eyebrow">
              Web Tasarım . Web Geliştirme . WordPress . Next.js
            </p>
            <h1 className="heading-lg mt-4 max-w-3xl">
              Markanızı ilk bakışta güven veren bir dijital deneyime dönüştürün.
            </h1>
            <p className="body-lg mt-4 max-w-2xl">
              DG Digital olarak kurumsal web sitesi, e-ticaret altyapısı,
              landing page ve gelişen SaaS ürünleri için; güçlü görünen, hızlı
              çalışan ve yerel müşteriler tarafından daha rahat bulunan dijital
              yapılar oluşturuyoruz.
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
              {featureCards.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 transition duration-500 hover:-translate-y-1 hover:border-accent/25"
                >
                  <div className="flex items-center gap-3">
                    <CircleIcon>{icons[index]}</CircleIcon>
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.text}
                  </p>
                </div>
              ))}
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
                  alt="Kurumsal web tasarım ve yazılım projeleri için profesyonel çalışma alanı"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071320] via-[#071320]/12 to-transparent" />
                <div className="absolute inset-x-5 top-5 flex flex-wrap gap-3">
                  <div className="rounded-full border border-white/10 bg-[#071320]/78 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
                    Yerel görünürlük
                  </div>
                  <div className="rounded-full border border-white/10 bg-[#071320]/78 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
                    Premium arayüz
                  </div>
                </div>
              </div>

              <div className="grid gap-4 px-2 pb-2 pt-5 md:grid-cols-[1.02fr_0.98fr]">
                <div>
                  <p className="eyebrow text-accent">Dijital duruş</p>
                  <h2 className="mt-3 font-display text-[2rem] font-semibold leading-tight">
                    Güzel görünmekle kalmayan, güven veren bir dijital deneyim.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    Tasarım, yazılım ve teknik düzen aynı sistem içinde ele
                    alınır. Böylece ortaya sadece şık değil; hızlı, anlaşılır ve
                    dönüşüme daha yakın bir web yapısı çıkar.
                  </p>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-[24px] border border-white/10 bg-[#0a1a2c]/70 p-4 transition duration-500 hover:border-accent/35">
                    <p className="text-xs uppercase tracking-[0.22em] text-sky-200/70">
                      Sunum kalitesi
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white">
                      İçerik yoğunluğunu azaltan, karar vermeyi kolaylaştıran
                      arayüz.
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-[#0a1a2c]/70 p-4 transition duration-500 hover:border-accent/35">
                    <p className="text-xs uppercase tracking-[0.22em] text-sky-200/70">
                      Teknik temel
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white">
                      Google’ın daha doğru okuyacağı sayfa yapısı ve içerik
                      düzeni.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
