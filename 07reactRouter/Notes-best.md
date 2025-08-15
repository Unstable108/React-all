in layout, we are structing out webpage
we use <Outlet/> -> to add dynamically components
- we can use nesting from react-router-dom to display in outlet

in top level we give Layout
in main.jsx

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

const router= createBrowseRouter(
    createRoutesFromElements(
        <Route to='/' element={<Layout/>}>
           <Route to='' element{<Home/>}/>
           <Route to='/about' element{<About/>}/>
           <Route loader={} to='' element{<fetch/>}/> //loader used in fetching
        </Route>
    )
)