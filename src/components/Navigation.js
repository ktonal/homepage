import React from "react";
import { AppBar, Toolbar, Box, Container } from "@material-ui/core";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import Sticky from "react-stickynode";

export function Nav() {
  const height = 90;
  const linkProps = {
    smooth: true,
    offset: -1 * height,
  };
  return (
    <Sticky activeClass="sticky">
      <AppBar
        position="fixed"
        className="nav"
        style={{ height: height + "px", lineHeight: height + "px" }}
      >
        <Container maxWidth={"lg"}>
          <Toolbar>
            <Link to="#" {...linkProps}>
              <Logo />
            </Link>
            <div style={{ flexGrow: 1 }} />
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
  return (
    <AppBar position="static" color={"primary"} className="footer">
      <Container>
        <Toolbar>
          <Box>
            <Logo full />
          </Box>
          <div style={{ flexGrow: 1 }} />
          <SocialLinks />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export function SocialNav() {
  return (
    <AppBar position="absolute" color={"transparent"} className="social-nav">
      <Container>
        <Toolbar>
          <div style={{ flexGrow: 1 }} />
          <SocialLinks />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function SocialLinks(props) {
  const links = {
    fb: "facebook.com",
    sc: "soundcloud.com",
    yt: "youtube.com",
    gh: "github.com",
  };
  return (
    <div className="social">
      <a href={links.fb} target="_blank">
        <FontAwesomeIcon icon={["fab", "facebook-f"]} />
      </a>
      <a href={links.sc} target="_blank">
        <FontAwesomeIcon icon={["fab", "soundcloud"]} />
      </a>
      <a href={links.yt} target="_blank">
        <FontAwesomeIcon icon={["fab", "youtube"]} />
      </a>
      <a href={links.gh} target="_blank">
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
    </div>
  );
}
