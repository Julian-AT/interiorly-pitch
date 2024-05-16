import Link from "next/link";
import { Card } from "@/components/ui/card";
import SlideShell from "@/components/pitch/slide-shell";
import { useTranslations } from "next-intl";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function SlideVision() {
  const t = useTranslations("slide_vision");
  const vision = `\"${t("vision")}\"`;

  return (
    <SlideShell title={t("title")} className="xl:grid-cols-1">
      <h1 className="text-7xl leading-[1.2] px-4 md:px-0 font-medium text-center">
        <TextGenerateEffect
          words={vision}
          className="text-7xl text-secondary-foreground leading-[1.2] px-4 md:px-0 font-medium text-center"
        />
      </h1>
    </SlideShell>
  );
}
