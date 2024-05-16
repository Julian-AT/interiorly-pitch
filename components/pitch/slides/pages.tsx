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
            <DialogTrigger className="h-full relative">
              <Card
                className="py-3 flex flex-col items-center gap-3 h-full"
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
            <DialogContent className="max-w-screen-xl w-full">
              <DialogHeader>
                <DialogDescription>
                  <Image
                    src={screen.image}
                    alt={screen.title}
                    className="w-screen object-cover rounded-lg p-3"
                    quality={100}
                  />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )
      )}
    </SlideShell>
  );
}
