import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

export function AboutPreview() {
  return (
    <section className="section-space">
      <div className="shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <AnimatedSection className="relative lg:max-w-[440px]">
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 shadow-panel">
            <div className="relative aspect-[4/4.8] overflow-hidden rounded-[28px]">
              <Image
                src="/profile.jpg"
                alt="DG Digital kurucusu Deniz Gökbudak"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 28vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071320] via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/10 bg-[#071320]/78 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.22em] text-sky-100/80">
                Kurucu . Gelecekte güncellenebilir fotoğraf alanı
              </p>
              <p className="mt-2 text-lg font-semibold text-white">Deniz Gökbudak</p>
              <p className="mt-1 text-sm text-slate-300">DG Digital</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <p className="eyebrow text-accent">Hakkımızda</p>
          <h2 className="heading-lg mt-3">
            Kurumsal görünümün arkasında, doğrudan üretimin içinde olan gerçek bir ekip yaklaşımı var.
          </h2>
          <p className="body-lg mt-4">
            DG Digital; web tasarım ve yazılımı yalnızca teslim edilecek bir çıktı
            olarak değil, markanın dijitalde nasıl algılanacağını belirleyen temel
            bir yatırım olarak ele alır.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm font-semibold text-white">Küçük Hikâye</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Tasarım disipliniyle başlayan, yazılım tarafında olgunlaşan bir üretim çizgisi.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm font-semibold text-white">Yaklaşım</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Az toplantı, net karar, hızlı uygulama ve yüksek sunum kalitesi.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm font-semibold text-white">Misyon</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Markalara daha güvenilir, daha güçlü ve daha dönüşüm odaklı bir dijital vitrin kazandırmak.
              </p>
            </div>
          </div>
          <Link href="/hakkimizda" className="button-secondary mt-6">
            Hakkımızda Sayfasını Gör
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
