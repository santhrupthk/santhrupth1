import { redirect } from "next/navigation";
import { headers, cookies } from "next/headers";
import { locales, defaultLocale, isLocale } from "@/lib/locales";

/**
 * Fallback for "/" in case the host doesn't execute proxy.ts (Next.js 16's
 * new name for middleware.ts — some platforms may not yet pick it up).
 * Mirrors proxy.ts's own locale-detection so behaviour matches either way.
 */
export default async function RootPage() {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  if (cookieLocale && isLocale(cookieLocale)) {
    redirect(`/${cookieLocale}`);
  }

  const headerStore = await headers();
  const acceptLanguage = headerStore.get("accept-language") ?? "";
  for (const lang of acceptLanguage.split(",")) {
    const code = lang.trim().split(";")[0].split("-")[0];
    if ((locales as readonly string[]).includes(code)) {
      redirect(`/${code}`);
    }
  }

  redirect(`/${defaultLocale}`);
}
