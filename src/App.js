import React from "react";
import "./css/App.css";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { StickyContainer } from "react-sticky";
import theme from "./theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Nav, Footer } from "./components/Navigation";
import { Content } from "./components/Ui";
import Bg from "./components/Bg";
import { Home, WhatTheK, Music, Code } from "./components/Sections";

library.add(fab);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* <Bg /> */}
      <Content>
        <Home />
        {/* <Nav /> */}
        <WhatTheK />
        <Music />
        <Code />
        <Footer />
      </Content>
    </ThemeProvider>
  );
}

export default App;
