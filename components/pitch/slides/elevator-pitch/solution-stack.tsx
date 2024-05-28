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
import OpenAILogo from "@/public/images/logos/openai.webp";
import HFLogo from "@/public/images/logos/hf.png";
import QdrantLogo from "@/public/images/logos/qdrant.png";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  IconGenerativeUI,
  IconLoraWeights,
  IconVectorEmbeddings,
} from "@/components/icons";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";
import { AnimatedBeamStack } from "@/components/ui/animated-beams-stack";

interface CardImage {
  title: string;
  logo: React.ReactNode;
}

const cardImages: CardImage[] = [
  {
    title: "OpenAI",
    logo: <Image src={OpenAILogo} alt="OpenAI" className="h-14 w-14" />,
  },
  {
    title: "Qdrant",
    logo: <Image src={QdrantLogo} alt="Qdrant" className="h-14 w-14" />,
  },
  {
    title: "Hugging Face",
    logo: <Image src={HFLogo} alt="Huggingface" className="h-14 w-14" />,
  },
];

const offset = (arr: CardImage[], offset: number): CardImage[] => {
  const len = arr.length;
  const normalizedOffset = ((offset % len) + len) % len;
  return [...arr.slice(normalizedOffset), ...arr.slice(0, normalizedOffset)];
};

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
    <SlideShell title="Interiorly Engine">
      <div className="col-span-3 flex overflow-hidden h-full transform-gpu flex-col items-center justify-between gap-5 rounded-lg border border-border bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] xl:flex-row">
        <div className="flex w-full flex-col items-start justify-between gap-y-10 p-10 xl:h-full xl:w-1/2">
          <div className="group rounded-full border border-border text-base transition-all ease-in bg-secondary">
            <AnimatedGradientText className="bg-secondary">
              <Logo className="w-5 h-5" fill="#e6e6e6" />
              <hr className="mx-2 h-4 w-[1px] shrink-0 bg-muted-foreground" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Interiorly - Engine
              </span>
              {/* <Cpu className="ml-2 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
            </AnimatedGradientText>
          </div>
          <div className="flex-1 w-full">
            <AnimatedBeamStack />
          </div>
          <div className="h-auto w-full grid grid-cols-3 gap-4">
            <Card className="relative flex flex-col py-3 gap-3 items-center justify-center bg-secondary h-auto">
              <IconGenerativeUI className="h-8 w-8" />
              <h3 className="text-lg text-center font-semibold text-neutral-400">
                Generative UI <br /> (Fn Calling)
              </h3>
            </Card>
            <Card className="relative flex flex-col py-3 gap-3 items-center justify-center bg-secondary h-auto">
              <IconVectorEmbeddings className="h-8 w-8" />
              <h3 className="text-lg text-center font-semibold text-neutral-400">
                Vector <br /> Embeddings
              </h3>
            </Card>
            <Card className="relative flex flex-col py-3 gap-3 items-center justify-center bg-secondary h-auto">
              <IconLoraWeights className="h-8 w-8" />
              <h3 className="text-lg text-center font-semibold text-neutral-400">
                SDXL / 1.5 <br /> Lora Weights
              </h3>
            </Card>
          </div>
        </div>
        <div className="relative w-full overflow-hidden xl:w-1/2 h-full">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/3  bg-gradient-to-b from-[#121212] dark:from-black" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/3  bg-gradient-to-t from-[#121212] dark:from-black" />

          <div
            ref={containerRef}
            className="relative -right-[75px] -top-20  grid max-h-full grid-cols-3 gap-5 [transform:rotate(-15deg)translateZ(10px);]"
          >
            <AnimatePresence>
              {Array.from({ length: 6 }).map((_, i) =>
                offset(cardImages, i).map((card, index) => (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.96, y: 25 },
                      visible: { opacity: 1, scale: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={controls}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      transition: {
                        duration: 0,
                        ease: cubicBezier(0.22, 1, 0.36, 1),
                        delay: 0,
                      },
                    }}
                    transition={{
                      duration: 0.1,
                      ease: cubicBezier(0.22, 1, 0.36, 1),
                      delay: (i * cardImages.length + index) * 0.05,
                    }}
                    key={i * cardImages.length + index}
                    className="flex flex-col items-center gap-y-2 rounded-md border bg-secondary p-5"
                  >
                    {card.logo}
                    <p className="text-sm dark:text-neutral-200/50">
                      {card.title}
                    </p>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
