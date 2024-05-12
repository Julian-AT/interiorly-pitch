import { SLIDE_URI, SLIDE_URI_TITLE } from "@/config/pitch";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface SlideShellProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

const SlideShell = ({ title, className, children }: SlideShellProps) => {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>{title}</span>
        <span className="text-[#878787]">
          <Link href={SLIDE_URI}>{SLIDE_URI_TITLE}</Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen justify-center">
        <div
          className={cn(
            "grid grid-cols-1 xl:grid-cols-3 gap-8 items-center justify-center max-h-[650px] h-[650px] container relative",
            className
          )}
          id={title.toLowerCase().replace(" ", "-")}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default SlideShell;
