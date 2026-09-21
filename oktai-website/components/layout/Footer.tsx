import Link from "next/link";
import { TerminalMark } from "@/components/icons/TerminalMark";
import type { Dictionary } from "@/app/[locale]/dictionaries";
import type { Locale } from "@/lib/locales";

export function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-elevated">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.7fr_1fr_1fr_1.3fr]">
          <div>
            <Link href={`/${locale}`} className="mb-3.5 flex items-center gap-2.5 text-text">
              <TerminalMark className="h-6 w-6" />
              <span className="font-display text-[16px] font-bold">Coplanet AG</span>
            </Link>
            <p className="max-w-[38ch] text-[15px] text-muted">{dict.footer.blurb}</p>
          </div>

          <div>
            <h4 className="mb-3.5 font-mono text-[11.5px] font-semibold uppercase tracking-[0.14em] text-text">
              {dict.footer.productHeading}
            </h4>
            <ul className="space-y-2.5">
              {dict.footer.productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener" : undefined}
                    className="text-[15px] text-muted hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3.5 font-mono text-[11.5px] font-semibold uppercase tracking-[0.14em] text-text">
              {dict.footer.companyHeading}
            </h4>
            <ul className="space-y-2.5">
              {dict.footer.companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={`/${locale}${link.href}`} className="text-[15px] text-muted hover:text-text">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3.5 font-mono text-[11.5px] font-semibold uppercase tracking-[0.14em] text-text">
              {dict.footer.officesHeading}
            </h4>
            <address className="space-y-1 text-[15px] not-italic leading-relaxed text-muted">
              {dict.footer.offices.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address>
          </div>
        </div>

        <div className="mt-11 flex flex-wrap gap-5 border-t border-line-soft pt-6 text-sm">
          {dict.footer.legalLinks.map((label) => (
            <Link key={label} href="#" className="text-muted hover:text-text">
              {label}
            </Link>
          ))}
        </div>
        <p className="mt-4 text-sm text-faint">
          © {year} Coplanet AG · {dict.footer.trustLine}
        </p>
      </div>
    </footer>
  );
}
