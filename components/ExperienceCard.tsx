import React from 'react'
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';
import Image from "next/image";
type Props = { experience: Experience };

function ExperienceCard({ experience }: Props) {
    return (
        <article className=" flex flex-col h-[550px]  w-[300px] md:w-[700px]   rounded-lg items-center  justify-center space-y-7 flex-shrink-0
           snap-center bg-[#292929] p-1
           hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">

            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className=" 
                   object-cover object-center w-46 h-36  rounded-[60px]  "
                src={urlFor(experience?.companyImage).url()} alt="My Experience" />
            <div className="px-0 md:px-10   overflow-hidden ">
                <h4 className="text-xl font-bold flex p-[7px] mb-4 justify-center items-center text-[#f7ab0a]/80 ">{experience?.company}</h4>
                
                <div  
                 className="flex space-x-2 my-2 px-4">
                    {experience.technologies.map((technology) => (
                        <img
                            key={technology._id}
                            src={urlFor(technology.image).url()}
                            alt="My technology"
                            className="h-10 w-10 rounded-full flex "
                        />
                    ))};

                </div>

                <p className="uppercase py-4 text-[#f7ab0a] px-4 ">{new Date(experience.dateStarted).toDateString()}-{""}
                    {experience.isCurrentLyWorkingHere
                        ? "present"
                        : new Date(experience.dateEnded).toDateString()
                    }

                </p>

                <ul className="list-disc space-y-0.5 px-5  text-base max-h-96 w-4/5 pr-5 xl:text-xl  overflow-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80">
                  {experience.points.map((point, i) => (
                    <li key={i}> {point} </li>
                  ))}
                </ul>

            </div>

        </article>
    )
}

export default ExperienceCard