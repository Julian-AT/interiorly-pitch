"use client";

import { useTranslations } from "next-intl";
import SlideShell from "@/components/pitch/slide-shell";
import { motion, useAnimation, useInView } from "framer-motion";
import InteriorlyLogo from "@/public/images/logo.svg";
import {
  Globe,
  DollarSign,
  CloudLightning,
  ChevronRight,
  Clock,
  Rocket,
  Sparkles,
  BarChart,
} from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { cn, shuffleArray } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const tiles = [
  {
    icon: <Globe className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <DollarSign className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <Clock className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <Rocket className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <Sparkles className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
];

const Card = (card: { icon: JSX.Element; bg: JSX.Element }) => {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4",
        "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      {card.icon}
      {card.bg}
    </motion.div>
  );
};

export function SlideSolution() {
  const [randomTiles1, setRandomTiles1] = useState<typeof tiles>([]);
  const [randomTiles2, setRandomTiles2] = useState<typeof tiles>([]);
  const [randomTiles3, setRandomTiles3] = useState<typeof tiles>([]);
  const [randomTiles4, setRandomTiles4] = useState<typeof tiles>([]);
  const [randomTiles5, setRandomTiles5] = useState<typeof tiles>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensures this runs client-side
      setRandomTiles1(shuffleArray([...tiles]));
      setRandomTiles2(shuffleArray([...tiles]));
      setRandomTiles3(shuffleArray([...tiles]));
      setRandomTiles4(shuffleArray([...tiles]));
      setRandomTiles5(shuffleArray([...tiles]));
    }
  }, []);

  return (
    <SlideShell title="Lösungsansatz" className="grid-cols-1">
      <section id="cta" className="col-span-3 h-full w-full">
        <div className="py-14">
          <div className="container flex w-full flex-col items-center justify-center">
            <div className="relative flex w-full max-w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] px-12">
              <Marquee
                reverse
                className="-delay-[200ms] [--duration:20s]"
                repeat={4}
              >
                {randomTiles1.map((review, idx) => (
                  <Card key={idx} {...review} />
                ))}
              </Marquee>
              <Marquee reverse className="[--duration:30s]">
                {randomTiles2.map((review, idx) => (
                  <Card key={idx} {...review} />
                ))}
              </Marquee>
              <Marquee
                reverse
                className="-delay-[200ms] [--duration:20s]"
                repeat={4}
              >
                {randomTiles3.map((review, idx) => (
                  <Card key={idx} {...review} />
                ))}
              </Marquee>
              <Marquee reverse className="[--duration:30s]}">
                {randomTiles4.map((review, idx) => (
                  <Card key={idx} {...review} />
                ))}
              </Marquee>
              <Marquee reverse className="[--duration:30s]">
                {randomTiles5.map((review, idx) => (
                  <Card key={idx} {...review} />
                ))}
              </Marquee>
              <Marquee reverse className="[--duration:30s]">
                {randomTiles1.map((review, idx) => (
                  <Card key={idx} {...review} />
                ))}
              </Marquee>
              <div className="absolute z-10">
                <div className="mx-auto size-24 rounded-[2rem] border bg-background/50 p-3 shadow-2xl backdrop-blur-md lg:size-32">
                  <Image
                    src={InteriorlyLogo}
                    alt="Interiorly"
                    width={128}
                    height={128}
                  />
                </div>
                <div className="z-10 mt-4 flex flex-col items-center text-center text-primary">
                  <h1 className="text-4xl font-bold lg:text-5xl">
                    Erschwinglich, Effizient, Funktional
                  </h1>
                  <p className="mt-2 text-muted-foreground">
                    Atemberaubende Innenraumkonzepte mittels KI in Sekunden
                  </p>
                  <a
                    href="/"
                    className={cn(
                      buttonVariants({
                        size: "lg",
                        variant: "outline",
                      }),
                      "group mt-4 rounded-[2rem] px-6",
                    )}
                  >
                    Worauf warten Sie noch?
                    <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
                  </a>
                </div>
                <div className="absolute inset-0 -z-10 rounded-full bg-background opacity-40 blur-xl dark:bg-black" />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-b from-transparent to-background to-80% dark:to-black" />
            </div>
          </div>
        </div>
      </section>
    </SlideShell>
  );
}
