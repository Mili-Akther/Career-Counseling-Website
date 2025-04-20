import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import About from "../Component/About/About";
import Profile from "../Component/Profile/Profile";
import Contact from "../Component/Contact/Contact";
import Services from "../Component/Services/Services";
import Login from "../Component/Login/Login";
import Error from "../Component/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("/services.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
export default router;