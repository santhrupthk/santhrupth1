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
            className="relative overflow-hidden rounded-[28px] border border-brand-line px-8 py-16 text-center shadow-[0_30px_90px_rgba(0,0,0,0.5)] md:py-20"
            style={{
              background:
                "radial-gradient(800px 300px at 50% -20%, rgba(96,27,192,0.4), transparent 70%), linear-gradient(180deg, #171129, #0c0a12)",
            }}
          >
            <div className="mb-5 flex justify-center">
              <Pill>{dict.cta.pill}</Pill>
            </div>
            <h2 className="mx-auto max-w-[20ch] font-display text-[30px] font-semibold tracking-[-0.03em] md:text-[42px]">
              {dict.cta.heading}
            </h2>
            <p className="mx-auto mt-3.5 max-w-[46ch] text-[17px] text-muted">{dict.cta.sub}</p>
            <div className="mt-8 flex justify-center">
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
