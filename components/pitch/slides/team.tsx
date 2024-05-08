import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Julian from "@/public/images/team/Julian.jpg";
import Anthony from "@/public/images/team/Julian.jpg";
import Team from "@/public/images/img2img_after.png";

export function SlideTeam() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Who we are</span>
        <span className="text-[#878787]">
          <Link href="/">interiorly.ai</Link>
        </span>
      </div>
      <div className="container min-h-screen flex items-center justify-center ">
        <div className="grid grid-cols-2 gap-8 w-full h-full">
          <div className="grid grid-row-2 gap-8">
            <Card className="flex flex-col p-5 h-full w-full space-y-3">
              <div className="flex items-center">
                <Image
                  src={Julian}
                  alt="Julian Schmidt"
                  width={128}
                  height={128}
                  quality={100}
                  className="rounded-full w-24 h-24 object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl">Julian Schmidt</h2>
                <span className="text-muted-foreground text-lg">
                  Fullstack Development & AI
                </span>
              </div>
              <div>
                <p className="text-secondary-foreground/50">
                  Full Stack Developer. Founded Interiorly (formerly
                  &quot;RoomVision&quot;) in 2021. Passionate about AI and its
                  applications in the real world.
                </p>
              </div>
            </Card>
            <Card className="flex flex-col p-5 w-full space-y-3">
              <div className="flex items-center">
                <Image
                  src={Anthony}
                  alt="Anthony Owah"
                  width={128}
                  height={128}
                  quality={100}
                  className="rounded-full w-24 h-24 object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl">Anthony Owah</h2>
                <span className="text-muted-foreground text-lg">
                  Backend Development & PM
                </span>
              </div>
              <div>
                <p className="text-secondary-foreground/50">
                  Project Manager and (backend) Developer. Effectively
                  coordinate complex projects while developing technical
                  solutions to meet requirements and implement efficient
                  systems.
                </p>
              </div>
            </Card>
          </div>
          <Image
            src={Team}
            alt="Team"
            className="object-contain rounded-lg w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
