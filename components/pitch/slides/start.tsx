import Logo from "@/components/logo";
import Image from "next/image";

export function SlideStart() {
  return (
    <div className="min-h-screen">
      <span className="absolute right-4 md:right-8 top-4 text-lg">
        Pitch Interiorly/2024
      </span>

      <div className="container min-h-screen relative flex flex-col items-center justify-center">
        <Logo className="w-80 h-80 -mb-[100px]" fill="#e6e6e6" />
        <h1 className="text-[150px] font-semibold lg:text-[225px] select-none">
          Interiorly
        </h1>
      </div>
    </div>
  );
}
