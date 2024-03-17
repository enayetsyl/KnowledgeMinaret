import Image from "next/image";
import React from "react";
import { Tabs } from "./ui/tabs";
import Link from "next/link";
import video from "../../public/video.jpg";
import blog from "../../public/blog.jpg";
import book from "../../public/book.jpeg";
import halaqa from "../../public/halaqa.jpg";
import quiz from "../../public/quiz.jpg";

const Services = () => {
  const tabs = [
    {
      title: "Videos",
      value: "videos",
      content: (
        <Link href="https://www.youtube.com/@SunnahTrust" target="_blank">
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-gray-500">
            <p>Videos</p>
            <Image
              alt="videos"
              src={video}
              height={300}
              width={300}
              className="w-full h-[80%] rounded-2xl my-5"
            />
          </div>
        </Link>
      ),
    },
    {
      title: "Blog",
      value: "blog",
      content: (
        <Link
          href="https://naylanuzhat.wordpress.com/author/moonbeam86/"
          target="_blank"
        >
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-black">
            <p>Blog</p>
            <Image
              alt="videos"
              src={blog}
              height={300}
              width={300}
              className="w-full h-[80%] rounded-2xl my-5"
            />
          </div>
        </Link>
      ),
    },
    {
      title: "Halaqa Timing",
      value: "halaqa",
      content: (
        <Link
          href="https://www.icdbd.org/updated-halaqa-schedule-2/"
          target="_blank"
        >
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-slate-500">
            <p>Halaqa Timing</p>
            <Image
              alt="videos"
              src={halaqa}
              height={300}
              width={300}
              className="w-full h-[80%] rounded-2xl my-5"
            />
          </div>
        </Link>
      ),
    },
    {
      title: "Books",
      value: "books",
      content: (
        <Link href="https://assunnahtrust.org/publication/bn/" target="_blank">
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-600 to-black">
            <p>Books</p>
            <Image
              alt="videos"
              src={book}
              height={300}
              width={300}
              className="w-full h-[80%] rounded-2xl my-5"
            />
          </div>
        </Link>
      ),
    },
    {
      title: "Quiz",
      value: "quiz",
      content: (
        <Link href="https://an-nasihah.com/project/quizzes/" target="_blank">
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-stone-700 to-black">
            <p>Quiz</p>
            <Image
              alt="videos"
              src={quiz}
              height={300}
              width={300}
              className="w-full h-[85%] rounded-2xl my-5"
            />
          </div>
        </Link>
      ),
    },
  ];
  return (
    <>
      <div className=" relative h-[20rem] md:h-[40rem] [perspective:1000px] flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20">
        <Tabs tabs={tabs} />
      </div>
    </>
  );
};

export default Services;
