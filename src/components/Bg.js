import React from "react";
import "../css/Glitch.css";
import bg from "../images/bg.png";

export default function Bg({ full, opacity, glitch }) {
  const bgStyle = {
    background: "url(" + bg + ")no-repeat",
    backgroundSize: full ? "contain" : "cover",
    backgroundPosition: full ? "0% 50%" : "50% 50%",
    opacity: opacity || 1,
  };
  return (
    <div className="bg" style={!glitch ? bgStyle : null}>
      {glitch && (
        <div class="glitch">
          <div class="glitch__item" style={bgStyle}></div>
          <div class="glitch__item" style={bgStyle}></div>
          <div class="glitch__item" style={bgStyle}></div>
          <div class="glitch__item" style={bgStyle}></div>
          <div class="glitch__item" style={bgStyle}></div>
        </div>
      )}
    </div>
  );
}
