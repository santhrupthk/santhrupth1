import { type ReactNode } from "react";

/** The rounded terminal-square all icons share, per the icon system rules: one stroke weight, one corner radius. */
export function IconSquare({
  children,
  filled = false,
}: {
  children: ReactNode;
  filled?: boolean;
}) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-full w-full" aria-hidden="true">
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="8"
        fill={filled ? "currentColor" : "none"}
        stroke={filled ? "none" : "currentColor"}
        strokeWidth="1.6"
        opacity={filled ? 1 : 0.9}
      />
      {children}
    </svg>
  );
}

/** The wrapper card every icon sits in — consistent size, background wash, border. */
export function IconFrame({
  children,
  size = 42,
  className,
}: {
  children: ReactNode;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`grid place-items-center rounded-[12px] border border-brand-line bg-brand-wash text-brand-tint ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <div style={{ width: size * 0.52, height: size * 0.52 }}>{children}</div>
    </div>
  );
}
