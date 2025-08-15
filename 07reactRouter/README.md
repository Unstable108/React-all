
# 📚 React Router Quick Revision Guide

A concise set of notes to quickly revise **React Router v6** concepts, focusing on navigation, dynamic routing, loaders, and layout structures.

---

## 🚫 Why Not `<a>` in React?
- `<a>` reloads the entire page.
- React apps use **`<Link>`** from `react-router-dom` for navigation without reloading.
- Preserves browser history and provides a smoother SPA (Single Page Application) experience.

---

## 🔗 `<Link>` Component
- **Syntax:**
  ```jsx
  <Link to="/about">About</Link>
  ```
- Similar to HTML `<a>` but avoids page refresh.
- Used for **basic navigation** between routes.

---

## 🌟 `<NavLink>` Component
- Extends `<Link>` with **active state styling**.
- Automatically applies an `active` class when the route matches the current URL.
- Useful for navigation menus, sidebars, and tabs.

**Syntax with dynamic classes:**
```jsx
<NavLink
  to="/about"
  className={({ isActive, isPending }) =>
    isActive ? "text-blue-500 font-bold" : "text-gray-500"
  }
>
  About
</NavLink>
```
- `isActive` → `true` if the route matches.
- `isPending` → `true` while navigation is in progress.

---

## 📌 Dynamic Route Parameters
**Example URL:** `localhost/user/42`

### Step 1: Define route in `main.jsx`
```jsx
<Route path="/user/:userid" element={<User />} />
```

### Step 2: Access parameter in `User.jsx`
```jsx
import { useParams } from "react-router-dom";

const { userid } = useParams();
return <div>Username: {userid}</div>;
```

---

## ⚡ Optimizing API Calls with `loader`
- `loader` fetches data **before** rendering the component.
- Data is cached — fetching starts as soon as the link is hovered.

**Example Route:**
```jsx
<Route
  path="/github"
  loader={githubInfoLoader}
  element={<Github />}
/>
```

**Example Loader:**
```jsx
export async function githubInfoLoader() {
  const res = await fetch("https://api.github.com/users/octocat");
  return res.json();
}
```

**Access in Component:**
```jsx
import { useLoaderData } from "react-router-dom";

const data = useLoaderData();
```
- `useLoaderData()` returns the resolved data, not the promise.

---

## 🏗 Layouts & `<Outlet />`
- **Layouts** are used to structure web pages with common elements (header, footer, nav).
- `<Outlet />` renders the child routes inside the layout.

**Example Layout:**
```jsx
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
```

---

## 🛠 Router Setup (Example in `main.jsx`)
```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Loader example */}
      <Route
        path="/github"
        loader={githubInfoLoader}
        element={<Github />}
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

---

## 📝 Key Takeaways
| Concept | Purpose | Example Hook/Component |
|---------|---------|------------------------|
| `<Link>` | Navigate without reload | `<Link to="/about">About</Link>` |
| `<NavLink>` | Navigation with active state styling | `isActive`, `isPending` |
| `useParams()` | Get route parameters | `const { id } = useParams();` |
| `loader` | Pre-fetch data before rendering | `useLoaderData()` |
| `<Outlet />` | Render nested routes inside layouts | `Layout.jsx` |

---
