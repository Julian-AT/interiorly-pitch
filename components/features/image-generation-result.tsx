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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useImageGeneration } from "@/lib/hooks/use-images";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IconSparkles } from "@/components/icons";
import Logo from "@/components/logo";
import { DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ImageGenerationResultCarousel() {
  const { images, progress, message } = useImageGeneration();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

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
          <>
            <Carousel setApi={setApi}>
              <CarouselContent>
                {images[0].batch.map((image, index) => (
                  <CarouselItem key={index}>
                    <div
                      className="cursor-pointer"
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <Image
                        src={image}
                        alt="Generated Image"
                        width="0"
                        height="0"
                        className="aspect-square w-full rounded-lg shadow-2xl"
                      />
                      <div className="relative">
                        <div className="absolute bottom-1 right-2 opacity-50">
                          <Logo className="h-10 w-10 text-white" />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
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

            <Dialog
              open={selectedImageIndex !== null}
              onOpenChange={() => setSelectedImageIndex(null)}
            >
              {selectedImageIndex !== null && (
                <DialogContent className="h-[95vh] max-w-screen-lg select-none overflow-hidden">
                  <DialogTitle className="text-lg font-bold">
                    {images[0].prompt}
                  </DialogTitle>
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={images[0].batch[selectedImageIndex]}
                      alt="Generated Image"
                      width={1024}
                      height={1024}
                      className="relative h-full w-full overflow-hidden rounded-lg object-contain"
                    />
                    <Button
                      variant="outline"
                      className="absolute left-4 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full"
                      onClick={() =>
                        setSelectedImageIndex((prev) =>
                          prev !== null && prev > 0 ? prev - 1 : prev,
                        )
                      }
                      disabled={selectedImageIndex === 0}
                    >
                      <ArrowLeft className="h-full w-full" />
                    </Button>
                    <Button
                      variant="outline"
                      className="absolute right-4 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full"
                      onClick={() =>
                        setSelectedImageIndex((prev) =>
                          prev !== null && prev < images[0].batch.length - 1
                            ? prev + 1
                            : prev,
                        )
                      }
                      disabled={
                        selectedImageIndex === images[0].batch.length - 1
                      }
                    >
                      <ArrowRight className="h-full w-full" />
                    </Button>
                  </div>
                </DialogContent>
              )}
            </Dialog>
          </>
        )
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-2 text-center">
          <ImageGenerationProgress progress={progress} message={message} />
        </div>
      )}
    </Card>
  );
}
