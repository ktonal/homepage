import React from "react";
import "../css/Glitch.css";
import bg from "../images/bg.png";

export default function Bg() {
  const glitchitem_style = {
    background: "url(" + bg + ")no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "-28vw 50%",
  };
  return (
    <div className="bg">
      <div class="glitch">
        <div class="glitch__item" style={glitchitem_style}></div>
        <div class="glitch__item" style={glitchitem_style}></div>
        <div class="glitch__item" style={glitchitem_style}></div>
        <div class="glitch__item" style={glitchitem_style}></div>
        <div class="glitch__item" style={glitchitem_style}></div>
      </div>
    </div>
  );
}
