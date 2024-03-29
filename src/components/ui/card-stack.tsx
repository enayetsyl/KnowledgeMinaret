"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CardStackCardProps, CardStackProps } from "@/type/type";

let interval: any;

export const CardStack = ({ items, offset, scaleFactor }: CardStackProps) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<CardStackCardProps[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: CardStackCardProps[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative  h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-black h-60 w-80 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-white/[0.5] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div
              className="font-normal text-white/80 
            line-clamp-3 text-ellipsis overflow-x-hidden sm:line-clamp-none sm:overflow-x-visible
            dark:text-neutral-200"
            >
              {card.content}
            </div>
            <div>
              <p
                className="text-white/80 text-lg font-medium 
              
              dark:text-white"
              >
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
