import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Login from "./pages/Login/Login";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
    

function App() {

const Layout = () => {
  return(
    <div className="main">
      <Navbar/>
      <div className="container">
      <div className="menucontainer">
        <Menu/>
      </div>
      <div className="container">
        <Outlet/>

      </div>
      </div>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
      path: "/",
      element:<Home/>
    },
    {
      path: "/users",
      element:<Users/>
    },
    {
      path: "/products",
      element:<Products/>
    },
    
  ]
  
  },
  {
    path: "/login",
    element:<Login/>
  }
]);
  return (
    <RouterProvider router = {router} />
  )
}

export default App;
