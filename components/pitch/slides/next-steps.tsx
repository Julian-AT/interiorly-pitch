import React from "react";
import SlideShell from "@/components/pitch/slide-shell";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import DashboardScreen from "@/public/images/screens/dashboard.png";
import LaptopMockup from "@/public/images/mockups/laptop-mockup.png";
import IPhoneMockup from "@/public/images/mockups/iphone-mockup.png";
import NoiseImage from "@/public/images/noise.webp";
import { useTranslations } from "next-intl";

const SlideNextSteps = () => {
  const t = useTranslations("slide_next_steps");

  return (
    <SlideShell title={t("title")} className="grid-rows-2">
      <Card className="flex flex-col justify-center p-5 h-full col-span-2 relative overflow-hidden">
        <div className="ml-10 w-96">
          <h1 className="font-bold text-4xl">{t("steps.step_1.title")}</h1>
          <span className="text-muted-foreground text-lg">
            {t("steps.step_1.text")}
          </span>
        </div>
        <Image
          src={LaptopMockup}
          width={512}
          height={512}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[10%]  filter -top-28 object-contain rounded-2xl rotate-6"
        />
        <Noise />
      </Card>
      <Card className="flex flex-col items-center justify-center p-5 h-full relative">
        <Noise />
        <h1 className="font-bold text-4xl">{t("steps.step_2.title")}</h1>
        <span className="text-muted-foreground text-lg text-center">
          {t("steps.step_2.text")}
        </span>{" "}
      </Card>
      <Card className="flex flex-col items-center justify-center p-5 h-full col-span-3 relative overflow-hidden">
        <div className="w-[600px] text-center flex flex-col gap-5">
          <h1 className="font-bold text-4xl">{t("steps.step_3.title")}</h1>
          <span className="text-muted-foreground text-lg text-center">
            {t("steps.step_3.text")}
          </span>
        </div>
        <Image
          src={IPhoneMockup}
          width={350}
          height={350}
          alt="linear demo image"
          className="absolute -right-[7.5%] -bottom-48 object-contain rounded-2xl"
        />
        <Image
          src={DashboardScreen}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-left -left-[15%] -bottom-16 object-contain rounded-2xl"
        />
        <Noise />
      </Card>
    </SlideShell>
  );
};

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full transform opacity-[0.015] [mask-image:radial-gradient(#fff,#ffed00,10%)]"
      style={{
        backgroundImage: `url(${NoiseImage.src})`,
        backgroundSize: "30%",
      }}
    ></div>
  );
};

export default SlideNextSteps;
