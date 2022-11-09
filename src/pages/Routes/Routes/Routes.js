import { createBrowserRouter } from "react-router-dom";
import Signin from "../../../Signin/Signin";
import Home from "../../Home/Home";
import Main from "../../Layout/Main/Main";
import Login from "../../Login/Login";
import ServiceReview from "../../Services/ServiceReview";
import Services from "../../Services/Services";
import ServicesDetails from "../../Services/ServicesDetails";

import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:async()=>fetch('http://localhost:5000/services/home')
        },
        {
          path:'/services',
          loader:()=>fetch('http://localhost:5000/services'),
          element:<PrivetRoute>
            <Services></Services>
          </PrivetRoute>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signIn',
          element:<Signin></Signin>
        },
        {
          path:'/services/:id',
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`),
          element:<ServicesDetails></ServicesDetails>
        },
        {
          path:'/services/:id',
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`),
          element:<ServiceReview></ServiceReview>
        }
        
      ]

    }
]);
export default router;