import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "next-intl";
import { getLocale } from "@/i18n";
import LangFlag from "@/components/lang-flag";
import { redirect } from "next/navigation";

const LanguageSelectionDropdown = () => {
  const rawLocale = useLocale();
  const locale = getLocale(rawLocale);
  if (!locale) return null;

  return (
    <Select onValueChange={(v) => redirect(`/${v}`)} defaultValue={locale}>
      <SelectTrigger className="m-0 border-none bg-transparent p-0">
        <SelectValue>
          <div className="flex justify-center gap-1.5 px-1 text-[#878787]">
            <LangFlag lang={locale} className="h-5 w-5" />
            {locale === "en" ? "English" : "Deutsch"}
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="de" className="flex gap-1.5">
            <div className="flex justify-center gap-1.5 px-1 text-[#878787]">
              <LangFlag lang="de" className="h-5 w-5" />
              Deutsch
            </div>
          </SelectItem>
          <SelectItem value="en" className="flex gap-1.5">
            <div className="flex justify-center gap-1.5 px-1 text-[#878787]">
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
