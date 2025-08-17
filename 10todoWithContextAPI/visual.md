Here’s a **visual diagram** of how `Context` + `Provider` + `useContext` work together:

---

### 📦 Context Flow

```
               (creates an empty box for shared data)
createContext ----------------------> TodoContext

```

---

### 🛰 Provider (fills the box with data & shares it with children)

```
<TodoProvider value={{ todos, addTodo }}>
    <App />
</TodoProvider>

     | 
     v
Provides this data box 👇
{ todos, addTodo }
```

---

### 📱 useContext (any child can open the box & use it)

```
Inside TodoList.jsx

const { todos, addTodo } = useTodo();  
       |
       v
Grabs the shared value { todos, addTodo }
from the nearest <TodoProvider> above in the tree
```

---

### Putting It All Together

```
[ TodoProvider ]  --> shares value = { todos, addTodo }
        |
        v
   [ App Component ]
        |
        v
   [ TodoList Component ]
        |
        v
   useTodo() ---> useContext(TodoContext)
                ---> gets { todos, addTodo }
```

---

👉 In short:

* **Provider** = puts data into the box.
* **useContext** = opens the box and gets the data.
* **Context** itself = just defines what box exists.

---

