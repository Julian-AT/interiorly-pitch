"use client";

import SlideShell from "@/components/pitch/slide-shell";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Livingroom from "@/public/images/rooms/livingroom_chat.jpg";
import Bathroom from "@/public/images/rooms/bathroom_chat.jpg";

import { ScrollArea } from "@/components/ui/scroll-area";
import { PauseIcon, PlayIcon } from "lucide-react";
import { useInView } from "framer-motion";

const ANIMATION_DELAY = 1250;

const _ANIMATION_COMPONENTS: AnimationComponent[] = [
  {
    id: 1,
    component: (
      <div className="max-w-[55%] border bg-secondary text-secondary-foreground mr-auto w-fit rounded-md px-3 py-2 text-left animation_reveal">
        Hello, I&apos;m Interiorly AI! How can I assist you today? 🏡✨
      </div>
    ),
  },
  {
    id: 2,
    component: (
      <div className="max-w-[55%] border bg-gray-200 text-primary-foreground ml-auto w-fit rounded-md px-3 py-2 text-left animation_reveal">
        Can you generate a serene Scandinavian-style living room with natural
        light and minimalist furniture?
      </div>
    ),
  },
  {
    id: 3,
    component: (
      <div className="max-w-[55%] border bg-secondary text-secondary-foreground mr-auto w-fit rounded-md px-3 py-2 text-left animation_reveal">
        Absolutely! 🌿✨ I&apos;ll craft a serene Scandinavian-style living room
        for you, bathed in natural light and adorned with minimalist furniture.
      </div>
    ),
  },
  {
    id: 4,
    component: (
      <div className="w-full text-center font-mono text-sm text-muted-foreground animation_reveal">
        generateImage(&quot;scandinavian living room with...&quot;)
      </div>
    ),
  },
  {
    id: 5,
    component: (
      <div className="max-w-[45%] flex flex-col gap-2 rounded-lg bg-secondary border border-border p-4 animation_reveal w-1/2">
        <div>
          Your serene Scandinavian-style living room 🌿☀️, infused with natural
          light and adorned with minimalist furniture, awaits your approval. 🛋️
        </div>
        <div className="relative">
          <Image
            src={Livingroom}
            alt="Living room"
            className="w-3/4 rounded-lg"
          />
        </div>
      </div>
    ),
  },
  {
    id: 6,
    component: (
      <div className="max-w-[75%] border bg-primary text-primary-foreground ml-auto w-fit rounded-md px-3 py-2 text-left animation_reveal">
        😍 Wow, looks great! How about a lavish bathroom with a freestanding
        tub?
      </div>
    ),
  },
  {
    id: 7,
    component: (
      <div className="max-w-[55%] border bg-secondary text-secondary-foreground mr-auto w-fit rounded-md px-3 py-2 text-left animation_reveal">
        I&apos;m thrilled you&apos;re on board! 🛁💫 Crafting a lavish bathroom
        with a freestanding tub is right up my alley. Let&apos;s make it happen!
      </div>
    ),
  },
  {
    id: 8,
    component: (
      <div className="w-full text-center font-mono text-sm text-muted-foreground animation_reveal">
        generateImage(&quot;Lavish bathroom with a freestanding tub&quot;)
      </div>
    ),
  },
  {
    id: 9,
    component: (
      <div className="flex flex-col gap-2 rounded-lg bg-secondary border border-border p-4 animation_reveal w-1/2">
        <div>
          Your lavish bathroom, complete with a stunning freestanding tub, is
          ready for your admiration. Shall we take a look? 🛁✨💖
        </div>
        <div className="relative">
          <Image
            src={Bathroom}
            alt="Living room"
            className="w-3/4 rounded-lg"
          />
        </div>
      </div>
    ),
  },
];

