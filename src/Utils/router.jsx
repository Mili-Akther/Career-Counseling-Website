import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/MainLayout/MainLayout";
import Home from "../Component/Home";
import About from "../Component/About/About";
import Profile from "../Component/Profile/Profile";

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
    ],
  },
]);
export default router;