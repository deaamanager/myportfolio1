import react from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';
import deaa from "../public/deaa1.png";

type Props = { projects: Project[]; };

export default function Projectes({ projects }: Props) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-39, 39]);

  return (



    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, }}

      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
    justify-evenly items-center mx-auto z-0 space-y-5">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">



        {projects?.map((project, i) => (

          <div key={project._id}
            className='  w-screen flex-shrink-0 snap-center flex flex-col space-y-0 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img initial={{
              y: -200,
              opacity: 0,
            }}
              transition={{ duration: 1, }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}

              className="h-20  mb-[30px]" src={urlFor(project?.image).url()} alt="My projects" />
            <div className='space-y-2 px-0 '>
              <h4 className="text-md text-[#F7AB0A] font-semibold text-center mb-[20px]">
                <span className='underline decoration-[#F7AB0A]/50'>case study {i + 1} of {projects.length}:</span> {""} {project?.title} </h4>
              <div className='flex items-center justify-center space-x-2'>
                {project?.technologies.map((technology) => (
                  <img src={urlFor(technology.image).url()} alt="My technologies projectes" className='h-10 w-10  mb-[10px]' />
                ))}


              </div>

              <p className='text-md text-center '> {project?.summary} </p>
            </div>
          </div>

        ))}


      </div>




      <div className=" w-full absolute top[30%] bg-[#F7AB0A]/10 left-0 h-[250px] -skew-y-12 blur-xl mix-blend-soft-light" />
    </motion.div>

  )
}

