import "server-only";
import { type Locale, isLocale, defaultLocale } from "@/lib/locales";

export type DifferentiatorStatus = "available" | "in-progress";

export interface Differentiator {
  num: string;
  status: DifferentiatorStatus;
  title: string;
  body: string;
}

export interface Stage {
  key: string;
  label: string;
  body: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    product: string;
    company: string;
    openApp: string;
    beta: string;
    skipToContent: string;
    toggleMenu: string;
    switchLanguage: string;
  };
  common: {
    availableTag: string;
    inProgressTag: string;
    backToTop: string;
  };
  hero: {
    pill: string;
    headline: string;
    headlineDim: string;
    cta: string;
    trust: string[];
  };
  whatIs: {
    pill: string;
    heading: string;
    sub: string;
    lede: string;
    tagline: string;
  };
  goalResultStory: {
    pill: string;
    heading: string;
    sub: string;
    stages: Stage[];
  };
  differentiators: {
    pill: string;
    heading: string;
    sub: string;
    items: Differentiator[];
  };
  humanOversight: {
    pill: string;
    heading: string;
    lede: string;
    points: { title: string; body: string }[];
  };
  security: {
    pill: string;
    heading: string;
    lede: string;
    points: { title: string; body: string }[];
  };
  companyBridge: {
    pill: string;
    heading: string;
    body: string;
    linkLabel: string;
  };
  company: {
    pill: string;
    heroHeading: string;
    heroSub: string;
    whoHeading: string;
    whoBody: string;
    connectionHeading: string;
    connectionPoints: { title: string; body: string }[];
    officesHeading: string;
    offices: { label: string; address: string }[];
    ctaLabel: string;
  };
  cta: {
    pill: string;
    heading: string;
    sub: string;
    button: string;
  };
  footer: {
    blurb: string;
    productHeading: string;
    productLinks: { label: string; href: string }[];
    companyHeading: string;
    companyLinks: { label: string; href: string }[];
    officesHeading: string;
    offices: string[];
    legalLinks: string[];
    trustLine: string;
  };
}

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((m) => m.default as Dictionary),
  de: () => import("./dictionaries/de.json").then((m) => m.default as Dictionary),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const resolved = isLocale(locale) ? locale : defaultLocale;
  return dictionaries[resolved]();
};
