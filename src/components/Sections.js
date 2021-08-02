import React from "react";
import {Box, Chip, Container, Grid, Hidden, Typography, useMediaQuery, useTheme,} from "@material-ui/core";
import {Nav, SocialNav} from "./Navigation";
import {Section} from "./Ui";
import Logo from "./Logo";
import CodeBlock from "./CodeBlock";
import Embed from "./Embed";
import musicLinks from "../music-links";

import Bg from "./Bg";

export function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <Grid
            container
            direction="column"
            justify="space-between"
            style={isMobile ? {} : {height: "100vh"}}
        >
            <SocialNav/>
            <Grid item style={{flexGrow: 1}}>
                <Section id="#" full noP>
                    <Grid container alignItems="center" style={{height: "100%"}}>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            style={{
                                position: "relative",
                                height: isMobile ? "360px" : "100%",
                                width: "100%",
                            }}
                        >
                            <Bg opacity={0.8}/>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Box my={5}>
                                <Container>
                                    <Box style={{width: "100%"}}>
                                        <Logo img={true} full={true}/>
                                    </Box>
                                    <Box my={3}>
                                        <Typography variant="h1">
                                            Learning machines,
                                            <br/>
                                            for and by musicians.
                                        </Typography>
                                    </Box>
                                </Container>
                            </Box>
                        </Grid>
                    </Grid>
                </Section>
            </Grid>
            <Hidden xsDown>
                <Grid item style={{height: "90px"}}>
                    <Nav/>
                </Grid>
            </Hidden>
        </Grid>
    );
}

export function Home2() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <Grid
            container
            direction="column"
            justify="space-between"
            style={{height: isMobile ? null : "100vh", position: "relative"}}
        >
            <Bg full opacity={0.7}/>
            <SocialNav/>
            <Grid item style={{flexGrow: 1}}>
                <Section id="#" full>
                    <Grid container alignItems="flex-end" style={{height: "100%"}}>
                        <Grid item xs={12} sm={6}></Grid>
                        <Grid item xs={12} sm={6}>
                            <Logo full/>
                            <Box my={3}>
                                <Typography variant="h1">
                                    Learning machines,
                                    <br/>
                                    for and by musicians.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Section>
            </Grid>
            <Grid item style={{height: "90px"}}>
                <Nav/>
            </Grid>
        </Grid>
    );
}

export function WhatTheK() {
    const gridItem = {
        xs: 12,
        md: 4,
    };
    return (
        <Section id={"what-the-k"}>
            <Typography variant="h2">
                What the K?
            </Typography>
            <br/>
            <Grid container spacing={5}>
                <Grid item {...gridItem}>
                    <Typography variant="h4">What is KTONAL?</Typography>
                    <Typography variant="body1">
                        KTONAL is a group of composers
                        <br/>
                        dedicated to AI-powered sound generation.
                    </Typography>
                    <Typography variant="body1">
                        We conduct our own research, write code and compose music.
                    </Typography>
                </Grid>
                <Grid item {...gridItem}>
                    <Typography variant="h4">What's our deal?</Typography>
                    <Typography variant="body1">
                        We combine a developer's perspective with the interests of the
                        modern composer.
                    </Typography>
                    <Typography variant="body1">
                        Though AI opens a whole new universe of possibilities, few systems
                        are taylored to experimental artistic usage.
                    </Typography>
                    <Typography variant="body1">
                        Current AI/Deep-Learning systems for sounds and music are huge,
                        expensive and hard to personalize. That sucks...
                    </Typography>
                    <Typography variant="body1">
                        We develop accessible, open-source tools for our own work and
                        anybody interested.
                    </Typography>
                </Grid>
                <Grid item {...gridItem}>
                    <Typography variant="h4">How do you pronounce KTONAL?</Typography>
                    <Typography variant="body1">
                        Spell the <em>k</em>, then say "tonal". The <em>k</em> stands for
                        the german word for AI: <strong>Künstliche Intelligenz</strong>.
                    </Typography>
                    <br/>
                    <Typography variant="h4">Who is KTONAL?</Typography>
                    <Typography variant="body1">
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
            <Typography variant="h2">Music</Typography>
            <Typography variant="body1">
                Here, you can listen to our latest sound studies where we explore the
                capabilities of the code we are developing.
            </Typography>
            <Typography variant="body1">
                You'll find all of them on our{" "}
                <a href="https://www.youtube.com/channel/UC_mWCpFGG9xRDbYZMTdwHKw" target="_blank" rel="noreferrer">
                    Youtube
                </a>{" "}
                and{" "}
                <a href="https://soundcloud.com/ktonal" target="_blank" rel="noreferrer">
                    Soundcloud
                </a>{" "}
                channels.
            </Typography>
            <br/>
            <br/>
            <Grid container spacing={5}>
                {musicLinks.map((l) => (
                    <Grid item xs={12} sm={6} md={4} key={l.url}>
                        <Embed {...l} />
                        <br/>
                        <Typography variant="h5">
                            <strong>
                                <a href={l.url} target="_blank" rel="noreferrer">
                                    {l.title}</a>
                            </strong>
                        </Typography>
                        {/* <Typography variant="body2">{l.description}</Typography> */}
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}

export function Code() {
    return (
        <Section id={"code"}>
            <Typography variant="h2">Code</Typography>
            <Typography variant="body1">
                We are working on several open-source projects to facilitate and
                democratize audio generation with Neural Networks.
            </Typography>
            <Typography variant="body1">
                You'll find them on our{" "}
                <a href="https://github.com/ktonal" target="_blank" rel="noreferrer">
                    Github
                </a>
                .
            </Typography>
            <Box my={5}>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography variant="h5">
                            <Chip label={"mimikit"}/>
                        </Typography>
                        <br/>
                        <Typography variant="body1">
                            <strong>
                                <a href={"https://github.com/ktonal/mimikit"} target="_blank" rel="noreferrer">
                                    mimikit
                                </a>
                            </strong> is an open-source python package for audio and music data
                            modeling with neural networks.
                        </Typography>
                        <Typography variant="body1">
                            It contains models out-of-the-box and simple utilities for dealing with audio
                            data.
                        </Typography>
                        <Typography variant="body1">
                            The aim of mimikit is double : it will lower the barrier to deep-learning for
                            non-developers while providing tools to developers that enable fast
                            experimentation.
                        </Typography>
                    </Grid>
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
                </Grid>
            </Box>
            <Box my={5}>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={12} md={6}>
                        <img
                            id={"axx-screenshot"}
                            src={window.location.origin + "/axx-screenshot.png"}
                            style={{width: "100%"}}
                            alt={""}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography variant="h5">
                            <Chip label={"axx"}/> - Audio Experiment Explorer
                        </Typography>
                        <Typography variant="body1">
                            <strong>
                                <a href={"https://github.com/ktonal/axx"} target="_blank" rel="noreferrer">
                                    axx
                                </a>
                            </strong> is a small web application to explore the outputs of audio
                            generative models made with mimikit.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Section>
    );
}
