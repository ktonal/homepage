import { createMuiTheme } from "@material-ui/core";

const colors = {
  base: "rgb(0,0,0)",
  text: "rgb(0,255,0)",
  background: "rgb(0,0,255)",
};

export default createMuiTheme({
  shadows: ["none"],
  spacing: 12,
  palette: {
    primary: {
      main: colors.base,
    },
    text: {
      primary: colors.text,
    },
    background: {
      default: colors.background,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: "Roboto mono",
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "2.6rem",
      },
      h2: {
        fontSize: "2.4rem",
        marginBottom: "42px",
      },
      h3: {
        fontSize: "2rem",
        marginBottom: "32px",
      },
      h4: {
        fontSize: "1.3rem",
        fontWeight: "bold",
        marginBottom: "24px",
      },
      h5: {
        fontSize: "1rem",
        fontWeight: "bold",
        marginBottom: "20px",
      },
      body1: {
        fontSize: "1rem",
        marginBottom: "20px",
      },
      body2: {
        fontSize: ".9rem",
        opacity: 0.8,
      },
    },
    MuiChip: {
      root: {
        borderRadius: "2px",
      },
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        body1: "p",
        body2: "p",
      },
    },
  },
});
