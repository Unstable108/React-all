import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  //todos will be an array of objects
  //here all the todos will be stored
  const [todos, setTodos] = useState([]); 

  //setTodos(callback)
  const addTodo=(todo)=>{
    // setTodos(todo) -> this will replace the entire todos array
    setTodos((prev)=>[...prev,{
      id: Date.now(), //generating a unique id 
      ...todo
    }]); 
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id));
    //filter will return a new array excluding the todo with the given id
  }

  //if match the id, update the tode, else return previous todo
  const updateTodo=(id, updatedTodo)=>{
  setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? updatedTodo : prevTodo))
  }

  //keep all the values same, only override the checked value
  const toggleTodo = (id) => {
  setTodos((prev) =>
    prev.map((prevTodo) =>
      prevTodo.id === id ? { ...prevTodo, checked: !prevTodo.checked } : prevTodo
    )
  );
};

  useEffect(() => {
    //load todos when the component mounts
    //from string to json
    const todos= JSON.parse(localStorage.getItem("todos"))
    console.log(todos);

    if(todos && todos.length > 0){
      setTodos(todos);
    }
  }, [])

  useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/> </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
