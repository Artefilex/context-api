import { useTheme} from "./context/ThemeContext";
function ThemeControl() {
    const {theme ,setTheme} = useTheme()
  
  
  return <button onClick={() =>{
    setTheme(theme === "dark" ? "light" : "dark")
}}> {theme} </button>;
}

export default ThemeControl;
