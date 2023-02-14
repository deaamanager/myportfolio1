import React from 'react'
import { motion } from 'framer-motion';

import Skil from "../components/Skil";
import { Skill as skillType } from '../typings';

type Props = {
  skills: skillType[];
};

export default function Skils({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}

      className=" relative flex flex-col text-center  md:text-left
      xl:flex-row max-w-[2000px] px-10 min-h-screen justify-center items-center  mx-auto  ">

      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">Skills</h3>

      <h4 className=" absolute  top-36 uppercase tracking-[3px] text-gray-500 text-sm truncate " >
      Hover over my Skills </h4>


      <div className="absolute lg:bottom-[20rem] md:gap-7 gap-3 grid grid-cols-4 px-1 ">

        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skil key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2,).map((skill) => (
          <Skil key={skill._id} skill={skill} directionleft />


        ))}

      </div>
    </motion.div>


  )
}

