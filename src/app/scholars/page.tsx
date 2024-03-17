import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import HalaqaPlace from "./HalaqaPlace";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import ScholarShowcase from "./ScholarShowcase";
import EndMessage from "./EndMessage";

const Scholars = () => {
  return (
    <div className="bg-slate-950 text-white ">
      <Navbar />
      <Hero />
      <HalaqaPlace />
      <BackgroundBeams />
      <ScholarShowcase />
      <EndMessage href="/blog" />
    </div>
  );
};

export default Scholars;
