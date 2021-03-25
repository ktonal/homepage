import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function Code({ code }) {
  return <SyntaxHighlighter language="python">{code}</SyntaxHighlighter>;
}
