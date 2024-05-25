"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { IconChat, IconCollaboration, IconImage } from "@/components/icons";
import Chat from "@/components/features/chat";
import ImageGenerationResultCarousel from "@/components/features/image-generation-result";
import RealtimeCollaboration from "@/components/features/realtime";
import SlideShell from "@/components/pitch/slide-shell";
import { useTranslations } from "next-intl";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import LivingRoom from "@/public/images/rooms/livingroom_chat.jpg";
import Image, { StaticImageData } from "next/image";
import TestUser from "@/public/images/logo.svg";
import { ImageGenerationProgress } from "@/components/features/image-generation-progress";
import { useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/react";

export function SlideFeatures() {
  const t = useTranslations("slide_features");
  const [generationProgress, setGenerationProgress] = useState<number>(0);

  useEffect(() => {
    if (generationProgress === 100) {
      setTimeout(() => {
        setGenerationProgress(0);
      }, 5000);
      return;
    }

    const interval = setInterval(() => {
      setGenerationProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 500);

    return () => clearInterval(interval);
  }, [generationProgress]);

  return (
    <SlideShell title={t("title")}>
      <Card className="flex flex-col items-center space-y-5 p-5 h-full relative">
        <IconChat className="w-12 h-12" />
        <h2 className="text-2xl font-semibold">
          {t("features.feature_1.title")}
        </h2>
        <Chat
          message_text={t("features.feature_1.message_text")}
          delivered_indicator={t("features.feature_1.delivered_indicator")}
        />
      </Card>
      <Card className="flex flex-col items-center justify-center space-y-5 p-5 h-full">
        <IconImage className="w-12 h-12" />
        <h2 className="text-2xl font-semibold">
          {t("features.feature_2.title")}
        </h2>
        <div className="flex-1 flex flex-col items-center justify-center">
          {generationProgress < 100 ? (
            <CircularProgress
              classNames={{
                svg: "w-40 h-40 drop-shadow-md",
                indicator: "stroke-primary",
                track: "stroke-secondary",
                value: "text-3xl font-semibold text-primary",
              }}
              value={generationProgress}
              strokeWidth={2.5}
              showValueLabel={true}
              aria-label="Generating Images..."
            />
          ) : (
            <div className="flex flex-col gap-5 items-center justify-center -mt-5">
              <Image src={LivingRoom} alt="livingroom" className="rounded-lg" />
              <span className="text-muted-foreground">
                Your image is done generating. 🏡✨
              </span>
            </div>
          )}
        </div>
      </Card>
      <Card className="flex flex-col items-center justify-center space-y-5 p-5 h-full">
        <IconCollaboration className="w-12 h-12" />
        <h2 className="text-2xl font-semibold">
          {t("features.feature_3.title")}
        </h2>
        <div className="flex-1 flex w-full">
          <FollowerPointerCard
            title={<TitleComponent avatar={TestUser} title="Interiorly AI" />}
            className="w-full h-full"
          >
            <RealtimeCollaboration />
          </FollowerPointerCard>
        </div>
      </Card>
    </SlideShell>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: StaticImageData;
}) => (
  <div className="flex space-x-2 items-center h-4 border z-50">
    <Image
      src={avatar}
      height="16"
      width="16"
      alt="thumbnail"
      className="rounded-full border-2 border-secondary w-6 h-6 object-cover p-0.5 invert"
    />
    <p>{title}</p>
  </div>
);
