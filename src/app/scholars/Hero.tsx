"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp"

const Hero = () => {
  const scholorName = [
    {
      name: 'Abdullah Jahangir'
    },
    {
      name: 'Saifullah Madani'
    },
    {
      name: 'Monjur E Elahi'
    },
    {
      name: 'Enamul Haque'
    },
    {
      name: 'Imam Hossain'
    },
    {
      name: 'Naseel Shahrukh'
    },
  ]

  const [currentNameIndex, setCurrentNameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex(prevIndex =>
        prevIndex === scholorName.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <span className="text-xl md:text-3xl font-bold block text-black">Our Scholor's</span> <br/>
        <span>{scholorName[currentNameIndex].name}</span>
      </motion.h1>
    </LampContainer>
    </div>
  )
}

export default Hero