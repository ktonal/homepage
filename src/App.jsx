import {
    BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import ReactPlayer from "react-player";

import logo from './k-tonal-logo.png';
import './App.scss';
import {links} from './music-links';


function App() {
    return (
        <div className="App">
            <header className="header">
            </header>
            <div className="main-container">
                <Router>
                    <div className={"sidebar"}>
                        <img src={logo} className="App-logo" alt="logo"/>
                        {/*<span className={"motto"}>{"Music with AI with Music"}</span>*/}
                        <Link to={"/what-the-k"} className={"link"}>What the k?</Link>
                        <Link to={"/code"} className={"link"}>Code</Link>
                        <Link to={"/music"} className={"link"}>Music</Link>
                        <Link to={"/writings"} className={"link"}>Writings</Link>
                        <Link to={"/project-gallery"} className={"link"}>Projects Gallery</Link>
                        <Link to={"/members"} className={"link"}>Members</Link>
                    </div>

                    <div className={"content-container"}>
                        <Switch>
                            <Route path={"/what-the-k"}>
                                <div>
                                    <h2>What's ktonal?</h2>
                                    <p>ktonal is a group of composers working on different aspects of AI-powered
                                        music-making.</p>
                                    <p>We develop open-source code, write music pieces and we love to reflect the two by
                                        putting our thoughts down in writings.</p>
                                    <p>Generally, we're motivated by the idea that technological and aesthetical
                                        developments should always be concerned by each other and
                                        we find great pleasure exploring this relationship within our musical
                                        praxis.</p>
                                    <h2>How do you pronounce "ktonal"?</h2>
                                    <p>Spell the "k" and then say "tonal" ;)</p>
                                    <h2>Why "k"tonal?</h2>
                                    <p>
                                        The "k" of ktonal comes from the german word for AI : "Künstlische Intelligenz".
                                        Thus ktonal stands for AI-made music but it is also a wink to "atonal music",
                                        this thing a certain Schönberg claims to have invented and that enjoyed quite a
                                        success
                                        in the classical western tradition of the 20th century...
                                    </p>

                                </div>
                            </Route>
                            <Route path={"/code"}>
                                <div>
                                    <h2>Repositories</h2>
                                    <section>On our <a href={"https://github.com/k-tonal"}>GitHub page</a> you'll find :
                                        <ul>
                                            <li>
                                                <p><a
                                                    href={"https://github.com/k-tonal/mimikit"}><code>mimikit</code></a> :
                                                    a python package for making deep generative models with your own
                                                    audio files.</p>
                                            </li>
                                            <li>
                                                <p><a
                                                    href={"https://github.com/k-tonal/mimikit-notebooks"}>the <code>mimikit</code> notebooks</a> :
                                                    a set of plug & play notebooks to use mimikit in colab.</p>
                                            </li>
                                            <li>
                                                <p><a href={"https://github.com/k-tonal"}><code>axx</code></a> : a
                                                    webapp still in early development to visualize and listen to the
                                                    models made with <code>mimikit</code>.</p>
                                            </li>
                                        </ul>
                                    </section>
                                    <h2>Documentation</h2>
                                    <section>
                                        <b>Coming soon</b>: tutorials and documentation for <code>mimikit</code>!
                                    </section>
                                </div>
                            </Route>
                            <Route path={"/music"}>
                                <p>You'll find more examples on our <a
                                    href={"https://www.youtube.com/channel/UC_mWCpFGG9xRDbYZMTdwHKw"}>YouTube</a> and <a
                                    href={"https://soundcloud.com/k-tonal"}>SoundCloud</a> channels.</p>
                                <h2>Highlights</h2>
                                <div className={"music-grid"}>
                                    {links.map(link => {
                                        return (
                                            <div key={link.url} className={"embed-player"}>
                                                <ReactPlayer url={link.url}
                                                    // width={"864px"}
                                                    // height={"100%"}
                                                />
                                                <p>{link.description}</p>
                                            </div>)
                                    })}
                                </div>
                            </Route>
                            <Route path={"/writings"}>
                                <div>
                                    We write writings!
                                </div>
                            </Route>
                            <Route path={"/project-gallery"}>
                                <div>
                                    We do projects!
                                </div>
                            </Route>
                            <Route path={"/members"}>
                                <div>
                                    <ul>
                                        <li>
                                            Antoine Daurat
                                        </li>
                                        <li>
                                            Björn Erlach
                                        </li>
                                        <li>
                                            Roberto Fausti
                                        </li>
                                        <li>
                                            Genoël Lilienstern
                                        </li>
                                        <li>
                                            Dohi Moon
                                        </li>
                                    </ul>
                                </div>
                            </Route>
                        </Switch>
                    </div>
                </Router>

            </div>
            <footer className={"footer"}>
                {"Copyright 2021 k-tonal"}
            </footer>
        </div>
    );
}

export default App;
