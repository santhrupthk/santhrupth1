import { IconSquare } from "./shared";

const stroke = { stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function GoalIcon() {
  return (
    <IconSquare>
      <line x1="10" y1="21" x2="10" y2="21.01" {...stroke} strokeWidth={2.4} />
      <line x1="18" y1="18" x2="21" y2="18" {...stroke} opacity={0.5} />
    </IconSquare>
  );
}

export function UnderstandingIcon() {
  return (
    <IconSquare>
      <line x1="9" y1="12" x2="17" y2="12" {...stroke} />
      <line x1="9" y1="16" x2="21" y2="16" {...stroke} opacity={0.55} />
      <line x1="9" y1="20" x2="14" y2="20" {...stroke} opacity={0.3} />
    </IconSquare>
  );
}

export function OrchestrationIcon() {
  return (
    <IconSquare>
      <circle cx="12" cy="16" r="2" fill="currentColor" />
      <g {...stroke} opacity={0.7}>
        <line x1="14.5" y1="16" x2="19" y2="10.5" />
        <line x1="14.5" y1="16" x2="20" y2="16" />
        <line x1="14.5" y1="16" x2="19" y2="21.5" />
      </g>
    </IconSquare>
  );
}

export function AgentsIcon() {
  return (
    <IconSquare>
      <circle cx="19" cy="10.5" r="1.7" fill="currentColor" />
      <circle cx="21" cy="16" r="1.7" fill="currentColor" />
      <circle cx="19" cy="21.5" r="1.7" fill="currentColor" />
      <line x1="11" y1="16" x2="17" y2="10.9" {...stroke} opacity={0.6} />
      <line x1="11" y1="16" x2="19" y2="16" {...stroke} opacity={0.6} />
      <line x1="11" y1="16" x2="17" y2="21.1" {...stroke} opacity={0.6} />
    </IconSquare>
  );
}

export function ResearchIcon() {
  return (
    <IconSquare>
      <circle cx="13.5" cy="14.5" r="4.2" {...stroke} />
      <line x1="16.6" y1="17.6" x2="21" y2="22" {...stroke} />
    </IconSquare>
  );
}

export function ValidationIcon() {
  return (
    <IconSquare>
      <path d="M9.5 16.2l3.2 3.2L22.5 9.5" {...stroke} />
    </IconSquare>
  );
}

export function ReviewIcon() {
  return (
    <IconSquare>
      <circle cx="16" cy="12.5" r="2.6" {...stroke} />
      <path d="M9.5 21.5c0-3.3 2.9-5.2 6.5-5.2s6.5 1.9 6.5 5.2" {...stroke} />
    </IconSquare>
  );
}

export function ResultIcon() {
  return (
    <IconSquare filled>
      <path
        d="M11.5 16.3l3 3 6-6.6"
        stroke="var(--bg)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconSquare>
  );
}
