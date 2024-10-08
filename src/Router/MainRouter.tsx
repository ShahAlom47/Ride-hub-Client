

import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../LayOut/Root/Root";
import Home from "../Pages/Home/Home";
import OurService from "../Pages/OurService/OurService";
import OurBikes from "../Pages/OurBikes/OurBikes";
import BikeDetails from "../Pages/OurBikes/BikeDetails/BikeDetails";
import ErrorPage from "../SharedComponent/ErrorPage/ErrorPage";
import Register from "../Pages/Authentication/Register/Register";
import Login from "../Pages/Authentication/Login/Login";
import Shop from "../Pages/Shop/Shop";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
     {
      path: "/",
      element: <Home></Home>
     },
     {
      path: "/our-bikes",
      element: <OurBikes></OurBikes>
     },
     {
      path: "/bike-details/:id",
      element: <BikeDetails></BikeDetails>
     },
     {
      path: "/shop",
      element: <Shop></Shop>
     },
     {
      path: "/our-service",
      element: <OurService></OurService>
     },
     {
      path: "/login",
      element: <Login></Login>
     },
     {
      path: "/register",
      element: <Register></Register>
     },
    ]
  },
]);

export default router;