import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const page = () => {
  const items = portfolioConfig.about.hobbies.map((hobby) => ({ hobby }));

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-10 overflow-hidden text-white">
      <Badge variant="secondary" className="gap-1.5 py-1 mb-4 ">
        <User2 className="h-4 w-4" />
        About me
      </Badge>
      <div className="flex flex-col gap-5 text-white mb-8 ">
        <Heading>
          {portfolioConfig.title} And Web <br /> Developer, Based In{" "}
          {portfolioConfig.about.personalInfo.nationality}.
        </Heading>

        <FramerWrapper y={0} x={100}>
          <p className=" font-poppins text-xl w-full text-white max-sm:text-lg ">
            {portfolioConfig.about.bio}
          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper
        className="w-full flex flex-row text-white justify-between max-lg:flex-col mb-8 "
        y={100}
        delay={0.3}
      >
        <Aboutfooter />
      </FramerWrapper>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-white font-semibold flex icon_underline relative max-sm:text-2xl mb-4 ">
          {" "}
          <Heart className="h-8 w-8 " /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-white pt-3 max-lg:justify-start "
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
