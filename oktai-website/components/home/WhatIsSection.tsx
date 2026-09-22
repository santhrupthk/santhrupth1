import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/app/[locale]/dictionaries";

export function WhatIsSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="what" className="py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-[780px] text-center">
          <SectionHeading pill={dict.whatIs.pill} heading={dict.whatIs.heading} sub={dict.whatIs.sub} />
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
