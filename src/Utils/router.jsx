import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import About from "../Component/About/About";
import Profile from "../Component/Profile/Profile";
import Contact from "../Component/Contact/Contact";
import Services from "../Component/Services/Services";
import Login from "../Component/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
]);
export default router;