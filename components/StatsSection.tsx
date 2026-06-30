"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 25, suffix: "+", label: "Tamamlanan Proje", note: "Kurumsal, e-ticaret ve özel arayüz işleri" },
  { value: 6, suffix: "+", label: "Yıllık Deneyim", note: "Tasarım ve yazılım kararlarını birlikte ele alan yaklaşım" },
  { value: 100, suffix: "%", label: "Responsive Yaklaşım", note: "Masaüstü, tablet ve mobil deneyimde dengeli çıktı" }
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const start = performance.now();
    const duration = 1200;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(target * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function StatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 15l5-5 4 4 7-7" />
      <path d="M20 7v6h-6" />
    </svg>
  );
}

export function StatsSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((item, index) => (
            <AnimatedSection key={item.label} delay={index * 0.08}>
              <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-panel transition duration-500 hover:-translate-y-1 hover:border-accent/25">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/60 to-transparent opacity-80" />
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-100">
                    <StatIcon />
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                </div>
                <p className="mt-5 font-display text-5xl font-semibold text-white">
                  <Counter target={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-300">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.note}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
