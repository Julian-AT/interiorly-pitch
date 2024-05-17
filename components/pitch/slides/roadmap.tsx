import SlideShell from "@/components/pitch/slide-shell";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapIcon } from "lucide-react";

export function SlideRoadmap() {
  return (
    <SlideShell title={"Roadmap"} className="xl:grid-cols-1">
      <div className="w-full h-full flex flex-col gap-8">
        <div className="flex gap-3 items-center justify-center">
          <MapIcon className="w-8 h-8" />
          <span className="text-4xl text-center font-bold">Roadmap</span>
        </div>
        <iframe
          src="https://interiorly-ai.productlane.com/roadmap"
          className="w-full h-full border border-border rounded-lg  overflow-hidden"
        />
      </div>
    </SlideShell>
  );
}
