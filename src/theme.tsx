import { theme as chakraTheme, Theme } from "@chakra-ui/core";

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
