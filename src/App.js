import React, { useState, useEffect } from "react";
import "./css/App.css";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Grid,
  Button,
  Typography,
} from "@material-ui/core";
import theme from "./theme";

import { Nav, Footer } from "./components/Navigation";
import { Content, Section } from "./components/Ui";
import { Logo, CodeBlock } from "./components/K";
import Bg from "./components/Bg2";
import Typist from "react-typist";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import musicLinks from "./music-links";
import Embed from "./components/Embed";

library.add(fab);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Bg />
      <Content>
        <Nav />
        <TopSection />
        <WhatTheK />
        <TheDeal />
        <About />
        <Music />
        <Code />
        <Footer />
      </Content>
    </ThemeProvider>
  );
}

function WhatTheK() {
  return (
    <Section i id={"what-the-k"}>
      <Box textAlign="center">
        <Typography variant="h2" component="h4">
          What the <Logo />?
        </Typography>
        <Box m={3}>
          <Typography variant="h5" component="h2">
            We're a group of composers
            <br />
            dedicated to AI-powered sound generation.
          </Typography>
          <br />
          <Typist
            cursor={{
              hideWhenDone: true,
              hideWhenDoneDelay: 1000,
            }}
          >
            <Typography variant="h5" component="h4">
              We research,
              <Typist.Backspace count={9} delay={1000} />
              code,
              <Typist.Backspace count={5} delay={1000} />
              compose,
              <Typist.Backspace count={8} delay={1000} />
              experiment
            </Typography>
          </Typist>
        </Box>
      </Box>
    </Section>
  );
}

function TheDeal() {
  return (
    <Section i id="deal">
      <Box textAlign="center">
        <Typography variant="h4">What's our deal?</Typography>
      </Box>
      <br />
      <br />
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="p">
            We combine a developer's perspective with the interests of the
            modern composer.
          </Typography>
          <br />
          <br />
          <Typography variant="p">
            Though AI opens a whole new universe of possibilities, few systems
            are taylored to experimental artistic usage.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="p">
            Current AI/Deep-Learning systems for sounds and music are huge,
            expensive and hard to personalize. That sucks...
          </Typography>
          <br />
          <br />
          <Typography variant="p">
            We develop accessible, open-source tools for our own work and
            anybody interested.
          </Typography>
        </Grid>
      </Grid>
      <Typist
        cursor={{
          hideWhenDone: true,
          hideWhenDoneDelay: 1000,
        }}
      ></Typist>
    </Section>
  );
}

function About() {
  return (
    <Section id={"about"}>
      <Box textAlign="center"></Box>
      <br />
      <br />
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6}></Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h3">About</Typography>
          <br />
          <br />
          <Typography variant="h5">
            How do you pronounce <strong>"ktonal"?</strong>
          </Typography>
          <br />
          <Typography variant="p">
            Spell the <em>k</em>, then say "tonal". The <em>k</em> stands for
            the german word for AI: <strong>Künstliche Intelligenz</strong>.
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant="h5">We are</Typography>
          <br />
          <Typography variant="p">
            Antoine Daurat / Björn Erlach / Roberto Fausti / Genoël von
            Lilienstern / Dohi Moon
          </Typography>
        </Grid>
      </Grid>
      <Typist
        cursor={{
          hideWhenDone: true,
          hideWhenDoneDelay: 1000,
        }}
      ></Typist>
    </Section>
  );
}

function Music() {
  return (
    <Section i id={"music"}>
      <Typography variant="h2" component="h3">
        Music
      </Typography>
      <br />
      <br />
      <Grid container spacing={3}>
        {musicLinks.map((l) => (
          <Grid item xs={12} sm={6} md={4}>
            <Embed {...l} />
            <br />
            <Typography variant="h6" style={{ fontSize: "15px" }}>
              <strong>{l.title}</strong>
            </Typography>
            <br />
            <Typography variant="p">{l.description}</Typography>
            <br />
            <br />
            <br />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

function Code() {
  return (
    <Section id={"code"}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}></Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box textAlign="right">
            <Typography variant="h2" component="h3">
              Code
            </Typography>
            <Typography variant="h6">
              We are working on several open-source projects to facilitate and
              democratize audio generation with Neural Networks.
            </Typography>
            <Typography variant="h6">
              You'll find them on our{" "}
              <a href="/" target="_blank">
                Github
              </a>
              .
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} sm={12} md={6}>
          <CodeBlock
            code={`
 from mimikit.freqnet import FreqNet
 
 path_to_ckpt = path_to_model + "MOD-134/states/epoch=X.ckpt"

 model = FreqNet.load_from_checkpoint(
   path_to_ckpt, data_object=db.fft
   )
 
 for i in range(8):
     audio = model.generate(model.random_train_example(),
                           n_steps=2048,
                           hop_length=db.fft.attrs["hop_length"])
     model.log_audio("train_example_" + str(i), audio)
                                    `}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h5">
            <strong>mimikit</strong>
          </Typography>
          <br />
          <Typography variant="p">
            <strong>mimikit</strong> is an open-source python package for audio
            and music data modeling with neural networks.
          </Typography>
          <br />
          <br />
          <Typography variant="p">
            It is build on top of `torch` and is easy to use on google colab.
            The aim is to provide machine learning tools to music composers who
            want to explore deep learning and related techniques with data of
            their own choosing.
          </Typography>
          <br />
          <br />
          <Typography variant="p">
            It includes several variations of FreqNet, which is a frequency
            domain model with a wavelet like structure.
          </Typography>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} sm={12} md={6}>
          <img
            id={"axx-screenshot"}
            src={window.location.origin + "/axx-screenshot.png"}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h5">
            <strong>Audio Experiment Explorer</strong>
          </Typography>
          <br />
          <Typography variant="p">
            <strong>axx</strong> is an open-source python package for audio and
            music data modeling with neural networks.
          </Typography>
          <br />
          <br />
          <Typography variant="p">
            It is build on top of `torch` and is easy to use on google colab.
            The aim is to provide machine learning tools to music composers who
            want to explore deep learning and related techniques with data of
            their own choosing.
          </Typography>
          <br />
          <br />
          <Typography variant="p">
            It includes several variations of FreqNet, which is a frequency
            domain model with a wavelet like structure.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}

function TopSection() {
  return (
    <Section id="#" style={{ height: "100vh", padding: "0px" }}>
      <Grid container style={{ paddingTop: "33vh" }}>
        <Grid item xs={5} />
        <Grid item xs={7}>
          <Logo full />
          <Typography variant="h2" component="h1" style={{ marginTop: "20px" }}>
            <Typist
              cursor={{
                hideWhenDone: true,
                hideWhenDoneDelay: 1000,
              }}
            >
              Learning machines,
              <br /> by musicians
              <Typist.Backspace count={12} delay={800} />
              <span> for musicians.</span>
            </Typist>
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}

export default App;
