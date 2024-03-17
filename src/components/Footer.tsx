import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { homePageFooterPeopleInfo, homePageFooterWords } from "@/constant";

const Footer = () => {
  return (
    <div className="pb-10">
      <div className="pb-10">
        <TypewriterEffect words={homePageFooterWords} />
      </div>
      <div>
        <h1 className="text-center pb-10">Hover over image to know details.</h1>
      </div>
      <div className="flex flex-row items-center justify-center w-full">
        <AnimatedTooltip items={homePageFooterPeopleInfo} />
      </div>
    </div>
  );
};

export default Footer;
