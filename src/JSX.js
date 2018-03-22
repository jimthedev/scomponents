import React from 'react';

import dedent from "dedent";
import SyntaxHighlighter, {
  registerLanguage
} from "react-syntax-highlighter/prism-light";
import jsx from "react-syntax-highlighter/languages/prism/jsx";
import "react-syntax-highlighter/styles/prism/prism";
import { coy as preStyle } from "react-syntax-highlighter/styles/prism";
registerLanguage("jsx", jsx);
export const JSX = ({ children, ...props }) => (
  <div
    style={{
      marginBottom: "60px",
      marginTop: "0",
      fontSize: "14px",
      overflowX: "hidden"
    }}
  >
    <SyntaxHighlighter
      style={preStyle}
      customStyle={{
        marginTop: "0",
        padding: "10px",
        borderRadius: "3px",
        overflowX: "auto",
        border: "1px solid #d2d4d5"
      }}
      wrapLines={true}
      language="jsx"
    >
      {dedent(children)}
    </SyntaxHighlighter>
  </div>
);

