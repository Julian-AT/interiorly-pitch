import PitchCarousel from "@/components/pitch/pitch-carousel";
import { Grid } from "@/components/pitch/ui";
import Image from "next/image";

export default function Home() {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 h-screen bg-[#0C0C0C] text-white">
      <Grid />
      <div className="md:block hidden">
        <PitchCarousel
          slides={[
            "SlideStart",
            "SlideProblem",
            "SlideSolution",
            "SlideFeatures",
            "SlideSubscription",
            "SlidePages",
            "SlideTechStack",
            "SlideGenerativeUI",
            "SlideVision",
            "SlideTeam",
            "SlideNextSteps",
            "SlideRoadmap",
            "SlideFinish",
          ]}
        />
      </div>
      <div className="md:hidden block">
        We&apos;re sorry, this pitch does not work on mobile.
      </div>
    </div>
  );
}
