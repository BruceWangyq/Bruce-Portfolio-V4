import { Box, Center, chakra, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Scroll } from "scrollex";
import InlineList from "../InlineList";
import LinkButton from "../LinkButton";
import Ticker from "../Ticker";

const ChakraTicker = chakra(Ticker);
const ScrollSection = chakra(Scroll.Section);

const ProjectSection = ({ project }: any) => {
  return (
    <ScrollSection borderBottom="2px">
      <Box h="100vh" pos="relative">
        <Image
          layout="fill"
          priority
          src={project.img}
          objectFit="cover"
          alt=""
        />
      </Box>
      <Flex borderY="2px" h="12">
        <Center px="md" h="100%" borderRight="2px">
          <Heading size="md" fontWeight="bold">
            Built With
          </Heading>
        </Center>
        <Center flex={1} overflow="hidden">
          <ChakraTicker
            minW="max-content"
            w="100%"
            loopDuration={12000}
            whiteSpace="nowrap"
          >
            <Heading size="md" mr="3ch" textTransform="lowercase">
              <InlineList items={project.tools} />
            </Heading>
          </ChakraTicker>
        </Center>
        <LinkButton
          href={project.url}
          h="100%"
          borderY="none"
          borderRight="none"
          newTab
        >
          View Project
        </LinkButton>
      </Flex>
      <Box py="3xl" px="3xl">
        <Box maxW="4xl" m="0 auto">
          <Heading size="2xl" mb="2xl">
            {project.name}
          </Heading>
          <Text whiteSpace="pre-wrap" size="md" mb="2xl">
            {project.description}
          </Text>
        </Box>
      </Box>
    </ScrollSection>
  );
};

export default ProjectSection;
