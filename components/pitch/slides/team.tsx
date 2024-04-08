import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Team from "@/public/images/team/team.jpg";
import Eren from "@/public/images/team/eren.jpg";
import Fabian from "@/public/images/team/Fabian.jpg";
import Julian from "@/public/images/team/Julian.jpg";

export function SlideTeam() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Who we are</span>
        <span className="text-[#878787]">
          <Link href="/">interiorly.ai</Link>
        </span>
      </div>
      <div className="grid grid-cols-3 gap-8 container min-h-screen  items-center justify-center">
        <div className="grid md:grid-rows-3 gap-8 px-4  md:px-0 md:pt-0 h-full md:h-auto overflow-auto relative border">
          <Card className="flex flex-col p-5 h-full w-full space-y-3">
            <Image
              src={Julian}
              alt="Julian Schmidt"
              width={64}
              height={64}
              quality={100}
              className="rounded-full w-14 h-14 object-cover"
            />{" "}
            <div>
              <h2 className="text-xl">Julian Schmidt</h2>
              <span className="text-secondary-foreground/50">
                Lead Full-Stack Developer
              </span>
            </div>
          </Card>
          <Card className="flex flex-col p-5 h-full w-full space-y-3">
            <Image
              src={Fabian}
              alt="Fabian Adametz"
              width={64}
              height={64}
              quality={100}
              className="rounded-full w-14 h-14 object-cover"
            />
            <div>
              <h2 className="text-xl">Fabian Adametz</h2>
              <span className="text-secondary-foreground/50">
                AI & Project Management
              </span>
            </div>
          </Card>
          <Card className="flex flex-col p-5 h-full w-full space-y-3">
            <Image
              src={Eren}
              alt="Eren Gülüm"
              width={64}
              height={64}
              quality={100}
              className="rounded-full w-14 h-14 object-cover"
            />
            <div>
              <h2 className="text-xl">Eren Gülüm</h2>
              <span className="text-secondary-foreground/50">
                Junior Full-Stack Developer
              </span>
            </div>
          </Card>
        </div>
        <div className="h-[580px]">
          <Image
            src={Team}
            alt="Julian Schmidt"
            width={1100}
            height={2100}
            quality={100}
            className="w-full h-full rounded-lg border-2 border-border object-cover"
          />
        </div>
        <div className="ml-auto w-full space-y-8 items-center flex">
          <h2 className="text-[64px] font-medium text-center leading-tight">
            “The speed and velocity we have together is unmatched.”
          </h2>
        </div>
      </div>
    </div>
  );
}
