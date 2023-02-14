import Head from "next/head";
import { GetServerSideProps, GetStaticProps } from "next";
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Aboutme from "../components/Aboutme";
import WorkExperience from "../components/WorkExperience";
import Skils from "../components/Skils";
import Projectes from "../components/Projectes";
import Link from "next/link";
import { Social, PageInfo, Skill, Experience, Project } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";
import Contactsecoundry from "../components/Contactsecoundry";


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

function Home({ pageInfo, experiences, skills, projects, socials }: Props) {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 "
    >
      <Head>
        <title> {pageInfo?.name} </title>
        <meta name="" content="deaa" />
        <link rel="" />
      </Head>
      <div></div>

      <Header socials={socials} />

      {/* Hero banner scrollback snap */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* about me section */}
      <section id="about" className="snap-center">
        <Aboutme pageInfo={pageInfo} />
      </section>

      {/* WorkExperience section */}
      <section id="Experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skils section */}
      <section id="Skills" className="snap-start">
        <Skils skills={skills} />
      </section>

      {/* project section */}
      <section id="projects" className="snap-start">
        <Projectes projects={projects} />
      </section>

      {/* soucndry contact section eith mailjs */}
      <section id="" className="snap-start">
        <Contactsecoundry />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5  cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-12 w-12 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="deaa1.png"
              alt="deaa and elena"
            />
          </div>
        </footer>
      </Link>


    </div>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    //- when a request come in
    //- at most once every 19 scd
    //revalidate: 10,
    //fallback:false,
  };
};
