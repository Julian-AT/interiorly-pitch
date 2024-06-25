import Image, { StaticImageData } from "next/image";
import { Card } from "@/components/ui/card";
import DashboardScreen from "@/public/images/screens/dashboard.png";
import LoginScreen from "@/public/images/screens/login.png";
import RegisterScreen from "@/public/images/screens/register.png";
import SettingsScreen from "@/public/images/screens/settings.png";
import SlideShell from "@/components/pitch/slide-shell";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";

export function SlidePages() {
  const t = useTranslations("slide_pages");

  const screens = [
    {
      image: DashboardScreen,
      title: t("pages.page_1.title"),
    },
    {
      image: SettingsScreen,
      title: t("pages.page_2.title"),
    },
    {
      image: LoginScreen,
      title: t("pages.page_3.title"),
    },
    {
      image: RegisterScreen,
      title: t("pages.page_4.title"),
    },
  ];

  return (
    <SlideShell title={t("title")} className="xl:grid-cols-2">
      {screens.map(
        (screen: { image: StaticImageData; title: string }, index: number) => (
          <Dialog key={index}>
            <DialogTrigger className="relative h-full">
              <Card
                className="flex h-full flex-col items-center gap-3 py-3"
                key={index}
              >
                <h2 className="text-xl">{screen.title}</h2>
                <Image
                  src={screen.image}
                  alt={screen.title}
                  className="rounded-lg"
                  width={400}
                  height={250}
                  quality={100}
                />
              </Card>
            </DialogTrigger>
            <DialogContent className="w-full max-w-screen-xl">
              <DialogHeader>
                <DialogDescription>
                  <Image
                    src={screen.image}
                    alt={screen.title}
                    className="w-screen rounded-lg object-cover p-3"
                    quality={100}
                  />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ),
      )}
    </SlideShell>
  );
}
