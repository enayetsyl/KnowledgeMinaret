import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const HeroSection = () => {
  const images = [
    "https://images.pexels.com/photos/337904/pexels-photo-337904.jpeg?cs=srgb&dl=pexels-pavlo-luchkovski-337904.jpg&fm=jpg",
    'https://t4.ftcdn.net/jpg/03/17/31/99/360_F_317319974_fzB2wFm7HEexuMfQBxzLW2uTfM9jByuh.jpg',
    "https://i.pinimg.com/736x/f9/8d/f8/f98df89eb8c262c811c40ef6aeab18c4.jpg",
    "https://img.freepik.com/free-photo/lit-up-mosque-with-crescent-moon-top_1340-22860.jpg",
  
    "https://www.learnreligions.com/thmb/8WDxBR6RENQkTkdpTml9jwaTJC4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/united-arab-emirates--abu-dhabi--sheikh-zayed-grand-mosque-on-cloudy-day-528823395-59935f739abed50010c96277.jpg",
    "https://sites.lsa.umich.edu/khamseen/wp-content/uploads/sites/1139/2021/07/cgruber-masjid-thumbnail-image_900x600px.jpg"
   
  ];
  const words = [
    {text: 'G'},
    {text: 'a'},
    {text: 'l'},
    {text: 'l'},
    {text: 'e'},
    {text: 'r'},
    {text: 'y'},
  ]
  return (
    <div className="mt-40 mb-20">
      <div className="pb-20">
        <TypewriterEffect words={words}/>
      </div>
       <div className="max-w-7xl mx-auto rounded-xl">
       <ImagesSlider className="h-[40rem] rounded-xl" images={images}
       
       >
        <div className="bg-zinc-200 z-10 rounded-xl p-3">
        <p className=" text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text font-bold text-5xl text-center">Mosque Gallery.</p>
        </div>
  
      {/* <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div> */}
    </ImagesSlider>
       </div>
    </div>
  )
}

export default HeroSection