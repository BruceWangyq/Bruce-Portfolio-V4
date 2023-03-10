import { StyleFunctionProps } from "@chakra-ui/react";

export const styles = {
  global: (props: StyleFunctionProps) => ({
    html: {
      fontSize: {
        base: "70%",
        md: "100%",
      },
    },
    body: {
      bgColor: "bg-body",
    },
    "::selection": {
      background: "white",
      color: "black",
    },
  }),
};
