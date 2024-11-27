import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import { Folder, Images, Search, TextSearch, Users } from "lucide-react";
import Bathroom from "@/public/images/rooms/bathroom_chat.jpg";
import Livingroom from "@/public/images/rooms/livingroom_chat.jpg";
import Livingroom2 from "@/public/images/rooms/livingroom.png";
import Image from "next/image";
import { AnimatedBeamMultiple } from "../ui/animated-beam-multiple";
import Ripple from "../ui/ripple";
import { WorkspaceOrbitingCircles } from "../ui/workspace-orbiting-circles";
import RetroGrid from "../ui/retro-grid";
import { useTranslations } from "next-intl";

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

export function FeatureBentoGrid() {
  const t = useTranslations("slide_features.features");

  const features = [
    {
      Icon: Images,
      name: t("feature_1.title"),
      description: t("feature_1.subtitle"),
      href: "/",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1",
      background: (
        <Marquee pauseOnHover className="absolute top-10 [--duration:20s]">
          {images.map((item, idx) => (
            <figure
              key={idx}
              className={cn(
                "relative w-40 cursor-pointer overflow-hidden rounded-xl border border-b-0 p-4",
                "border-border bg-secondary/75 hover:bg-gray-50/[.15]",
                "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium dark:text-white">
                    {item.name}
                  </figcaption>
                </div>
              </div>
              <blockquote className="mt-2 text-xs">
                <Image src={item.image} alt={item.name} />
              </blockquote>
            </figure>
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-full bg-gradient-to-t from-[#121212] from-15%" />
        </Marquee>
      ),
    },
    {
      Icon: Folder,
      name: t("feature_2.title"),
      description: t("feature_2.subtitle"),
      href: "/",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <div className="absolute flex h-full w-full items-center justify-center overflow-hidden">
          <div className="absolute -top-32">
            <WorkspaceOrbitingCircles />
          </div>
          <RetroGrid />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-full bg-gradient-to-t from-[#121212] from-5%" />
        </div>
      ),
    },
    {
      Icon: Users,
      name: t("feature_3.title"),
      description: t("feature_3.subtitle"),
      href: "/",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2 relative",
      background: (
        <div className="absolute flex h-full w-full items-center justify-center overflow-hidden">
          <AnimatedBeamMultiple />
          <Ripple />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-full bg-gradient-to-t from-[#121212] from-20%" />
        </div>
      ),
    },
    {
      Icon: TextSearch,
      name: t("feature_4.title"),
      description: t("feature_4.subtitle"),
      className: "col-span-3 lg:col-span-1",
      href: "/",
      cta: "Learn more",
      background: (
        <div className="absolute flex h-full w-full select-none items-center justify-center overflow-hidden">
          <div className="my-10 h-3/4 w-[70%] rounded-xl border bg-background">
            <div className="flex items-center border-b px-3">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <input
                placeholder="Suche nach Datein oder Inhalten..."
                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="mx-1 flex flex-col">
              <span className="my-1.5 ml-1.5 mt-1.5 rounded-lg text-xs font-semibold text-muted-foreground">
                Vorschläge
              </span>
              <span className="rounded-lg px-2 py-1 text-base font-semibold text-secondary-foreground hover:bg-secondary">
                Interiorly Pitch (Link)
              </span>
              <span className="rounded-lg px-2 py-1 text-base font-semibold text-secondary-foreground hover:bg-secondary">
                Schlafzimmer Konzept (File)
              </span>
              <span className="rounded-lg px-2 py-1 text-base font-semibold text-secondary-foreground hover:bg-secondary">
                Wohnzimmer.png (Bild)
              </span>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-full bg-gradient-to-t from-[#121212] from-20%" />
        </div>
      ),
    },
  ];

  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
