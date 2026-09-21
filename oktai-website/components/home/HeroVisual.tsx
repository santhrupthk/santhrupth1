"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { HeroVisualStatic } from "./HeroVisualStatic";
import { useMediaQuery } from "@/lib/useMediaQuery";

const HeroScene3D = dynamic(() => import("./HeroScene3D").then((m) => m.HeroScene3D), {
  ssr: false,
  loading: () => <HeroVisualStatic animated={false} />,
});

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const pointerFine = useMediaQuery("(pointer: fine)");
  const wideEnough = useMediaQuery("(min-width: 768px)");
  // 3D only for pointer-capable, wide-enough viewports — mobile gets the lightweight SVG loop instead.
  const capable = pointerFine && wideEnough;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.1,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full">
      {capable ? (
        <HeroScene3D reduceMotion={reduceMotion} paused={!inView} />
      ) : (
        <HeroVisualStatic animated={!reduceMotion} />
      )}
    </div>
  );
}
