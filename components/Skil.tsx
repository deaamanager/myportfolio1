import React from 'react'
import { motion } from 'framer-motion';
import { Skill } from '../typings';
import { urlFor } from '../sanity';



type Props = {
  skill: Skill;
  directionleft?: boolean;
}

export default function Skil({skill, directionleft }: Props) {
  return (
    
    <div className="group relative flex cursor-pointer lg:top-24">
      <motion.img
        initial={{
          x: directionleft ? -200 : 200,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="  rounded-full border w-16 h-16  border-gray-500 object-cover  filter group-hover:grayscale transition duration-300 ease-in-out"
        alt="My Skill" />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white  w-16 h-16  rounded-full z-0 flex justify-center items-center">
        <div className="flex items-center justify-center h-full">
          <p className="text-md font-bold text-black opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </div>
  )
}

