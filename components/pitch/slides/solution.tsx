import Image from "next/image";
import { Card } from "@/components/ui/card";
import { IconBankNotes, IconSparkles, IconUserGroup } from "@/components/icons";
import LaptopMockup from "@/public/images/mockups/laptop-mockup.png";
import SlideShell from "@/components/pitch/slide-shell";
import { useTranslations } from "next-intl";

export function SlideSolution() {
  const t = useTranslations("slide_solution");

  return (
    <SlideShell title={t("title")}>
      <div className="grid h-full grid-rows-2 gap-8">
        <Card className="flex flex-col items-center justify-center space-y-5 p-5">
          <IconSparkles className="h-12 w-12" />
          <h2 className="text-3xl">{t("solutions.solution_1.title")}</h2>
          <p className="text-center text-[#878787]">
            {t("solutions.solution_1.text")}
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center space-y-5 p-5">
          <IconUserGroup className="h-12 w-12" />
          <h2 className="text-3xl">{t("solutions.solution_2.title")}</h2>
          <p className="text-center text-[#878787]">
            {t("solutions.solution_2.text")}
          </p>
        </Card>
      </div>

      <div className="grid h-full grid-rows-2 gap-8">
        <div className="flex items-center justify-center">
          <h2 className="text-center text-5xl leading-[55px]">
            {t("summary")}
          </h2>
        </div>
        <Card className="flex flex-col items-center justify-center space-y-5 p-5">
          <IconBankNotes className="h-12 w-12" />
          <h2 className="text-3xl">{t("solutions.solution_3.title")}</h2>
          <p className="text-center text-[#878787]">
            {t("solutions.solution_3.text")}
          </p>
        </Card>
      </div>

      <Card className="ml-auto h-full w-full px-5">
        <Image
          src={LaptopMockup}
          alt="Laptop Mockup"
          width={650}
          height={875}
          quality={100}
          className="h-full w-full rounded-lg object-contain"
        />
      </Card>
    </SlideShell>
  );
}
