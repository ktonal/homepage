import React from "react";
import { Container } from "@material-ui/core";

export function Content({ children, ...p }) {
  return <main {...p}>{children}</main>;
}
export function Section({ children, containerProps, i, ...p }) {
  return (
    <section className={i ? "i" : ""} {...p}>
      <Container {...containerProps}>{children}</Container>
    </section>
  );
}
