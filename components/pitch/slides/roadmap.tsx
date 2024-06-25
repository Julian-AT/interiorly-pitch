import SlideShell from "@/components/pitch/slide-shell";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapIcon } from "lucide-react";

export function SlideRoadmap() {
  return (
    <SlideShell title={"Roadmap"} className="xl:grid-cols-1">
      <div className="flex h-full w-full flex-col gap-8">
        <div className="flex items-center justify-center gap-3">
          <MapIcon className="h-8 w-8" />
          <span className="text-center text-4xl font-bold">Roadmap</span>
        </div>
        <iframe
          src="https://interiorly-ai.productlane.com/roadmap"
          className="h-full w-full overflow-hidden rounded-lg border border-border"
        />
      </div>
    </SlideShell>
  );
}
