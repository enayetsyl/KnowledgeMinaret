import React from "react";
import Header from "./Header";
import { FirstSection } from "./FirstSection";
import SecondSection from "./SecondSection";
import EndMessage from "../scholars/EndMessage";
import HeroSection from "./HeroSection";
import Navbar from "../scholars/Navbar";

const Blog = () => {
  return (
    <div className="bg-slate-950 text-white ">
      <Navbar />
      <Header />
      <FirstSection />
      <SecondSection />
      <HeroSection />
      <div className="mt-20">
        <EndMessage href="/mystery" />
      </div>
    </div>
  );
};

export default Blog;
