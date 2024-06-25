"use client";

import Image from "next/image";
import { ImageGenerationProgress } from "@/components/features/image-generation-progress";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useImageGeneration } from "@/lib/hooks/use-images";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IconSparkles } from "@/components/icons";

export default function ImageGenerationResultCarousel() {
  const { images, progress, message } = useImageGeneration();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Card
      className={cn(
        "container m-0 flex aspect-square w-[350px] items-center justify-center border-none bg-transparent p-0",
        images.length > 0 && progress === 0 && "shadow-none",
      )}
    >
      {progress === 0 ? (
        images.length === 0 ? (
          <div className="flex w-full flex-col gap-3 text-center">
            <IconSparkles className="mx-auto h-16 w-16" />
            <span className="mt-3 text-xl leading-6">
              Du hast noch keine Bilder generiert
            </span>
            <span className="mx-5 text-muted-foreground">
              Starte die Bildgenerierung, um die Ergebnisse zu sehen.
            </span>
          </div>
        ) : (
          <Carousel setApi={setApi}>
            <CarouselContent>
              {images[0].batch.map((image, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={image}
                    alt="Generated Image"
                    width="0"
                    height="0"
                    className="aspect-square w-full rounded-lg shadow-2xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>{" "}
            <CarouselPrevious />
            <CarouselNext />
            <div className="flex justify-center gap-2 p-4">
              {Array.from({ length: images[0].batch.length }).map(
                (_, index) => (
                  <Button
                    variant="default"
                    key={index}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => api?.scrollTo(index)}
                    className={cn(
                      "h-2 w-2 rounded-full p-0",
                      index + 1 === current ? "bg-primary" : "bg-secondary",
                    )}
                  />
                ),
              )}
            </div>
          </Carousel>
        )
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-2 text-center">
          <ImageGenerationProgress progress={progress} message={message} />
        </div>
      )}
    </Card>
  );
}
