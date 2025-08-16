import { createContext, useContext } from "react";

export const ThemeContext= createContext({});
---------
- when creating context, already fed default value using object 
------------
when creating context,
- we can pass variable or methods in object

use provider to pass context value to all other compont
- need to wrap

useContext - to access context value in any components