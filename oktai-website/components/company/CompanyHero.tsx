"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { TerminalMark } from "@/components/icons/TerminalMark";
import type { Dictionary } from "@/app/[locale]/dictionaries";

export function CompanyHero({ dict }: { dict: Dictionary }) {
  const reduce = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="relative overflow-hidden pb-8 pt-20 text-center md:pt-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(800px 460px at 50% -10%, rgba(87,30,188,0.24), transparent 62%)",
        }}
      />
      <Container>
        <motion.div {...fadeUp(0)} className="mb-6 flex justify-center">
          <Pill>{dict.company.pill}</Pill>
        </motion.div>
        <motion.div {...fadeUp(0.06)} className="mb-7 flex justify-center">
          <TerminalMark className="h-12 w-12 text-brand-tint" />
        </motion.div>
        <motion.h1
          {...fadeUp(0.12)}
          className="mx-auto max-w-[18ch] font-display text-[34px] font-semibold tracking-[-0.03em] md:text-[48px]"
        >
          {dict.company.heroHeading}
        </motion.h1>
        <motion.p {...fadeUp(0.2)} className="mx-auto mt-5 max-w-[54ch] text-[18px] text-muted">
          {dict.company.heroSub}
        </motion.p>
      </Container>
    </section>
  );
}
