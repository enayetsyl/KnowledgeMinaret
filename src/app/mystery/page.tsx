import React from "react";
import Spotlight from "./SpotlightSec";
import GoodDeed from "./GoodDeed";
import GoodDeedList from "./GoodDeedList";
import Parents from "./Parents";
import HiddenSadaqah from "./HiddenSadaqah";
import OneUmmah from "./OneUmmah";
import EndMessage from "../scholars/EndMessage";
import Navbar from "../scholars/Navbar";

const MysteryPage = () => {
  return (
    <div className="bg-slate-950 text-white ">
      <Navbar />
      <Spotlight />
      <GoodDeed />
      <GoodDeedList />
      <Parents />
      <HiddenSadaqah />
      <OneUmmah />
      <EndMessage href="/" />
    </div>
  );
};

export default MysteryPage;
