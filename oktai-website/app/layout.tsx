import type { ReactNode } from "react";

/**
 * Fallback root layout for the true "/" route only (outside app/[locale]).
 * Exists so app/page.tsx has an ancestor layout to satisfy Next's html/body
 * requirement — proxy.ts normally redirects "/" before this ever renders,
 * but some hosts don't yet execute the new proxy.ts convention, so this is
 * the safety net that makes "/" resolve either way.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
