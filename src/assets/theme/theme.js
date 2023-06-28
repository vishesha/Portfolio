import { createTheme } from "@material-ui/core";
import typography from "./typography";

const baseTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1320,
      xl: 1920,
    },
  },
  navbarHeight: "70px",
  mobileNavbarHeight: "55px",
  typography,
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        fontSize: "16px",
      },
      text: {
        letterSpacing: "2px",
        borderRadius: 0,
        "&:hover": {
          color: "rgb(230,230,230)",
          backgroundColor: "inherit",
        },
      },
    },
  },
};

const darkTheme = createTheme({
  palette: {
    background: {
      default: "#1A1A1A ",
      paper: "#bd3b22",
    },
    primary: {
      main: "#bd3b22",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2C394B",
      contrastText: "#fff",
    },
    text: {
      primary: "#FFF",
      secondary: "rgb(200,200,200)",
    },
    action: {
      disabled: "rgb(70,70,70)",
      disabledBackground: "rgb(150,150,150)",
    },
  },
  logoColor: "#fff",
  ...baseTheme,
});

const lightTheme = createTheme({
  palette: {
    background: {
      //default: "#DEBA9D",
      //default: "#FBD3D3",

      //default: "#FFFFFF",
      default: "#F4DACD",
    },
    primary: {
      //main: "#9E7777",
      //main: "#800080",
      //main: "#DA70D6",
      //main: "#3B240B",
      //main: "#6F4C5B",
      //main: "#FF00FF",
      main: "#DA70D6",
      contrastText: "#000000",
    },
    secondary: {
      //main: "#6F4C5B",
      //main: "#800080",
      //main: "#2C394B",
      main: "#4682B4",
      //main: "#1A2C3E",
      //main: "#52678C",
      contrastText: "rgb(230,230,230)",
    },
    text: {
      primary: "#000000",
      secondary: "rgb(30,30,30)",
    },
    action: {
      disabled: "rgb(70,70,70)",
      disabledBackground: "rgb(150,150,150)",
    },
  },
  backgroundSecondary: {
    bg: "#6F4C5B",
    text: "rgb(230,230,230) ",
  },
  logoColor: "#6F4C5B",
  ...baseTheme,
});

export { darkTheme, lightTheme };
