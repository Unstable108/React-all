import React from "react";
import { createContext, useContext } from "react";

export const ThemeContext= createContext({
    themeMode: "light", // Default theme mode
    darkTheme:()=>{
        // Function to toggle to dark theme
    },
    lightTheme: ()=>{
        // Function to toggle to light theme
    }
});

//themeprovider gives access to the context value to all components inside it
//it is used to wrap the components that need access to the context
export const ThemeProvider= ThemeContext.Provider;

//custom hook to use the ThemeContext
//to access the context value in any component
export default function useTheme(){
    return useContext(ThemeContext)
}