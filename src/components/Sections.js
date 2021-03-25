import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { Section } from "./Ui";
import Logo from "./Logo";
import Type from "./Type";
import _Code from "./Code";
import Embed from "./Embed";
import musicLinks from "../music-links";

export function Home() {
  return (
    <Section id="#" style={{ height: "100vh", padding: "0px" }}>
      <Grid container style={{ paddingTop: "28vh" }}>
        <Grid item xs={12} sm={4} />
        <Grid item xs={12} sm={8}>
          <Logo full />
          <Typography variant="h1" style={{ marginTop: "20px" }}>
            <Type
              text={"Learning machines,"}
              interval={3000}
              loop={[
                {
                  text: "by musicians.",
                },
                {
                  text: "for musicians.",
                },
              ]}
              wrap="div"
            />
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}

export function WhatTheK() {
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
        </Box>
        <Box m={3}>
          <Typography variant="h2" component="p">
            <Type
              interval={3000}
              loop={[
                {
                  text: "code",
                },
                {
                  text: "research",
                },
                {
                  text: "composition",
                },
                {
                  text: "sound design",
                },
              ]}
            />
          </Typography>
        </Box>
      </Box>
    </Section>
  );
}

export function TheDeal() {
  return (
    <Section id="deal" containerProps={{ maxWidth: "lg" }}>
      <Box textAlign="center">
        <Typography variant="h3">What's our deal?</Typography>
      </Box>
      <br />
      <br />
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h6" component="p">
            We combine a developer's perspective with the interests of the
            modern composer.
          </Typography>
          <br />
          <br />
          <Typography variant="h6" component="p">
            Though AI opens a whole new universe of possibilities, few systems
            are taylored to experimental artistic usage.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h6" component="p">
            Current AI/Deep-Learning systems for sounds and music are huge,
            expensive and hard to personalize. That sucks...
          </Typography>
          <br />
          <br />
          <Typography variant="h6" component="p">
            We develop accessible, open-source tools for our own work and
            anybody interested.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}

export function About() {
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
          <Typography variant="h6" component="p">
            Spell the <em>k</em>, then say "tonal". The <em>k</em> stands for
            the german word for AI: <strong>Künstliche Intelligenz</strong>.
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant="h5">We are</Typography>
          <br />
          <Typography variant="h6" component="p">
            Antoine Daurat / Björn Erlach / Roberto Fausti / Genoël von
            Lilienstern / Dohi Moon
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}

export function Music() {
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

export function Code() {
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
          <_Code
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
