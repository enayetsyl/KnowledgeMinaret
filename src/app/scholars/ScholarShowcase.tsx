import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import {
  scholarPageScholarShowcaseImages,
  scholarPageScholarShowcaseWords,
} from "@/constant";
import React from "react";

const ScholarShowcase = () => {
  return (
    <div className="space-y-16">
      <div>
        <TypewriterEffect words={scholarPageScholarShowcaseWords} />
      </div>
      <div>
        <ParallaxScroll images={scholarPageScholarShowcaseImages} />
      </div>
    </div>
  );
};

export default ScholarShowcase;
