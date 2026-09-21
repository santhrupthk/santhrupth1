import { notFound } from "next/navigation";
import { getDictionary } from "./dictionaries";
import { isLocale, type Locale } from "@/lib/locales";
import { Hero } from "@/components/home/Hero";
import { WhatIsSection } from "@/components/home/WhatIsSection";
import { GoalResultStory } from "@/components/home/GoalResultStory";
import { DifferentiatorsSection } from "@/components/home/DifferentiatorsSection";
import { HumanOversightSection } from "@/components/home/HumanOversightSection";
import { SecuritySection } from "@/components/home/SecuritySection";
import { CompanyBridgeSection } from "@/components/home/CompanyBridgeSection";
import { CTASection } from "@/components/home/CTASection";

export default async function HomePage(props: PageProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <WhatIsSection dict={dict} />
      <GoalResultStory dict={dict} />
      <DifferentiatorsSection dict={dict} />
      <HumanOversightSection dict={dict} />
      <SecuritySection dict={dict} />
      <CompanyBridgeSection dict={dict} locale={locale as Locale} />
      <CTASection dict={dict} />
    </>
  );
}
