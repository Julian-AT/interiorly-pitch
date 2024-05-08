import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { IconBankNotes, IconBolt, IconPuzzlePiece } from "@/components/icons";
import NextJS from "@/public/images/logos/nextjs.png";
import Trunk from "@/public/images/logos/trunk.png";
import Edgestore from "@/public/images/logos/edgestore.png";
import Clerk from "@/public/images/logos/clerk.png";
import Convex from "@/public/images/logos/convex.png";

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
              <Image src={Clerk} alt="Clerk" width={76} height={76} />
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl">Clerk</h2>
                <span className="text-muted-foreground text-base">
                  User Management Platform
                </span>
              </div>
              <p className="text-[#878787] text-sm text-center">
                embeddable UIs, flexible APIs, and admin dashboards to
                authenticate and manage users.
              </p>
            </Card>
            <Card className="flex flex-col items-center justify-center space-y-5 p-5">
              <Image src={Trunk} alt="Trunk" width={76} height={76} />{" "}
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl">Trunk</h2>
                <span className="text-muted-foreground text-base">
                  Automated code quality
                </span>
              </div>
              <p className="text-[#878787] text-sm text-center">
                Automatically run a set of 100+ idiomatic static analyzers,
                linters, formatters, and security tools.
              </p>
            </Card>
          </div>
          <div className="grid grid-rows-2 gap-8">
            <Card className="flex flex-col items-center justify-center space-y-5 p-5">
              <Image src={Convex} alt="Convex" width={76} height={76} />{" "}
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl">Convex</h2>
                <span className="text-muted-foreground text-base">
                  Open-Source Backend
                </span>
              </div>
              <p className="text-[#878787] text-sm text-center">
                Fetch data and perform business logic with strong consistency by
                writing pure TypeScript.
              </p>
            </Card>
            <Card className="flex flex-col items-center justify-center space-y-5 p-5">
              <Image src={Edgestore} alt="Edgestore" width={76} height={76} />{" "}
              <div>
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-2xl">Edgestore</h2>
                  <span className="text-muted-foreground text-base">
                    File Storage & CDN
                  </span>
                </div>
              </div>
              <p className="text-[#878787] text-sm text-center">
                Storage, CDN and a super easy to use type-safe library.
              </p>
            </Card>
          </div>
          <div className="grid grid-rows-2 gap-8">
            <Card className="flex flex-col items-center justify-center space-y-5 p-5 row-span-2 bg-[#0C0C0C]">
              <div>
                <h2 className="text-3xl text-center">NextJS</h2>
                <p className="text-[#878787] text-xl text-center">
                  Fullstack Framework
                </p>
              </div>
              <Image
                src={NextJS}
                alt="NextJS"
                className="w-2/3 aspect-square"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
