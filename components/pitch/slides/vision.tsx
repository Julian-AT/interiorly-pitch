import SlideShell from "@/components/pitch/slide-shell";
import { useTranslations } from "next-intl";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export function SlideVision() {
  const t = useTranslations("slide_vision");
  const vision = `\"${t("vision")}\"`;
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <SlideShell title={t("title")} className="xl:grid-cols-1">
      <h1
        className="px-4 text-center text-7xl font-medium leading-[1.2] md:px-0"
        ref={ref}
      >
        {isInView && <TextGenerateEffect words={vision} />}
      </h1>
    </SlideShell>
  );
}
