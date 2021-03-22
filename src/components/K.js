import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Logo({ full }) {
  return (
    <>
      <span className="logo">
        <span>|</span>
        <span>{"{"}</span>
      </span>{" "}
      {full && <span className="logo-text">tonal</span>}
    </>
  );
}

export function CodeBlock({ code }) {
  return (
    <SyntaxHighlighter language="python" style={twilight}>
      {code}
    </SyntaxHighlighter>
  );
}
