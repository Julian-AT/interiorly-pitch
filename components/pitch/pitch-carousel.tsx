"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Slides } from "@/components/pitch/slides";
import { CarouselToolbar } from "@/components/pitch/carousel-toolbar";
import { usePathname } from "next/navigation";
import { useCurrentSlide } from "@/lib/hooks/use-current-slide";

interface PitchCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  slides: (keyof typeof Slides)[];
}

const PitchCarousel = ({ slides }: PitchCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const { currentSlide, setCurrentSlide } = useCurrentSlide();
  const pathname = usePathname();

  useEffect(() => {
    if (!api) return;

    setCurrentSlide(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap() + 1);
    });
  }, [api, setCurrentSlide]);

  return (
    <Carousel className="relative min-h-full w-full" setApi={setApi}>
      <CarouselContent>
        {slides.map((slide, index) => {
          if (!Slides[slide]) {
            console.error(`Slide ${slide} not found`);
            return null;
          }
          return <CarouselItem key={index}>{Slides[slide]}</CarouselItem>;
        })}
      </CarouselContent>
      <CarouselToolbar api={api} />
      {pathname}
    </Carousel>
  );
};

export default PitchCarousel;
