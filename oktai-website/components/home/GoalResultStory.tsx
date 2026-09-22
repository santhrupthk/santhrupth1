"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  GoalIcon,
  UnderstandingIcon,
  OrchestrationIcon,
  AgentsIcon,
  ResearchIcon,
  ValidationIcon,
  ReviewIcon,
  ResultIcon,
} from "@/components/icons/workflow";
import type { Dictionary } from "@/app/[locale]/dictionaries";

const icons = [GoalIcon, UnderstandingIcon, OrchestrationIcon, AgentsIcon, ResearchIcon, ValidationIcon, ReviewIcon, ResultIcon];

export function GoalResultStory({ dict }: { dict: Dictionary }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 35%"],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <Container>
        <div className="mb-16">
          <SectionHeading pill={dict.goalResultStory.pill} heading={dict.goalResultStory.heading} sub={dict.goalResultStory.sub} />
        </div>

        <div ref={containerRef} className="relative mx-auto max-w-[760px]">
          <div className="absolute left-[31px] top-3 bottom-3 w-[3px] rounded-full bg-line-soft" aria-hidden="true">
            <motion.div
              className="h-full w-full origin-top rounded-full bg-gradient-to-b from-brand via-brand-tint to-brand-tint shadow-[0_0_16px_rgba(166,131,242,0.5)]"
              style={{ scaleY: reduce ? 1 : lineProgress }}
            />
          </div>

          <ol className="flex flex-col gap-9 md:gap-11">
            {dict.goalResultStory.stages.map((stage, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={stage.key} as="li" delay={0} className="relative flex gap-5 md:gap-7">
                  <div className="relative z-10 grid h-16 w-16 flex-none place-items-center rounded-2xl border border-brand-line bg-bg-elevated text-brand-tint shadow-[0_0_0_6px_var(--bg),0_8px_24px_rgba(0,0,0,0.35)]">
                    <div className="h-7 w-7">
                      <Icon />
                    </div>
                  </div>
                  <div className="pt-2.5">
                    <div className="mb-1.5 flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-tint">
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <span className="h-1 w-1 rounded-full bg-brand" />
                      <span>{stage.label}</span>
                    </div>
                    <p className="max-w-[52ch] text-[16px] leading-relaxed text-text-secondary">{stage.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
