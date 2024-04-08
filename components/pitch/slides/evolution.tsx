import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  IconBeaker,
  IconChat,
  IconCollaboration,
  IconDoubleChevronLeft,
  IconDoubleChevronRight,
  IconImage,
} from "@/components/icons";
import Image from "next/image";
import Evolution1 from "@/public/images/evolution_1.png";
import Evolution2 from "@/public/images/evolution_2.png";
import Evolution3 from "@/public/images/evolution_3.png";

export function SlideEvolution() {
  return (
    <div className="min-h-screen relative w-screen flex">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>AI Model Evolution</span>
        <span className="text-muted-foreground">
          <Link href="/">interiorly.ai</Link>
        </span>
      </div>
      <div className="container min-h-screen flex flex-col space-y-10 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <span className="text-[#878787] uppercase font-semibold text-2xl">
            The evolution of
          </span>
          <h1 className="text-4xl font-bold">
            &quot;A dark wooden bedroom&quot;
          </h1>
        </div>
        <div className="flex items-center justify-center space-x-3 gap-8 md:px-0 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0 relative">
          <Card className="flex flex-col items-center justify-center space-y-5 p-5">
            <h1 className="text-2xl font-bold">The First Steps (Failed)</h1>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold">1800 Training Steps</h2>{" "}
              <span className="text-[#878787]">32h computation time</span>
            </div>{" "}
            <Image src={Evolution1} alt="Evolution 1" />
          </Card>
          <IconDoubleChevronLeft className="w-16 h-16" />
          <Card className="flex flex-col items-center justify-center space-y-5 p-5">
            <h1 className="text-2xl font-bold">Experimental Verson</h1>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold">1200 Training Steps</h2>{" "}
              <span className="text-[#878787]">17h computation time</span>
            </div>
            <Image src={Evolution2} alt="Evolution 1" />
          </Card>
          <IconDoubleChevronLeft className="w-16 h-16" />
          <Card className="flex flex-col items-center justify-center space-y-5 p-5">
            <h1 className="text-2xl font-bold">Current Version</h1>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold">1200 Training Steps</h2>{" "}
              <span className="text-[#878787]">16h computation time</span>
            </div>{" "}
            <Image src={Evolution3} alt="Evolution 1" />
          </Card>
        </div>
      </div>
    </div>
  );
}
