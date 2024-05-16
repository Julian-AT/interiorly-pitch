"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { IconChat, IconCollaboration, IconImage } from "@/components/icons";
import { ImageGenerationForm } from "@/components/features/image-generation-form";
import Chat from "@/components/features/chat";
import ImageGenerationResultCarousel from "@/components/features/image-generation-result";
import RealtimeCollaboration from "@/components/features/realtime";
import SlideShell from "@/components/pitch/slide-shell";
import { useTranslations } from "next-intl";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Image, { StaticImageData } from "next/image";
import TestUser from "@/public/images/logo.svg";

export function SlideFeatures() {
  const t = useTranslations("slide_features");

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
        <div className="flex-1 flex items-center relative">
          <ImageGenerationResultCarousel />
        </div>
        <ImageGenerationForm
          buttonText={t("features.feature_2.button_text")}
          tooltipText={t("features.feature_2.tooltip_text")}
        />
      </Card>
      <Card className="flex flex-col items-center justify-center space-y-5 p-5 h-full">
        <IconCollaboration className="w-12 h-12" />
        <h2 className="text-2xl font-semibold">
          {t("features.feature_3.title")}
        </h2>
        <div className="flex-1 flex w-full">
          <FollowerPointerCard
            title={<TitleComponent avatar={TestUser} title="Interiorly AI" />}
            className="w-full"
          >
            {" "}
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
  <div className="flex space-x-2 items-center h-4">
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
