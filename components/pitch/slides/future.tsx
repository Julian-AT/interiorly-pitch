import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import LivingRoom from "@/public/images/livingroom.jpg";
import IphoneMockup from "@/public/images/iphone-mockup.png";
import NodeAPISnippet from "@/public/images/code_node.png";
import HTTPAPISnippet from "@/public/images/code_http.png";
import Img2ImgFirst from "@/public/images/img2img_first.png";
import Img2ImgAfter from "@/public/images/img2img_after.png";
import Img2ImgFirst2 from "@/public/images/img2img_first_2.png";
import Img2ImgAfter2 from "@/public/images/img2img_after_2.png";
import Panorama1 from "@/public/images/panorama_1.jpg";
import Panorama2 from "@/public/images/panorama_2.jpeg";
import { IconChevronRight } from "@/components/icons";

export function SlideFuture() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Whats coming next</span>
        <span className="text-[#878787]">
          <Link href="/">interiorly.ai</Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="space-y-8">
            <Card className="min-h-[350px] py-3 flex flex-col items-center  space-y-3">
              <h2 className="text-xl">Node API</h2>
              <Image
                src={NodeAPISnippet}
                alt="Interiorly NPM Snippet"
                className="w-64 rounded-lg border"
                quality={100}
                width={400}
                height={400}
              />
            </Card>
            <Card className="min-h-[350px] py-3 flex flex-col items-center space-y-3">
              <h2 className="text-xl">Image To Image Model</h2>
              <div className="flex flex-col justify-center items-center space-y-3">
                <div className="flex h-full space-x-3 items-center justify-center">
                  <Image
                    src={Img2ImgFirst}
                    alt="img2img first"
                    className="w-40 rounded-lg border "
                  />
                  <IconChevronRight className="w-6 h-6" />
                  <Image
                    src={Img2ImgAfter}
                    alt="img2img after"
                    className="w-40 rounded-lg border "
                  />
                </div>
                <div className="flex h-full space-x-3 items-center justify-center">
                  <Image
                    src={Img2ImgFirst2}
                    alt="img2img first"
                    className="w-40 rounded-lg border "
                  />
                  <IconChevronRight className="w-6 h-6" />
                  <Image
                    src={Img2ImgAfter2}
                    alt="img2img first"
                    className="w-40 rounded-lg border "
                  />
                </div>
              </div>
            </Card>
          </div>
          <div className="space-y-8">
            <Card className="min-h-[350px] py-3 flex flex-col items-center  space-y-3">
              <h2 className="text-xl">HTTP API</h2>
              <Image
                src={HTTPAPISnippet}
                alt="Interiorly NPM Snippet"
                className="w-64 rounded-lg border"
                quality={100}
                width={400}
                height={400}
              />
            </Card>
            <Card className="min-h-[350px] py-3 flex flex-col items-center space-y-3">
              <h2 className="text-xl">360° Immersive Experience</h2>
              <div className="flex flex-col justify-center items-center space-y-3.5">
                <div className="flex h-full space-x-4 items-center justify-center">
                  <Image
                    src={Panorama1}
                    alt="img2img after"
                    className="w-3/4 rounded-lg border "
                  />
                </div>
                <div className="flex h-full space-x-3 items-center justify-center">
                  <Image
                    src={Panorama2}
                    alt="img2img first"
                    className="w-3/4 rounded-lg border "
                  />
                </div>
              </div>
            </Card>
          </div>

          <div className="ml-auto w-full max-w-[820px] h-full border border-border rounded-xl p-6 bg-[#0C0C0C]">
            <h2 className="mb-24 block text-xl">Native app</h2>
            <span />
            <Image src={IphoneMockup} width={698} alt="App" quality={100} />
          </div>
        </div>
      </div>
    </div>
  );
}
