import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
        <div className="mb-14">
          <SectionHeading
            pill={dict.differentiators.pill}
            heading={dict.differentiators.heading}
            sub={dict.differentiators.sub}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dict.differentiators.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.num} delay={(i % 3) * 0.06}>
                <article className="group relative h-full overflow-hidden rounded-[20px] border border-line bg-gradient-to-b from-surface-2 to-surface p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-line">
                  <div
                    className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-brand via-brand-tint to-transparent transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                  <div className="mb-5 flex items-center justify-between gap-3">
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
