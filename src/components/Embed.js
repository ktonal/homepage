import React from "react";
import { LiteYouTubeEmbed } from "react-lite-youtube-embed";
import ReactPlayer from "react-player";

export default function Embed({ url, ...p }) {
  const type = url.indexOf("soundcloud") >= 0 ? "soundcloud" : "youtube";
  return (
    <div>
      {type === "soundcloud" ? (
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={url}
            width={"100%"}
            height={"100%"}
            {...p}
          />
        </div>
      ) : (
        <LiteYouTubeEmbed
          playerClass="lty-playbtn"
          iframeClass="embed"
          id={url.replace("https://www.youtube.com/watch?v=", "")}
          {...p}
        />
      )}
    </div>
  );
}
