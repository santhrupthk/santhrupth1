import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { TerminalMark } from "@/components/icons/TerminalMark";
import type { Dictionary } from "@/app/[locale]/dictionaries";
import type { Locale } from "@/lib/locales";

export function CompanyBridgeSection({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section id="company" className="py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="mx-auto flex max-w-[820px] flex-col items-center gap-6 rounded-[24px] border border-line bg-surface px-8 py-12 text-center">
            <div className="flex justify-center">
              <Pill>{dict.companyBridge.pill}</Pill>
            </div>
            <TerminalMark className="h-9 w-9 text-brand-tint" />
            <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] md:text-[32px]">
              {dict.companyBridge.heading}
            </h2>
            <p className="max-w-[62ch] text-[16px] leading-relaxed text-muted">{dict.companyBridge.body}</p>
            <Link
              href={`/${locale}/company`}
              className="mt-1 inline-flex items-center gap-1.5 font-semibold text-brand-tint hover:underline"
            >
              {dict.companyBridge.linkLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
