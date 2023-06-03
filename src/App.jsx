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
    <p>Edit the HTML, CSS and JavaScript files in the code editor below and see the preview on the left update automatically.</p>
    <p>Use the tabs at the top of the editor to switch between the HTML, CSS and JavaScript files.</p>
    <p>Powered by <a href="https://sandpack.codesandbox.io/">Sandpack</a>. See <a href="https://github.com/larryhudson/sandpack-simple">source code on GitHub</a>.</p>

    <SandpackProvider
    files={files} 
    theme="dark" 
    template="static"
    >
    <SandpackLayout>
      <SandpackCodeEditor closableTabs showTabs  />
      <SandpackPreview />
    </SandpackLayout>
    </SandpackProvider>
    </>
  )
}

export default App
