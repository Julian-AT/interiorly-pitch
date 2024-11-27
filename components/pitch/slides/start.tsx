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
      <div className="container relative flex min-h-screen flex-col items-center justify-center">
        <Logo className="-mb-[100px] h-80 w-80" fill="#e6e6e6" />
        <h1 className="select-none text-[150px] font-semibold lg:text-[225px]">
          Interiorly
        </h1>
        <span className="-mt-16 text-2xl text-muted-foreground">
          {t("subtitle")}
        </span>
      </div>
    </div>
  );
}
