import React, { useState } from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import "react-typist/dist/Typist.css";

export default function Type({ text, loop, interval, wrap }) {
  const [showHeadline, setShowHeadline] = useState(!text);
  const _text = text && (
    <Typist
      cursor={{
        hideWhenDone: true,
        hideWhenDoneDelay: 0,
      }}
      onTypingDone={() => setShowHeadline(true)}
    >
      {text}
    </Typist>
  );
  const _loop = showHeadline && loop && (
    <TypistLoop interval={interval || 5000}>
      {loop.map((l) => (
        <Typist key={l.text} cursor={{ blink: true }}>
          {l.text}
        </Typist>
      ))}
    </TypistLoop>
  );
  const wrapped = (x) => (wrap === "div" ? <div>{x}</div> : <>{x}</>);
  return wrapped(
    <>
      {wrapped(_text)}
      {wrapped(_loop)}
    </>
  );
}
