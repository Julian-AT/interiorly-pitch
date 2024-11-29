"use client";

import { useTranslations } from "next-intl";
import SlideShell from "@/components/pitch/slide-shell";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/button";
import ImageGenerationResultCarousel from "@/components/features/image-generation-result";
import { useImageGeneration } from "@/lib/hooks/use-images";
import { Spotlight } from "@/components/ui/spotlight";
import { cn, getRandomPrompt } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export function SlideFinish() {
  const t = useTranslations("slide_finish");
  const { generateImage, isLoading, images, clearImages } =
    useImageGeneration();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => null;

  const words = [
    t("words.word_1"),
    t("words.word_2"),
    t("words.word_3"),
    t("words.word_4"),
    t("words.word_5"),
  ];

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

        {!isLoading && (
          <>
            <span
              className={cn(
                "text-center font-bold text-secondary-foreground",
                images.length === 0 ? "text-5xl" : "text-3xl md:text-4xl",
              )}
            >
              {t("words.prefix")}
              <FlipWords
                words={words}
                className={cn(
                  "text-xl font-bold text-secondary-foreground",
                  images.length === 0 ? "text-5xl" : "text-3xl md:text-4xl",
                )}
              />
              <br />
              {t("words.suffix")}
            </span>
            {images.length > 0 && (
              <div className="-mt-5 mb-3 line-clamp-1 w-2/3 text-pretty text-center text-2xl font-bold italic">
                &quot;{images[0].prompt}&quot;
              </div>
            )}
          </>
        )}
        {(images.length > 0 || isLoading) && (
          <div className="relative -my-8 flex-1">
            <ImageGenerationResultCarousel />
          </div>
        )}
        <PlaceholdersAndVanishInput
          disabled={isLoading}
          placeholder={"Stell dir dein Traumhaus vor..."}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        <div className="-mt-8">
          <span>{t("tooltips.not_sure")}</span>
          <Button
            onClick={() => {
              generateImage(getRandomPrompt());
            }}
            variant={"link"}
            className="px-1 text-base"
            disabled={isLoading}
          >
            {t("tooltips.cta")}
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
