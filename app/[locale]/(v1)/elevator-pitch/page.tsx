import PitchCarousel from "@/components/pitch/pitch-carousel";
import { Grid } from "@/components/pitch/ui";
import Image from "next/image";

export default function ElevatorPitch() {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 h-screen bg-[#0C0C0C] text-white">
      <div className="xl:block hidden">
        <Grid />
        <PitchCarousel
          slides={[
            "SlideStart",
            "SlideProblem",
            "SlideSolution",
            "SlideFeatures",
            "SlideGenerativeUI",
            "SlideVision",
            "SlideTeam",
            "SlideFinish",
          ]}
        />
      </div>
      <div className="xl:hidden flex items-center justify-center font-bold text-3xl h-full text-center">
        We&apos;re sorry, this pitch does not work on mobile.
      </div>
    </div>
  );
}
