import {
  Box,
  Center,
  chakra,
  Flex,
  Heading,
  HStack,
  Stack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import {
  HTMLMotionProps,
  motion,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "framer-motion";
import { useMouse } from "../../context/MouseProvider";
import { useRect } from "../../hooks/useRect";
import { Scroll } from "scrollex";
import ColorModeButton from "../ColorModeButton";
import TextEffect from "../TextEfftect";
import { useScrollClock } from "../../hooks/useScrollClock";
import gradientImg from "../../../public/gradient.jpg";
import Image from "next/image";

// interface MouseMaskProps extends HTMLMotionProps<"div"> {
//   maskSize?: number;
//   maskImage?: string;
//   autoFade?: boolean;
//   children: React.ReactNode;
// }

// const MouseMask = ({
//   maskSize = 500,
//   maskImage = "radial-gradient(rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)",
//   autoFade = true,
//   children,
//   ...otherProps
// }: MouseMaskProps) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const mouse = useMouse();
//   const rect = useRect(ref);

//   let maskPosition = {
//     x: useTransform(
//       mouse.position.x,
//       (x) => x - (rect.left || 0) - maskSize / 2
//     ),
//     y: useTransform(
//       mouse.position.y,
//       (y) => y - (rect.top || 0) - maskSize / 2
//     ),
//   };

//   maskPosition.x = useSpring(maskPosition.x, {
//     mass: 0.01,
//     damping: 10,
//     stiffness: 100,
//   });
//   maskPosition.y = useSpring(maskPosition.y, {
//     mass: 0.01,
//     damping: 10,
//     stiffness: 100,
//   });

//   const mouseSpeed = useTransform(
//     [mouse.velocity.x, mouse.velocity.y],
//     ([x, y]: any) => {
//       return Math.sqrt(x ** 2 + y ** 2) / 250;
//     }
//   );

//   let opacity = useSpring(mouseSpeed, {
//     stiffness: 100,
//     damping: 50,
//     mass: 1,
//   });

//   const maskPositionStr = useMotionTemplate`${maskPosition.x}px ${maskPosition.y}px`;

//   return (
//     <motion.div
//       {...otherProps}
//       ref={ref}
//       style={{
//         WebkitMaskImage: maskImage,
//         WebkitMaskRepeat: "no-repeat",
//         WebkitMaskPosition: maskPositionStr,
//         WebkitMaskSize: `${maskSize}px ${maskSize}px`,
//         opacity: autoFade ? opacity : 1,
//         ...otherProps.style,
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// const ChakraMouseMask = chakra(MouseMask);
// const ScrollSection = chakra(Scroll.Section);

const MotionHStack = motion(HStack);
const MotionStack = motion(Stack);
const MotionBox = motion(Box);
const ScrollSection = chakra(Scroll.Section);

const GradientImg = () => {
  const clock = useScrollClock({ scrollAccelerationFactor: 20 });
  const rotate = useTransform(clock, (time) => time / 100);
  return (
    <Box
      pos="relative"
      h="100%"
      w="100%"
      borderBottomRightRadius="12rem"
      overflow="hidden"
      transform="translateZ(0)"
    >
      <MotionBox
        h="100%"
        w="100%"
        style={{
          rotate: rotate,
          scale: 1.45,
        }}
      >
        <Image src={gradientImg} layout="fill" priority alt="" />
      </MotionBox>
    </Box>
  );
};

function IntroSection() {
  return (
    <ScrollSection id="intro-section" h="100vh" borderBottom="sm">
      <Box pos="absolute" top="20px" right="50px">
        <ColorModeButton />
      </Box>
      <Center h="100%">
        <MotionStack
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          transform={{ base: "scale(0.75)", md: "none" }}
        >
          <Box pos="relative" width="24rem" height="24rem">
            <GradientImg />
            <Box
              w="44rem"
              pos="absolute"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
            >
              <Heading size="4xl">Bruce</Heading>
              <Heading size="4xl" textAlign="end">
                Wang
              </Heading>
            </Box>
          </Box>

          <MotionHStack
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Heading size="md">Front End Developer</Heading>
            <Box flex={1} alignSelf="center" h="1px" bg="border-contrast-xl" />
            <Heading size="md">Web3</Heading>
          </MotionHStack>
        </MotionStack>
        {/* <Flex
        h="h-screen"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Center
          h="40vh"
          w="650px"
          textAlign={{ base: "center", md: "center" }}
          bg="blackAlpha.600"
          borderColor="whiteAlpha.100"
          borderWidth="1px"
          borderRadius="2.5rem"
          pos="relative"
        >
          <ChakraMouseMask
            pos="absolute"
            inset={0}
            maskSize={280}
            borderRadius="inherit"
          >
            <Box
              bgImage="radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.5) 1px, transparent 0)"
              bgSize="20px 20px"
              h="100%"
              w="100%"
            />
          </ChakraMouseMask>
          <ChakraMouseMask
            pos="absolute"
            inset="-1px"
            display="grid"
            placeItems="center"
            maskSize={200}
            maskImage="radial-gradient(rgba(255,255,255,1) 0%, rgba(255,255,255,1) 70%,  rgba(255,255,255,0) 70.01%)"
            borderColor="whiteAlpha.800"
            borderWidth="1px"
            borderRadius="inherit"
            autoFade={false}
          >
            <Heading
              pos="relative"
              fontWeight="900"
              fontSize={"30px"}
              color="blackAlpha.900"
              style={{
                WebkitTextStroke: 1,
                WebkitTextStrokeColor: "var(--chakra-colors-whiteAlpha-300)",
              }}
            >
              Bruce Wang
            </Heading>
          </ChakraMouseMask>
          <Heading fontWeight="900" fontSize={"150px"} color="white">
            Bruce Wang
          </Heading>
        </Center>
        <Heading size="3xl" fontWeight="extrabold" pt="8" textAlign="center">
          <TextEffect
            text={`A Frontend Developer`}
            initial="state1"
            animate="state2"
            exit="state1"
            whileHover="state1"
          />
        </Heading>
      </Flex> */}
      </Center>
    </ScrollSection>
  );
}

export default IntroSection;
