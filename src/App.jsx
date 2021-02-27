import React from 'react';
import ReactPlayer from "react-player";
import {IconContext} from 'react-icons';
import {FaGithub, FaFacebook, FaSoundcloud, FaYoutube, FaChevronLeft, FaChevronRight} from 'react-icons/fa';

import './App.scss';
import {links} from './music-links';
import Waveform from "./Waveform";
import CodeBlock from "./CodeBlock"


function Stripe(props) {
    const [isOpen, setOpen] = React.useState(true);
    const isEven = (props.index % 2) === 0;
    return (
        <div className={"stripe" + (isEven ? " positive" : " negative")} id={props.id}>
            <div className={"header"}>
                {isEven
                    ? <>{[props.title, props.summary]}</>
                    : <>{[props.title, props.summary]}</>
                }
            </div>
            {/*<p className={"more"} onClick={() => {*/}
            {/*    setOpen(!isOpen)*/}
            {/*}}>{isOpen ? "Ok" : "Show Me More"}</p>*/}
            {isOpen && props.content}
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
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}

function WaveDiv(props){

}


function App() {
    const [linkIdx, setLinkIdx] = React.useState(0);
    const [isLanding, setIsLanding] = React.useState(true);
    return (
        <>
            <div className={"landing"}>
                <img src={window.location.origin + "/btv-landing.png"} className={"btv-landing"}/>
                <div className={"landing-area"}>
                    <div className={"ktonal-landing"}>
                        <img src={window.location.origin + "/k-circle-bw.svg"}
                             className="k-landing"
                             alt="logo"/>
                        <h1>T O N A L</h1>
                    </div>
                    <h2>Learning machines for and by musicians</h2>
                    {/*<Waveform*/}
                    {/*    url={"https://raw.githubusercontent.com/k-tonal/axx/gh-pages/files/experiment-2/EX2-122/audios/prompt%3D20393.mp3"}*/}
                    {/*/>*/}
                    {/*<div className={"enter"}>*/}
                    {/*    <button onClick={() => setIsLanding(false)}>ENTER</button>*/}
                    {/*</div>*/}
                </div>
            </div>

            <div className="main">
                <img src={window.location.origin + "/btv-landing.png"} className={"btv-background"}/>
                <header className={"top"}>
                    <div id={"logo"} onClick={() => setIsLanding(true)}>
                        <img src={window.location.origin + "/k-circle-bw.svg"} className="k-logo"
                             alt="logo"/>
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
                    index={0}
                    title={
                        <Title>
                            <h1>What the </h1>
                            <img src={window.location.origin + "/k-circle-bw.svg"} className="k-about"
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
                    index={1}
                    title={
                        <Title>
                            <h1>Music</h1>
                        </Title>
                    }
                    summary={
                        <Summary>
                            <p>Here, you can listen to out latest sound studies where we explore the capabilities of the
                                code we are developing</p>
                            <p>You'll find all of them on our {"  "}
                                <a href="https://youtube.com/" target="_blank" rel="noreferrer">
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
                    index={2}
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
                                    with Neural Networks.
                                </p>
                                <p>You'll find all of them on our {" "}
                                    <a href="https://github.com/ktonal" target="_blank"
                                       rel="noreferrer">
                                        GitHub
                                    </a>
                                    .
                                </p>
                            </div>
                            <div id={"code-sample"}>
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
                                /> <CodeBlock
                                input={``}
                            />
                            </div>
                        </Summary>
                    }
                    content={
                        <Content>

                        </Content>
                    }
                />
                <footer className={"footer stripe negative"}>
                    <div className={"motto"}>
                        <p>K T O N A L </p>
                        {/*<p>Music with AI from Music to AI in Music for AI as Music of AI for Music to AI</p>*/}
                    </div>
                    <div className={"icon-div"}>
                        <div className={"icons"}>
                            <a href="https://facebook.com/katonal" target="_blank" rel="noreferrer">
                                <IconContext.Provider value={{size: 40, color: '#CCC'}}>
                                    <FaFacebook/>
                                </IconContext.Provider>
                            </a>
                            <a href="https://youtube.com/" target="_blank" rel="noreferrer">
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
