import * as tools from "@chakra-ui/react";

export const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

export const mediaQueries = {
  base: `@media screen and (min-width: 0em)`,
  sm: `@media screen and (min-width: ${breakpoints.sm})`,
  md: `@media screen and (min-width: ${breakpoints.md})`,
  lg: `@media screen and (min-width: ${breakpoints.lg})`,
  xl: `@media screen and (min-width: ${breakpoints.xl})`,
  "2xl": `@media screen and (min-width: ${breakpoints["2xl"]})`,
};
