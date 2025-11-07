"use client";

import React, { useState, useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCopy, FaCheck, FaFileCode } from "react-icons/fa";
import styles from "./CodeShowcase.module.css";
import { ThemeContext } from "../context/ThemeContext";

const CodeShowcase = ({ className, children }) => {
  const [isCopied, setIsCopied] = useState(false);
  const { theme } = useContext(ThemeContext);

  const languageMatch = className
    ? /language-(\w+)(?::([\w.-]+))?/.exec(className)
    : null;
  const language = languageMatch ? languageMatch[1] : "text";
  let filename = languageMatch ? languageMatch[2] : null;

  if (!filename) {
    switch (language) {
      case "python":
        filename = "main.py";
        break;
      case "javascript":
        filename = "index.js";
        break;
      case "html":
        filename = "index.html";
        break;
      case "css":
        filename = "style.css";
        break;
      case "bash":
        filename = "script.sh";
        break;
      default:
        filename = language;
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(String(children)).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className={styles.codeWrapper}>
      <div className={styles.codeHeader}>
        <div className={styles.headerLeft}>
          <FaFileCode className={styles.fileIcon} />
          <span className={styles.filename}>{filename}</span>
          <span className={styles.language}>({language})</span>
        </div>
        <button onClick={handleCopy} className={styles.copyButton}>
          {isCopied ? <FaCheck /> : <FaCopy />}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? atomDark : vs}
        showLineNumbers={true}
        customStyle={{
          margin: 0,
          borderRadius: "0 0 8px 8px",
          backgroundColor: theme === "dark" ? "#0D1117" : "#F6F8FA",
        }}
        lineNumberStyle={{ color: "#6b7280", fontSize: "0.8rem" }}
      >
        {String(children).trim()}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeShowcase;
