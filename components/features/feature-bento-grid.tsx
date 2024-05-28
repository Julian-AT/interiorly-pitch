import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import {
  Calendar,
  Folder,
  Images,
  Search,
  Text,
  TextSearch,
  Users,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Bathroom from "@/public/images/rooms/bathroom_chat.jpg";
import Livingroom from "@/public/images/rooms/livingroom_chat.jpg";
import Livingroom2 from "@/public/images/rooms/livingroom.png";
import Image from "next/image";
import { AnimatedBeamMultiple } from "../ui/animated-beam-multiple";
import Ripple from "../ui/ripple";
import { WorkspaceOrbitingCircles } from "../ui/workspace-orbiting-circles";
import RetroGrid from "../ui/retro-grid";

const images = [
  {
    name: "badezimmer.png",
    image: Bathroom,
  },
  {
    name: "wohnzimmer.png",
    image: Livingroom,
  },
  {
    name: "wohnzimmer2.png",
    image: Livingroom2,
  },
];

const features = [
  {
    Icon: Images,
    name: "Bildgenerierung",
    description: "Textbasierte Bildgeneration durch SDXL",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee pauseOnHover className="absolute top-10 [--duration:20s] ">
        {images.map((item, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-40 cursor-pointer overflow-hidden rounded-xl border p-4 border-b-0",
              "border-border bg-secondary/75 hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {item.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">
              <Image src={item.image} alt={item.name} />
            </blockquote>
          </figure>
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-full  bg-gradient-to-t from-15% from-[#121212]" />
      </Marquee>
    ),
  },
  {
    Icon: Folder,
    name: "Gemeinsamer Workspace",
    description:
      "Gemeinsamer Workspace als zentraler Ort für die Zusammenarbeit.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute w-full h-full overflow-hidden flex items-center justify-center">
        <div className="absolute -top-32">
          <WorkspaceOrbitingCircles />
        </div>
        <RetroGrid />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-full  bg-gradient-to-t from-5% from-[#121212]" />
      </div>
    ),
  },
  {
    Icon: Users,
    name: "Echtzeit-Kollaboration",
    description: "Gemeinsames bearbeiten von Dateien in Echtzeit.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2 relative",
    background: (
      <div className="absolute w-full h-full overflow-hidden flex items-center justify-center">
        <AnimatedBeamMultiple />
        <Ripple />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-full  bg-gradient-to-t from-20% from-[#121212]" />
      </div>
    ),
  },
  {
    Icon: TextSearch,
    name: "Semantische Suche",
    description: "Semantische Suche über alle Dateien und Inhalte.",
    className: "col-span-3 lg:col-span-1",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute select-none w-full h-full overflow-hidden flex items-center justify-center">
        <div className="w-[70%] h-3/4 rounded-xl bg-background border my-10">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <input
              placeholder="Suche nach Datein oder Inhalten..."
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="mx-1 flex flex-col">
            <span className="ml-1.5 mt-1.5 my-1.5 text-muted-foreground text-xs font-semibold rounded-lg">
              Vorschläge
            </span>
            <span className="hover:bg-secondary px-2 py-1 text-secondary-foreground text-base font-semibold rounded-lg">
              Interiorly Pitch (Link)
            </span>
            <span className="hover:bg-secondary px-2 py-1 text-secondary-foreground text-base font-semibold rounded-lg">
              Schlafzimmer Konzept (File)
            </span>
            <span className="hover:bg-secondary px-2 py-1 text-secondary-foreground text-base font-semibold rounded-lg">
              Wohnzimmer.png (Bild)
            </span>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-full  bg-gradient-to-t from-20% from-[#121212]" />
      </div>
    ),
  },
];

export function FeatureBentoGrid() {
  return (
    <BentoGrid className="">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
