"use client";
import { cn } from "@/utils/cn";
import React from "react";

import {
  IconGeometry,
  IconGridGoldenratio,
  IconSquareRoot2,
  IconVaccine,
  IconWindmill,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { blogPageFirstSectionWords } from "@/constant";

export function FirstSection() {
  return (
    <div>
      <div className="py-20">
        <TypewriterEffect words={blogPageFirstSectionWords} />
      </div>
      <div>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white/60 dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-900 to-slate-500 flex-shrink-0" />
        <div className="w-full bg-gradient-to-r from-blue-900 to-slate-500 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white/60 dark:bg-black"
      >
        <div className="w-full bg-gradient-to-r from-slate-950 to-blue-500 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-slate-950 to-blue-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white/60 dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-slate-500 to-blue-800 flex-shrink-0" />
        <div className="w-full bg-gradient-to-r from-slate-500 to-blue-800 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-gradient-to-r from-blue-200 to-slate-500 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2 bg-blue-900"
      style={{
        background:
          "linear-gradient(-45deg, #020617, #1e3a8a, #64748b, #3b82f6)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-xl text-white/85">Medicine</h1>
        </div>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-slate-900 p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYr9mgIPH1FMiY6CSsM64zwPd-5xX3trI9Kvb-Y8rzEzUXBfIuylLQGn429DR6ugOISI&usqp=CAU"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-white/70 mt-4">
          Jabir ibn Hayyan (721-813)
        </p>
        <p className="border border-white/90 bg-gray-600 dark:bg-red-900/20 text-white/90 text-xs rounded-full px-2 py-0.5 mt-4">
          Chemistry
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-slate-900 p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="https://light2015blogdotorg.files.wordpress.com/2015/05/alhazen.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-white/70 mt-4">
          Ibn Al-Haitham (965-1040)
        </p>
        <p className="border border-white/90 bg-gray-600 dark:bg-green-900/20 text-white/90 text-xs rounded-full px-2 py-0.5 mt-4">
          Camera
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-slate-900 p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/Al-Zahrawi-2.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-white/70 mt-4">
          Al Zahrawi (936-1013).
        </p>
        <p className="border border-white/90 bg-gray-600 dark:bg-orange-900/20 text-white/90 text-xs rounded-full px-2 py-0.5 mt-4">
          Surgery
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-slate-900 dark:bg-black"
      >
        <Image
          src="https://mld1pu7wxny0.i.optimole.com/cb:5-JB~1625/w:727/h:1080/q:mauto/ig:avif/f:best/https://halalnomad.com/wp-content/uploads/2023/09/Muhammad-ibn-Musa-al-Khwarizmi.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-white/70">
          In the summer months, Arab deserts would dry up so Pīrūz Nahāvandi
          built the first windmill, which tapped on the only source of energy
          the desert could.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-slate-900 dark:bg-black"
      >
        <p className="text-xs text-white/70">Draw water</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-900 to-slate-950 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Kitāb al-Shakl al-qattā",
    description: (
      <span className="text-sm text-white/70">
        Book on the complete quadrilateral. A five-volume summary of
        trigonometry.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconGeometry className="h-4 w-4 text-white/90" />,
    link: "https://en.wikipedia.org/wiki/Nasir_al-Din_al-Tusi",
  },
  {
    title: "Book of Algebra ",
    description: (
      <span className="text-sm text-white/70">
        Al-Khwarizmi's algebra is the foundation and cornerstone of the
        sciences.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconSquareRoot2 className="h-4 w-4 text-white/90" />,
    link: "https://en.wikipedia.org/wiki/Al-Khwarizmi",
  },
  {
    title: "The Canon of Medicine",
    description: (
      <span className="text-sm text-white/70">
        Ibne Sina authored a five-volume medical encyclopedia.In arabic it is
        called al-Qānūn fī l-ṭibb.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconVaccine className="h-4 w-4 text-white/90" />,
    link: "https://en.wikipedia.org/wiki/Avicenna",
  },
  {
    title: "Powerful Golden Age Muslim Invention",
    description: (
      <span className="text-sm text-white/70">
        way ahead of their time, that have shaped our modern world today.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconGridGoldenratio className="h-4 w-4 text-white/90" />,
    link: "https://themuslimvibe.com/western-muslim-culture/top-10-muslim-inventions-in-history",
  },

  {
    title: "The windmill",
    description: (
      <span className="text-sm text-white/70">Pīrūz Nahāvandi (600-644).</span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconWindmill className="h-4 w-4 text-white/90" />,
    link: "https://ms.wikipedia.org/wiki/Abu_Lu%27lu%27ah",
  },
];
