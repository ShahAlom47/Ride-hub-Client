

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
import AboutUs from "../Pages/AboutUs/AboutUs";
import CheckOut from "../Pages/CheckOut/CheckOut";
import PrivetRoute from "./PrivetRoute";
import DashBoardRoot from "../LayOut/DashBoardRoot/DashBoardRoot";
import MyOrder from "../Pages/DashBoard/MyOrder/MyOrder";
import MyBikes from "../Pages/DashBoard/MyBikes/MyBikes";



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
      path: "/about-us",
      element: <AboutUs></AboutUs>
     },
     {
      path: "/login",
      element: <Login></Login>
     },
     {
      path: "/register",
      element: <Register></Register>
     },

    //  privet Route

     {
      path: "/checkout",
      element: <PrivetRoute> <CheckOut></CheckOut> </PrivetRoute>
     },
    
     
    ]
  },

  {
    path: "/my-dashBoard",
    element: <PrivetRoute> <DashBoardRoot></DashBoardRoot> </PrivetRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/my-dashBoard",
        element: <PrivetRoute> <MyOrder></MyOrder> </PrivetRoute>
       },
      {
        path: "/my-dashBoard/my-bikes",
        element: <PrivetRoute> <MyBikes></MyBikes> </PrivetRoute>
       },
    ]
  }


]);

export default router;