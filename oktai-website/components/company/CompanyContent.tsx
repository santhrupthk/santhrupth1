import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
import type { Dictionary } from "@/app/[locale]/dictionaries";
import type { Locale } from "@/lib/locales";

export function CompanyContent({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <>
      <section className="py-14 md:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-[760px]">
              <h2 className="mb-4 font-display text-[24px] font-semibold tracking-[-0.02em] md:text-[30px]">
                {dict.company.whoHeading}
              </h2>
              <p className="text-[17px] leading-relaxed text-text-secondary">{dict.company.whoBody}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <Reveal>
            <h2 className="mx-auto mb-10 max-w-[760px] font-display text-[24px] font-semibold tracking-[-0.02em] md:text-[30px]">
              {dict.company.connectionHeading}
            </h2>
          </Reveal>
          <div className="mx-auto grid max-w-[900px] gap-4 md:grid-cols-3">
            {dict.company.connectionPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <div className="h-full rounded-[18px] border border-line bg-surface p-6">
                  <h3 className="mb-2 text-[16px] font-semibold tracking-[-0.01em] text-brand-tint">{point.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-muted">{point.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-[760px]">
              <h2 className="mb-6 font-display text-[24px] font-semibold tracking-[-0.02em] md:text-[30px]">
                {dict.company.officesHeading}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {dict.company.offices.map((office) => (
                  <div key={office.address} className="rounded-[16px] border border-line bg-surface p-6">
                    <div className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-tint">
                      {office.label}
                    </div>
                    <address className="text-[15px] not-italic leading-relaxed text-text-secondary">
                      {office.address}
                    </address>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 pt-8 text-center">
        <Container>
          <Reveal>
            <CtaButton href={`/${locale}`} external={false} size="lg">
              {dict.company.ctaLabel}
            </CtaButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
