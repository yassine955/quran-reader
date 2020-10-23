import { theme as chakraTheme, Theme } from "@chakra-ui/core";

const breakpoints = ["40em", "52em", "64em"];

const theme: Theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: "#16161D",
  },
  fonts: {
    mono: "'Lateef', cursive",
    heading: "'Lateef', cursive",
    body: "'Lateef', cursive",
  },
};

export default theme;
