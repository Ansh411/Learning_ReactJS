import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet  } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Shimmer from "./components/Shimmer.js";
import Loader from "./components/Loader.js";
import UserContext from "./utils/UserContext.js";

const Grocery = lazy(() => import("./components/Grocery.js"));
const About = lazy(() => import("./components/About.js"));
const Contact = lazy(() => import("./components/Contact.js"));
const Body = lazy(() => import("./components/Body.js"));
const ErrorPage = lazy(() => import("./components/ErrorPage.js"));
const Offers = lazy(() => import("./components/Offers.js"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu.js"));
const AboutClass = lazy(() => import("./components/AboutClass.js"));


const AppLayout = () => {

    const[userName, setUserName] = useState();

    // Authentication Code to check for username and password

    useEffect(() => {
        // Make an API Call to verify username and password and get some data of loggedIn User
        const data = {
            name : "Ansh",
        }
        setUserName(data.name);
    },[]);

    return (
        <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children : [
        {
            path: "/",
            element: <Suspense fallback={<Shimmer />}> <Body /> </Suspense>
        },
        {
            path: "/grocery",
            element: <Suspense fallback={<Loader />}> <Grocery /> </Suspense>
        },
        {
            path: "/about",
            element: <Suspense fallback={<Loader />}> <AboutClass /> </Suspense>
        },
        {
            path: "/contact",
            element: <Suspense fallback={<Loader />}> <Contact /> </Suspense>
        },
        {
            path: "/offers",
            element: <Suspense fallback={<Loader />}> <Offers /> </Suspense>
        },
        {
            path: "/restaurants/:resId",
            element:  <Suspense fallback={<Loader />}> <RestaurantMenu /> </Suspense>
        }
     ],
     errorElement: <Suspense fallback={<Loader />}> <ErrorPage /> </Suspense>
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);