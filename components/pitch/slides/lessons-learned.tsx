import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  IconBeaker,
  IconChat,
  IconCollaboration,
  IconCommandLine,
  IconImage,
  IconSecure,
  IconSparkles,
} from "@/components/icons";
import Eren from "@/public/images/team/eren.jpg";
import Fabian from "@/public/images/team/Fabian.jpg";
import Julian from "@/public/images/team/Julian.jpg";
import Image, { StaticImageData } from "next/image";
import { Separator } from "@/components/ui/separator";

interface LessonLearnedItem {
  description: string;
}

interface LessonLearned {
  name: string;
  image: StaticImageData;
  description: string;
  items: LessonLearnedItem[];
}

const lessonsLearned: LessonLearned[] = [
  {
    name: "Eren Gülüm",
    image: Eren,
    description: "Junior Full-Stack Developer",
    items: [
      {
        description:
          "Communication is crucial and can increases the quality of work dramatically.",
      },
      {
        description:
          "Full-Stack Development can be a tedious but rewarding task.",
      },
      {
        description:
          "Managing your Work-time, School-time and Private-time is as crucial but even more challenging then communication.",
      },
    ],
  },
  {
    name: `Julian Schmidt`,
    image: Julian,
    description: "Lead Full-Stack Developer",
    items: [
      {
        description:
          "Communication is crucial and can increases the quality of work dramatically.",
      },
      {
        description:
          "Full-Stack Development can be a tedious but rewarding task.",
      },
      {
        description:
          "Managing your Work-time, School-time and Private-time is as crucial but even more challenging then communication.",
      },
    ],
  },
  {
    name: "Fabian Adametz",
    image: Fabian,
    description: "AI & Project Management",
    items: [
      {
        description:
          "Communication is crucial and can increases the quality of work dramatically.",
      },
      {
        description:
          "Full-Stack Development can be a tedious but rewarding task.",
      },
      {
        description:
          "Managing your Work-time, School-time and Private-time is as crucial but even more challenging then communication.",
      },
    ],
  },
];

export function SlideLessonsLearned() {
  return (
    <div className="min-h-screen relative w-screen flex">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Lessons Learned</span>
        <span className="text-muted-foreground">
          <Link href="/">interiorly.ai</Link>
        </span>
      </div>
      <div className="container min-h-screen flex flex-col gap-8 items-center justify-center">
        <div className="grid md:grid-cols-3 gap-8 md:px-0 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0 relative">
          {lessonsLearned.map((item, idx) => (
            <Card
              className="flex flex-col justify-center items-center space-y-5 p-5"
              key={idx}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                quality={100}
                className="rounded-full w-14 h-14 object-cover"
              />
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl  font-semibold">{item.name}</h2>
                <span className="text-secondary-foreground/50 flex items-center gap-1">
                  {item.description}
                  {item.name === "Fabian Adametz" ? (
                    <IconBeaker className="w-4 h-4" />
                  ) : item.name === "Eren Gülüm" ? (
                    <IconSecure className="w-4 h-4" />
                  ) : (
                    <IconCommandLine className="w-4 h-4" />
                  )}
                </span>
              </div>
              {item.items.map((lesson, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center space-x-3"
                >
                  <div className="w-12 my-5">
                    <Separator />
                  </div>
                  <q className="text-[#e6e6e6] text-center">
                    {lesson.description}
                  </q>
                </div>
              ))}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
