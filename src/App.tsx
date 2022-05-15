import "./App.scss";
import "./styles/index.scss";
import ThemeProvider from "./components/contexts/ThemeProvider";
import ThemeSetter from "./components/ThemeSetter";
import TestComponent from "./components/test-component/TestComponent";
import HelloWorld from "./components/hello-world/HelloWorld";

function App() {
  return (
    <ThemeProvider>
      <ThemeSetter />
      <HelloWorld />
      <TestComponent />
    </ThemeProvider>
  );
}

export default App;
