import React from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import Eren from "@/public/images/team/eren.jpg";
import Fabian from "@/public/images/team/Fabian.jpg";
import Julian from "@/public/images/team/julian.jpg";
import LivingRoom from "@/public/images/livingroom.png";
import Image from "next/image";
import CursorEren from "@/public/images/cursor_eren.png";
import CursorJulian from "@/public/images/cursor_julian.png";
import { Card } from "../pitch/ui";

const RealtimeCollaboration = () => {
  return (
    <Card className="flex flex-col w-full justify-start">
      <div className="flex justify-between items-center w-full">
        <span className="font-semibold flex items-center gap-2">
          <Image
            src={LivingRoom}
            alt="Workspace Logo"
            className="w-10 h-10 rounded-full border-2 border-[#878787]/50 object-cover"
          />
          Workspace
        </span>
        <div className="flex -space-x-4 rtl:space-x-reverse">
          <Image
            src={Eren}
            alt="Eren Gülüm"
            width={40}
            height={40}
            className="rounded-full w-10 h-10 object-cover border-2 border-green-500"
          />
          <Image
            src={Fabian}
            alt="Fabian Adametz"
            width={40}
            height={40}
            className="rounded-full w-10 h-10 object-cover border-2 border-orange-500"
          />
          <Image
            src={Julian}
            alt="Julian Schmidt"
            width={40}
            height={40}
            className="rounded-full w-10 h-10 object-cover border-2 border-red-500"
          />
          <a
            className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-[#121212] border-2 border-[#878787]/50 rounded-full hover:bg-[#121212]/50 dark:border-gray-800"
            href="#"
          >
            +3
          </a>
        </div>
      </div>
      <div className="w-full relative flex flex-col gap-2.5">
        <div className="absolute h-full w-full bg-gradient-to-t from-background to-transparent from-[10%]" />
        <div className="relative">
          <Image
            src={CursorEren}
            alt="Cursor Eren"
            className="absolute w-32 ml-[20%] mt-[60%]"
          />
          <Image
            src={CursorJulian}
            alt="Cursor Julian"
            className="absolute w-32 ml-[40%] mt-[10%]"
          />
        </div>
        <div className="h-2 rounded-full bg-secondary" />
        <div className="h-2 w-3/4 rounded-full bg-secondary" />
        <div className="h-2 rounded-full bg-secondary" />
        <div className="h-2 w-10/12 rounded-full bg-secondary" />
        <div className="h-48 rounded-lg bg-secondary" />
        <div className="h-2 rounded-full bg-secondary" />
        <div className="h-2 w-4/5 rounded-full bg-secondary" />
        <div className="h-2 rounded-full bg-secondary" />
        <div className="h-2 w-5/6 rounded-full bg-secondary" />
        <div className="h-2 rounded-full bg-secondary" />
        <div className="h-2 rounded-full bg-secondary" />
        <div className="h-2 rounded-full bg-secondary" />
        <div className="h-2 rounded-full bg-secondary" />
        <div className="h-2 rounded-full bg-secondary" />
      </div>
    </Card>
  );
};

export default RealtimeCollaboration;
