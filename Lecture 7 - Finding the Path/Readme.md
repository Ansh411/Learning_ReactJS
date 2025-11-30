### About useEffect Dependancy array Scenario and useState positioning in component

#### useEffect Dependency Array

The dependency array tells React when to run the useEffect.<br/>

-- [] → run only once (like componentDidMount).<br/>

-- [value] → run when value changes.<br/>

-- No array → run after every render.<br/>

➡️ React checks the dependencies and re-runs the effect only if something inside the array has changed.

### About react-router-dom and its use in navigating to other pages using createBrowserRouter, RouterProvider from react-router-dom

➡️ react-router-dom helps us move between different pages in a React app without reloading the whole website.<br/>
➡️ It creates a Single Page Application (SPA) where only the content changes, not the full page.<br/>

#### createBrowserRouter 

➡️ createBrowserRouter is used to define all the routes of your app.
You tell React which component should show on which URL path. <br/>

`code`

    const appRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> }
    ]);

---



### How to make our own error page and also can add useRouteError fromm react-router-dom for better error page details

### Children Routes using Outlet from react-router-dom

### Server-side Routing Vs Client-side Routing

### Link instead of anchor tag for not reloading the page if we navigate to other pages which make react to build single page applications

### Static Routing 

### Dynamic Routing

### What is useParams and how to use it ?

### Link for Res Menu for giving resId (but in my code name) to fetch data according to that