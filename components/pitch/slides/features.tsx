"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { IconChat, IconCollaboration, IconImage } from "@/components/icons";
import { ImageGenerationForm } from "@/components/features/image-generation-form";
import Chat from "@/components/features/chat";
import ImageGenerationResultCarousel from "@/components/features/image-generation-result";
import RealtimeCollaboration from "@/components/features/realtime";

export function SlideFeatures() {
  return (
    <div className="min-h-screen relative w-screen flex">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Features</span>
        <span className="text-muted-foreground">
          <Link href="/">interiorly.ai</Link>
        </span>
      </div>
      <div className="container min-h-screen flex items-center justify-center">
        <div className="grid md:grid-cols-3 gap-8 md:px-0 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0 relative">
          <Card className="flex flex-col items-center justify-center space-y-5 p-5">
            <IconChat className="w-12 h-12" />
            <h2 className="text-2xl font-semibold">Chat Interaction</h2>{" "}
            <Chat />
          </Card>
          <Card className="flex flex-col items-center justify-center space-y-5 p-5">
            <IconImage className="w-12 h-12" />
            <h2 className="text-2xl font-semibold">Image Generation</h2>{" "}
            <div className="flex-1 flex items-center">
              <ImageGenerationResultCarousel />
            </div>
            <ImageGenerationForm />
          </Card>
          <Card className="flex flex-col items-center justify-center space-y-5 p-5">
            <IconCollaboration className="w-12 h-12" />
            <h2 className="text-2xl font-semibold">
              Realtime Collaboration
            </h2>{" "}
            <div className="flex-1 flex w-full">
              <RealtimeCollaboration />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
