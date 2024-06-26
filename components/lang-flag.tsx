import React from "react";
import { locales } from "@/config/locales";
import FlagGB from "@/public/images/lang/gb.png";
import FlagDE from "@/public/images/lang/de.png";
import Image from "next/image";

interface LangFlagProps extends React.HTMLAttributes<HTMLImageElement> {
  lang: (typeof locales)[number];
}

const LangFlag = ({ lang, className }: LangFlagProps) => {
  return lang === "en" ? (
    <Image
      src={FlagGB}
      alt="English"
      width={32}
      height={32}
      className={className}
    />
  ) : (
    <Image
      src={FlagDE}
      alt="Deutsch"
      width={32}
      height={32}
      className={className}
    />
  );
};

export default LangFlag;
