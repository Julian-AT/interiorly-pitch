import ImageGenerationResultCarousel from "@/components/features/image-generation-result";
import PitchCarousel from "@/components/pitch/pitch-carousel";
import { Grid } from "@/components/pitch/ui";
import Image from "next/image";

export default function Home() {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 h-screen bg-[#0C0C0C] text-white">
      <div className="hidden xl:block">
        <Grid />
        <PitchCarousel
          slides={[
            "SlideStart",
            "SlideProblemElevatorPitch",
            "SlideSolutionElevatorPitch",
            "SlideSolutionStackElevatorPitch",
            "SlideFeatures",
            "SlideGenerativeUI",
            "SlidePages",
            "SlideTechStack",
            "SlideVision",
            "SlideTeam",
            "SlideNextSteps",
            "SlideFinish",
          ]}
        />
      </div>
      <div className="flex h-full items-center justify-center text-center text-3xl font-bold xl:hidden">
        We&apos;re sorry, this pitch does not work on mobile.
      </div>
      <ImageGenerationResultCarousel />
    </div>
  );
}
