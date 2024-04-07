import Link from "next/link";
import { Card } from "@/components/ui/card";

export function SlideVision() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-8 right-8 top-4 flex justify-between text-lg">
        <span>Our vision</span>
        <span className="text-[#878787]">
          <Link href="/">interiorly.ai</Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <h1 className="text-7xl leading-[1.2] px-4 md:px-0 font-medium text-center">
          &quot;Our goal is to become the premier destination for interior
          design, serving both businesses and individuals alike.&quot;
        </h1>
      </div>
    </div>
  );
}
