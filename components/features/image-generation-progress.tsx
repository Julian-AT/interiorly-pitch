import { CircularProgress, Chip } from "@nextui-org/react";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  progress: number;
  message: string;
}

export function ImageGenerationProgress({
  progress,
  message,
  ...props
}: ProgressProps) {
  return (
    <div {...props} className="flex flex-col items-center justify-center">
      <CircularProgress
        classNames={{
          svg: "w-40 h-40 drop-shadow-md mx-auto",
          indicator: "stroke-primary",
          track: "stroke-secondary",
          value: "text-3xl font-semibold text-primary",
        }}
        value={progress}
        strokeWidth={2.5}
        showValueLabel={true}
        aria-label="Generating Images..."
      />
      <Chip
        classNames={{
          base: "border-1 border-white/30 mt-5",
          content:
            "text-secondary-foreground text-lg font-semibold my-3 border-border",
        }}
        variant="bordered"
      >
        {message}
      </Chip>
    </div>
  );
}
