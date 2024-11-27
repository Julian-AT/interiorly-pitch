"use client";

import { motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconChevronLeft, IconChevronRight } from "@/components/icons";
import { cn } from "@/lib/utils";
import LanguageSelectionDropdown from "@/components/pitch/language-dropdown";
import { Separator } from "@/components/ui/separator";
import InteriorlyLogoSVG from "@/public/images/logo.svg";
import Image from "next/image";

type CarouselToolbarProps = {
  api: any;
};

export function CarouselToolbar({ api }: CarouselToolbarProps) {
  useHotkeys("arrowRight", () => api.scrollNext(), [api]);
  useHotkeys("arrowLeft", () => api.scrollPrev(), [api]);

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 flex justify-center"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        delay: 0.2,
      }}
    >
      <TooltipProvider delayDuration={20}>
        <div className="mb-8 flex h-10 items-center space-x-3 rounded-2xl border border-[#2C2C2C] px-4 py-2 backdrop-blur-lg backdrop-filter dark:bg-[#1A1A1A]/80">
          <Image
            src={InteriorlyLogoSVG}
            alt="Interiorly Logo"
            className="-mr-1.5 h-6 w-6 rounded-full"
          />
          <span className="relative flex gap-1 text-nowrap text-[#878787]">
            Interiorly AI Pitch
          </span>
          <Separator orientation="vertical" />
          <LanguageSelectionDropdown />
          <Separator orientation="vertical" />
          <div className="flex items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  disabled={!api?.canScrollPrev}
                  className={cn(!api?.canScrollPrev && "opacity-50")}
                  onClick={() => {
                    api.scrollPrev();
                  }}
                >
                  <IconChevronLeft className="h-5 w-5 text-[#878787]" />
                </button>
              </TooltipTrigger>
              <TooltipContent className="rounded-sm px-3 py-1" sideOffset={25}>
                <span className="text-xs">Vorherige Slide</span>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  disabled={!api?.canScrollNext}
                  className={cn(!api?.canScrollNext && "opacity-50")}
                  onClick={() => {
                    api.scrollNext();
                  }}
                >
                  <IconChevronRight className="h-5 w-5 text-[#878787]" />
                </button>
              </TooltipTrigger>
              <TooltipContent className="rounded-sm px-3 py-1" sideOffset={25}>
                <span className="text-xs">Nächste slide</span>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </TooltipProvider>
    </motion.div>
  );
}
