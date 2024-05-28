import { IconBankNotes, IconPuzzlePiece } from "@/components/icons";
import { useTranslations } from "next-intl";
import SlideShell from "@/components/pitch/slide-shell";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Lightbulb } from "lucide-react";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

export function SlideProblemElevatorPitch() {
  const t = useTranslations("slide_problem");

  return (
    <SlideShell title={t("title")}>
      <div className="relative flex flex-col gap-3 w-full h-1/2  max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl ">
        <div>
          <Lightbulb className="w-16 h-16" />
        </div>
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter  ">
          Kreativität
        </p>
        <AnimatedGridPattern
          numSquares={10}
          maxOpacity={0.15}
          duration={1.5}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>
      <div className="relative flex flex-col gap-3 w-full h-1/2  max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl ">
        <div>
          <IconPuzzlePiece className="w-16 h-16" />
        </div>
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter  ">
          Komplexität
        </p>
        <AnimatedGridPattern
          numSquares={10}
          maxOpacity={0.15}
          duration={1.5}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>
      <div className="relative flex flex-col gap-3 w-full h-1/2  max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl ">
        <div>
          <IconBankNotes className="w-16 h-16" />
        </div>
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter  ">
          Kosten
        </p>
        <AnimatedGridPattern
          numSquares={10}
          maxOpacity={0.15}
          duration={1.5}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>
    </SlideShell>
  );
}
