import React from "react";
import "../css/Glitch.css";
import bg from "../images/bg.png";

export default function Bg({ glitch }) {
  const bgStyle = {
    background: "url(" + bg + ")no-repeat",
    backgroundSize: "contain",
    // backgroundPosition: "-28vw 50%",s
    backgroundPosition: "0% 50%",
  };
  return (
    <div className="bg" style={!glitch && bgStyle}>
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
