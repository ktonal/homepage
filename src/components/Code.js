import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Code({ code }) {
  return (
    <SyntaxHighlighter language="python" style={twilight}>
      {code}
    </SyntaxHighlighter>
  );
}
