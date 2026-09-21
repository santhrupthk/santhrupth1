"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale, localeLabels } from "@/lib/locales";

/** Swaps the leading /en or /de segment, keeping the rest of the path. */
function pathForLocale(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/") || "/";
}

export function LanguageSwitcher({
  currentLocale,
  label,
}: {
  currentLocale: Locale;
  label: string;
}) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-line bg-white/[0.03] p-0.5" aria-label={label}>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={pathForLocale(pathname, locale)}
          aria-current={locale === currentLocale ? "true" : undefined}
          className={`rounded-full px-2.5 py-1 font-mono text-[12px] font-semibold tracking-wide transition-colors ${
            locale === currentLocale
              ? "bg-white/10 text-text"
              : "text-muted hover:text-text"
          }`}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </div>
  );
}
