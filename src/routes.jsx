import React from "react";
import Home from "./pages/Home/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Sell from "./pages/Sell";
import Shop from "./pages/Shop";
import ShopItem from "./pages/ShopItem/item";

// import Profile from "./pages/Profile";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Shop",
    element: <Shop />,
  },
  {
    path: "Shop/:id",
    element: <ShopItem />,
  },
  {
    path: "/Sell",
    element: <Sell />,
  },
];

export default routes;
