import React from 'react';
import ReactPlayer from "react-player";
import {IconContext} from 'react-icons';
import {FaGithub, FaSoundcloud, FaYoutube} from 'react-icons/fa';

import './App.scss';
import {links} from './music-links';
import CodeBlock from "./CodeBlock"


function Stripe(props) {
    return (
        <div className={"stripe" + (props.isDark ? " negative" : " positive")} id={props.id}>
            <div className={"header"}>
                {[props.title, props.summary]}
            </div>
            {props.content}
        </div>
    )
}

function Title(props) {
    return (
        <div className={"title"} children={props.children}>
        </div>
    )
}

function Summary(props) {
    return (
        <div className={"summary"} children={props.children}>
        </div>
    )
}

function Content(props) {
    return (
        <div className={"content"} children={props.children}>
        </div>
    )
}

function EmbedPlayer(props) {
    return (
        <div className={"player"} key={props.url}>
            <ReactPlayer url={props.url}
                         width={"280px"}
                         height={"250px"}
                         light={true}
                         controls={true}
            />
            <h4><a href={props.url}>{props.title}</a></h4>
        </div>
    )
}


function App() {
    return (
        <>
            <div id={"landing"}>
                <img src={window.location.origin + "/btv-landing.png"} id={"btv-landing"} alt={"background"}/>
                <div id={"landing-area"}>
                    <div id={"ktonal-landing"}>
                        <img src={window.location.origin + "/k-circle-bw.png"}
                             id="k-landing"
                             alt="logo"/>
                        <h1>T O N A L</h1>
                    </div>
                    <h2>Learning machines for and by musicians</h2>
                </div>
            </div>

            <div id="main">
                <img src={window.location.origin + "/btv-landing.png"} id={"btv-background"} alt={"background"}/>
                <header id={"top"}>
                    <div id={"logo"}>
                        <a href={"#landing"}><img src={window.location.origin + "/k-circle-bw.png"} id="k-logo"
                             alt="logo"/></a>
                        <h3>T O N A L</h3>
                    </div>
                    <div id={"navbar"}>
                        <a href={"#what-the-k"}>what the K?</a>
                        <a href={"#music"}>music</a>
                        <a href={"#code-section"}>code</a>
                    </div>

                </header>
                <Stripe
                    id={"what-the-k"}
                    isDark={false}
                    title={
                        <Title>
                            <h1>What the </h1>
                            <img src={window.location.origin + "/k-circle-bw.png"} id="k-about"
                                 alt="logo"/>
                            <h1> ? </h1>
                        </Title>
                    }
                    content={
                        <Content>
                            <div className={"info"}>
                                <h3 className={"question"}>What's KTONAL?</h3>
                                <div className={"answer"}>
                                    <p>KTONAL is a group of composers dedicated to AI-powered sound generation.</p>
                                    <p>We conduct our own research, write code and compose music.</p>
                                </div>
                            </div>
                            <div className={"info"}>
                                <h3 className={"question"}>What's our deal?</h3>
                                <div className={"answer"}>
                                    <p>We combine a developers perspective with composers interests.</p>
                                    <p>Though AI opens a whole new universe of possibilities, few systems are
                                        taylored to
                                        experimental artistic usage.</p>
                                    <p>Current AI/Deep-Learning systems for sounds and music are huge, expensive and
                                        hard to
                                        personalize.</p>
                                    <p>That sucks...</p>
                                    <p>We develop accessible, open-source tools for our own work and anybody
                                        interested.</p>
                                </div>
                            </div>
                            <div className={"info"}>
                                <h3 className={"question"}>How do you pronounce "ktonal"?</h3>
                                <div className={"answer"}>
                                    <p>Spell the "k", then say "tonal".</p>
                                    <p>The "k" stands for the german word for AI : "Künstliche Intelligenz".</p>
                                </div>
                            </div>
                            <div className={"info"}>
                                <h3 className={"question"}>Who is KTONAL?</h3>
                                <div className={"answer"}>
                                    <p>
                                        Antoine Daurat
                                    </p>
                                    <p>
                                        Björn Erlach
                                    </p>
                                    <p>
                                        Roberto Fausti
                                    </p>
                                    <p>
                                        Genoël von Lilienstern
                                    </p>
                                    <p>
                                        Dohi Moon
                                    </p>
                                </div>
                            </div>
                        </Content>
                    }
                />
                <Stripe
                    id={"music"}
                    isDark={true}
                    title={
                        <Title>
                            <h1>Music</h1>
                        </Title>
                    }
                    summary={
                        <Summary>
                            <p>Listen to our latest sound studies made with the
                                code we are developing</p>
                            <p>You'll find all of them on our {"  "}
                                <a href="https://www.youtube.com/channel/UC_mWCpFGG9xRDbYZMTdwHKw" target="_blank" rel="noreferrer">
                                    YouTube
                                </a>{" "}and{" "}
                                <a href="https://soundcloud.com/ktonal" target="_blank" rel="noreferrer">
                                    SoundCloud
                                </a>
                                {" "}channels.</p>
                        </Summary>
                    }
                    content={
                        <Content>
                            <div id={"music-grid"}>
                                {links.map(link => <EmbedPlayer key={link.url} {...link} />)}
                            </div>
                        </Content>
                    }
                />
                <Stripe
                    id={"code-section"}
                    isDark={false}
                    title={
                        <Title>
                            <h1>Code</h1>
                        </Title>
                    }
                    summary={
                        <Summary>
                            <div>
                                <p>We are working on several open-source projects to facilitate and democratize
                                    audio
                                    generation
                                    with neural networks.
                                </p>
                                <p>You'll find all of them on our {" "}
                                    <a href="https://github.com/ktonal" target="_blank"
                                       rel="noreferrer">
                                        GitHub
                                    </a>
                                    .
                                </p>
                            </div>
                        </Summary>
                    }
                    content={
                        <Content>
                            <div className={"project"}>
                                <div className={"description"}>
                                    <h3><a href={"https://github.com/ktonal/mimikit"}>mimikit</a></h3>
                                    <p><code>mimikit</code> is an open-source python package for audio and music data
                                        modeling with neural networks.</p>

                                    <p>It contains models out-of-the-box and simple utilities for dealing with audio data.</p>
                                    <p>The aim of mimikit is double : it will lower the barrier to deep-learning for non-developers while providing tools to developers that enable fast experimentation.</p>
                                </div>
                                <div className={"sample"}>
                                    <CodeBlock
                                        input={`
    from mimikit.freqnet import FreqNet
    
    path_to_ckpt = path_to_model + "MOD-134/states/epoch=X.ckpt"

    model = FreqNet.load_from_checkpoint(path_to_ckpt, data_object=db.fft)
    
    for i in range(8):
        audio = model.generate(model.random_train_example(),
                              n_steps=2048,
                              hop_length=db.fft.attrs["hop_length"])
        model.log_audio("train_example_" + str(i), audio)
                                       `}
                                    />
                                </div>
                            </div>
                            <div className={"project"}>
                                <div className={"description"}>
                                    <h3>Audio Experiment Explorer</h3>
                                    <p><code>aXX</code> is small web application to explore the outputs of audio generative models made with mimikit and stored in neptune.ai.</p>
                                </div>
                                <div className={"sample"}>
                                    <img id={"axx-screenshot"} src={window.location.origin + "/axx-screenshot.png"} alt={""}/>
                                </div>
                            </div>
                        </Content>
                    }
                />
                <footer className={"footer stripe negative"}>
                    <div id={"ktonal-footer"}>
                        <p>K T O N A L </p>
                    </div>
                    <div className={"icon-div"}>
                        <div className={"icons"}>
                            <a href="https://www.youtube.com/channel/UC_mWCpFGG9xRDbYZMTdwHKw" target="_blank" rel="noreferrer">
                                <IconContext.Provider value={{size: 40, color: '#CCC'}}>
                                    <FaYoutube/>
                                </IconContext.Provider>
                            </a>
                            <a href="https://soundcloud.com/ktonal" target="_blank" rel="noreferrer">
                                <IconContext.Provider value={{size: 40, color: '#CCC'}}>
                                    <FaSoundcloud/>
                                </IconContext.Provider>
                            </a>
                            <a href="https://github.com/ktonal" target="_blank"
                               rel="noreferrer">
                                <IconContext.Provider value={{size: 40, color: '#CCC'}}>
                                    <FaGithub/>
                                </IconContext.Provider>
                            </a>
                        </div>
                        <p>&#169; {new Date().getFullYear() + " ktonal"}</p>
                    </div>
                </footer>
            </div>
        </>);
}

export default App;
