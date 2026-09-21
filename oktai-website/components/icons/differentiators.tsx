import { IconSquare } from "./shared";

const stroke = { stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

/** 01 — Many workflows in parallel */
export function ParallelWorkflowsIcon() {
  return (
    <IconSquare>
      <line x1="9" y1="11" x2="21" y2="11" {...stroke} />
      <line x1="9" y1="16" x2="19" y2="16" {...stroke} opacity={0.7} />
      <line x1="9" y1="21" x2="21" y2="21" {...stroke} opacity={0.4} />
    </IconSquare>
  );
}

/** 02 — Diverse models */
export function DiverseModelsIcon() {
  return (
    <IconSquare>
      <circle cx="12" cy="12.5" r="2.3" {...stroke} />
      <rect x="17.3" y="10.2" width="4.6" height="4.6" rx="1.2" {...stroke} />
      <path d="M11 20.5l2-3.2 2 3.2" {...stroke} />
    </IconSquare>
  );
}

/** 03 — Transparent pricing */
export function TransparentPricingIcon() {
  return (
    <IconSquare>
      <line x1="16" y1="9.5" x2="16" y2="22.5" {...stroke} opacity={0.5} />
      <path d="M12.5 12h5a2 2 0 0 1 0 4h-3a2 2 0 0 0 0 4h5" {...stroke} />
    </IconSquare>
  );
}

/** 04 — Auditability & traceability */
export function AuditTrailIcon() {
  return (
    <IconSquare>
      <line x1="10" y1="11" x2="20" y2="11" {...stroke} />
      <line x1="10" y1="15" x2="20" y2="15" {...stroke} opacity={0.6} />
      <line x1="10" y1="19" x2="16" y2="19" {...stroke} opacity={0.4} />
      <circle cx="21.5" cy="19" r="1.3" fill="currentColor" />
    </IconSquare>
  );
}

/** 05 — Your signature end to end */
export function SignatureIcon() {
  return (
    <IconSquare>
      <path d="M9.5 19c1.5 1 3 1 4-.5s0-6-1.3-5.6c-1.2.4 0 5 4 4.6 2-.2 3-2 4.3-2" {...stroke} />
    </IconSquare>
  );
}

/** 06 — Security & data privacy, layer by layer */
export function LayeredSecurityIcon() {
  return (
    <IconSquare>
      <path d="M16 9.5l6 2.6v4.2c0 4-2.6 6.6-6 7.9c-3.4-1.3-6-3.9-6-7.9v-4.2l6-2.6z" {...stroke} />
    </IconSquare>
  );
}
