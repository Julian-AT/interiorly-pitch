import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  IconCheck,
  IconSecure,
  IconSparkles,
  IconStack,
  IconX,
} from "@/components/icons";
import { useTranslations } from "next-intl";

export function SlideSubscription() {
  const t = useTranslations("slide_subscriptions");

  const features = [
    {
      name: t("goals.goal_1.title"),
      desc: t("goals.goal_1.text"),
      icon: <IconStack className="h-7 w-7" />,
    },
    {
      name: t("goals.goal_2.title"),
      desc: t("goals.goal_2.text"),
      icon: <IconSparkles className="h-7 w-7" />,
    },
    {
      name: t("goals.goal_3.title"),
      desc: t("goals.goal_3.text"),
      icon: <IconSecure className="h-7 w-7" />,
    },
  ];

  const plans: any[] = [];

  Array.from({ length: 3 }).forEach((_, idx) => {
    idx = idx + 1;
    plans.push({
      title: t(`subscriptions.subscription_${idx}.title`),
      price: t(`subscriptions.subscription_${idx}.price`),
      features: Array.from({ length: 8 }).map((value, feature_idx) => {
        feature_idx = feature_idx + 1;
        return {
          feature: t(
            `subscriptions.subscription_${idx}.features.feature_${feature_idx}.feature`,
          ),
          included:
            t(
              `subscriptions.subscription_${idx}.features.feature_${feature_idx}.included`,
            ) === "true",
        };
      }),
    });
  });

  return (
    <div className="relative min-h-screen w-screen">
      <div className="absolute left-4 right-4 top-4 flex justify-between text-lg md:left-8 md:right-8">
        <span>Subsciption Model</span>
        <span className="text-[#878787]">
          <Link href="/">interiorly.ai</Link>
        </span>
      </div>
      <div className="container flex min-h-screen flex-col justify-center">
        <div className="h-[580px] overflow-auto px-4 pb-[100px] md:h-auto md:px-0 md:pb-0 md:pt-0">
          <div className="mb-4">
            <h2 className="text-2xl">Plans</h2>
          </div>
          <div className="justify-center gap-6 space-y-6 sm:grid sm:grid-cols-1 sm:space-y-0 lg:grid-cols-3">
            {plans.map((item: any, idx) => (
              <Card
                key={idx}
                className="relative flex flex-1 flex-col items-stretch rounded-xl border-2 p-8"
              >
                <div>
                  <span className="text-xl font-medium">{item.title}</span>
                  <div className="mt-4 text-3xl font-semibold">
                    {item.price !== "Custom" &&
                      item.price !== "Individuell" &&
                      "$"}
                    {item.price}
                    {item.price !== "Custom" && item.price !== "Individuell" ? (
                      <span className="ml-1 text-xl font-normal text-[#878787]">
                        /mo
                      </span>
                    ) : (
                      <span className="ml-1 text-xl font-normal text-[#878787]">
                        {item.price !== "Individuell"
                          ? "Contact for a quote"
                          : "Kontaktieren"}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="space-y-3 py-8">
                  {item.features.map((featureItem: any, idx: number) => (
                    <li key={idx} className="flex items-center gap-5">
                      {featureItem.included ? (
                        <IconCheck className="h-5 w-5 text-[#2DCE89]" />
                      ) : (
                        <span className="h-5rounded-full w-5">
                          <IconX className="h-5 w-5 text-[#FF4D4F]" />
                        </span>
                      )}
                      {featureItem.feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mb-4 mt-10">
            <h2 className="text-2xl">{t("goals.title")}</h2>
          </div>

          <div className="grid gap-5 px-4 md:grid-cols-3 md:px-0 md:pt-0">
            {features.map((item, idx) => (
              <Card key={idx} className="flex gap-x-3 py-3">
                <div className="m-3 my-auto flex h-12 w-12 flex-none items-center justify-center rounded-full bg-secondary">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xl font-medium">{item.name}</h4>
                  <p className="text-[#878787] md:text-sm">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
