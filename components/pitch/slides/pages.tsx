import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import DashboardScreen from "@/public/images/screens/dashboard.png";
import LoginScreen from "@/public/images/screens/login.png";
import RegisterScreen from "@/public/images/screens/register.png";
import SettingsScreen from "@/public/images/screens/settings.png";

export function SlidePages() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Pages</span>
        <span className="text-[#878787]">
          <Link href="/">interiorly.ai</Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-0 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="space-y-8">
            <Card className="min-h-[350px] py-3 flex flex-col items-center  space-y-3">
              <h2 className="text-xl">Dashboard Page</h2>
              <Image
                src={DashboardScreen}
                alt="Dashboard Screen"
                className="w-4/5  rounded-lg"
                quality={100}
                width={400}
                height={400}
              />
            </Card>
            <Card className="min-h-[350px] py-3 flex flex-col items-center space-y-3">
              <h2 className="text-xl">Settings Page</h2>
              <Image
                src={SettingsScreen}
                alt="Settings Screen"
                className="w-4/5  rounded-lg"
                quality={100}
                width={400}
                height={400}
              />
            </Card>
          </div>
          <div className="space-y-8">
            <Card className="min-h-[350px] py-3 flex flex-col items-center  space-y-3">
              <h2 className="text-xl">Login Page</h2>
              <Image
                src={LoginScreen}
                alt="Login Screen"
                className="w-4/5  rounded-lg"
                quality={100}
                width={400}
                height={400}
              />
            </Card>
            <Card className="min-h-[350px] py-3 flex flex-col items-center space-y-3">
              <h2 className="text-xl">Register Page</h2>
              <Image
                src={RegisterScreen}
                alt="Register Screen"
                className="w-4/5  rounded-lg"
                quality={100}
                width={400}
                height={400}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
