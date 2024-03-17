import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import React from "react";

const Parents = () => {
  return (
    <div className="flex items-center justify-center bg-slate-950 h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="You Honor Your Parents "
        revealText="You will go to Paradise "
      >
        <TextRevealCardTitle>
          Guidelines for Interacting with Your Parents.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          For your Lord has decreed that you worship none but Him. And honor
          your parents. If one or both of them reach old age in your care, never
          say to them ˹even˺ ‘uff,’ nor yell at them. Rather, address them
          respectfully. [17:23]
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
};

export default Parents;
