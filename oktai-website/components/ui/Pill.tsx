export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-brand-wash px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-tint">
      <i className="block h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_10px_var(--brand)]" />
      {children}
    </span>
  );
}
