"use client";

import SlideShell from "@/components/pitch/slide-shell";
import { use, useEffect, useRef, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Livingroom from "@/public/images/rooms/livingroom_chat.jpg";
import Bathroom from "@/public/images/rooms/bathroom_chat.jpg";

import { ScrollArea } from "@/components/ui/scroll-area";
import { PauseIcon, PlayIcon } from "lucide-react";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";

const ANIMATION_DELAY = 1250;

export function SlideGenerativeUI() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const t = useTranslations("generative_ui");

  const ANIMATION_COMPONENTS = useMemo(
    () => [
      {
        id: 1,
        component: (
          <div className="animation_reveal mr-auto w-fit max-w-[55%] rounded-md border bg-secondary px-3 py-2 text-left text-secondary-foreground">
            {t("keyframes.keyframe_1")}
          </div>
        ),
      },
      {
        id: 2,
        component: (
          <div className="animation_reveal ml-auto w-fit max-w-[55%] rounded-md border bg-gray-200 px-3 py-2 text-left text-primary-foreground">
            {t("keyframes.keyframe_2")}
          </div>
        ),
      },
      {
        id: 3,
        component: (
          <div className="animation_reveal mr-auto w-fit max-w-[55%] rounded-md border bg-secondary px-3 py-2 text-left text-secondary-foreground">
            {t("keyframes.keyframe_3")}
          </div>
        ),
      },
      {
        id: 4,
        component: (
          <div className="animation_reveal w-full text-center font-mono text-sm text-muted-foreground">
            {t("keyframes.keyframe_4")}
          </div>
        ),
      },
      {
        id: 5,
        component: (
          <div className="animation_reveal flex w-1/2 max-w-[45%] flex-col gap-2 rounded-lg border border-border bg-secondary p-4">
            <div>{t("keyframes.keyframe_5")}</div>
            <div className="relative">
              <Image
                src={Livingroom}
                alt="Wohnzimmer"
                className="w-3/4 rounded-lg"
              />
            </div>
          </div>
        ),
      },
      {
        id: 6,
        component: (
          <div className="animation_reveal ml-auto w-fit max-w-[75%] rounded-md border bg-primary px-3 py-2 text-left text-primary-foreground">
            {t("keyframes.keyframe_6")}
          </div>
        ),
      },
      {
        id: 7,
        component: (
          <div className="animation_reveal mr-auto w-fit max-w-[55%] rounded-md border bg-secondary px-3 py-2 text-left text-secondary-foreground">
            {t("keyframes.keyframe_7")}
          </div>
        ),
      },
      {
        id: 8,
        component: (
          <div className="animation_reveal w-full text-center font-mono text-sm text-muted-foreground">
            {t("keyframes.keyframe_8")}
          </div>
        ),
      },
      {
        id: 9,
        component: (
          <div className="animation_reveal flex w-1/2 flex-col gap-2 rounded-lg border border-border bg-secondary p-4">
            <div>{t("keyframes.keyframe_9")}</div>
            <div className="relative">
              <Image
                src={Bathroom}
                alt="Wohnzimmer"
                className="w-3/4 rounded-lg"
              />
            </div>
          </div>
        ),
      },
    ],
    [t],
  );

  const [renderedFrames, setRenderedFrames] = useState<AnimationComponent[]>([
    ANIMATION_COMPONENTS[0],
  ]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(scrollAreaRef);

  useEffect(() => {
    if (!isInView) return setIsPlaying(false);
    setRenderedFrames([ANIMATION_COMPONENTS[0]]);
    setIsPlaying(true);
  }, [isInView, ANIMATION_COMPONENTS]);

  useEffect(() => {
    let animationTimer: NodeJS.Timeout;

    if (isPlaying) {
      animationTimer = setTimeout(
        () => {
          setRenderedFrames((prevFrames: any[]) => {
            if (prevFrames.length >= ANIMATION_COMPONENTS.length) return [];
            const nextFrameIndex =
              prevFrames.length % ANIMATION_COMPONENTS.length;
            const nextFrame = ANIMATION_COMPONENTS.find(
              (component) => component.id === nextFrameIndex + 1,
            );

            return [...prevFrames, nextFrame!];
          });
        },
        renderedFrames.length < ANIMATION_COMPONENTS.length
          ? ANIMATION_DELAY
          : 2000,
      );
    }

    // if (isPlaying ) {
    //   bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    // }
    return () => clearTimeout(animationTimer);
  }, [isPlaying, renderedFrames, ANIMATION_COMPONENTS]);

  return (
    <SlideShell
      title={"Generatives UI & Chat Interaktionen"}
      className="xl:grid-cols-1"
    >
      <Card className="h-full overflow-hidden bg-background">
        <ScrollArea className="m-1 h-full md:px-10">
          <div className="flex h-full items-center justify-center">
            <div
              className="mx-auto flex w-full flex-col gap-4 overflow-auto p-6"
              ref={scrollAreaRef}
            >
              {isInView &&
                renderedFrames.map((frame) => (
                  <div key={frame.id} className="w-auto">
                    {frame.component}
                  </div>
                ))}
            </div>
          </div>
          <div ref={bottomRef} />
        </ScrollArea>
        <div className="absolute bottom-0 p-1">
          {isPlaying ? (
            <Button onClick={() => setIsPlaying(false)} variant={"outline"}>
              <PauseIcon className="h-5 w-5" />
            </Button>
          ) : (
            <Button onClick={() => setIsPlaying(true)} variant={"outline"}>
              <PlayIcon className="h-5 w-5" />
            </Button>
          )}
        </div>
      </Card>
    </SlideShell>
  );
}
