"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function MouseGlow() {
  const x = useMotionValue(-240);
  const y = useMotionValue(-240);
  const smoothX = useSpring(x, { stiffness: 78, damping: 20, mass: 0.58 });
  const smoothY = useSpring(y, { stiffness: 78, damping: 20, mass: 0.58 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 220);
      y.set(event.clientY - 220);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(77,182,244,0.18),rgba(77,182,244,0.08)_34%,rgba(20,81,181,0.04)_52%,transparent_74%)] blur-[64px] lg:block"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
