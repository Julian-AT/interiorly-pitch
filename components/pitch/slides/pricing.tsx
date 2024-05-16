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
      name: "Flexible",
      desc: "Easily adaptable to diverse design preferences and requirements.",
      icon: <IconStack className="w-7 h-7" />,
    },
    {
      name: "Smooth",
      desc: " Seamless user experience with intuitive navigation and interactions.",
      icon: <IconSparkles className="w-7 h-7" />,
    },
    {
      name: "Secure",
      desc: "Ensures data privacy and protection against unauthorized access.",
      icon: <IconSecure className="w-7 h-7" />,
    },
  ];

  const plans = [
    t("subscriptions.subscription_1"),
    t("subscriptions.subscription_2"),
    t("subscriptions.subscription_3"),
  ];

  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Subsciption Model</span>
        <span className="text-[#878787]">
          <Link href="/">interiorly.ai</Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="px-4 md:px-0 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="mb-4">
            <h2 className="text-2xl">Plans</h2>
          </div>
          <div className="space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
            {plans.map((item: any, idx) => (
              <Card
                key={idx}
                className="relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2"
              >
                <div>
                  <span className="text-xl font-medium">{item.title}</span>
                  <div className="mt-4 text-3xl font-semibold">
                    {item.price !== "Custom" && "$"}
                    {item.price}
                    {item.price !== "Custom" ? (
                      <span className="text-xl ml-1 text-[#878787] font-normal">
                        /mo
                      </span>
                    ) : (
                      <span className="text-xl ml-1 text-[#878787] font-normal">
                        Contact for a quote
                      </span>
                    )}
                  </div>
                </div>
                <ul className="py-8 space-y-3">
                  {/* {item.features.map((featureItem: any, idx: number) => (
                    <li key={idx} className="flex items-center gap-5">
                      {featureItem.included ? (
                        <IconCheck className="w-5 h-5 text-[#2DCE89]" />
                      ) : (
                        <span className="w-5 h-5rounded-full">
                          <IconX className="w-5 h-5 text-[#FF4D4F]" />
                        </span>
                      )}
                      {featureItem.feature}
                    </li>
                  ))} */}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-10 mb-4">
            <h2 className="text-2xl">Featuress</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 px-4 md:px-0 md:pt-0">
            {features.map((item, idx) => (
              <Card key={idx} className="flex gap-x-3 py-3">
                <div className="flex-none bg-secondary m-3 my-auto rounded-full flex items-center justify-center w-12 h-12">
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
