"use client";

import Image, { StaticImageData } from "next/image";
import { Card } from "@/components/ui/card";
import Julian from "@/public/images/team/Julian.jpg";
import Anthony from "@/public/images/team/Anthony.jpg";
import SlideShell from "@/components/pitch/slide-shell";
import { useTranslations } from "next-intl";
import Team from "@/public/images/team/team.jpg";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

export function SlideTeam() {
  const t = useTranslations("slide_team");

  return (
    <SlideShell title={t("title")} className="xl:grid-cols-2">
      <div className="grid h-full grid-cols-1 gap-8">
        <Card className="flex h-full w-full flex-col gap-3 p-5">
          <div className="flex items-center">
            <Image
              src={Julian}
              alt="Julian Schmidt"
              width={128}
              height={128}
              quality={100}
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl">{t("team_members.team_member_1.name")}</h2>
            <span className="text-lg text-muted-foreground">
              {t("team_members.team_member_1.role")}
            </span>
          </div>
          <div>
            <p className="text-secondary-foreground/50">
              {t("team_members.team_member_1.text")}
            </p>
          </div>
        </Card>
        <Card className="flex h-full w-full flex-col gap-3 p-5">
          <div className="flex items-center">
            <Image
              src={Anthony}
              alt="Anthony Owah"
              width={128}
              height={128}
              quality={100}
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl">{t("team_members.team_member_2.name")}</h2>
            <span className="text-lg text-muted-foreground">
              {t("team_members.team_member_2.role")}
            </span>
          </div>
          <div>
            <p className="text-secondary-foreground/50">
              {t("team_members.team_member_2.text")}
            </p>
          </div>
        </Card>
      </div>
      <div className="relative h-full w-full">
        <Image
          src={Team}
          alt="Team"
          fill
          className="absolute -bottom-10 -right-4 rounded-2xl object-cover filter lg:-top-[40%]"
        />
      </div>
    </SlideShell>
  );
}
