import Image from "next/image";
import React from "react";
import LivingRoom from "@/public/images/rooms/livingroom.png";
import { IconDoubleCheck } from "@/components/icons";
import Julian from "@/public/images/team/Julian.jpg";
import Anthony from "@/public/images/team/Anthony.jpg";

interface ChatProps {
  message_text: string;
  delivered_indicator: string;
}

const Chat = ({ message_text, delivered_indicator }: ChatProps) => {
  return (
    <>
      <div className="flex gap-2.5 mr-3">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4  bg-[#1c1c1c] rounded-e-xl rounded-es-xl ">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
              <Image
                src={Anthony}
                alt="Anthony Owah"
                width={64}
                height={64}
                className="rounded-full w-8 h-8 object-cover col-span-1"
              />
              <span className="">Anthony Owah</span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                11:46
              </span>
            </div>
            <p className="text-sm font-normal text-[#878787]">{message_text}</p>
            <div className="group relative my-2.5">
              <div className="absolute w-full h-full bg-[#121212] opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <button
                  data-tooltip-target="download-image"
                  className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                    />
                  </svg>
                </button>
                <div
                  id="download-image"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Download image
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
              <Image
                src={LivingRoom}
                alt="Living Room"
                width={512}
                height={512}
                className="object-cover rounded-lg w-full"
              />
            </div>
            <span className="text-sm font-normal flex justify-end items-center text-[#878787]">
              {delivered_indicator} <IconDoubleCheck className="w-5 h-4" />
            </span>
          </div>
        </div>
      </div>
      {/* <div className="flex self-end gap-2.5 mr-3">
        <div className="flex flex-col gap-1 col-span-3">
          <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4  bg-[#1c1c1c] rounded-s-xl rounded-br-xl ">
            <div className="flex space-x-2 items-center justify-start mb-2">
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                11:50
              </span>
              <span className="">Julian Schmidt</span>
              <Image
                src={Julian}
                alt="Julian Schmidt"
                width={64}
                height={64}
                className="rounded-full w-8 h-8 object-cover"
              />
            </div>
            <p className="text-sm font-normal text-[#878787] text-right">
              Woah! I Love the color scheme 😍{" "}
            </p>
            <span className="text-sm font-normal flex justify-start items-center text-right mt-3 text-[#878787]">
              Sent <IconDoubleCheck className="w-4   h-4" />
            </span>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Chat;
