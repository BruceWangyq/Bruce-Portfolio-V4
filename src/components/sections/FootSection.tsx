import { Center, Flex, Heading, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import TextEffect from "../TextEfftect";

const FootSection = () => {
  return (
    <Flex
      py={{ base: "2", sm: "2" }}
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent="center"
    >
      <Link href="mailto: brucewangyq@gmail.com" target="_blank">
        <Heading px={{ base: "2", sm: "4" }}>
          <TextEffect
            text={`CONTACT`}
            initial="state1"
            animate="state2"
            exit="state1"
            whileHover="state1"
          />
        </Heading>
      </Link>
      <Link href="https://github.com/brucewangyq" target="_blank">
        <Heading px={{ base: "2", sm: "4" }}>
          <TextEffect
            text={`GITHUB`}
            initial="state1"
            animate="state2"
            exit="state1"
            whileHover="state1"
          />
        </Heading>
      </Link>
      <Link href="https://www.linkedin.com/in/brucewangdev" target="_blank">
        <Heading px={{ base: "2", sm: "4" }}>
          <TextEffect
            text={`LINKEDIN`}
            initial="state1"
            animate="state2"
            exit="state1"
            whileHover="state1"
          />
        </Heading>
      </Link>
      <Link
        href="https://drive.google.com/file/d/16VNqWhaJpNV_Z3KYOkH1NcPMMRQX4qpo/view?usp=sharing"
        target="_blank"
      >
        <Heading px={{ base: "2", sm: "4" }}>
          <TextEffect
            text={`RESUME`}
            initial="state1"
            animate="state2"
            exit="state1"
            whileHover="state1"
          />
        </Heading>
      </Link>
    </Flex>
  );
};

export default FootSection;
