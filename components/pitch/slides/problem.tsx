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
      <div className="grid h-full grid-rows-2 gap-8">
        <Card className="flex flex-col items-center justify-center space-y-5 p-5">
          <IconPuzzlePiece className="h-12 w-12" />
          <h2 className="text-center text-3xl">
            {t("problems.problem_1.title")}
          </h2>
          <p className="text-center text-[#878787]">
            {t("problems.problem_1.text")}
          </p>
        </Card>
        <h2 className="flex items-center justify-center text-center text-5xl leading-tight">
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
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="grid h-full grid-rows-2 gap-8">
        <Card className="flex h-full w-full flex-col items-center justify-center space-y-5 p-5">
          <IconBolt className="h-12 w-12" />
          <h2 className="text-center text-3xl">
            {t("problems.problem_2.title")}
          </h2>
          <p className="text-center text-[#878787]">
            {t("problems.problem_2.text")}
          </p>
        </Card>
        <Card className="flex h-full w-full flex-col items-center justify-center space-y-5 p-5">
          <IconBankNotes className="h-12 w-12" />
          <h2 className="text-center text-3xl">
            {t("problems.problem_3.title")}
          </h2>
          <p className="text-center text-[#878787]">
            {t("problems.problem_3.text")}
          </p>
        </Card>
      </div>
    </SlideShell>
  );
}
