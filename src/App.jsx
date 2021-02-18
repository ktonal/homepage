import React from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import ReactPlayer from "react-player";
import {IconContext} from 'react-icons';
import {FaGithub, FaFacebook, FaSoundcloud, FaYoutube, FaChevronLeft, FaChevronRight} from 'react-icons/fa';

import './App.scss';
import {links} from './music-links';


function App() {
    const [faqIndex, setFaqIndex] = React.useState(-1);
    const [linkIdx, setLinkIdx] = React.useState(0);
    return (
        <div className="main">
            <div className={"ktonal stripe"}>
                {/*<div className={"top"}><h2 style={{margin: "0 auto", width: "max-content"}}>K T O N A L</h2></div>*/}
                <div className={"header"}>
                    <div className={"what-the-k"}>
                        <h1>What the </h1>
                        <img src={window.location.origin + "/k-circle-bw.svg"} className="k-logo"
                         alt="logo"/>
                        <h1> ? </h1>
                    </div>
                    <div className={"faq description"}>
                        {/*<div className={"answer"}>*/}
                        <p>ktonal is a group of composers dedicated to AI-powered sound generation.</p>
                        <p>We conduct our own research, write code and compose music.</p>
                        {/*</div>*/}
                    </div>
                </div>
                {/*<div>*/}
                {/*    {faqIndex === 0 &&*/}
                {/*    <div className={"answer"}>*/}
                {/*        <p>ktonal is a group of composers dedicated to AI-powered sound generation.</p>*/}
                {/*        <p>We conduct our own research, write code and compose music.</p>*/}
                {/*    </div>}*/}
                {/*    {faqIndex === 1 &&*/}
                {/*    <div className={"answer"}>*/}
                {/*        <p>We combine a developers perspective with composers interests.</p>*/}
                {/*        <p>Though AI opens a whole new universe of possibilities, few systems are taylored to*/}
                {/*            experimental artistic usage.</p>*/}
                {/*        <p>Current AI/Deep-Learning systems for sounds and music are huge, expensive and hard to*/}
                {/*            personalize.</p>*/}
                {/*        <p>That sucks...</p>*/}
                {/*        <p>We develop accessible, open-source tools for our own work and anybody interested.</p>*/}
                {/*    </div>}*/}
                {/*    {faqIndex === 2 &&*/}
                {/*    <div className={"answer"}>*/}
                {/*        <p>Spell the "k", then say "tonal".</p>*/}
                {/*        <p>The "k" stands for the german word for AI : "Künstliche Intelligenz".</p>*/}
                {/*    </div>}*/}
                {/*    {faqIndex === 3 &&*/}
                {/*    <div className={"answer"}>*/}
                {/*        <p>*/}
                {/*            Antoine Daurat*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            Björn Erlach*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            Roberto Fausti*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            Genoël von Lilienstern*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            Dohi Moon*/}
                {/*        </p>*/}
                {/*    </div>}*/}
                {/*</div>*/}
            </div>
            <div className={"music stripe"}>
                <div className={"intro description"}>
                    <p>Lorem Ipsum, music music.</p>
                    <p>Follow us on {"  "}
                        <a href="https://youtube.com/" target="_blank" rel="noreferrer">
                            YouTube
                        </a>{" "}and{" "}
                        <a href="https://soundcloud.com/ktonal" target="_blank" rel="noreferrer">
                            SoundCloud
                        </a>
                        {" "}to get the latest tunes.</p>
                </div>
                <div className={"player"}>
                        <span className={"previous"}
                              onClick={() => setLinkIdx(linkIdx > 0 ? (linkIdx - 1) % links.length : links.length - 1)}>
                        <IconContext.Provider value={{size: 40, color: '#666666'}}>
                            <FaChevronLeft/>
                        </IconContext.Provider>
                        </span>
                    <ReactPlayer url={links[linkIdx].url}
                                 width={"80%"}
                                 height={"30vh"}
                    />
                    <span className={"next"} onClick={() => setLinkIdx((linkIdx + 1) % links.length)}>
                        <IconContext.Provider value={{size: 40, color: '#666666'}}>
                            <FaChevronRight/>
                        </IconContext.Provider>
                        </span>
                </div>
                <h1>Music</h1>
            </div>
            <div className={"code stripe"}>
                <div className={"header"}>
                    <h1>Code</h1>
                    <div className={"description"}>
                        <p>We are working on several open-source projects to facilitate and democratize audio generation
                            with state-of-the-art algorithms.</p>
                        <p>You'll find all of them on our {" "}
                            <a href="https://github.com/ktonal" target="_blank"
                               rel="noreferrer">
                                GitHub
                            </a>
                            .
                        </p>

                    </div>
                    <h1>{"|{"}</h1>
                    <img src={window.location.origin + "/code-screenshot.png"} className="code-img"
                         alt="logo"/>
                    <h1>{"}|"}</h1>
                </div>

            </div>
            <footer className={"footer stripe"}>
                <div className={"motto"}>
                    <p>K T O N A L </p>
                    <p>Music with AI from Music to AI in Music for AI as Music of AI for Music to AI</p>
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
    )
        ;
}

export default App;
