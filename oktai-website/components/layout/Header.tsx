"use client";

import { useState } from "react";
import Link from "next/link";
import { TerminalMark } from "@/components/icons/TerminalMark";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { CtaButton } from "@/components/ui/CtaButton";
import type { Dictionary } from "@/app/[locale]/dictionaries";
import type { Locale } from "@/lib/locales";

export function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[color-mix(in_srgb,var(--bg)_90%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-3.5 md:px-8">
        <Link href={`/${locale}`} className="group flex items-center gap-2.5 text-brand-tint">
          <TerminalMark className="h-7 w-7 transition-transform duration-300 group-hover:rotate-[8deg]" />
          <span className="font-display text-[17px] font-bold tracking-tight text-text">
            OKTAI Computer
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-[14.5px] md:flex" aria-label={dict.nav.product}>
          <Link
            href={`/${locale}`}
            className="group relative px-3.5 py-2 text-muted transition-colors hover:text-text"
          >
            {dict.nav.product}
            <span className="absolute inset-x-3.5 -bottom-0.5 h-px scale-x-0 bg-brand-tint transition-transform duration-200 group-hover:scale-x-100" />
          </Link>
          <Link
            href={`/${locale}/company`}
            className="group relative px-3.5 py-2 text-muted transition-colors hover:text-text"
          >
            {dict.nav.company}
            <span className="absolute inset-x-3.5 -bottom-0.5 h-px scale-x-0 bg-brand-tint transition-transform duration-200 group-hover:scale-x-100" />
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher currentLocale={locale} label={dict.nav.switchLanguage} />
          <CtaButton href="https://app.oktai.ai/" beta={dict.nav.beta}>
            {dict.nav.openApp}
          </CtaButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={dict.nav.toggleMenu}
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-text md:hidden"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line-soft px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1 text-[15px]" aria-label={dict.nav.product}>
            <Link
              href={`/${locale}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-text-secondary hover:bg-white/[0.06] hover:text-text"
            >
              {dict.nav.product}
            </Link>
            <Link
              href={`/${locale}/company`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-text-secondary hover:bg-white/[0.06] hover:text-text"
            >
              {dict.nav.company}
            </Link>
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3">
            <LanguageSwitcher currentLocale={locale} label={dict.nav.switchLanguage} />
            <CtaButton href="https://app.oktai.ai/" beta={dict.nav.beta}>
              {dict.nav.openApp}
            </CtaButton>
          </div>
        </div>
      )}
    </header>
  );
}