const ANIMATION_COMPONENTS: AnimationComponent[] = [
  {
    id: 1,
    component: (
      <div className="max-w-[55%] border bg-secondary text-secondary-foreground mr-auto w-fit rounded-md px-3 py-2 text-left animation_reveal">
        Hallo, ich bin Interiorly AI! Wie kann ich dir heute helfen? 🏡✨
      </div>
    ),
  },
  {
    id: 2,
    component: (
      <div className="max-w-[55%] border bg-gray-200 text-primary-foreground ml-auto w-fit rounded-md px-3 py-2 text-left animation_reveal">
        Kannst du ein Wohnzimmer im skandinavischen Stil mit natürlichem Licht
        und minimalistischen Möbeln entwerfen?
      </div>
    ),
  },
  {
    id: 3,
    component: (
      <div className="max-w-[55%] border bg-secondary text-secondary-foreground mr-auto w-fit rounded-md px-3 py-2 text-left animation_reveal">
        Aber sicher! 🌿✨ Ich werde ein ruhiges Wohnzimmer im skandinavischen
        Stil für Sie gestalten, das in natürlichem Licht badet und mit
        minimalistischen Möbeln geschmückt ist.
      </div>
    ),
  },
  {
    id: 4,
    component: (
      <div className="w-full text-center font-mono text-sm text-muted-foreground animation_reveal">
        generateImage(&apos;skandinavisches Wohnzimmer mit..&apos;)
      </div>
    ),
  },
  {
    id: 5,
    component: (
      <div className="max-w-[45%] flex flex-col gap-2 rounded-lg bg-secondary border border-border p-4 animation_reveal w-1/2">
        <div>
          Ihr ruhiges Wohnzimmer im skandinavischen Stil 🌿☀️, durchflutet von
          natürlichem Licht und geschmückt mit minimalistischen Möbeln ist
          fertig. 🛋️
        </div>
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
      <div className="max-w-[75%] border bg-primary text-primary-foreground ml-auto w-fit rounded-md px-3 py-2 text-left animation_reveal">
        😍 Wow, sieht toll aus! Wie wäre es mit einem luxuriösen Badezimmer mit
        freistehender Badewanne?
      </div>
    ),
  },
  {
    id: 7,
    component: (
      <div className="max-w-[55%] border bg-secondary text-secondary-foreground mr-auto w-fit rounded-md px-3 py-2 text-left animation_reveal">
        Ich freue mich, dass es dir gefällt. 🛁💫 Ein luxuriöses Badezimmer mit
        freistehender Badewanne zu gestalten liegt genau in meinem Fachgebiet.
        Lassen Sie uns das umsetzen!
      </div>
    ),
  },
  {
    id: 8,
    component: (
      <div className="w-full text-center font-mono text-sm text-muted-foreground animation_reveal">
        generateImage(&apos;Luxuriöses Badezimmer mit freistehender
        Badewanne&apos;)
      </div>
    ),
  },
  {
    id: 9,
    component: (
      <div className="flex flex-col gap-2 rounded-lg bg-secondary border border-border p-4 animation_reveal w-1/2">
        <div>
          Ihr luxuriöses Badezimmer mit einer atemberaubenden freistehenden
          Badewanne, steht zur Bewunderung bereit. Sollen wir einen Blick darauf
          werfen? 🛁✨💖
        </div>
        <div className="relative">
          <Image src={Bathroom} alt="Wohnzimmer" className="w-3/4 rounded-lg" />
        </div>
      </div>
    ),
  },
];

export function SlideGenerativeUI() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
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
  }, [isInView]);

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
              (component) => component.id === nextFrameIndex + 1
            );
            return [...prevFrames, nextFrame!];
          });
        },
        renderedFrames.length < ANIMATION_COMPONENTS.length
          ? ANIMATION_DELAY
          : 2000
      );
    }

    // if (isPlaying) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    return () => clearTimeout(animationTimer);
  }, [isPlaying, renderedFrames]);

  return (
    <SlideShell title={"ANIMATION (EXPERIMENTAL)"} className="xl:grid-cols-1">
      <Card className="bg-background h-full overflow-hidden">
        <ScrollArea className="px-10 m-1 h-full">
          <div className="flex items-center justify-center h-full">
            <div
              className="mx-auto flex w-full flex-col-reverse gap-4 overflow-auto p-6"
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
              <PauseIcon className="w-5 h-5" />
            </Button>
          ) : (
            <Button onClick={() => setIsPlaying(true)} variant={"outline"}>
              <PlayIcon className="w-5 h-5" />
            </Button>
          )}
        </div>
      </Card>
    </SlideShell>
  );
}
