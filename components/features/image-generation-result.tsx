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
        "container flex justify-center w-[400px] aspect-square items-center p-0 m-0 border-none bg-transparent",
        images.length > 0 && progress === 0 && "shadow-none"
      )}
    >
      {progress === 0 ? (
        images.length === 0 ? (
          <div className="text-center w-full flex flex-col gap-3">
            <IconSparkles className="w-16 h-16 mx-auto" />
            <span className="text-lg mt-3 leading-6">
              You have not generated any images yet
            </span>
            <span className="text-muted-foreground mx-5">
              Enter a prompt or randomize the prompt to generate Interior Design
              concepts
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
                    className="w-full aspect-square rounded-lg shadow-2xl"
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
                      index + 1 === current ? "bg-primary" : "bg-secondary"
                    )}
                  />
                )
              )}
            </div>
          </Carousel>
        )
      ) : (
        <div className="text-center w-full flex flex-col gap-2">
          <ImageGenerationProgress progress={progress} message={message} />
        </div>
      )}
    </Card>
  );
}
