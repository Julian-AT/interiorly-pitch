"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { IconChat, IconCollaboration, IconImage } from "@/components/icons";
import { ImageGenerationForm } from "@/components/features/image-generation-form";
import Chat from "@/components/features/chat";
import ImageGenerationResultCarousel from "@/components/features/image-generation-result";
import RealtimeCollaboration from "@/components/features/realtime";
import SlideShell from "../slide-shell";

export function SlideFeatures() {
  return (
    <SlideShell title="Features" className="border">
      <Card className="flex flex-col items-center justify-center space-y-5 p-5 h-full relative">
        <IconChat className="w-12 h-12" />
        <h2 className="text-2xl font-semibold">Chat Interaction</h2>
        <Chat />
      </Card>
      <Card className="flex flex-col items-center justify-center space-y-5 p-5 h-full">
        <IconImage className="w-12 h-12" />
        <h2 className="text-2xl font-semibold">Image Generation</h2>{" "}
        <div className="flex-1 flex items-center relative">
          <ImageGenerationResultCarousel />
        </div>
        <ImageGenerationForm />
      </Card>
      <Card className="flex flex-col items-center justify-center space-y-5 p-5 h-full">
        <IconCollaboration className="w-12 h-12" />
        <h2 className="text-2xl font-semibold">Realtime Collaboration</h2>{" "}
        <div className="flex-1 flex w-full">
          <RealtimeCollaboration />
        </div>
      </Card>
    </SlideShell>
  );
}
