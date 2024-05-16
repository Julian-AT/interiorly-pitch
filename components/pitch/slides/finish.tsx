import Link from "next/link";
import BookMeeting from "@/components/book-meeting";
import { useTranslations } from "next-intl";
import SlideShell from "../slide-shell";

export function SlideFinish() {
  const t = useTranslations("slide_finish");

  return (
    <SlideShell title={t("title")} className="xl:grid-cols-1">
      <span className="text-center text-3xl text-secondary-foreground font-bold">
        {t("text")}
      </span>
      <BookMeeting />
    </SlideShell>
  );
}
