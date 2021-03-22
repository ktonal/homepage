import * as React from "react";
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";
import bg from "../images/bg.png";
const _bg = bg;

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 150;
  },
  color: ({ x, y, image }) => "#fff",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  growthRate: () => 4,
  //   initialPosition: ({ canvasDimensions }) => {
  //     return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  //   },
};

const motionForce = (x, y) => {
  return forces.entropy(0);
};

function Bg() {
  const { innerWidth, innerHeight } = useWindowSize();
  const glitchitem_style = {
    background: "url(" + _bg + ")no-repeat",

    backgroundSize: "cover",
    backgroundPosition: "0% 50%",
  };
  return (
    <div
      style={{
        background: "url(" + _bg + ")no-repeat",
        backgroundSize: "contain",
      }}
    >
      <ParticleImage
        src={_bg}
        width={Number(innerWidth)}
        height={Number(innerHeight)}
        scale={1.6}
        entropy={10}
        maxParticles={20000}
        particleOptions={particleOptions}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
        // backgroundColor="#191D1F"
        creationDuration={1000}
      />{" "}
      {/* <div style={glitchitem_style} className="bg" /> */}
    </div>
  );
}

export default Bg;
