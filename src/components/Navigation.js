import React from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Container,
    Typography,
    useMediaQuery,
    useTheme,
} from "@material-ui/core";
import Logo from "./Logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-scroll";
import Sticky from "react-stickynode";

const navHeight = 90;

const linkProps = {
    smooth: true,
    offset: -1 * navHeight,
};

export function Nav() {
    return (
        <Sticky className="sticky">
            <AppBar
                position="fixed"
                className="nav"
                style={{
                    height: navHeight + "px",
                    lineHeight: navHeight + "px",
                    width: "100%",
                }}
                elevation={0}
            >
                <Container maxWidth={"lg"}>
                    <Toolbar>
                        <Link to="#" {...linkProps}>
                            <Logo img={true}/>
                        </Link>
                        <div style={{flexGrow: 1}}/>
                        {/* <Hidden mdUp>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon style={{ fontSize: "50px" }} />
            </IconButton>
          </Hidden> */}
                        {/* <Hidden smDown> */}
                        <Link to="what-the-k" className="nav-link" {...linkProps}>
                            what the K?
                        </Link>
                        <Link to="music" className="nav-link" {...linkProps}>
                            music
                        </Link>
                        <Link to="code" className="nav-link" {...linkProps}>
                            code
                        </Link>
                        {/* </Hidden> */}
                    </Toolbar>
                </Container>
            </AppBar>
        </Sticky>
    );
}

export function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <AppBar
            position="static"
            color={"primary"}
            className="footer"
            elevation={0}
        >
            <Container>
                <Toolbar>
                    <Box>
                        <Link to="#" {...linkProps}>
                            <Logo img={true} full={!isMobile}/>
                        </Link>
                    </Box>
                    <div style={{flexGrow: 1}}/>
                    <div >
                        <Typography variant={"alignCenter"}>
                            {"ktonalberlin[AT]gmail.com"}
                        </Typography>
                    </div>
                    <div style={{flexGrow: 1}}/>
                    <SocialLinks/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export function SocialNav() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <AppBar
            position={isMobile ? "static" : "absolute"}
            color={"transparent"}
            className="social-nav"
            elevation={0}
        >
            <Container>
                <Toolbar>
                    <div style={{flexGrow: 1}}/>
                    <SocialLinks/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

function SocialLinks(props) {
    const links = {
        sc: "https://soundcloud.com/ktonal",
        yt: "https://www.youtube.com/channel/UC_mWCpFGG9xRDbYZMTdwHKw",
        gh: "https://github.com/ktonal",
    };
    return (
        <div className="social">
            <a href={links.sc} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "soundcloud"]}/>
            </a>
            <a href={links.yt} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "youtube"]}/>
            </a>
            <a href={links.gh} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "github"]}/>
            </a>
        </div>
    );
}
