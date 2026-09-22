import { Pill } from "./Pill";
import { Reveal } from "./Reveal";

export function SectionHeading({
  pill,
  heading,
  sub,
  align = "center",
}: {
  pill: string;
  heading: string;
  sub?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-[720px] text-center" : "max-w-[560px]"}>
      <Reveal className={`mb-5 flex ${centered ? "justify-center" : "justify-start"}`}>
        <Pill>{pill}</Pill>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-[28px] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[40px]">
          {heading}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p
            className={`mt-3.5 text-[16.5px] leading-relaxed text-muted md:text-[18px] ${
              centered ? "mx-auto max-w-[54ch]" : "max-w-[48ch]"
            }`}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
