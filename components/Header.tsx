import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { Social } from "../typings";
import { motion } from "framer-motion";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-4xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex  flex-row items-center"
      >
        {/*  social icons*/}

        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          /*(duration) how many scd
                    x: in welche rechtung fährt anmition*/
          className="flex flex-row items-center /*text-gray-300*/ cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer animate-bounce"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            {" "}
            Get in Touch{" "}
          </p>
        </motion.div>
      </Link>
    </header>
  );

  function newFunction() {
    return motion.div;
  }
}
