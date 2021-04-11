import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function CodeBlock({ code }) {
  return <SyntaxHighlighter language="python">{code}</SyntaxHighlighter>;
}
