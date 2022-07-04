import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#0300C7",
    blue: {
      400: "#4E4BFB",
      500: "#26257A",
    },
    gray: {
      300: "#EEEDED",
    },
  },
  fonts: {
    body: "",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  breakpoints: {
    xs: "320px",
    lg: "800px",
    xl: "1366px",
    "2xl": "1980px",
  },
  styles: {
    global: {
      body: {
        color: "black.400",
      },
    },
  },
});
