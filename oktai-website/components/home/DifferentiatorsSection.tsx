import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { StatusTag } from "@/components/ui/StatusTag";
import { RichText } from "@/components/ui/RichText";
import { IconFrame } from "@/components/icons/shared";
import {
  ParallelWorkflowsIcon,
  DiverseModelsIcon,
  TransparentPricingIcon,
  AuditTrailIcon,
  SignatureIcon,
  LayeredSecurityIcon,
} from "@/components/icons/differentiators";
import type { Dictionary } from "@/app/[locale]/dictionaries";

const icons = [
  ParallelWorkflowsIcon,
  DiverseModelsIcon,
  TransparentPricingIcon,
  AuditTrailIcon,
  SignatureIcon,
  LayeredSecurityIcon,
];

export function DifferentiatorsSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="differentiators" className="py-20 md:py-28">
      <Container>
        <div className="mx-auto mb-14 max-w-[720px] text-center">
          <Reveal className="mb-5 flex justify-center">
            <Pill>{dict.differentiators.pill}</Pill>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-[30px] font-semibold tracking-[-0.03em] md:text-[42px]">
              {dict.differentiators.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-3.5 text-[17px] text-muted">{dict.differentiators.sub}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
          {dict.differentiators.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.num} delay={(i % 3) * 0.06}>
                <article className="group relative h-full overflow-hidden rounded-[20px] border border-line bg-gradient-to-b from-surface-2 to-surface p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-line">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <IconFrame>
                      <Icon />
                    </IconFrame>
                    <StatusTag
                      status={item.status}
                      availableLabel={dict.common.availableTag}
                      inProgressLabel={dict.common.inProgressTag}
                    />
                  </div>
                  <span className="mb-2 block font-mono text-[11px] tracking-[0.14em] text-brand-tint">
                    {item.num}
                  </span>
                  <h3 className="mb-2.5 text-[18px] font-semibold leading-snug tracking-[-0.01em]">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">
                    <RichText text={item.body} />
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
