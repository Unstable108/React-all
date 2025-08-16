import {useEffect, useState} from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode]= useState("light") 
  //make the functions name same as the context value
  //to toggle the theme mode
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  //actual change in theme->implementaion
  useEffect(()=>{
    document.querySelector('html').classList.remove("light",'dark')
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <h1 className="p-4 text-3xl bg-green-400">Hi There</h1>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme Button */}
            <ThemeButton/>
          </div>
          
          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
