import React, { useState } from "react";
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  ListsToggle,
  UndoRedo,
} from "@mdxeditor/editor";
import "./Editor.css"; // Our custom styles

// The initial content for the editor
const initialContent = `
# Welcome to your new Editor!

This editor is built with @mdxeditor/editor and provides perfect Markdown formatting out of the box.

* Create lists with ease.
* Use headings, bold, and italic text.
* The output below is always clean.

Start typing to see the magic happen.
`;

const MarkdownEditor = () => {
  // State to hold the markdown content
  const [markdown, setMarkdown] = useState(initialContent);

  // Function to handle the "Deploy" button click
  const handleDeploy = () => {
    if (!markdown || markdown.trim() === "") {
      alert("There is no content to deploy!");
      return;
    }
    // Show the markdown content in a simple alert dialog
    alert("--- Deployed Markdown Content ---\n\n" + markdown);
  };

  return (
    <div className="editor-container">
      <MDXEditor
        markdown={markdown}
        onChange={setMarkdown}
        // Add plugins for the features you want
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          // The Toolbar plugin is where you configure the menu
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <BlockTypeSelect />
                <BoldItalicUnderlineToggles />
                <ListsToggle />
              </>
            ),
          }),
        ]}
      />
      {/* This section is for our custom deploy button and live output */}
      <div className="bottom-section">
        <button onClick={handleDeploy} className="deploy-button">
          Deploy
        </button>
        <div className="markdown-output">
          <h3>Live Markdown Output:</h3>
          <pre>{markdown}</pre>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
