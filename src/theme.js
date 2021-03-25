import { createMuiTheme } from "@material-ui/core";

const classic = {
  base: "#222",
  text: "#222",
  background: "#fff",
  font: "Ubuntu",
};

const dark = {
  base: "#fff",
  text: "#fff",
  background: "#222",
  font: "Ubuntu",
};
const light = {
  base: "#fff",
  text: "#333",
  background: "#e6e6e6",
  font: "Roboto mono",
};
const submarine = {
  base: "rgb(0,0,255)",
  text: "rgb(0,0,255)",
  background: "#e6e6e6",
  font: "Roboto mono",
};

const theme = dark;

export default createMuiTheme({
  shadows: ["none"],
  spacing: 12,
  palette: {
    primary: {
      main: theme.base,
    },
    text: {
      primary: theme.text,
    },
    background: {
      default: theme.background,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: theme.font,
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
