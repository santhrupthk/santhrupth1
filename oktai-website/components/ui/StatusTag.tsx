import type { DifferentiatorStatus } from "@/app/[locale]/dictionaries";

export function StatusTag({
  status,
  availableLabel,
  inProgressLabel,
}: {
  status: DifferentiatorStatus;
  availableLabel: string;
  inProgressLabel: string;
}) {
  const isAvailable = status === "available";
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10.5px] font-bold uppercase tracking-[0.1em]"
      style={
        isAvailable
          ? { color: "var(--available)", background: "rgba(111,215,158,0.1)", borderColor: "rgba(111,215,158,0.28)" }
          : { color: "var(--in-progress)", background: "rgba(237,182,90,0.1)", borderColor: "rgba(237,182,90,0.3)" }
      }
    >
      {isAvailable ? availableLabel : inProgressLabel}
    </span>
  );
}
