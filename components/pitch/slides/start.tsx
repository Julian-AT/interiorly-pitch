"use client";

import Logo from "@/components/logo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export function SlideStart() {
  const t = useTranslations("slide_start");
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="min-h-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <Select
          onValueChange={(value) =>
            router.push(
              `/${pathname.split("/")[1]}/${value === "main" ? "" : value}`
            )
          }
          defaultValue={
            pathname.includes("elevator-pitch") ? "elevator-pitch" : "main"
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Version" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="elevator-pitch">Elevator Pitch</SelectItem>
            <SelectItem value="main">{t("select_menu.main")}</SelectItem>
          </SelectContent>
        </Select>

        <span className="text-[#878787]">Pitch Interiorly/2024</span>
      </div>

      <div className="container min-h-screen relative flex flex-col items-center justify-center">
        <Logo className="w-80 h-80 -mb-[100px]" fill="#e6e6e6" />
        <h1 className="text-[150px] font-semibold lg:text-[225px] select-none">
          Interiorly
        </h1>
        <span className="text-muted-foreground text-2xl -mt-16">
          Innenarchitekturkonzepte durch künstliche Intelligenz
        </span>
      </div>
    </div>
  );
}
