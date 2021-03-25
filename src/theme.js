import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "#1c1c1cf7",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: "Courier",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": "Courier",
      },
    },
    MuiTypography: {
      h1: {
        fontSize: "4.5rem",
      },
      p: {
        fontSize: "5rem",
      },
    },
  },
});
