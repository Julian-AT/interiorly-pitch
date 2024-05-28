"use client";

import { useTranslations } from "next-intl";
import SlideShell from "@/components/pitch/slide-shell";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { FlipWords } from "@/components/ui/flip-words";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ImageGenerationResultCarousel from "@/components/features/image-generation-result";
import { useImageGeneration } from "@/lib/hooks/use-images";
import { Spotlight } from "@/components/ui/spotlight";
import { getRandomPrompt } from "@/lib/utils";

const words = [
  "atemberaubende",
  "einzigartige",
  "wunderschöne",
  "elegante",
  "innovative",
];

export function SlideFinish() {
  const t = useTranslations("slide_finish");
  const { generateImage, isLoading, images } = useImageGeneration();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => null;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const prompt = (e.currentTarget[0] as HTMLInputElement).value;
    generateImage(prompt);
  };

  return (
    <SlideShell
      title={t("title")}
      className="xl:grid-cols-1 flex flex-col gap-8"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <span className="text-center text-5xl text-secondary-foreground font-bold">
        Generiere
        <FlipWords
          words={words}
          className="text-secondary-foreground font-bold text-5xl"
        />
        <br />
        Innenraumkonzepte mit Interiorly AI.
      </span>
      {(images.length > 0 || isLoading) && (
        <div className="-my-4">
          <ImageGenerationResultCarousel />
        </div>
      )}
      <PlaceholdersAndVanishInput
        disabled={isLoading}
        placeholder={"Stell dir dein Traumhaus vor..."}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <div className="">
        <span>Nicht sicher?</span>
        <Button
          onClick={() => {
            generateImage(getRandomPrompt());
          }}
          variant={"link"}
          className="px-1 text-base"
          disabled={isLoading}
        >
          Generiere ein zufälliges Konzept
        </Button>
      </div>
    </SlideShell>
  );
}
