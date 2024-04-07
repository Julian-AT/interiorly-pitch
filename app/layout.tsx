import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ImageGenerationProvider } from "@/lib/hooks/use-images";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface RootLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ImageGenerationProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ImageGenerationProvider>
      </body>
    </html>
  );
}
