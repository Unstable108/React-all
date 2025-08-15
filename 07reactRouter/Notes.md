Notes:
We don't use <a> tag with React because it reloads the entire page.
We use <Link> instead of <a> in React.

Link syntax 
<Link to="">
The Link component is used for basic navigation between routes and functions similarly to an HTML <a> tag, allowing navigation without page reloads while preserving browser history

 NavLink extends the functionality of Link by automatically applying styling attributes when the linked route matches the current URL.
 This includes adding an active class by default 
 These features enable developers to visually highlight the active link, which is especially useful in navigation menus, sidebars, or tabs

In NavLink, we use all the classes in callback, in backticks ``
<NavLink className={(isActive or isPending)=>{}} >
NavLink automatically tell if the page we are in is the active page (by matching with the URL)

to get dynamic data from link - localhost/user/id
in route
<Route path='/user/:userid' element={<User/>}/>
- don't have to use props, User component directly get acceced
- in User.jsx, use useParams from react-router-dom
- const {userid} = useParams();
<div>username: {userid} </div>

to optimize in api calls, use loader in route
- <Route loader={give a method here} path='github' element={<Github/>}/>

then define the method in the github.jsx file to better remember, return a promise, res.json()
- used for api calls, when we hover over the github nav, it starts calling and stores in cache
- use useLoaderData from react-router-dom to get the data
- const data= useLoaderData(),
//githubInfoLoader can return a promise (e.g., from fetch).
//React Router resolves it and passes the result to your component.
//useLoaderData() returns the resolved data (usually JSON), not the promise.