import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import deLocale from "@/locales/de.json";
import enLocale from "@/locales/en.json";

const locales = ["en", "de"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  const messages = locale === "en" ? enLocale : deLocale;
  return { messages };
  // disable since next-intl doesn't support turbo pack yet
  // return {
  //   messages: (await import(`@/locales/${locale}.json`)).default,
  // };
});
