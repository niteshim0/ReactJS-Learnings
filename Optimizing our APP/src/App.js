import React, { Suspense, lazy } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginForm from "./components/Login";
import Shimmer from "./components/Shimmer";

//Maintaining the File Structure
const InstaMart = lazy(()=>import("./components/Instamart"));
const AppLayout = () => (
   <>
   <></>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
);
const appRouter = createBrowserRouter([
   {path : "/",
    element: <AppLayout/>,
    errorElement:<Error/>,
    children : [
      {
        path :"/",
        element:<Body/>,
      },
      {
         path : "/about",
         element:<About/>,
         children : [
          {
          path : "profile",
          element : <Profile/>
          },
         ],
      },
      {
        path: "/contact",
        element:<Contact/>,
      },
      {
         path: "/restaurant/:resId",
         element: <RestaurantMenu />,
       },
       {
         path: "/login",
         element:<LoginForm/>,
       },
       {
        path: "/instamart",
        element:
        <Suspense fallback = {<Shimmer/>}>
          <InstaMart/>
        </Suspense>,
      },
    ],
   },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
