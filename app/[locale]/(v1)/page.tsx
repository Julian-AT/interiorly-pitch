import PitchCarousel from "@/components/pitch/pitch-carousel";
import { Grid } from "@/components/pitch/ui";
import Image from "next/image";

export default function Home() {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 h-screen bg-[#0C0C0C] text-white">
      <Grid />
      <PitchCarousel
        slides={[
          "SlideStart",
          "SlideProblem",
          "SlideSolution",
          "SlideFeatures",
          "SlideSubscription",
          "SlidePages",
          "SlideTechStack",
          "SlideVision",
          "SlideTeam",
          "SlideNextSteps",
          "SlideFinish",
        ]}
      />
    </div>
  );
}
