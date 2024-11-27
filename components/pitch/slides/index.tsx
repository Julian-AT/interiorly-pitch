import { SlideStart } from "@/components/pitch/slides/start";
import { SlideProblem } from "@/components/pitch/slides/problem";
import { SlideSolution } from "@/components/pitch/slides/solution";
import { SlideTeam } from "@/components/pitch/slides/team";
import { SlideVision } from "@/components/pitch/slides/vision";
import { SlideFeatures } from "@/components/pitch/slides/features";
import { SlideFinish } from "@/components/pitch/slides/finish";
import { SlideGenerativeUI } from "@/components/pitch/slides/generative-ui";
import { SlideEngine } from "./engine";

export const Slides = {
  SlideStart: <SlideStart />,
  SlideProblem: <SlideProblem />,
  SlideSolution: <SlideSolution />,
  SlideFeatures: <SlideFeatures />,
  SlideTeam: <SlideTeam />,
  SlideVision: <SlideVision />,
  SlideFinish: <SlideFinish />,
  SlideGenerativeUI: <SlideGenerativeUI />,
  SlideEngine: <SlideEngine />,
};
