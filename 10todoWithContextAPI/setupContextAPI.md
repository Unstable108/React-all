

# 📘 React Context API — Complete Guide (with Your Todo Example)

---

## 1. Why Context API?

Normally, data in React flows **parent → child via props**.
If data is needed deep in the tree, you get **prop drilling** (passing props through many layers).

👉 Context API solves this by letting you **share data globally** without manual prop-passing.

---

## 2. Setup (Your Code)

**`src/context/TodoContext.js`**

```js
import { createContext, useContext } from "react";

// 1. Create Context
export const TodoContext = createContext({});

// 2. Custom Hook for consuming
export const useTodo = () => {
  return useContext(TodoContext);
}

// 3. Provider for wrapping components
export const TodoProvider = TodoContext.Provider;
```

---

## 3. What Each Part Does

### **`createContext({})`**

* Creates a **Context object** (a “box” for shared data).
* Default value `{}` is used if no Provider is present.
* `TodoContext` now has:

  * `TodoContext.Provider` → puts data into the box.
  * `TodoContext.Consumer` → reads data (rarely used, replaced by hooks).

---

### **`TodoProvider`**

* Just an alias for `TodoContext.Provider`.
* Used to wrap your app or component tree and provide the shared data.

Example:

```jsx
<TodoProvider value={{ todos, addTodo }}>
  <App />
</TodoProvider>
```

Everything inside `<TodoProvider>` can access `todos` and `addTodo`.

---

### **`useTodo` (Custom Hook)**

* A wrapper around `useContext(TodoContext)`.
* Makes consuming the context easier:

```js
const { todos, addTodo } = useTodo();
```

instead of:

```js
const { todos, addTodo } = useContext(TodoContext);
```

---

### **`useContext` in Simple Words**

* Think of **Provider** as a **WiFi router** (sharing data).
* `useContext` is like **connecting your phone to WiFi** (getting the data).
* Without a Provider, it falls back to the default value (like no WiFi → mobile data).

---

## 4. Example in Action

**App.jsx**

```jsx
import { TodoProvider } from "./context/TodoContext";
import TodoList from "./components/TodoList";

function App() {
  const todos = ["Learn Context", "Build Todo App"];
  
  return (
    <TodoProvider value={{ todos }}>
      <TodoList />
    </TodoProvider>
  );
}

export default App;
```

**TodoList.jsx**

```jsx
import { useTodo } from "../context/TodoContext";

export default function TodoList() {
  const { todos } = useTodo();
  return (
    <ul>
      {todos.map((t, i) => <li key={i}>{t}</li>)}
    </ul>
  );
}
```

➡️ `TodoList` gets `todos` **without props drilling**.

---

## 5. Diagram (Flow)

```
[ createContext ] ---> TodoContext

[ TodoProvider ]
   value={{ todos, addTodo }}
         |
         v
   [ App / Components ]
         |
         v
   useTodo() --> useContext(TodoContext)
               --> gets { todos, addTodo }
```

(visual version: the diagram I gave you earlier with arrows + boxes)

---

## 6. Things to Know

* ✅ Great for: theme, auth, user info, global app state like todos.
* ❌ Don’t overuse: Context re-renders all consumers when value changes. For big apps, consider Redux, Zustand, etc.
* Best practice: Wrap Context usage in **custom hooks** (like `useTodo`).
* You can create **multiple contexts** (AuthContext, ThemeContext, etc.) for separation.

---

👉 In short:

* `createContext` = make a shared “box”.
* `Provider` = fill the box with data.
* `useContext` (or `useTodo`) = open the box and use the data.

---

Got it 👍 Let’s zoom in only on **`useContext`**.

---

### What is `useContext`?

In React, `useContext` is a hook that lets you **read the value** from a **Context**.

Think of **Context** like a “box” that holds some data, and `Provider` is what puts stuff into the box.
`useContext` is simply the tool you use to **open that box and grab the data**.

---

### In your code:

```js
export const useTodo = () => {
    return useContext(TodoContext);
}
```

Here’s what happens:

1. Somewhere higher in the component tree, you wrap things with the `TodoProvider`:

   ```jsx
   <TodoProvider value={{ todos, addTodo }}>
     <App />
   </TodoProvider>
   ```

   👉 This puts `{ todos, addTodo }` into the **TodoContext box**.

2. Now, inside any child component, when you call:

   ```js
   const { todos, addTodo } = useTodo();
   ```

   * React looks at the nearest `<TodoProvider>` above in the tree.
   * Pulls out the `value` you provided (`{ todos, addTodo }`).
   * Returns it for you to use.



---

👉 So in **simple words**:
`useContext(TodoContext)` lets your component **grab the shared data** from `TodoProvider` without passing props manually.

---
