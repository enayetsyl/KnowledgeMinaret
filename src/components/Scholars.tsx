import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { HoverEffect } from "./card-hover-effect";
import { homePageScholarInfo, homePageScholarWords } from "@/constant";

const Scholars = () => {
  return (
    <div className="mt-20">
      <div className="py-10">
        <TypewriterEffect words={homePageScholarWords} />
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={homePageScholarInfo} />
      </div>
    </div>
  );
};

export default Scholars;
