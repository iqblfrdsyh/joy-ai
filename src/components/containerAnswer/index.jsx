import React, { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ value }) => (
  <SyntaxHighlighter
    language="jsx"
    style={atomOneDark}
    wrapLongLines={true}
    customStyle={{ padding: "25px" }}
    className="rounded-sm"
  >
    {value}
  </SyntaxHighlighter>
);

const TextWithCode = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 1);
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text]);

  const codeBlockRegex = /```([\s\S]*?)```/g;
  const boldTextRegex = /\*\*([^*]+)\*\*/g;
  const inlineCodeRegex = /`([^`]+)`/g;

  const formatInlineCodeAndBold = (text) => {
    let formattedText = [];
    let lastIndex = 0;
    let match;

    while ((match = boldTextRegex.exec(text)) !== null) {
      const beforeMatch = text.substring(lastIndex, match.index);
      if (beforeMatch) {
        formattedText.push(beforeMatch);
      }
      if (match[1]) {
        formattedText.push(
          <span key={match.index} style={{ fontWeight: "bold" }}>
            {match[1]}
          </span>
        );
      }
      lastIndex = boldTextRegex.lastIndex;
    }

    const remainingText = text.substring(lastIndex);
    if (remainingText) {
      formattedText.push(remainingText);
    }

    formattedText = formattedText.map((part, index) => {
      if (typeof part === "string") {
        const parts = part.split(inlineCodeRegex).map((subPart, subIndex) => {
          if (subIndex % 2 === 1) {
            return <code key={`${index}-${subIndex}`}>{subPart}</code>;
          } else {
            return subPart;
          }
        });
        return <React.Fragment key={index}>{parts}</React.Fragment>;
      }
      return part;
    });

    return formattedText;
  };

  const formatText = (text) => {
    let replacedText = text.replace(/^\* /gm, "- ");
    replacedText = replacedText.replace(/\*{4}$/gm, "**");
    return replacedText.split("\n").map((paragraph, index) => {
      if (paragraph.trim().startsWith("```")) {
        return <CodeBlock key={index} value={paragraph} />;
      } else {
        return (
          <p key={index} className="my-3">
            {formatInlineCodeAndBold(paragraph)}
          </p>
        );
      }
    });
  };

  return (
    <div>
      {displayedText.split(codeBlockRegex).map((part, index) => {
        if (index % 2 === 0) {
          return <div key={index}>{formatText(part)}</div>;
        } else {
          return <CodeBlock key={index} value={part} />;
        }
      })}
    </div>
  );
};

const ContainerAnswer = ({ text }) => {
  return (
    <div className="h-[80%] mx-auto pb-4">
      <TextWithCode text={text} />
    </div>
  );
};

export default ContainerAnswer;
