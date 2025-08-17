setup
import { createContext, useContext } from "react";

export const TodoContext= createContext({});

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoProvider= TodoContext.Provider;

-----------------
-> in context.js code, we only write function name not definations,
-> we create defination of the functions where we use
-> context api is used for small application

---------------
->need of index.js
take all the imports here, and all the exports from here in any other file

-----------
-> every todo that is coming from context, we will store it somewhere
-> use useState
const [todos, setTodos] = useState([]); //empty array

------------
-> wrap all thinsg with TodoProvider the whole app.jsx
give
-> now provider have to provide somethings the values
<TodoProvider value={{all_the_inside_of_todocontext}}>

--------
-> we will define all the functions/methods here in app.jsx

-------------------
LocalStorage
-> all the values stored as string
-> so value dete time, lete time, json meh convert, deconvert karna padhta hai

---------