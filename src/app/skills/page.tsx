import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const skillPage = () => {
  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden text-white">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <LightbulbIcon className="w-4 h-4" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper y={0} x={200} className="mb-8">
          <p className="font-poppins text-xl w-full text-white max-sm:text-lg">
          <strong className="text-blue-600 font-bold">Early in the game, but playing to win.</strong> I build web apps with React, Next.js, TypeScript, and Node.js, with a strong grip on responsive design and performance. I don&apos;t just code websites — I craft experiences. Clean UI, clean code, no shortcuts. Let&apos;s build things that break the noise.


          </p>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.3} className="block w-full mb-8">
          <h1 className="gap-2 text-2xl font-poppins text-white font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Programming Languages
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.programmingLanguages} />
          </div>
        </FramerWrapper>
        <FramerWrapper className="block w-full mb-8" y={100} delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-white font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Framework/Libraries
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.frameworks} />
          </div>
        </FramerWrapper>
        <FramerWrapper className="block w-full" y={100} delay={0.34}>
          <h1 className="gap-2 text-2xl font-poppins text-white font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Tools & Technologies
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.tools} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default skillPage;
