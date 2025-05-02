import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import About from "../Component/About/About";
import Profile from "../Component/Pages/Profile";
import Contact from "../Component/Contact/Contact";
import Services from "../Component/Services/Services";
import Login from "../Component/Pages/Login";
import Error from "../Component/Error/Error";
import Register from "../Component/Pages/Register";
import ServiceDetails from "../Component/Pages/ServiceDetails";
import PrivateRouter from "./PrivateRouter";
import MyBookings from "../Component/Pages/MyBookings";
import ForgetPassword from "../Component/ForgetPassword/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRouter>
            <ServiceDetails></ServiceDetails>
          </PrivateRouter>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/services.json");
          const data = await res.json();
          const singleData = data.find((d) => d.id == params.id);
          return singleData;
        },
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRouter>
            <MyBookings />
          </PrivateRouter>
        ),
      },

      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("/services.json"),
      },
      {
         path:"/forget-password" ,
          element: <ForgetPassword></ForgetPassword>,
      }
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
export default router;
