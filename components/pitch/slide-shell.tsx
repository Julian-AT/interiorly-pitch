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
    <div className="relative min-h-screen w-screen text-secondary-foreground">
      <div className="absolute left-4 right-4 top-4 flex justify-between text-lg md:left-8 md:right-8">
        <span>{title}</span>
        <span className="text-muted-foreground">
          <Link href={SLIDE_URI}>{SLIDE_URI_TITLE}</Link>
        </span>
      </div>
      <div className="flex min-h-screen flex-col justify-center">
        <div
          className={cn(
            "container relative grid h-[650px] max-h-[650px] grid-cols-1 items-center justify-center gap-8 xl:grid-cols-3",
            className,
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
