import { useState, useRef } from "react";
import "./App.css";
import Editor from "@monaco-editor/react";

const files = {
  "hello.js": {
    name: "hello.js",
    language: "javascript",
    value: "console.log('hello world!');",
  },
  "hello.ts": {
    name: "hello.ts",
    language: "typescript",
    value: "console.log('hello world!');",
  },
  "hello.py": {
    name: "hello.py",
    language: "python",
    value: "print('hello world!')",
  },
};

function App() {
  const [fileName, setFileName] = useState("hello.js");
  const editorRef = useRef();
  const file = files[fileName];

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function getEditorValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <div className="App">
      <button onClick={() => setFileName("hello.py")}>
        Switch to Python Editor
      </button>
      <button onClick={() => setFileName("hello.js")}>
        Switch to Javascript Editor
      </button>
      <button onClick={() => getEditorValue()}>Save Code</button>
      <Editor
        width="100vw"
        height="80vh"
        theme="vs-dark"
        path={file.name}
        defaultValue={file.value}
        defaultLanguage={file.language}
        onMount={handleEditorDidMount}
      />
    </div>
  );
}

export default App;
