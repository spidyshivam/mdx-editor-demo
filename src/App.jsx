import React from "react";
import MarkdownEditor from "./MarkdownEditor";
import "./App.css"; // Default App styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Awesome Markdown Editor</h1>
        <p>Built with React & @mdxeditor/editor</p>
      </header>
      <main>
        <MarkdownEditor />
      </main>
    </div>
  );
}

export default App;
