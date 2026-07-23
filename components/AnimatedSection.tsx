"use client";

import type { PropsWithChildren } from "react";
import { useEffect, useRef, useState } from "react";

type AnimatedSectionProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function AnimatedSection({
  children,
  className,
  delay = 0
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={["reveal-section", visible ? "is-visible" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionDelay: `${Math.round(delay * 1000)}ms` }}
    >
      {children}
    </div>
  );
}
