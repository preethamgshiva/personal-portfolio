import { cn } from "@/lib/utils";
import {
  Linkedin,
  Instagram,
  Github,
  Mail,
} from "lucide-react";
import { buttonVariants } from "./ui/button";

import FramerWrapper from "./animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const SocialLinks = () => {
  const links = [
    {
      name: "Linkedin",
      link: portfolioConfig.socialLinks.linkedin,
      icon: <Linkedin />,
    },
    {
      name: "Github",
      link: portfolioConfig.socialLinks.github,
      icon: <Github />,
    },
    {
      name: "Instagram",
      link: portfolioConfig.socialLinks.instagram,
      icon: <Instagram />,
    },
    {
      name: "Gmail",
      link: portfolioConfig.socialLinks.gmail,
      icon: <Mail />,
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={itm.link}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" })
              )}
            >
              {itm.icon}
            </a>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
