import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./page/home/ĩndex";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Home />
  </ChakraProvider>
);
