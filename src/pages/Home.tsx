import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";

import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";
import SkillsChart from "@/components/SkillsChart";


export default function Home() {
  return (
    <>
      {/* LEFT SIDE  */}
      <FramerWrapper
        className=" h-full w-auto flex flex-col justify-start gap-4"
        y={0}
        x={-100}
      >
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
        </div>
        <DownLoadResumeBtn />
      </FramerWrapper>
      {/* RIGHT SIDE image  */}
      {/*<FramerWrapper
        className="h-full w-[47%] relative block   max-lg:hidden"
        y={0}
        x={100}
      >
        <HeroImage />
      </FramerWrapper>*/}
      <div className="w-full mt-2 flex justify-center">
        <SkillsChart />
      </div>

    </>
  );
}
