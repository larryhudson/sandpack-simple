import './App.css'
import {SandpackProvider, SandpackLayout, SandpackFileExplorer, SandpackCodeEditor, SandpackPreview, SandpackConsole} from "@codesandbox/sandpack-react";

function App() {
  const files = {
    'script.js': '// Add some JavaScript code here',
    'styles.css': '/* Add some CSS code here */',
    'index.html': `<!DOCTYPE html>
<html>

<head>
  <title>Play with HTML, CSS and JavaScript</title>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="/styles.css" />
  <script src="/script.js"></script>
</head>

<body>
  <h1>Hello world</h1>
</body>

</html>`}
  return (
    <>
    <h1>Play with HTML, CSS and JavaScript</h1>

    <SandpackProvider
    files={files} 
    theme="light" 
    template="static"
    >
    <SandpackLayout>
      <SandpackFileExplorer />
      <SandpackCodeEditor closableTabs showTabs  />
      <SandpackPreview />
    </SandpackLayout>
    </SandpackProvider>
    </>
  )
}

export default App
