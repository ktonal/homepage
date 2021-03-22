import React from "react";
import { LiteYouTubeEmbed } from "react-lite-youtube-embed";

export default function Embed({ url, ...p }) {
  const type = url.indexOf("soundcloud") >= 0 ? "soundcloud" : "youtube";
  return (
    <div>
      {/* {type === "soundcloud" ? (
        <ReactSoundcloud url={url} />
      ) : ( */}
      <LiteYouTubeEmbed
        playerClass="lty-playbtn"
        iframeClass="embed"
        id={url.replace("https://www.youtube.com/watch?v=", "")}
        {...p}
      />
      {/* )} */}
    </div>
  );
}
