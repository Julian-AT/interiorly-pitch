import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLProps<HTMLDivElement> {}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center space-y-4 rounded-xl border border-border px-6 pb-6 pt-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Grid() {
  return (
    <div className="pointer-events-none absolute inset-0 flex justify-center">
      <div className="grid h-full w-full grid-cols-6 gap-3.5 px-4">
        <div className="border-r-[1px] border-secondary" />
        <div className="border-r-[1px] border-secondary" />
        <div className="border-r-[1px] border-secondary" />
        <div className="border-r-[1px] border-secondary" />
        <div className="border-r-[1px] border-secondary" />
      </div>
      <div className="absolute flex h-full w-full flex-col justify-between">
        <div className="border-t-[1px] border-secondary" />
        <div className="border-t-[1px] border-secondary" />
        <div className="border-t-[1px] border-secondary" />
        <div className="border-t-[1px] border-secondary" />
        <div className="border-t-[1px] border-secondary" />
      </div>
    </div>
  );
}
