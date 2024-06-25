import React from "react";
import SlideShell from "@/components/pitch/slide-shell";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import DashboardScreen from "@/public/images/screens/dashboard.png";
import LaptopMockup from "@/public/images/mockups/laptop-mockup.png";
import IPhoneMockup from "@/public/images/mockups/iphone-mockup.png";
import NoiseImage from "@/public/images/noise.webp";
import { useTranslations } from "next-intl";

export function SlideNextSteps() {
  const t = useTranslations("slide_next_steps");

  return (
    <SlideShell title={t("title")} className="grid-rows-2">
      <Card className="relative col-span-2 flex h-full flex-col justify-center overflow-hidden p-5">
        <div className="ml-10 w-96">
          <h1 className="text-4xl font-bold">{t("steps.step_1.title")}</h1>
          <span className="text-lg text-muted-foreground">
            {t("steps.step_1.text")}
          </span>
        </div>
        <Image
          src={LaptopMockup}
          width={512}
          height={512}
          alt="linear demo image"
          className="absolute -right-4 -top-28 rotate-6 rounded-2xl object-contain filter lg:-right-[10%]"
        />
        <Noise />
      </Card>
      <Card className="relative flex h-full flex-col items-center justify-center p-5">
        <Noise />
        <h1 className="text-4xl font-bold">{t("steps.step_2.title")}</h1>
        <span className="text-center text-lg text-muted-foreground">
          {t("steps.step_2.text")}
        </span>{" "}
      </Card>
      <Card className="relative col-span-3 flex h-full flex-col items-center justify-center overflow-hidden p-5">
        <div className="flex w-[600px] flex-col gap-5 text-center">
          <h1 className="text-4xl font-bold">{t("steps.step_3.title")}</h1>
          <span className="text-center text-lg text-muted-foreground">
            {t("steps.step_3.text")}
          </span>
        </div>
        <Image
          src={IPhoneMockup}
          width={350}
          height={350}
          alt="linear demo image"
          className="absolute -bottom-48 -right-[7.5%] rounded-2xl object-contain"
        />
        <Image
          src={DashboardScreen}
          width={500}
          height={500}
          alt="linear demo image"
          className="-right-left absolute -bottom-16 -left-[15%] rounded-2xl object-contain"
        />
        <Noise />
      </Card>
    </SlideShell>
  );
}

const Noise = () => {
  return (
    <div
      className="absolute inset-0 h-full w-full transform opacity-[0.015] [mask-image:radial-gradient(#fff,#ffed00,10%)]"
      style={{
        backgroundImage: `url(${NoiseImage.src})`,
        backgroundSize: "30%",
      }}
    ></div>
  );
};
