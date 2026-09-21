import Link from "next/link";
import clsx from "clsx";
import { type ReactNode } from "react";

export function CtaButton({
  href,
  children,
  beta,
  size = "md",
  external = true,
}: {
  href: string;
  children: ReactNode;
  beta?: string;
  size?: "md" | "lg";
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className={clsx(
        "group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand font-semibold text-white transition-all duration-200",
        "hover:-translate-y-0.5 hover:bg-[#7226e0] hover:shadow-[0_10px_34px_rgba(96,27,192,0.35)]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-tint)]",
        size === "lg" ? "px-7 py-4 text-[16.5px]" : "px-5 py-2.75 text-[15px]"
      )}
    >
      {children}
      {beta && (
        <span className="rounded-md bg-black/20 px-1.5 py-0.5 font-mono text-[10.5px] font-bold tracking-[0.08em]">
          {beta}
        </span>
      )}
    </Link>
  );
}
