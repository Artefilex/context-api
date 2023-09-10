import "./App.css";

import {useTheme } from "./context/ThemeContext";
import ThemeControl from "./ThemeControl";
function App() {
  const {theme} = useTheme()
  return <div className={`App ${theme}`}>
        <ThemeControl />
        <h1> {theme}</h1>
    </div>
  
}

export default App;
