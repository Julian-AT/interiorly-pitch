import Image from "next/image";
import LivingRoom from "@/public/images/rooms/livingroom.jpg";
import { Card } from "@/components/ui/card";
import { IconBankNotes, IconBolt, IconPuzzlePiece } from "@/components/icons";
import { useTranslations } from "next-intl";
import SlideShell from "@/components/pitch/slide-shell";

export function SlideProblem() {
  const t = useTranslations("slide_problem");

  return (
    <SlideShell title={t("title")}>
      <div className="grid grid-rows-2 h-full gap-8">
        <Card className="flex flex-col items-center justify-center space-y-5 p-5">
          <IconPuzzlePiece className="w-12 h-12" />
          <h2 className="text-3xl text-center">
            {t("problems.problem_1.title")}
          </h2>
          <p className="text-[#878787] text-center">
            {t("problems.problem_1.text")}
          </p>
        </Card>
        <h2 className="flex items-center justify-center text-5xl text-center leading-tight">
          {t("summary")}
        </h2>
      </div>
      <div className="h-full w-full">
        <Image
          src={LivingRoom}
          alt="Bedroom"
          width={650}
          height={875}
          quality={100}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="grid grid-rows-2 h-full gap-8">
        <Card className="flex flex-col items-center justify-center space-y-5 p-5 h-full w-full">
          <IconBolt className="w-12 h-12" />
          <h2 className="text-3xl text-center">
            {t("problems.problem_2.title")}
          </h2>
          <p className="text-[#878787] text-center">
            {t("problems.problem_2.text")}
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center space-y-5 p-5 h-full w-full">
          <IconBankNotes className="w-12 h-12" />
          <h2 className="text-3xl text-center">
            {t("problems.problem_3.title")}
          </h2>
          <p className="text-[#878787] text-center">
            {t("problems.problem_3.text")}
          </p>
        </Card>
      </div>
    </SlideShell>
  );
}
