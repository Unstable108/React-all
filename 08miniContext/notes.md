creating use Context
src/context/UserContext.js
import React from "react";
const UserContext = React.createContext();
export default UserContext;

- after creating context, we create provider
- we will use that at top level 
<UserContext>
  <Login/>
  <card>
    <Data />
  <card/>
<UserContext />

all the components inside can take access to global variables though the conetext

-userContextProvider.jsx
import React from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
}
export default UserContextProvider;

//childrens are basically div, joh aaraha woh pass kardo

provider code
import React from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    //joh bhi api call ho waha pe kardo
    const [user,setUser]= React.useState([]);

    return(
        // joh bhi value pass karna ho,
        //use object ki tarah pass karunga
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

-------
useContext, to send data to context and to fetch
-----------
