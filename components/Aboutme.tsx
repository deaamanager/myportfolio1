import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = { pageInfo: PageInfo };

export default function Aboutme({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-center mx-auto items-center space-y-10"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About me
      </h3>

      <motion.img
        initial={{
          opacity: 0,
          x: -200,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt="deaa and elena"
        className=" -mb-12 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover 
                     md:rounded-lg md:w-64 md:h-56 lg:w-[400px] lg:h-[280px]   "
      />

      <div className=" px-0 md:px-10 justify-center space-y-10">
        <h4 className="text-2xl font-semibold ">
         a little info{" "}
          <span className="underline decoration-[#f7ab0a]/50">About</span>{" "}
        me:
        </h4>
        <p className="text-base ">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
