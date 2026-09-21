/** Faithful small reproduction of the OKTAI logo: terminal square + radiating rays. */
export function TerminalMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="6" fill="currentColor" />
      <path
        d="M8.2 9.5L11.8 12.1L8.2 14.7"
        stroke="var(--bg)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="13.4"
        y1="14.7"
        x2="16.4"
        y2="14.7"
        stroke="var(--bg)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.8">
        <line x1="24.5" y1="7" x2="27" y2="4.5" />
        <line x1="27" y1="11.5" x2="30" y2="10.2" />
        <line x1="27.5" y1="16.5" x2="30.5" y2="16.7" />
        <line x1="26" y1="21" x2="28.5" y2="23" />
        <line x1="21.5" y1="24.5" x2="22.5" y2="27.5" />
        <line x1="17" y1="25.8" x2="17" y2="29" />
        <line x1="12.5" y1="25.5" x2="11.5" y2="28.5" />
      </g>
    </svg>
  );
}
