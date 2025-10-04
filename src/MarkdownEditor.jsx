import React, { useState } from "react";
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  markdownShortcutPlugin,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  ListsToggle,
  UndoRedo,
} from "@mdxeditor/editor";

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
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <MDXEditor
          markdown={markdown}
          onChange={setMarkdown}
          contentEditableClassName="custom-content"
          // Add plugins for the features you want
          plugins={[
            headingsPlugin({
              // Only allow h1, h2, h3
              allowedHeadingLevels: [1, 2, 3],
            }),
            listsPlugin(),
            quotePlugin(),
            thematicBreakPlugin(),
            markdownShortcutPlugin(),
            // The Toolbar plugin is where you configure the menu
            toolbarPlugin({
              toolbarContents: () => (
                <>
                  <UndoRedo />
                  <BlockTypeSelect />
                  {/* Only show Bold by configuring the options */}
                  <BoldItalicUnderlineToggles options={["Bold"]} />
                  <ListsToggle />
                </>
              ),
            }),
          ]}
        />
        <style>{`
          .custom-content {
            text-align: left !important;
          }
          .custom-content * {
            text-align: left !important;
          }
        `}</style>
      </div>

      {/* This section is for our custom deploy button and live output */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleDeploy}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "20px",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          Deploy
        </button>

        <div
          style={{
            backgroundColor: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <h3
            style={{
              marginTop: 0,
              marginBottom: "12px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Live Markdown Output:
          </h3>
          <pre
            style={{
              backgroundColor: "white",
              padding: "16px",
              borderRadius: "6px",
              border: "1px solid #e5e7eb",
              overflow: "auto",
              fontSize: "14px",
              lineHeight: "1.5",
              margin: 0,
            }}
          >
            {markdown}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
