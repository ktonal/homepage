import React, { useRef, useEffect } from "react";
import "../css/Glitch.css";
import bg from "../images/bg.png";

export default function Bg(props) {
  const container = useRef();

  const glitchitem_style = {
    background: "url(" + bg + ")no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "-28vw 50%",
  };

  return (
    <div className="bg">
      <div
        class="glitch"
        // style={{ opacity: 0.7 }}
      >
        <div class="glitch__item" style={glitchitem_style}></div>
        <div class="glitch__item" style={glitchitem_style}></div>
        <div class="glitch__item" style={glitchitem_style}></div>
        <div class="glitch__item" style={glitchitem_style}></div>
        <div class="glitch__item" style={glitchitem_style}></div>
        {/* <h1 class="glitch__title">Glitch</h1> */}
      </div>
    </div>
  );
}
