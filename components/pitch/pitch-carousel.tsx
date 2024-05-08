"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SlideStart } from "./slides/start";
import { SlideProblem } from "./slides/problem";
import { SlideSolution } from "./slides/solution";
import { SlideTeam } from "./slides/team";
import { SlideSubscription } from "./slides/pricing";
import { SlideVision } from "./slides/vision";
import { SlideTechStack } from "./slides/stack";
import { SlideFeatures } from "./slides/features";
import { CarouselToolbar } from "./carousel-toolbar";
import { SlideFuture } from "./slides/future";
import { SlideEvolution } from "./slides/evolution";
import { SlideScreenshots } from "./slides/screenshots";
import { SlideFinish } from "./slides/finish";
import { SlidePages } from "./slides/pages";

const Slides = {
  SlideStart: <SlideStart />,
  SlideProblem: <SlideProblem />,
  SlideSolution: <SlideSolution />,
  SlideFeatures: <SlideFeatures />,
  SlideEvolution: <SlideEvolution />,
  SlideSubscription: <SlideSubscription />,
  SlideTeam: <SlideTeam />,
  SlideTechStack: <SlideTechStack />,
  SlidePages: <SlidePages />,
  SlideScreenshots: <SlideScreenshots />,
  SlideVision: <SlideVision />,
  SlideFuture: <SlideFuture />,
  SlideFinish: <SlideFinish />,
};

interface PitchCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  slides: (keyof typeof Slides)[];
}

const PitchCarousel = ({ slides }: PitchCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <Carousel className="w-full min-h-full relative" setApi={setApi}>
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
    </Carousel>
  );
};

export default PitchCarousel;
