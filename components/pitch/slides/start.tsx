"use client";

import Logo from "@/components/logo";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export function SlideStart() {
  const t = useTranslations("slide_start");

  return (
    <div className="min-h-screen">
      <div className="container relative flex min-h-screen flex-col items-center justify-center text-secondary-foreground">
        <Logo
          className="-mb-[75px] ml-10 h-80 w-80 md:-mb-[100px]"
          fill="currentColor"
        />
        <h1 className="select-none text-[100px] font-semibold lg:text-[225px]">
          Interiorly
        </h1>
        <span className="text-center text-2xl text-muted-foreground md:-mt-16">
          {t("subtitle")}
        </span>
      </div>
    </div>
  );
}
