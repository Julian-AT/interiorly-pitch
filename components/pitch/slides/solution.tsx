import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { IconBankNotes, IconSparkles, IconUserGroup } from "@/components/icons";
import LaptopMockup from "@/public/images/laptop-mockup.png";
import SlideShell from "../slide-shell";

export function SlideSolution() {
  return (
    <SlideShell title="Our Solution">
      <div className="grid grid-rows-2 h-full gap-8">
        <Card className="flex flex-col items-center justify-center space-y-5 p-5">
          <IconSparkles className="w-12 h-12" />
          <h2 className="text-3xl">Artificial Intelligence</h2>
          <p className="text-[#878787] text-center">
            Intelligent design concepts provide a <br />
            convenient and efficient way to obtain inspiring ideas for room
            design
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center space-y-5 p-5">
          <IconUserGroup className="w-12 h-12" />
          <h2 className="text-3xl">Realtime Collaboration</h2>
          <p className="text-[#878787] text-center">
            Modern technologies enable efficient and collaborative real-time
            collaboration between designers, clients, and stakeholder
          </p>
        </Card>
      </div>

      <div className="grid grid-rows-2 h-full gap-8">
        <div className="row-span-2">
          <h2 className="text-5xl text-center leading-[55px]">
            Interior design suggestions tailored to your needs with the simple
            click of a button.
          </h2>
        </div>

        <Card className="flex flex-col items-center justify-center space-y-5 p-5 row-span-2">
          <IconBankNotes className="w-12 h-12" />
          <h2 className="text-3xl">Affordable</h2>
          <p className="text-[#878787] text-center">
            Realizing design dreams without a high budget opens the door to a
            world of creative possibilities and innovations
          </p>
        </Card>
      </div>

      <Card className="ml-auto w-full h-full px-5">
        <Image
          src={LaptopMockup}
          alt="Laptop Mockup"
          width={650}
          height={875}
          quality={100}
          className="object-contain w-full h-full rounded-lg"
        />
      </Card>
    </SlideShell>
  );
}
