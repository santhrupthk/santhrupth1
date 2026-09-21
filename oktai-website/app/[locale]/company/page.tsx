import { notFound } from "next/navigation";
import { getDictionary } from "../dictionaries";
import { isLocale, type Locale } from "@/lib/locales";
import { CompanyHero } from "@/components/company/CompanyHero";
import { CompanyContent } from "@/components/company/CompanyContent";

export default async function CompanyPage(props: PageProps<"/[locale]/company">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return (
    <>
      <CompanyHero dict={dict} />
      <CompanyContent dict={dict} locale={locale as Locale} />
    </>
  );
}
