import {
  Box,
  Center,
  chakra,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Keyframes, Scroll } from "scrollex";
import { portfolio } from "../../lib/data";
import InlineList from "../InlineList";
import Ticker from "../Ticker";

const ScrollSection = chakra(Scroll.Section);
const ChakraTicker = chakra(Ticker);

const ScrollItem = chakra(Scroll.Item);

const keyframes: Record<string, Keyframes> = {
  heading: ({ section, container }: any) => ({
    [section.topAt("container-top")]: {
      translateX: "0%",
    },
    [section.bottomAt("container-bottom") - container.height / 2]: {
      translateX: "-100%",
    },
  }),
};

const AboutSection = () => {
  return (
    <ScrollSection borderBottom="sm">
      <Center>
        <Box
          flex={1}
          pos="relative"
          top={0}
          h="h-screen"
          p="3xl"
          display={{ base: "none", md: "block" }}
        >
          <Center pos="absolute" inset={0}>
            <ScrollItem keyframes={keyframes.heading} pos="relative">
              <Stack>
                <Box
                  pos="relative"
                  w="24rem"
                  h="26rem"
                  style={{
                    borderTopLeftRadius: "50%",
                    borderTopRightRadius: "50%",
                  }}
                  overflow="hidden"
                >
                  <Image
                    src={portfolio.about.img}
                    layout="fill"
                    alt=""
                    objectFit="cover"
                  />
                </Box>
                <Heading textAlign="center" size="lg">
                  {portfolio.about.firstName} {portfolio.about.lastName}
                </Heading>
              </Stack>
            </ScrollItem>
          </Center>
        </Box>
        <Box h="h-full" pos="relative" top={0} overflow="hidden">
          <ChakraTicker
            loopDuration={12000}
            direction="y"
            borderLeft="sm"
            borderRight="sm"
          >
            <Heading
              size="lg"
              whiteSpace="nowrap"
              textTransform="lowercase"
              w={14}
              style={{ writingMode: "vertical-rl" }}
            >
              <InlineList items={portfolio.about.skills} />
            </Heading>
          </ChakraTicker>
        </Box>
        <Box p="20" flex={1}>
          <Text whiteSpace="pre-wrap" size="md">
            {portfolio.about.bio}
          </Text>
        </Box>
      </Center>
    </ScrollSection>
  );
};

export default AboutSection;
