import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const words = text.split(/\s+/).filter((word) => word !== "");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Word Counter</h1>
      <textarea
        style={textareaStyle}
        rows="6"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder="Type or paste your text here..."
      />
      <p style={wordCountStyle}>Word count: {words.length}</p>
    </div>
  );
}

const textareaStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "16px",
  border: "1px solid #ccc"
};

const wordCountStyle = {
  fontSize: "18px",
  fontWeight: "bold"
};

export default App;
