import { Folder, Paperclip, Search, Sheet, Trash, Users } from "lucide-react";
import OrbitingCircles from "./orbiting-circles";

export function WorkspaceOrbitingCircles() {
  return (
    <div className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center text-6xl font-semibold leading-none text-transparent from-white to-slate-900/10">
        Julian&apos;s Workspace
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Paperclip />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Users />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
      >
        <Search />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
        delay={20}
      >
        <Trash />
      </OrbitingCircles>
    </div>
  );
}
