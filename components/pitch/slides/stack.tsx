import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { IconBankNotes, IconBolt, IconPuzzlePiece } from "@/components/icons";
import NextJS from "@/public/images/logos/nextjs.png";
import Trunk from "@/public/images/logos/trunk.png";
import Edgestore from "@/public/images/logos/edgestore.png";
import Clerk from "@/public/images/logos/clerk.png";
import Convex from "@/public/images/logos/convex.png";
import SlideShell from "@/components/pitch/slide-shell";
import { useTranslations } from "next-intl";

export function SlideTechStack() {
  const t = useTranslations("slide_tech_stack");

  return (
    <SlideShell title={t("title")}>
      <Card className="flex h-full flex-col items-center justify-center space-y-5 p-5">
        <Image src={Clerk} alt="Clerk" width={76} height={76} />
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl">{t("technologies.technology_1.title")}</h2>
          <span className="text-base text-muted-foreground">
            {t("technologies.technology_1.description")}
          </span>
        </div>
        <p className="text-center text-sm text-[#878787]">
          {t("technologies.technology_1.text")}
        </p>
      </Card>
      <Card className="flex h-full flex-col items-center justify-center space-y-5 p-5">
        <Image src={Trunk} alt="Trunk" width={76} height={76} />{" "}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl">{t("technologies.technology_2.title")}</h2>
          <span className="text-base text-muted-foreground">
            {t("technologies.technology_2.description")}
          </span>
        </div>
        <p className="text-center text-sm text-[#878787]">
          {t("technologies.technology_2.text")}
        </p>
      </Card>
      <Card className="row-span-2 flex h-full flex-col items-center justify-center space-y-5 bg-[#0C0C0C] p-5">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl">{t("technologies.technology_3.title")}</h2>
          <span className="text-base text-muted-foreground">
            {t("technologies.technology_3.description")}
          </span>
        </div>
        <Image src={NextJS} alt="NextJS" className="aspect-square w-2/3" />
      </Card>
      <Card className="flex h-full flex-col items-center justify-center space-y-5 p-5">
        <Image src={Convex} alt="Convex" width={76} height={76} />{" "}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl">{t("technologies.technology_4.title")}</h2>
          <span className="text-base text-muted-foreground">
            {t("technologies.technology_4.description")}
          </span>
        </div>
        <p className="text-center text-sm text-[#878787]">
          {t("technologies.technology_4.text")}
        </p>
      </Card>
      <Card className="flex h-full flex-col items-center justify-center space-y-5 p-5">
        <Image src={Edgestore} alt="Edgestore" width={76} height={76} />{" "}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl">{t("technologies.technology_5.title")}</h2>
          <span className="text-base text-muted-foreground">
            {t("technologies.technology_5.description")}
          </span>
        </div>
        <p className="text-center text-sm text-[#878787]">
          {t("technologies.technology_5.text")}
        </p>
      </Card>
    </SlideShell>
  );
}
