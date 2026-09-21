import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/app/[locale]/dictionaries";

export function WhatIsSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="what" className="py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-[780px] text-center">
          <Reveal className="mb-5 flex justify-center">
            <Pill>{dict.whatIs.pill}</Pill>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-[30px] font-semibold tracking-[-0.03em] md:text-[42px]">
              {dict.whatIs.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-[52ch] text-[18px] text-muted md:text-[20px]">{dict.whatIs.sub}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-7 max-w-[66ch] text-[18px] leading-relaxed text-text-secondary md:text-[20px]">
              {dict.whatIs.lede}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 font-semibold text-brand-tint">{dict.whatIs.tagline}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
