import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { FC } from "react";
import Home from "../pages/index";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProfileUser from "../pages/ProfileUser";
import MyEvent from "../pages/MyEvent";
import DetailEvent from "../pages/DetailEvent";
import UpdateProfile from "../pages/UpdateProfile";
import Payment from "../pages/Payment";
import AddEvent from "../pages/AddEvent";
import UpdateEvent from "../pages/UpdateEvent";
import MyTicket from "../pages/MyTicket";

const Routes = () => {
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
      path: "/detail-event",
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
      path: "/update-users",
      element: <UpdateProfile />,
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
