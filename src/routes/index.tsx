import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import axios from "axios";

import Test from "@/pages/test";
import PDF from "@/pages/event/PDF";
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
  const [cookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: checkToken ? <Home /> : <Login />,
    },
    {
      path: "/register",
      element: checkToken ? <Home /> : <Register />,
    },
    {
      path: "/users",
      element: checkToken ? <ProfileUser /> : <Home />,
    },
    {
      path: "/my-event",
      element: checkToken ? <MyEvent /> : <Home />,
    },
    {
      path: "/detail-event/:id",
      element: <DetailEvent />,
    },
    {
      path: "/add-event",
      element: checkToken ? <AddEvent /> : <Home />,
    },
    {
      path: "/update-event/:name",
      element: checkToken ? <UpdateEvent /> : <Home />,
    },
    {
      path: "/payment",
      element: checkToken ? <Payment /> : <Home />,
    },
    {
      path: "/my-ticket",
      element: checkToken ? <MyTicket /> : <Home />,
    },
    {
      path: "/PDF",
      element: <PDF />,
    },
    {
      path: "/test",
      element: <Test />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
