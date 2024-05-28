"use client";
import SlideShell from "@/components/pitch/slide-shell";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { FeatureBentoGrid } from "@/components/features/feature-bento-grid";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function SlideFeatures() {
  const t = useTranslations("slide_features");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <SlideShell title={t("title")}>
      <div
        className="flex items-center justify-center col-span-3 w-full h-full relative overflow-hidden"
        ref={ref}
      >
        {isInView && <FeatureBentoGrid />}
      </div>
    </SlideShell>
  );
}
