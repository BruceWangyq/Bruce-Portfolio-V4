import { extendTheme } from "@chakra-ui/react";
import { styles } from "./styles";
import { textStyles, fonts } from "./text";
import { colors } from "./colors";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({ config, styles, textStyles, fonts, colors });
