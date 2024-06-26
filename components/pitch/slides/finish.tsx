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
  const { generateImage, isLoading, images, clearImages } =
    useImageGeneration();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => null;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const prompt = (e.currentTarget[0] as HTMLInputElement).value;
    generateImage(prompt);
  };

  return (
    <div className="relative">
      <SlideShell
        title={t("title")}
        className="flex flex-col gap-8 xl:grid-cols-1"
      >
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />

        {images.length === 0 || isLoading ? (
          <span className="text-center text-5xl font-bold text-secondary-foreground">
            Generiere
            <FlipWords
              words={words}
              className="text-5xl font-bold text-secondary-foreground"
            />
            <br />
            Innenraumkonzepte mit Interiorly AI.
          </span>
        ) : (
          <span className="mb-3 w-2/3 text-pretty text-center text-4xl font-bold">
            &quot;{images[0].prompt}&quot;
          </span>
        )}
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
      <div
        className="absolute bottom-0 right-0 z-20 h-24 w-24 cursor-pointer"
        onClick={clearImages}
      />
    </div>
  );
}
