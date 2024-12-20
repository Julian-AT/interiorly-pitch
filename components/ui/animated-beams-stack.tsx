"use client";

import { cn } from "@/lib/utils";
import { Cloud, User } from "lucide-react";
import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import OpenAILogo from "@/public/images/logos/openai.webp";
import HFLogo from "@/public/images/logos/hf.png";
import QdrantLogo from "@/public/images/logos/qdrant.png";
import Image from "next/image";
import Logo from "@/components/logo";

// eslint-disable-next-line react/display-name
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-border bg-secondary p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

export function AnimatedBeamStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-md border bg-background p-8 text-secondary-foreground"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-2 text-secondary-foreground">
          <Circle ref={div1Ref}>
            <Image src={OpenAILogo} alt="OpenAI" className="h-8 w-8" />
          </Circle>
          <Circle ref={div2Ref}>
            <Image src={QdrantLogo} alt="Qdrant" className="h-8 w-8" />
          </Circle>
          <Circle ref={div3Ref}>
            <Image src={HFLogo} alt="Huggingface" className="h-8 w-8" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="h-20 w-20">
            <Logo />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <User className="h-8 w-8" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
      />
    </div>
  );
}
