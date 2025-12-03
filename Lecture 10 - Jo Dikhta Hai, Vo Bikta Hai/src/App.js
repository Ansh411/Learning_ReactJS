import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet  } from "react-router-dom";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer.js";
import Loader from "./components/Loader.js";

const Grocery = lazy(() => import("./components/Grocery.js"));
const About = lazy(() => import("./components/About.js"));
const Contact = lazy(() => import("./components/Contact.js"));
const Body = lazy(() => import("./components/Body.js"));
const Error = lazy(() => import("./components/Error.js"));
const Offers = lazy(() => import("./components/Offers.js"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu.js"));


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
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
            element: <Suspense fallback={<Loader />}> <About /> </Suspense>
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
            path: "/restaurants/:name",
            element:  <Suspense fallback={<Loader />}> <RestaurantMenu /> </Suspense>
        }
     ],
     errorElement: <Suspense fallback={<Loader />}> <Error /> </Suspense>
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);