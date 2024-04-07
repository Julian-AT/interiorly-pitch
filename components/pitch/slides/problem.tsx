import Image from "next/image";
import Link from "next/link";
import LivingRoom from "@/public/images/livingroom.jpg";
import { Card } from "@/components/ui/card";
import { IconBankNotes, IconBolt, IconPuzzlePiece } from "@/components/icons";

export function SlideProblem() {
  return (
    <div className="min-h-screen relative w-screen flex">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Current problem</span>
        <span className="text-muted-foreground">
          <Link href="/">interiorly.ai</Link>
        </span>
      </div>
      <div className="container min-h-screen flex items-center justify-center">
        <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0 relative">
          <div className="grid grid-rows-2 gap-8">
            <Card className="flex flex-col items-center justify-center space-y-5 p-5">
              <IconPuzzlePiece className="w-12 h-12" />
              <h2 className="text-2xl">Complexity</h2>
              <p className="text-[#878787] text-sm text-center">
                The process of designing living spaces is exceedingly complex,
                demanding not only a deep understanding of a room&apos;s
                aesthetic and functional requirements but also a significant
                financial commitment.
              </p>
            </Card>
            <div className="px-8">
              <h2 className="text-5xl text-center leading-tight">
                The interior design market lacks customer-friendly tools.
              </h2>
            </div>
          </div>
          <div>
            <Image
              src={LivingRoom}
              alt="Bedroom"
              width={650}
              height={875}
              quality={100}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="grid grid-rows-2 gap-5">
            <Card className="flex flex-col items-center justify-center space-y-5 p-5">
              <IconBolt className="w-12 h-12" />
              <h2 className="text-2xl">Creativity</h2>
              <p className="text-[#878787] text-sm text-center">
                Interior design can often feel overwhelming due to its
                intricacies and the broad spectrum of decisions and options that
                must be considered.
              </p>
            </Card>
            <Card className="flex flex-col items-center justify-center space-y-5 p-5">
              <IconBankNotes className="w-12 h-12" />
              <h2 className="text-2xl">Expenses</h2>
              <p className="text-[#878787] text-sm text-center">
                The considerable costs often discourage many individuals from
                seriously considering the remodeling or redesign of their living
                spaces.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
