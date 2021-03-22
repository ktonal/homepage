import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Hidden,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Logo } from "./K";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 110);
    });
  }, []);
  const linkProps = { smooth: true, offset: -110 };

  return (
    <AppBar
      position={"sticky"}
      color={scroll ? "white" : "transparent"}
      className={scroll ? "nav scrolled" : "nav"}
    >
      <Container>
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
          <Link to="what-the-k" {...linkProps}>
            what the K?
          </Link>
          <Link to="about" {...linkProps}>
            about
          </Link>
          <Link to="music" {...linkProps}>
            music
          </Link>
          <Link to="code" {...linkProps}>
            code
          </Link>
          {/* </Hidden> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export function Footer(props) {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="static" color={"white"} className="footer">
      <Container>
        <Toolbar>
          <Box>
            <Logo full />
          </Box>
          <div style={{ flexGrow: 1 }} />
          <FontAwesomeIcon icon={["fab", "facebook"]} />
          <FontAwesomeIcon icon={["fab", "soundcloud"]} />
          <FontAwesomeIcon icon={["fab", "youtube"]} />
          <FontAwesomeIcon icon={["fab", "github"]} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
