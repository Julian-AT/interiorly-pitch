import PitchCarousel from "@/components/pitch/pitch-carousel";
import { Grid } from "@/components/pitch/ui";

export default function ElevatorPitch() {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 h-screen bg-[#0C0C0C] text-white">
      <div className="">
        <Grid />
        <PitchCarousel
          slides={[
            "SlideStart",
            "SlideProblem",
            "SlideSolution",
            "SlideVision",
            "SlideEngine",
            "SlideFeatures",
            "SlideGenerativeUI",
            "SlideTeam",
            "SlideFinish",
          ]}
        />
      </div>
      {/* <div className="flex h-full items-center justify-center text-center text-3xl font-bold xl:hidden">
          We&apos;re sorry, this pitch does not work on mobile.
        </div> */}
    </div>
  );
}
