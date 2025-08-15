

````markdown
# 🔐 Password Generator (React + TypeScript)

A simple, responsive password generator built using **React**, **TypeScript**, and **Tailwind CSS**.  
It allows users to generate random passwords with configurable length, numbers, and special characters.  
Includes a **copy-to-clipboard** feature for convenience.

---

## 🚀 Features
- Set password length (6–50 characters)
- Include/exclude **numbers** and **special characters**
- Responsive, clean UI with Tailwind styling
- Copy password to clipboard with one click
- Automatically generates a new password when settings change

---

## 🛠 React Concepts Used

### 1. **useState**
- Stores component state (length, password, booleans for numbers/characters, copy status).
- Example:
  ```ts
  const [length, setLength] = useState(12);
````

* **When to use:** Track and update values that change over time within a component.

---

### 2. **useEffect**

* Runs **side effects** after render (regenerate password when settings change).
* Example:

  ```ts
  useEffect(() => {
    passwordGenerator();
  }, [length, characters, numbers]);
  ```
* **When to use:** Fetching data, DOM manipulation, timers, re-running code on dependency changes.

---

### 3. **useCallback**

* Memoizes a function so it is **not recreated** on every render unless dependencies change.
* Example:

  ```ts
  const passwordGenerator = useCallback(() => { ... }, [length, characters, numbers]);
  ```
* **When to use:** Passing functions as props, expensive calculations, stable event handlers.

---

### 4. **useRef**

* Holds a **reference** to a DOM element or mutable value that persists across renders.
* Does **not cause re-renders** when updated.
* Example:

  ```ts
  const passwordRef = useRef<HTMLInputElement>(null);
  passwordRef.current?.select();
  ```
* **When to use:** Accessing DOM nodes, storing previous values, timers, focus management.

---

## 📂 Project Structure

```
src/
 ├── App.tsx        # Main React component
 ├── index.css      # Tailwind styles
 └── main.tsx       # App entry point
```

---

## ⚡ Quick Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 💡 Key Learning Takeaways

* **State management:** `useState` for UI control and data storage.
* **Side effects:** `useEffect` for reacting to dependency changes.
* **Performance:** `useCallback` to avoid unnecessary re-creations of functions.
* **DOM access:** `useRef` for working with input selections and clipboard.
* **UI:** Tailwind CSS for rapid, responsive design.

---

## 📚 React Hook Quick-Reference Table

| Hook            | Purpose                                             | Common Use Cases                                                 | Triggers Rerender?                    |
| --------------- | --------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------- |
| **useState**    | Store and update local component state              | Form inputs, toggles, counters                                   | ✅ Yes                                 |
| **useEffect**   | Run side effects after render                       | API calls, timers, subscriptions, reacting to state/prop changes | ❌ No (unless state changes inside it) |
| **useRef**      | Store mutable values or access DOM elements         | Focus input, store previous value, hold timer ID                 | ❌ No                                  |
| **useCallback** | Memoize functions to avoid unnecessary re-creations | Passing handlers to child components, optimizing renders         | ❌ No                                  |
| **useMemo**     | Memoize computed values                             | Expensive calculations, derived data                             | ❌ No                                  |
| **useContext**  | Access global/shared state without prop drilling    | Theming, auth state                                              | ✅ Yes                                 |
| **useReducer**  | Manage complex state logic                          | State with multiple sub-values, complex updates                  | ✅ Yes                                 |

---


