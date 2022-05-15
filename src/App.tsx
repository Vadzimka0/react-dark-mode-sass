import "./App.scss";
import ThemeProvider from "./components/contexts/ThemeProvider";
import ThemeSetter from "./components/ThemeSetter";

function App() {
  return (
    <ThemeProvider>
      <ThemeSetter />
      <div className="myClass">
        <h1>Hello World</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
