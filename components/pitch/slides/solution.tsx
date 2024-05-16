import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { IconBankNotes, IconSparkles, IconUserGroup } from "@/components/icons";
import LaptopMockup from "@/public/images/laptop-mockup.png";
import SlideShell from "@/components/pitch/slide-shell";
import { useTranslations } from "next-intl";

export function SlideSolution() {
  const t = useTranslations("slide_solution");

  return (
    <SlideShell title={t("title")}>
      <div className="grid grid-rows-2 h-full gap-8">
        <Card className="flex flex-col items-center justify-center space-y-5 p-5">
          <IconSparkles className="w-12 h-12" />
          <h2 className="text-3xl">{t("solutions.solution_1.title")}</h2>
          <p className="text-[#878787] text-center">
            {t("solutions.solution_1.text")}
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center space-y-5 p-5">
          <IconUserGroup className="w-12 h-12" />
          <h2 className="text-3xl">{t("solutions.solution_2.title")}</h2>
          <p className="text-[#878787] text-center">
            {t("solutions.solution_2.text")}
          </p>
        </Card>
      </div>

      <div className="grid grid-rows-2 h-full gap-8">
        <div className="flex items-center justify-center">
          <h2 className="text-5xl text-center leading-[55px]">
            {t("summary")}
          </h2>
        </div>
        <Card className="flex flex-col items-center justify-center space-y-5 p-5">
          <IconBankNotes className="w-12 h-12" />
          <h2 className="text-3xl">{t("solutions.solution_3.title")}</h2>
          <p className="text-[#878787] text-center">
            {t("solutions.solution_3.text")}
          </p>
        </Card>
      </div>

      <Card className="ml-auto w-full h-full px-5">
        <Image
          src={LaptopMockup}
          alt="Laptop Mockup"
          width={650}
          height={875}
          quality={100}
          className="object-contain w-full h-full rounded-lg"
        />
      </Card>
    </SlideShell>
  );
}
