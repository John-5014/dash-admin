import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
    

function App() {

const Layout = () => {
  return(
    <div className="main"></div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "users",
    element: (
      <Users/>
    ),
  },
  {
    path: "products",
    element: <Products/>,
  },
]);
  return (
    <RouterProvider router = {router} />
  )
}

export default App;
