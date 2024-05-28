"use client";

import {
  AnimatePresence,
  cubicBezier,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef, forwardRef } from "react";
import SlideShell from "@/components/pitch/slide-shell";
import { cn } from "@/lib/utils";
import { AnimatedBeamStack } from "@/components/animated-beams-stack";
import OpenAILogo from "@/public/images/logos/openai.webp";
import HFLogo from "@/public/images/logos/hf.png";
import QdrantLogo from "@/public/images/logos/qdrant.png";
import Image from "next/image";

const cardImage = [
  {
    id: 1,
    title: "OpenAI",
    logo: <Image src={OpenAILogo} alt="OpenAI" className="h-14 w-14" />,
  },
  {
    id: 2,
    title: "Qdrant",
    logo: <Image src={QdrantLogo} alt="Qdrant" className="h-14 w-14" />,
  },
  {
    id: 3,
    title: "Hugging Face",
    logo: <Image src={HFLogo} alt="Huggingface" className="h-14 w-14" />,
  },
  {
    id: 4,
    title: "Hugging Face",
    logo: <Image src={HFLogo} alt="Huggingface" className="h-14 w-14" />,
  },
  {
    id: 5,
    title: "OpenAI",
    logo: <Image src={OpenAILogo} alt="OpenAI" className="h-14 w-14" />,
  },
  {
    id: 6,
    title: "Qdrant",
    logo: <Image src={QdrantLogo} alt="Qdrant" className="h-14 w-14" />,
  },
  {
    id: 7,
    title: "Qdrant",
    logo: <Image src={QdrantLogo} alt="OpenAI" className="h-14 w-14" />,
  },
  {
    id: 8,
    title: "Huggin Face",
    logo: <Image src={HFLogo} alt="Huggingface" className="h-14 w-14" />,
  },
  {
    id: 9,
    title: "OpenAI",
    logo: <Image src={OpenAILogo} alt="OpenAI" className="h-14 w-14" />,
  },
  {
    id: 10,
    title: "OpenAI",
    logo: <Image src={OpenAILogo} alt="OpenAI" className="h-14 w-14" />,
  },
  {
    id: 11,
    title: "Qdrant",
    logo: <Image src={QdrantLogo} alt="Qdrant" className="h-14 w-14" />,
  },
  {
    id: 12,
    title: "Hugging Face",
    logo: <Image src={HFLogo} alt="Huggingface" className="h-14 w-14" />,
  },
  {
    id: 13,
    title: "Hugging Face",
    logo: <Image src={HFLogo} alt="Huggingface" className="h-14 w-14" />,
  },
  {
    id: 14,
    title: "Qdrant",
    logo: <Image src={QdrantLogo} alt="Qdrant" className="h-14 w-14" />,
  },
  {
    id: 15,
    title: "Hugging Face",
    logo: <Image src={HFLogo} alt="Huggingface" className="h-14 w-14" />,
  },
  {
    id: 16,
    title: "Hugging Face",
    logo: <Image src={HFLogo} alt="Huggingface" className="h-14 w-14" />,
  },
  {
    id: 17,
    title: "OpenAI",
    logo: <Image src={OpenAILogo} alt="OpenAI" className="h-14 w-14" />,
  },
  {
    id: 18,
    title: "Qdrant",
    logo: <Image src={QdrantLogo} alt="Qdrant" className="h-14 w-14" />,
  },
];

export function SlideSolutionStackElevatorPitch() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { amount: 0.25 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <SlideShell title="Solution Stack" className="">
      <div className="col-span-3 flex overflow-hidden h-full transform-gpu flex-col items-center justify-between gap-5 rounded-lg border border-border bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] xl:flex-row">
        <div className="flex w-full flex-col items-start justify-between gap-y-10 p-10 xl:h-full xl:w-1/2">
          <h2 className="text-4xl font-semibold">Interiorly AI</h2>
          <div className="flex-1 w-full">
            <AnimatedBeamStack />
          </div>
          <a
            href="#"
            className="text-base font-normal text-muted-foreground underline-offset-4 transition-all hover:underline"
          >
            Interiorly AI Engine
          </a>
        </div>
        <div className="relative w-full overflow-hidden xl:w-1/2 h-full">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/3  bg-gradient-to-b from-[#121212] dark:from-black"></div>
          <div
            ref={containerRef}
            className="relative -right-[75px] -top-20  grid max-h-full grid-cols-3 gap-5 [transform:rotate(-15deg)translateZ(10px);]"
          >
            <AnimatePresence>
              {cardImage.map((card, index) => (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.96, y: 25 },
                    visible: { opacity: 1, scale: 1, y: 0 },
                  }}
                  initial="visible"
                  animate={controls}
                  exit={{
                    opacity: 0,
                    scale: 0,
                    transition: {
                      duration: 0.1,
                      ease: cubicBezier(0.22, 1, 0.36, 1),
                    },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: cubicBezier(0.22, 1, 0.36, 1),
                    delay: index * 0.04,
                  }}
                  key={card.id}
                  className="flex flex-col items-center gap-y-2 rounded-md border bg-secondary p-5"
                >
                  {card.logo}
                  <p className="text-sm dark:text-neutral-200/50">
                    {card.title}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
