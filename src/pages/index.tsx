import Head from "next/head";
import { chakra } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Scroll } from "scrollex";
import IntroSection from "../components/sections/IntroSection";
import HeadingSection from "../components/sections/HeadingSection";
import AboutSection from "../components/sections/AboutSection";
import { portfolio } from "../lib/data";
import ProjectSection from "../components/sections/ProjectSection";
import FootSection from "../components/sections/FootSection";

const ScrollContainer = chakra(Scroll.Container);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bruce Wang</title>
        <meta
          name="description"
          content="Bruce Wang is a Front end/ Web3 developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ScrollContainer height="100vh">
        <IntroSection />
        <HeadingSection heading="About Me" />
        <AboutSection />
        <HeadingSection heading="Projects" />
        {portfolio.projects.map((project) => (
          <ProjectSection key={project.name} project={project} />
        ))}
        <FootSection />
      </ScrollContainer>
    </>
  );
};

export default Home;
