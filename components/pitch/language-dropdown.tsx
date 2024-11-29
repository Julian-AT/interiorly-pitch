"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "next-intl";
import LangFlag from "@/components/lang-flag";
import { useRouter } from "next/navigation";
import { useCurrentSlide } from "@/lib/hooks/use-current-slide";

const LanguageSelectionDropdown = () => {
  const rawLocale = useLocale();
  const router = useRouter();
  const { currentSlide } = useCurrentSlide();
  const locale = useLocale() as "en" | "de";
  if (!locale) return null;

  return (
    <Select
      onValueChange={(v) => router.push(`/${v}?slide=${currentSlide}`)}
      defaultValue={locale}
    >
      <SelectTrigger className="m-0 w-max border-none bg-transparent p-0 focus:outline-none focus:ring-0 focus:ring-offset-0">
        <SelectValue>
          <div className="flex justify-center gap-1.5 px-1 text-muted-foreground">
            <LangFlag lang={locale} className="h-5 w-5" />
            {locale === "en" ? "English" : "Deutsch"}
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="de" className="flex gap-1.5">
            <div className="flex justify-center gap-1.5 px-1 text-muted-foreground">
              <LangFlag lang="de" className="h-5 w-5" />
              Deutsch
            </div>
          </SelectItem>
          <SelectItem value="en" className="flex gap-1.5">
            <div className="flex justify-center gap-1.5 px-1 text-muted-foreground">
              <LangFlag lang="en" className="h-5 w-5" />
              English
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelectionDropdown;
