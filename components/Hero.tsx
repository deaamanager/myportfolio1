import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi,The Name's ${pageInfo?.name}`,
      "Guy-who-loves-Coffee-tsx",
      "<ButLovesCodeMore>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center pt-[-250] overflow-hidden">
      <BackgroundCircles />
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        className="relative rounded-full h-32 w-32 mx-auto object-cover  drop-shadow-neon-shadow "
        alt="deaa and elena"
      />
      <div className="z-20">

        <h1 className=" text-4xl lg:text-5xl md:text-6xl font-semibold px-10 ">
          <span className="mr-3 text-lg">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="pt-14" />
        <h2 className=" text-sm uppercase text-gray-500 font-bold tracking-[13px] ">
          {pageInfo?.role}
        </h2>

        <div className="pt-5 flex flex-col  lg:flex-row xl:flex-row 2xl:flex-row lg:pt-[-2.75rem]">
          <Link href="#about">
            <button
              className=" px-6 py-2 border border-[#242424] rounded-full
                                      uppercase text-md tracking-widest text-gray-500
                             transition-all hover:border-[#f7ab0a]/40 hover:text-[#f7ab0a]/40 hover:animate-bounce"
            >
              About
            </button>
          </Link>

          <Link href="#Experience">
            <button
              className=" px-6 py-2 border border-[#242424] rounded-full
                    uppercase text-md tracking-widest text-gray-500
                     transition-all hover:border-[#f7ab0a]/40 hover:text-[#f7ab0a]/40 hover:animate-bounce">
              Experience
            </button>
          </Link>
          <Link href="#Skills">
            <button
              className=" px-6 py-2 border border-[#242424] rounded-full
        uppercase text-md tracking-widest text-gray-500
        transition-all hover:border-[#f7ab0a]/40 hover:text-[#f7ab0a]/40 hover:animate-bounce"
            >
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button
              className=" px-6 py-2 border border-[#242424]  rounded-full
        uppercase text-md tracking-widest text-gray-500
        transition-all hover:border-[#f7ab0a]/40 hover:text-[#f7ab0a]/40 hover:animate-bounce"
            >
              projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
