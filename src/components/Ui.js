import React from "react";
import { Box, Container } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export function Content({ children, ...p }) {
  return <main {...p}>{children}</main>;
}
export function Section({ children, full, i, ...p }) {
  const theme = useTheme();
  return (
    <section
      className={i ? "i" : ""}
      {...p}
      style={{
        height: full ? "100%" : null,
        background: i ? theme.palette.primary.main : null,
        color: i ? theme.palette.primary.contrastText : null,
      }}
    >
      <Container
        maxWidth={"lg"}
        style={{ height: full ? "100%" : null, zIndex: 2 }}
      >
        {children}
      </Container>
    </section>
  );
}
