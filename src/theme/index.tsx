import { extendTheme } from "@chakra-ui/react";
import { styles } from "./styles";
import { textStyles, fonts } from "./text";
import { colors } from "./colors";
import { semanticTokens } from "./tokens";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  styles,
  textStyles,
  fonts,
  colors,
  semanticTokens,
  shadows: { outline: "0 0 0 3px var(--chakra-colors-focus-ring)" },
});
