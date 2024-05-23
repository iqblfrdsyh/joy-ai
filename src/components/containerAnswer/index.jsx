import React from "react";
import { Light as SyntaxHighlight } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ContainerAnswer = ({ text }) => {
  return (
    <div className="h-[80%] mx-auto">
      <SyntaxHighlight
        language="html"
        style={a11yDark}
        wrapLongLines
        className="rounded-sm"
      >
        {text}
      </SyntaxHighlight>
    </div>
  );
};

export default ContainerAnswer;
