import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconUserQuestion,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { blogPageSecondSectionWords } from "@/constant";

const SecondSection = () => {
  return (
    <div className="mt-20">
      <div className="py-20">
        <TypewriterEffect words={blogPageSecondSectionWords} />
      </div>
      <div>
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              link={item.link}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default SecondSection;

const Skeleton = ({ image }: { image: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-800 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image
      src={image}
      alt={image}
      height={100}
      width={400}
      className="rounded-xl p-1 w-full object-cover"
    />
  </div>
);

const items = [
  {
    title: "Islam Question & Answer",
    description: "General Supervisor: Shaykh Muhammad Saalih al-Munajjid.",
    header: (
      <Skeleton image="https://islamqa.info/site/images/logo/social_share_image.png" />
    ),
    icon: <IconUserQuestion className="h-4 w-4 text-white" />,
    link: "https://islamqa.info/en",
    image: "",
  },
  {
    title: "As-Sunnah Foundation",
    description: " অলাভজনক শিক্ষা, দাওয়াহ ও সেবামূলক প্রতিষ্ঠান।",
    header: (
      <Skeleton image="https://media.licdn.com/dms/image/D560BAQEC3H9dFKKGwA/company-logo_200_200/0/1683007866919?e=2147483647&v=beta&t=rFtnKQN2zAqPlNZta8W45AzrvNzuqcGaAm-nLzOCAUw" />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://assunnahfoundation.org/",
  },
  {
    title: "Islamic Versity of Madinah",
    description: "An international Islamic university, leading in knowledge.",
    header: (
      <Skeleton image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRss4Vyqq5-E430jZwLlyPpSO34u8tsXUhCA4XcmUDdTAU_zar4IaE3bAUt_JxQynQPBbw&usqp=CAU" />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "https://iu.edu.sa/en-us",
  },
  {
    title: "Institute for Community Development",
    description:
      "A community of practicing muslims who are trying to follow the path of the Ahle Sunnah wal Jam’ah.",
    header: (
      <Skeleton image="https://img.sur.ly/thumbnails/620x343/i/icdbd.org.png" />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    link: "https://www.icdbd.org/",
  },
  {
    title: "International Open University",
    description: "Founded by Dr. Bilal Philips.",
    header: (
      <Skeleton image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStTEzgeX6r4jZ1GZNr26jLfi6g0-CHMbv4o5uT9MsqqJ314X3FE0PDrUwr9rm6NO9uhlk&usqp=CAU" />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    link: "https://iou.edu.gm/",
  },
  {
    title: "Masjid al-Haram",
    description:
      "Masjid al-Haram also known as the  the Great Mosque of Mecca.",
    header: (
      <Skeleton image="https://preview.redd.it/1-million-pilgrims-at-masjid-al-haram-in-makkah-tonight-v0-8egobmi8mbta1.jpg?width=640&crop=smart&auto=webp&s=816be2ea95462fa113672f9405fc68290443b7e0" />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    link: "https://en.wikipedia.org/wiki/Masjid_al-Haram",
  },
  {
    title: "As-Sunnah Trust",
    description:
      "আস-সুন্নাহ ট্রাস্ট, সুন্নাতে উদ্ভাসিত জীবনের জন্য, প্রতিষ্ঠাতা: ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর রাহিমাহুল্লাহ।",
    header: (
      <Skeleton image="https://assunnahtrust.org/wp-content/uploads/2022/04/as-sunnah-trust.svg" />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://assunnahtrust.org/en/",
  },
];
