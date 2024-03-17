import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import {
  blogPageHeroSectionImages,
  blogPageHeroSectionWords,
} from "@/constant";

const HeroSection = () => {
  return (
    <div className="mt-40 mb-20">
      <div className="pb-20">
        <TypewriterEffect words={blogPageHeroSectionWords} />
      </div>
      <div className="max-w-7xl mx-auto rounded-xl">
        <ImagesSlider
          className="h-[40rem] rounded-xl"
          images={blogPageHeroSectionImages}
        >
          <div className="bg-zinc-200 z-10 rounded-xl p-3">
            <p className=" text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text font-bold text-5xl text-center">
              Mosque Gallery.
            </p>
          </div>
        </ImagesSlider>
      </div>
    </div>
  );
};

export default HeroSection;
