"use client";

import { useTranslations } from "next-intl";
import SlideShell from "@/components/pitch/slide-shell";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { FlipWords } from "@/components/ui/flip-words";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ImageGenerationResultCarousel from "@/components/features/image-generation-result";
import { useImageGeneration } from "@/lib/hooks/use-images";
import { Spotlight } from "@/components/ui/spotlight";
import { getRandomPrompt } from "@/lib/utils";

const words = ["stunning", "unique", "beautiful", "elegant", "innovative"];

export function SlideFinish() {
  const t = useTranslations("slide_finish");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const { generateImage } = useImageGeneration();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => null;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsGenerating(true);
    generateImage((e.currentTarget[0] as HTMLInputElement).value);
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
        Generate
        <FlipWords
          words={words}
          className="text-secondary-foreground font-bold text-5xl"
        />
        <br />
        Room designs with Interiorly AI.
      </span>
      {isGenerating && <ImageGenerationResultCarousel />}
      <PlaceholdersAndVanishInput
        disabled={isGenerating}
        placeholder={"Imagine your dream home"}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <div>
        <span>Can&apos;t decide?</span>
        <Button
          onClick={() => {
            setIsGenerating(true);
            generateImage(getRandomPrompt());
          }}
          variant={"link"}
          className="px-1 text-base"
        >
          Generate random design
        </Button>
      </div>
    </SlideShell>
  );
}
