import { MaskContainer } from "@/components/ui/svg-mask-effect";
import React from "react";

const GoodDeed = () => {
  return (
    <div className="h-[40rem] w-full  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            Do Good Deeds.
          </p>
        }
        className="h-[40rem] border rounded-md"
      >
        But those who believe and do deeds of righteousness, We shall{" "}
        <span className="text-black">admit</span> them to{" "}
        <span className="text-black">Gardens</span> under which rivers flow
        (i.e. in Paradise) to dwell therein{" "}
        <span className="text-black">forever. </span>4:122 <br />
        <br />
        Those who <span className="text-black">believe</span> and do righteous
        deeds (will be) in the flowering{" "}
        <span className="text-black">meadows</span> of the Gardens (Paradise).
        They shall have{" "}
        <span className="text-black">whatsoever they desire</span> with their
        Lord.42:22
      </MaskContainer>
    </div>
  );
};

export default GoodDeed;
