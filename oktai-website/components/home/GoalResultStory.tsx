"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
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
        <div className="mx-auto mb-16 max-w-[720px] text-center">
          <div className="mb-5 flex justify-center">
            <Pill>{dict.goalResultStory.pill}</Pill>
          </div>
          <h2 className="font-display text-[30px] font-semibold tracking-[-0.03em] md:text-[42px]">
            {dict.goalResultStory.heading}
          </h2>
          <p className="mx-auto mt-3.5 max-w-[56ch] text-[17px] text-muted md:text-[18px]">
            {dict.goalResultStory.sub}
          </p>
        </div>

        <div ref={containerRef} className="relative mx-auto max-w-[760px]">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-line md:left-[27px]" aria-hidden="true">
            <motion.div
              className="w-full origin-top bg-gradient-to-b from-brand to-brand-tint"
              style={{ height: reduce ? "100%" : lineProgress }}
            />
          </div>

          <ol className="flex flex-col gap-10 md:gap-12">
            {dict.goalResultStory.stages.map((stage, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={stage.key} as="li" delay={0} className="relative flex gap-6 pl-0">
                  <div className="relative z-10 grid h-14 w-14 flex-none place-items-center rounded-[14px] border border-brand-line bg-bg text-brand-tint shadow-[0_0_0_6px_var(--bg)]">
                    <div className="h-6 w-6">
                      <Icon />
                    </div>
                  </div>
                  <div className="pt-1.5">
                    <div className="mb-1 flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-tint">
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
