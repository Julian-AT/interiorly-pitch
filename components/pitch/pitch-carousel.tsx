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
import { SlideLessonsLearned } from "./slides/lessons-learned";
import { SlideFuture } from "./slides/future";
import { SlideEvolution } from "./slides/evolution";

const PitchCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <Carousel className="w-full min-h-full relative" setApi={setApi}>
      <CarouselContent>
        <CarouselItem>
          <SlideStart />
        </CarouselItem>
        <CarouselItem>
          <SlideProblem />
        </CarouselItem>
        <CarouselItem>
          <SlideSolution />
        </CarouselItem>
        <CarouselItem>
          <SlideTeam />
        </CarouselItem>
        <CarouselItem>
          <SlideSubscription />
        </CarouselItem>
        <CarouselItem>
          <SlideVision />
        </CarouselItem>
        <CarouselItem>
          <SlideTechStack />
        </CarouselItem>
        <CarouselItem>
          <SlideFeatures />
        </CarouselItem>
        <CarouselItem>
          <SlideLessonsLearned />
        </CarouselItem>
        <CarouselItem>
          <SlideFuture />
        </CarouselItem>
        <CarouselItem>
          <SlideEvolution />
        </CarouselItem>
      </CarouselContent>
      <CarouselToolbar api={api} />
    </Carousel>
  );
};

export default PitchCarousel;
