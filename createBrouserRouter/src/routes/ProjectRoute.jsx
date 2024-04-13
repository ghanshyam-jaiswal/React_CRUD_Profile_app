import { createBrowserRouter } from "react-router-dom";
import Layout from "./../pages/Layout";
import LandingPage from "./../pages/LandingPage";
import HomePage from "./../pages/HomePage";
import LoginPage from "./../pages/LoginPage";
import RegisterPage from "./../pages/RegisterPage";
import About from "./../pages/About";
import Allusers from "../components/Allusers";
import Users from "./../components/Users";
import CreateUser from "./../components/CreateUser";
import UpdateUser from "../components/UpdateUser";
import ViewMore from "../components/ViewMore";
import Contact from "../components/Contact";

export let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/allusers",
        element: <Allusers />,
        children: [
          {
            index: true,
            path: "/allusers/user",

            element: <Users />,
          },
          {
            path: "/allusers/createusers",
            element: <CreateUser />,
          },
          {
            path: "/allusers/update",
            element: <UpdateUser />,
          },
          {
            path: "/allusers/viewuser",
            element: <ViewMore />,
          },
        ],
      },
      {
        path: "/home",
        element: <HomePage />,
        children: [
          {
            path: "/home",
            element: <LoginPage />,
          },
          {
            path: "/home/registration",
            element: <RegisterPage />,
          },
          {
            path: "/home/aboutpage",
            element: <About />,
          },
          {
            path: "/home/contact",
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);
