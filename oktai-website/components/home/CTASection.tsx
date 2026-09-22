import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/app/[locale]/dictionaries";

export function CTASection({ dict }: { dict: Dictionary }) {
  return (
    <section className="pb-24 pt-4 md:pb-32">
      <Container>
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[28px] border border-brand-line px-8 py-16 text-center shadow-[0_30px_90px_rgba(0,0,0,0.55)] md:py-20"
            style={{
              background:
                "radial-gradient(900px 340px at 50% -22%, rgba(114,38,224,0.45), transparent 70%), linear-gradient(180deg, #191029, #0b0910)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(500px 260px at 50% 110%, rgba(96,27,192,0.22), transparent 70%)" }}
              aria-hidden="true"
            />
            <div className="relative mb-5 flex justify-center">
              <Pill>{dict.cta.pill}</Pill>
            </div>
            <h2 className="relative mx-auto max-w-[18ch] font-display text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[44px]">
              {dict.cta.heading}
            </h2>
            <p className="relative mx-auto mt-3.5 max-w-[46ch] text-[17px] text-muted">{dict.cta.sub}</p>
            <div className="relative mt-9 flex justify-center">
              <CtaButton href="https://app.oktai.ai/" size="lg" beta="β">
                {dict.cta.button}
              </CtaButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
