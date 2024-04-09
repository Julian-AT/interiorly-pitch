import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { IconBankNotes, IconBolt, IconPuzzlePiece } from "@/components/icons";
import A1111 from "@/public/images/automatic1111.png";

export function SlideTechStack2() {
  return (
    <div className="min-h-screen relative w-screen flex">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Tech Stack (AI)</span>
        <span className="text-muted-foreground">
          <Link href="/">interiorly.ai</Link>
        </span>
      </div>
      <div className="container min-h-screen flex items-center justify-center">
        <Card className="flex flex-col items-center justify-center space-y-5 p-5">
          <Image
            src={A1111}
            alt="NextJS"
            width={1920}
            height={1080}
            className="w-3/4 h-1/2 border rounded-xl"
          />
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl">Automatic1111 Web-UI</h2>
            <span className="text-muted-foreground text-base">
              Stable Diffusion Fine Tuning/Usage Platform
            </span>
          </div>
          <p className="text-[#878787] text-sm text-center">
            user-friendly and customizable platform to create stunning images
            based on your written prompts.
          </p>
        </Card>
      </div>
    </div>
  );
}
