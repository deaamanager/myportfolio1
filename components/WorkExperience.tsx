import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from "../components/ExperienceCard";
import { Experience } from '../typings';
type Props = { experiences: Experience[]; };

export default function WorkExperience({ experiences }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, }}
            className="h-screen flex relative overflow-hidden flex-col text-left  max-w-full px-6 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Experience
            </h3>
            
            <div className="w-full flex  space-x-5 overflow-x-scroll p-10
            snap-x snap-mandatory  scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">

                {experiences?.map((experience) => (
                    <ExperienceCard key={experience._id} experience={experience} />
                ))}

            </div>
        </motion.div>
    )
}

