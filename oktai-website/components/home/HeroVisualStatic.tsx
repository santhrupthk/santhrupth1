"use client";

/**
 * Fallback for mobile, reduced-motion, and while the 3D scene loads.
 * Same terminal-square + rays grammar as the logo, animated with CSS only.
 */
export function HeroVisualStatic({ animated = true }: { animated?: boolean }) {
  const rays = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div className="relative grid h-full w-full place-items-center">
      <svg viewBox="0 0 200 200" className="h-full max-h-[380px] w-full max-w-[380px]" aria-hidden="true">
        <g stroke="var(--brand-tint)" strokeWidth="3" strokeLinecap="round" opacity="0.55">
          {rays.map((i) => {
            const angle = (i / rays.length) * Math.PI * 2;
            const cx = 100 + Math.cos(angle) * 62;
            const cy = 100 + Math.sin(angle) * 62;
            const ex = 100 + Math.cos(angle) * 92;
            const ey = 100 + Math.sin(angle) * 92;
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={ex}
                y2={ey}
                className={animated ? "hero-ray" : undefined}
                style={animated ? { animationDelay: `${i * 0.12}s` } : undefined}
              />
            );
          })}
        </g>
        <rect
          x="60"
          y="60"
          width="80"
          height="80"
          rx="20"
          fill="var(--brand)"
          className={animated ? "hero-core" : undefined}
        />
        <path
          d="M78 88l14 12l-14 12"
          stroke="var(--bg)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line x1="98" y1="112" x2="118" y2="112" stroke="var(--bg)" strokeWidth="5" strokeLinecap="round" />
      </svg>

      <style>{`
        @keyframes ray-pulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.9; }
        }
        @keyframes core-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .hero-ray { animation: ray-pulse 3.2s ease-in-out infinite; transform-origin: 100px 100px; }
        .hero-core { animation: core-breathe 4.5s ease-in-out infinite; transform-origin: 100px 100px; }
      `}</style>
    </div>
  );
}
