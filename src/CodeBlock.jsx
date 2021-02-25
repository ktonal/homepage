import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/src/styles/prism";
import ReactMarkdown from "react-markdown";

class CodeHighlighter extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={"python"} style={coy}>
        {value}
      </SyntaxHighlighter>

    );
  }
}

function CodeBlock(props) {
  return (
      <ReactMarkdown
    source={props.input}
    renderers={{ code: CodeHighlighter }}
    />
  )
}

export default CodeBlock;