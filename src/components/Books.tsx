import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { CardStack } from "./ui/card-stack";
import { homePageBooksWords } from "@/constant";

const Books = () => {
  const CARDS = [
    {
      id: 0,
      name: "Islami Akida",
      designation: "Dr. Khandaker Abdullah Jahangir",
      content: (
        <p>
          This is an amazing book that talks details about Islami aqida. It also
          details all the Sirk are Happening in our Country.
        </p>
      ),
    },
    {
      id: 1,
      name: "Aheiayus Sunan",
      designation: "Dr. Khandaker Abdullah Jahangir",
      content: (
        <p>
          This is an amazing book that talks details about the power of sunnah
          in our life. It also details all the Bidaha are Happening in our
          Country.
        </p>
      ),
    },
    {
      id: 2,
      name: "Hadiser Name Jaliati",
      designation: "Dr. Khandaker Abdullah Jahangir",
      content: (
        <p>
          This is an amazing book that talks details about Dayeef hadis. It also
          details all the Maudu hadis that are circulating in our country.
        </p>
      ),
    },
    {
      id: 3,
      name: "Islami Akida",
      designation: "Dr. Khandaker Abdullah Jahangir",
      content: (
        <p>
          This is an amazing book that talks details about Islami aqida. It also
          details all the Sirk are Happening in our Country.
        </p>
      ),
    },
    {
      id: 4,
      name: "Aheiayus Sunan",
      designation: "Dr. Khandaker Abdullah Jahangir",
      content: (
        <p>
          This is an amazing book that talks details about the power of sunnah
          in our life. It also details all the Bidaha are Happening in our
          Country.
        </p>
      ),
    },
    {
      id: 5,
      name: "Hadiser Name Jaliati",
      designation: "Dr. Khandaker Abdullah Jahangir",
      content: (
        <p>
          This is an amazing book that talks details about Dayeef hadis. It also
          details all the Maudu hadis that are circulating in our country.
        </p>
      ),
    },
  ];

  return (
    <div className="mt-10">
      <div>
        <TypewriterEffect words={homePageBooksWords} />
      </div>
      <div className=" h-[40rem] flex items-center justify-center w-full">
        <CardStack items={CARDS} />
      </div>
    </div>
  );
};

export default Books;
