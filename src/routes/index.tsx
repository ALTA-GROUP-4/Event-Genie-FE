import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import axios from "axios";

import Test from "@/pages/test";
import Home from "@/pages/index";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ProfileUser from "@/pages/ProfileUser";
import MyEvent from "@/pages/event/MyEvent";
import DetailEvent from "@/pages/event/DetailEvent";
import Payment from "@/pages/event/Payment";
import AddEvent from "@/pages/event/AddEvent";
import UpdateEvent from "@/pages/event/UpdateEvent";
import MyTicket from "@/pages/event/MyTicket";

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
      path: "/update-event/:name",
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
    {
      path: "/test",
      element: <Test />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
