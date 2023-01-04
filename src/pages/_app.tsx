import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import { MouseProvider } from "../context/MouseProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MouseProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </MouseProvider>
  );
}
