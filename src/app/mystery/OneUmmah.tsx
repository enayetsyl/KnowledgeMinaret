"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { globeConfig, sampleArcs } from "@/constant";

const World = dynamic(
  () => import("../../components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

const OneUmmah = () => {
  return (
    <>
      <div className="mt-32 max-w-4xl mx-auto">
        <h1 className="px-10 text-5xl text-center pb-10">
          Help your brother's worldwide
        </h1>
        <p className="text-white/80 px-10">
          You see the believers as regards their being merciful among themselves
          and showing love among themselves and being kind, resembling one body,
          so that, if any part of the body is not well then the whole body
          shares the sleeplessness (insomnia) and fever with it.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center  h-screen md:h-auto  relative w-full">
        <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
          <World data={sampleArcs} globeConfig={globeConfig} />;
        </div>
      </div>
    </>
  );
};

export default OneUmmah;
