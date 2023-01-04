import { chakra, Flex, Heading } from "@chakra-ui/react";
import { Keyframes, Scroll } from "scrollex";

const ScrollSection = chakra(Scroll.Section);
const ScrollItem = chakra(Scroll.Item);

const keyframes: Record<string, Keyframes> = {
  heading: ({ section, container }) => ({
    [section.topAt("container-top")]: {
      translateX: "0%",
    },
    [section.bottomAt("container-bottom") - container.height / 3]: {
      translateX: "-100%",
    },
  }),
};

const HeadingSection = ({ heading }: any) => {
  return (
    <ScrollSection h="h-screen-4" borderBottom="sm">
      <Flex h="100vh" alignItems="center" pos="sticky" top={0}>
        <ScrollItem keyframes={keyframes.heading} pos="relative" left="50%">
          <Heading fontSize={"170px"} whiteSpace="nowrap">
            {heading}
          </Heading>
        </ScrollItem>
      </Flex>
    </ScrollSection>
  );
};

export default HeadingSection;
