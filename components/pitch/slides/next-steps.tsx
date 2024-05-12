import React from "react";
import SlideShell from "../slide-shell";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Dashboard from "@/public/images/screens/dashboard.png";
import Images from "@/public/images/laptop-mockup.png";
import SSSS from "@/public/images/iphone-mockup.png";
import NoiseImage from "@/public/images/noise.webp";

const SlideNextSteps = () => {
  return (
    <SlideShell title="Next Steps" className="grid-rows-2">
      <Card className="flex flex-col justify-center p-5 h-full col-span-2 relative overflow-hidden">
        <div className="ml-10 w-96">
          <h1 className="font-bold text-4xl">Preliminary study</h1>
          <span className="text-muted-foreground text-lg">
            Initiating a preliminary study to gather initial insights and
            evaluate feasibility prior to engaging in detailed analysis.
          </span>
        </div>
        <Image
          src={Images}
          width={512}
          height={512}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[10%]  filter -top-28 object-contain rounded-2xl rotate-6"
        />
        <Noise />
      </Card>
      <Card className="flex flex-col items-center justify-center p-5 h-full relative">
        <Noise />
        <h1 className="font-bold text-4xl">PLACEHOLDER</h1>
      </Card>
      <Card className="flex flex-col items-center justify-center p-5 h-full col-span-3 relative overflow-hidden">
        <div className="w-[600px] text-center flex flex-col gap-5">
          <h1 className="font-bold text-4xl">
            Evolving User Experience through UI Implementation
          </h1>
          <span className="text-muted-foreground text-lg">
            Execute the design blueprint to bring the envisioned UI to life,
            ensuring seamless implementation and user-centric functionality.
          </span>
        </div>
        <Image
          src={SSSS}
          width={350}
          height={350}
          alt="linear demo image"
          className="absolute -right-[7.5%] -bottom-48 object-contain rounded-2xl"
        />
        <Image
          src={Dashboard}
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
