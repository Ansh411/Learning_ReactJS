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

```js

 const appRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> }
]);

```
#### RouterProvider

➡️ RouterProvider takes the router you created and makes navigation work across the whole app.
You wrap your app inside it so React knows how to switch pages.<br/>

```js
<RouterProvider router={appRouter} />
```
### How to make our own error page and also can add useRouteError from react-router-dom for better error page details

1️⃣ Create an Error Component <br/>

```js
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError(); // gets error info from react-router
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.status} : {error.statusText || error.message}</p>
    </div>
  );
}

export default ErrorPage;

```

2️⃣ Add it to your Router <br/>

```js
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage /> // custom error page
  },
  { path: "/about", element: <About /> }
]);

```
### Children Routes using Outlet from react-router-dom

➡️ In React Router, children routes let you nest multiple pages under a parent route.
The parent route renders its component, and the nested child routes show inside it using `<Outlet/>`.<br/>

1️⃣ Parent Component with Outlet <br/>

```js
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* Child components will render here */}
    </div>
  );
}

export default Dashboard;
```

2️⃣ Define Children Routes <br/>

```js
const appRouter = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "settings", element: <Settings /> }
    ]
  }
]);
```

⭕ Going to /dashboard/profile → shows Dashboard + Profile inside `<Outlet />`. <br/>

⭕ Going to /dashboard/settings → shows Dashboard + Settings inside `<Outlet />`.

### Server-side Routing Vs Client-side Routing

#### Server-side Routing

Every URL request goes to the server, which decides what HTML to send.<br/>

Page reloads completely every time you navigate.<br/>

Slower navigation because the server must respond for each route.<br/>

#### Client-side Routing

The browser handles routing using JavaScript (like react-router-dom).<br/>

Only the relevant component updates, no full page reload.<br/>

Faster and smoother navigation, works in Single Page Applications (SPA).<br/>

### Link instead of anchor tag for not reloading the page if we navigate to other pages which make react to build single page applications

In React, using a normal `<a>` tag reloads the whole page when you navigate, breaking the Single Page Application (SPA) behavior. <br/>

Instead, React Router provides `<Link>`:<br/>

It changes the URL without reloading the page.<br/>

React updates only the relevant component for the new route.<br/>

This keeps navigation fast and smooth, like an SPA.<br/>

```js
import { Link } from "react-router-dom";

<Link to="/about">Go to About</Link>
```
<br/>

### Static Routing 

➡️ Routes are fixed and predefined in your app. <br/>

➡️ Each URL path always renders the same component.<br/>

➡️ Example: /home → Home component, /about → About component.<br/>

➡️ Easy to set up but not flexible for variable content.<br/>

### Dynamic Routing

➡️ Routes can change based on data or parameters.<br/>

➡️ You can render different content for the same route pattern.<br/>

➡️ Example: /user/1 → User 1, /user/2 → User 2 using :id param.<br/>

➡️ More flexible and useful for pages generated from backend data.<br/>

### What is useParams and how to use it ?

➡️ useParams is a React Router hook that lets you read URL parameters from dynamic routes.<br/>
➡️ It helps you get values like /user/10 → 10 directly inside your component.<br/>

1️⃣ Create a dynamic route using :id (or any parameter):<br/>

```js
{
  path: "/user/:id",
  element: <User />
}
```
2️⃣ Use useParams inside the component:<br/>

import { useParams } from "react-router-dom";

```js
function User() {
  const { id } = useParams(); // read URL parameter
  return <h1>User ID: {id}</h1>;
}

```

➡️ If the URL is /user/5, useParams() returns { id: "5" }.<br/>

➡️ You can use this id to fetch user details, show info, etc.

### Link for Res Menu for giving resId (but in my code name) to fetch data according to that :

➡️ You wrapped each restaurant card inside a <Link> and passed the restaurant name in the URL like:<bt/>
**/restaurants/RestaurantName** <br/>

```js
<Link
  key={restaurant.info.id}
  to={"/restaurants/" + restaurant.info.name}
>
  <RestaurantCard resData={restaurant} />
</Link>
```

➡️ In your router config, you defined a dynamic route: <br/>
**path: "/restaurants/:name"** which means **:name** is a URL parameter<br/>

```js
{
  path: "/restaurants/:name",
  element: <RestaurantMenu />
}
```

➡️ Inside RestaurantMenu, useParams() extracts that parameter:<br/>
```js
const { name } = useParams();
 ```
 <br/>

➡️ The useEffect runs whenever name changes and calls fetchMenu() again.<br/>

```js
useEffect(() => {
  fetchMenu();
}, [name]);
```

➡️ Inside fetchMenu(), you search the JSON data for the restaurant whose info.name matches the received name parameter.

```js
const restaurantCard = resMenuData.data.restaurants.find((rest) =>
  rest.cards.some(
    (cardObj) =>
      cardObj.card &&
      cardObj.card.card &&
      cardObj.card.card.info &&
      cardObj.card.card.info.name === name
  )
);
```