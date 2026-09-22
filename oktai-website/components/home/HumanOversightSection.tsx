import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { ReviewIcon } from "@/components/icons/workflow";
import { IconFrame } from "@/components/icons/shared";
import type { Dictionary } from "@/app/[locale]/dictionaries";

export function HumanOversightSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <Reveal>
            <div className="md:sticky md:top-28">
              <div className="mb-5">
                <Pill>{dict.humanOversight.pill}</Pill>
              </div>
              <div className="mb-6">
                <IconFrame size={56}>
                  <ReviewIcon />
                </IconFrame>
              </div>
              <h2 className="max-w-[16ch] font-display text-[28px] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[38px]">
                {dict.humanOversight.heading}
              </h2>
              <p className="mt-4 max-w-[46ch] text-[16px] leading-relaxed text-text-secondary">
                {dict.humanOversight.lede}
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            {dict.humanOversight.points.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <div className="rounded-[18px] border border-line bg-surface p-7">
                  <h3 className="mb-2.5 text-[18px] font-semibold tracking-[-0.01em]">{point.title}</h3>
                  <p className="text-[15.5px] leading-relaxed text-muted">{point.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
