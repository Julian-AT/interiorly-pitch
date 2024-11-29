"use client";

import SlideShell from "@/components/pitch/slide-shell";
import { useEffect, useRef, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Livingroom from "@/public/images/rooms/livingroom_chat.jpg";
import Bathroom from "@/public/images/rooms/bathroom_chat.jpg";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PauseIcon, PlayIcon } from "lucide-react";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const ANIMATION_DELAY = 1250;
const RESET_DELAY = 2000;

interface AnimationComponent {
  id: number;
  component: JSX.Element;
}

interface MessageProps {
  children: React.ReactNode;
  align?: "left" | "right" | "center";
  variant?: "primary" | "secondary" | "muted";
  maxWidth?: string;
  className?: string;
  withImage?: {
    src: any;
    alt: string;
  };
}

const Message = ({
  children,
  align = "left",
  variant = "secondary",
  className,
  withImage,
}: MessageProps) => {
  const alignmentClasses = {
    left: "mr-auto",
    right: "ml-auto",
    center: "min-w-full text-center",
  };

  const variantClasses = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    muted:
      "font-mono text-sm text-muted-foreground w-full text-center flex items-center justify-center -my-2 truncate overflow-hidden overflow-ellipsis",
  };

  const baseClasses = cn(
    "animation_reveal max-w-[66%]",
    alignmentClasses[align],
    variantClasses[variant],
    !withImage && "w-fit rounded-md px-3 py-2 text-left",
    variant !== "muted" && "border border-border",
    withImage && "flex flex-col gap-2 rounded-lg border border-border p-4",
    className,
  );

  return (
    <div className={baseClasses}>
      {children}
      {withImage && (
        <div className="relative">
          <Image
            src={withImage.src}
            alt={withImage.alt}
            className="w-3/4 rounded-lg"
            priority
          />
        </div>
      )}
    </div>
  );
};

export function SlideGenerativeUI() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const t = useTranslations("generative_ui");

  const ANIMATION_COMPONENTS = useMemo<AnimationComponent[]>(
    () => [
      {
        id: 1,
        component: (
          <Message align="left" variant="secondary">
            {t("keyframes.keyframe_1")}
          </Message>
        ),
      },
      {
        id: 2,
        component: (
          <Message align="right" variant="primary">
            {t("keyframes.keyframe_2")}
          </Message>
        ),
      },
      {
        id: 3,
        component: <Message align="left">{t("keyframes.keyframe_3")}</Message>,
      },
      {
        id: 4,
        component: (
          <Message align="center" maxWidth="100%" variant="muted">
            {t("keyframes.keyframe_4")}
          </Message>
        ),
      },
      {
        id: 5,
        component: (
          <Message
            align="left"
            maxWidth="45%"
            withImage={{ src: Livingroom, alt: "Living room" }}
          >
            {t("keyframes.keyframe_5")}
          </Message>
        ),
      },
      {
        id: 6,
        component: (
          <Message align="right" variant="primary" maxWidth="75%">
            {t("keyframes.keyframe_6")}
          </Message>
        ),
      },
      {
        id: 7,
        component: <Message align="left">{t("keyframes.keyframe_7")}</Message>,
      },
      {
        id: 8,
        component: (
          <Message align="center" maxWidth="100%" variant="muted">
            {t("keyframes.keyframe_8")}
          </Message>
        ),
      },
      {
        id: 9,
        component: (
          <Message align="left" withImage={{ src: Bathroom, alt: "Bathroom" }}>
            {t("keyframes.keyframe_9")}
          </Message>
        ),
      },
    ],
    [t],
  );

  const [renderedFrames, setRenderedFrames] = useState<AnimationComponent[]>(
    [],
  );
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(scrollAreaRef, { once: false });
  const frameContainerRef = useRef<HTMLDivElement>(null);

  // Reset animation when component comes into view
  useEffect(() => {
    if (!isInView) {
      setIsPlaying(false);
      setRenderedFrames([]);
      return;
    }
    setRenderedFrames([ANIMATION_COMPONENTS[0]]);
    setIsPlaying(true);
  }, [isInView, ANIMATION_COMPONENTS]);

  // Handle animation frames
  useEffect(() => {
    if (!isPlaying) return;

    const animationTimer = setTimeout(
      () => {
        setRenderedFrames((prevFrames) => {
          if (prevFrames.length >= ANIMATION_COMPONENTS.length) {
            return [];
          }
          const nextFrameIndex = prevFrames.length;
          return [...prevFrames, ANIMATION_COMPONENTS[nextFrameIndex]];
        });
      },
      renderedFrames.length < ANIMATION_COMPONENTS.length
        ? ANIMATION_DELAY
        : RESET_DELAY,
    );

    // Handle scroll after frames update
    if (frameContainerRef.current) {
      frameContainerRef.current.scrollTo({
        top: frameContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }

    return () => clearTimeout(animationTimer);
  }, [isPlaying, renderedFrames.length, ANIMATION_COMPONENTS]);

  const togglePlayback = () => setIsPlaying((prev) => !prev);

  return (
    <SlideShell
      title="Generatives UI & Chat Interaktionen"
      className="xl:grid-cols-1"
    >
      <Card className="relative h-full overflow-hidden bg-background">
        <ScrollArea className="m-1 h-full md:px-10">
          <div className="flex h-full items-center justify-center">
            <div
              ref={scrollAreaRef}
              className="mx-auto flex w-full flex-col gap-4 overflow-auto p-6"
            >
              <div
                ref={frameContainerRef}
                className="flex w-full flex-col gap-4"
              >
                {isInView &&
                  renderedFrames.map((frame) => (
                    <div key={frame.id} className="w-auto">
                      {frame.component}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </ScrollArea>
        <div className="absolute bottom-0 p-1">
          <Button
            onClick={togglePlayback}
            variant="outline"
            aria-label={isPlaying ? "Pause animation" : "Play animation"}
          >
            {isPlaying ? (
              <PauseIcon className="h-5 w-5" />
            ) : (
              <PlayIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </Card>
    </SlideShell>
  );
}
