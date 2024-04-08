import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { IconBankNotes, IconBolt, IconPuzzlePiece } from "@/components/icons";
import DesignSystem from "@/public/images/shadcn.avif";
import NextLogo from "@/public/images/logos/next.svg";
import DrizzleLogo from "@/public/images/logos/drizzle.png";
import PostgresLogo from "@/public/images/logos/postgres.png";
import SupabaseLogo from "@/public/images/logos/supabase.png";

export function SlideTechStack() {
  return (
    <div className="min-h-screen relative w-screen flex">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Tech Stack</span>
        <span className="text-muted-foreground">
          <Link href="/">interiorly.ai</Link>
        </span>
      </div>
      <div className="container min-h-screen flex items-center justify-center">
        <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0 relative">
          <div className="grid grid-rows-2 gap-8">
            <Card className="flex flex-col items-center justify-center space-y-5 p-5">
              <Image src={NextLogo} alt="NextJS" width={76} height={76} />
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl">NextJS</h2>
                <span className="text-muted-foreground text-base">
                  React Based Framework
                </span>
              </div>
              <p className="text-[#878787] text-sm text-center">
                Accelerates web app development with server-side rendering and
                efficient routing, optimizing user experience.
              </p>
            </Card>
            <Card className="flex flex-col items-center justify-center space-y-5 p-5">
              <Image
                src={DrizzleLogo}
                alt="Drizzle ORM"
                width={76}
                height={76}
              />{" "}
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl">Drizzle ORM</h2>
                <span className="text-muted-foreground text-base">
                  Object Relational Mapping
                </span>
              </div>
              <p className="text-[#878787] text-sm text-center">
                Streamlines database interactions, facilitating seamless data
                manipulation and retrieval for enhanced productivity.
              </p>
            </Card>
          </div>
          <div className="grid grid-rows-2 gap-8">
            <Card className="flex flex-col items-center justify-center space-y-5 p-5">
              <Image
                src={PostgresLogo}
                alt="PostgreSQL"
                width={76}
                height={76}
              />{" "}
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl">PostgreSQL</h2>
                <span className="text-muted-foreground text-base">
                  Open-Source Relational Database
                </span>
              </div>
              <p className="text-[#878787] text-sm text-center">
                Highly stable database system supporting complex data
                structures, ensuring reliable data storage and retrieval.
              </p>
            </Card>
            <Card className="flex flex-col items-center justify-center space-y-5 p-5">
              <Image src={SupabaseLogo} alt="Supabase" width={76} height={76} />{" "}
              <div>
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-2xl">Supabase</h2>
                  <span className="text-muted-foreground text-base">
                    Open-Source Firebase Alternative
                  </span>
                </div>
              </div>
              <p className="text-[#878787] text-sm text-center">
                Scalable backend infrastructure with built-in authentication,
                empowering rapid development and secure data management.
              </p>
            </Card>
          </div>
          <div className="grid grid-rows-2 gap-8">
            <Card className="flex flex-col items-center justify-center space-y-5 p-5 row-span-2 bg-[#0C0C0C]">
              <div>
                <h2 className="text-2xl">Design System</h2>
                <p className="text-[#878787] text-center">@shadcn/ui</p>
              </div>
              <Image src={DesignSystem} alt="Design System" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
