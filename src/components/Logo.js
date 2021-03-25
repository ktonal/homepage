import React from "react";

export default function Logo({ full }) {
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
