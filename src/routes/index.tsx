import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import axios from "axios";

import Home from "../pages/index";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProfileUser from "../pages/ProfileUser";
import MyEvent from "../pages/MyEvent";
import DetailEvent from "../pages/DetailEvent";
import Payment from "../pages/Payment";
import AddEvent from "../pages/AddEvent";
import UpdateEvent from "../pages/UpdateEvent";
import MyTicket from "../pages/MyTicket";

axios.defaults.baseURL =
  "https://virtserver.swaggerhub.com/MUJAHID170997/EventGenieAPI/1.0.0";

const Routes: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/users",
      element: <ProfileUser />,
    },
    {
      path: "/my-event",
      element: <MyEvent />,
    },
    {
      path: "/detail-event/:name",
      element: <DetailEvent />,
    },
    {
      path: "/add-event",
      element: <AddEvent />,
    },
    {
      path: "/update-event",
      element: <UpdateEvent />,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
    {
      path: "/my-ticket",
      element: <MyTicket />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
