import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import CreateWorkspace from "@/public/images/screens/create-workspace.png";
import CreateFolder from "@/public/images/screens/create-folder.png";
import Trash from "@/public/images/screens/trash.png";
import WorkspaceSettings from "@/public/images/screens/workspace-settings.png";
import SlideShell from "@/components/pitch/slide-shell";

export function SlideScreenshots() {
  return (
    <SlideShell title="Pages">
      <Card className="py-3 flex flex-col items-center space-y-3">
        <h2 className="text-xl">Workspace Settings</h2>
        <Image
          src={WorkspaceSettings}
          alt="Workspace Settings"
          className="w-3/4 rounded-lg"
          quality={100}
          width={200}
          height={200}
        />
      </Card>
      <Card className="py-3 flex flex-col items-center space-y-3">
        <h2 className="text-xl">Trash</h2>
        <Image
          src={Trash}
          alt="Trash"
          className="w-4/5  rounded-lg"
          quality={100}
          width={400}
          height={400}
        />
      </Card>
      <Card className="min-h-[350px] py-3 flex flex-col items-center  space-y-3">
        <h2 className="text-xl">Create Folder</h2>
        <Image
          src={CreateFolder}
          alt="Create Folder"
          className="w-4/5  rounded-lg"
          quality={100}
          width={400}
          height={400}
        />
      </Card>
      <Card className="min-h-[350px] py-3 flex flex-col items-center space-y-3">
        <h2 className="text-xl">Create Workspace</h2>
        <Image
          src={CreateWorkspace}
          alt="Create Workspace"
          className="w-4/5  rounded-lg"
          quality={100}
          width={400}
          height={400}
        />
      </Card>
    </SlideShell>
  );
}
