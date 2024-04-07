import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { IconBankNotes, IconSparkles, IconUserGroup } from "@/components/icons";
import LivingRoom from "@/public/images/livingroom.jpg";

export function SlideSolution() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Our solution</span>
        <span className="text-[#878787]">
          <Link href="/">interiorly.ai</Link>
        </span>
      </div>
      <div className="container min-h-screen flex items-center justify-center">
        <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0 relative">
          <div className="grid grid-rows-2 gap-8">
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

          <div className="grid grid-rows-5 gap-8">
            <div className="row-span-3">
              <h2 className="text-5xl text-center leading-[55px]">
                Interior design suggestions tailored to your needs with the
                simple click of a button.
              </h2>
            </div>

            <Card className="flex flex-col items-center justify-center space-y-5 p-5 row-span-2">
              <IconBankNotes className="w-12 h-12" />
              <h2 className="text-3xl">Affordable</h2>
              <p className="text-[#878787] text-center">
                Realizing design dreams without a high budget opens the door to
                a world of creative possibilities and innovations
              </p>
            </Card>
          </div>

          <div className="ml-auto w-full">
            <Image
              src={LivingRoom}
              alt="Bedroom"
              width={650}
              height={875}
              quality={100}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
