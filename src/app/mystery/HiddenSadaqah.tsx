import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import React from "react";

const HiddenSadaqah = () => {
  return (
    <div className="border border-white/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-gray-300" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-gray-300" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-gray-300" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-gray-300" />

      <EvervaultCard text="Charity" />

      <h2 className="dark:text-white text-white mt-4 text-sm font-light">
        What you feed yourself is Charity. What you feed your child, your wife
        and your servant is Charity.
      </h2>
      <p className="text-base font-bold border dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-White dark:text-white px-2 py-0.5">
        Secret Charity
      </p>
    </div>
  );
};

export default HiddenSadaqah;
