import React, { Suspense, createContext, lazy, useState } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginForm from "./components/Login";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//Maintaining the File Structure
const InstaMart = lazy(()=>import("./components/Instamart"));
const AppLayout = () => {
  const [user,setUser] = useState({
    name : "Nitesh Kuswaha",
  });
  return (
    <Provider store={store}>
   <UserContext.Provider value={{
    user:user,
   }}>
   <Header/>
   <Outlet/>
   <Footer/>
   </UserContext.Provider>
   </Provider>
  );
  };
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
      {
        path : "/cart",
        element:<Cart/>,
     },
    ],
   },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);