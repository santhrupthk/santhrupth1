"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { CtaButton } from "@/components/ui/CtaButton";
import { HeroVisual } from "./HeroVisual";
import type { Dictionary } from "@/app/[locale]/dictionaries";

export function Hero({ dict }: { dict: Dictionary }) {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="relative overflow-hidden pb-6 pt-20 md:pt-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 520px at 50% -10%, rgba(96,27,192,0.30), transparent 62%), radial-gradient(650px 460px at 92% 25%, rgba(166,131,242,0.09), transparent 60%)",
        }}
      />
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-6">
          <div className="text-center md:text-left">
            <motion.div {...fadeUp(0)} className="mb-6 flex justify-center md:justify-start">
              <Pill>{dict.hero.pill}</Pill>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="mx-auto max-w-[20ch] font-display text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] md:mx-0 md:text-[54px]"
            >
              {dict.hero.headline}{" "}
              <span className="font-medium text-muted">{dict.hero.headlineDim}</span>
            </motion.h1>

            <motion.div {...fadeUp(0.18)} className="mt-8 flex justify-center md:justify-start">
              <CtaButton href="https://app.oktai.ai/" size="lg" beta="β">
                {dict.hero.cta}
              </CtaButton>
            </motion.div>

            <motion.div
              {...fadeUp(0.26)}
              className="mt-7 flex flex-wrap items-center justify-center gap-3 font-mono text-[11.5px] uppercase tracking-[0.06em] text-muted md:justify-start"
            >
              {dict.hero.trust.map((t, i) => (
                <span key={t} className="flex items-center gap-3">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-brand" />}
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto aspect-square w-full max-w-[420px] md:max-w-none"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
