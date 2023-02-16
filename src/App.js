import React from "react";
import "./css/App.css";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Footer } from "./components/Navigation";
import { Content } from "./components/Ui";
import { Home, WhatTheK, Music, Code, Community } from "./components/Sections";

library.add(fab);
library.add(fas);

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
        <Community />
        <Footer />
      </Content>
    </ThemeProvider>
  );
}

export default App;
