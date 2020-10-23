import { ChakraProvider } from "@chakra-ui/core";

import theme from "../theme";
import { AppProps } from "next/app";
import "../global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
