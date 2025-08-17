import { createContext, useContext } from "react";

export const TodoContext= createContext({
    todos: [
        {
            id:1,
            todo: "Todo msg",
            checked: false,
        },
    ],
    //methods
    addTodo: (todo:string)=> {}, //on name, not defination
    updateTodo:(id:number,todo)=>{},
    deleteTodo:(id:number)=>{},
    toggleTodo:(id:number)=>{},
});

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoProvider= TodoContext.Provider;