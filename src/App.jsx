import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [content, setContent] = useState([]);

  function handleChangeviaText(event) {
    setText(event.target.value);
  }

  function handleChangeviaButton(e) {
    if (e.key === "Enter") {
      setContent([...content, { text, done: false }]);
      setText("");
    }
  }
  function handleDelete(index) {
    setContent((prevContent) => prevContent.filter((_, i) => i !== index));
  }

  function createList(con, index) {
    return (
      <li
        key={index}
        onClick={() => handleDelete(index)}
        style={{
          cursor: "pointer",
        }}
      >
        {con.text}
      </li>
    );
  }

  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          value={text}
          onChange={handleChangeviaText}
          onKeyDown={handleChangeviaButton}
        />
        <button onClick={handleChangeviaButton}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{content.map(createList)}</ul>
      </div>
    </div>
  );
}

export default App;
