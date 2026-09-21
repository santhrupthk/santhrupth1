import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { LayeredSecurityIcon } from "@/components/icons/differentiators";
import { IconFrame } from "@/components/icons/shared";
import type { Dictionary } from "@/app/[locale]/dictionaries";

export function SecuritySection({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 h-[560px] -translate-y-24"
        style={{
          background: "radial-gradient(700px 400px at 50% 30%, rgba(96,27,192,0.10), transparent 65%)",
        }}
        aria-hidden="true"
      />
      <Container>
        <div className="mx-auto mb-14 max-w-[680px] text-center">
          <Reveal className="mb-5 flex justify-center">
            <Pill>{dict.security.pill}</Pill>
          </Reveal>
          <Reveal delay={0.05} className="mb-6 flex justify-center">
            <IconFrame size={56}>
              <LayeredSecurityIcon />
            </IconFrame>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[28px] font-semibold tracking-[-0.03em] md:text-[38px]">
              {dict.security.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-4 max-w-[60ch] text-[16.5px] leading-relaxed text-text-secondary">
              {dict.security.lede}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto grid max-w-[900px] gap-4 md:grid-cols-2">
          {dict.security.points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.08}>
              <div className="h-full rounded-[18px] border border-line bg-surface p-7">
                <h3 className="mb-2.5 text-[18px] font-semibold tracking-[-0.01em]">{point.title}</h3>
                <p className="text-[15.5px] leading-relaxed text-muted">{point.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
