import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "rgb(0,255,0)",
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
  },
});
