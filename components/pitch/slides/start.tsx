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
import { Suspense, useState } from "react";

export function SlideStart() {
  const t = useTranslations("slide_start");
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      <div className="absolute left-8 right-8 top-4 flex justify-between text-lg">
        <Select
          onValueChange={(value) =>
            router.push(`/${value !== "main" ? value : ""}`)
          }
          defaultValue={
            pathname.endsWith("elevator-pitch") ? "elevator-pitch" : "main"
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

      <div className="container relative flex min-h-screen flex-col items-center justify-center">
        <Logo className="-mb-[100px] h-80 w-80" fill="#e6e6e6" />
        <h1 className="select-none text-[150px] font-semibold lg:text-[225px]">
          Interiorly
        </h1>
        <span className="-mt-16 text-2xl text-muted-foreground">
          Innenarchitekturkonzepte durch künstliche Intelligenz
        </span>
      </div>
    </div>
  );
}
