"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SlideStart } from "@/components/pitch/slides/start";
import { SlideProblem } from "@/components/pitch/slides/problem";
import { SlideSolution } from "@/components/pitch/slides/solution";
import { SlideTeam } from "@/components/pitch/slides/team";
import { SlideSubscription } from "@/components/pitch/slides/pricing";
import { SlideVision } from "@/components/pitch/slides/vision";
import { SlideTechStack } from "@/components/pitch/slides/stack";
import { SlideFeatures } from "@/components/pitch/slides/features";
import { CarouselToolbar } from "@/components/pitch/carousel-toolbar";
import { SlideScreenshots } from "@/components/pitch/slides/screenshots";
import { SlideFinish } from "@/components/pitch/slides/finish";
import { SlidePages } from "@/components/pitch/slides/pages";
import SlideNextSteps from "@/components/pitch/slides/next-steps";
import { SlideRoadmap } from "@/components/pitch/slides/roadmap";
import { SlideGenerativeUI } from "@/components/pitch/slides/generative-ui";

const Slides = {
  SlideStart: <SlideStart />,
  SlideProblem: <SlideProblem />,
  SlideSolution: <SlideSolution />,
  SlideFeatures: <SlideFeatures />,
  SlideSubscription: <SlideSubscription />,
  SlideTeam: <SlideTeam />,
  SlideTechStack: <SlideTechStack />,
  SlidePages: <SlidePages />,
  SlideScreenshots: <SlideScreenshots />,
  SlideVision: <SlideVision />,
  SlideFinish: <SlideFinish />,
  SlideNextSteps: <SlideNextSteps />,
  SlideRoadmap: <SlideRoadmap />,
  SlideGenerativeUI: <SlideGenerativeUI />,
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
