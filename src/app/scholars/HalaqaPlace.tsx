import { LayoutGrid } from "@/components/ui/layout-grid";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { scholarPageHalaqaPlaceWords } from "@/constant";
import React from "react";

const HalaqaPlace = () => {
  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">As Sunnah Trust</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A place established by Late Dr. Abdullah Jahangir. Its a research and
          eduction center.
        </p>
      </div>
    );
  };

  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">As Sunnah Foundation</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          It is established by Ahmadullah. It is mainly charitable organization
          but do diverse work.
        </p>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">
          Institute for Community Development
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Established by Eng. Enamul Haque. It mainly work on arranging regular
          islamic classes both online and offline.
        </p>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Al Majhud</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          This is a multi purpose charitable organization. It mainly promote
          education but regularly involve with other charitable activities also.
        </p>
      </div>
    );
  };
  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
        "https://img.freepik.com/free-photo/lit-up-mosque-with-crescent-moon-top_1340-22860.jpg",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQl9S4bYKLt5U-z-KVCqZUrkLmHePQ69VmAQ&usqp=CAU",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "https://cdn.britannica.com/09/189809-050-FAC505B0/Jama-Masjid-Delhi.jpg",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "https://www.shutterstock.com/image-photo/almasjid-annabawi-maghrib-prayer-260nw-1148506721.jpg",
    },
  ];
  return (
    <div>
      <div className="mx-10 md:mx-20 lg:mx-40 pb-20">
        <TypewriterEffect words={scholarPageHalaqaPlaceWords} />
      </div>
      <div className="h-screen py-20 w-full">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
};

export default HalaqaPlace;
