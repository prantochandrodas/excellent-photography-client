import { createBrowserRouter } from "react-router-dom";
import Signin from "../../../Signin/Signin";
import Blogs from "../../Blogs/Blogs";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../../Home/Home";
import Main from "../../Layout/Main/Main";
import Login from "../../Login/Login";
import MyReviews from "../../MyReviews/MyReviews";
// import ServiceReview from "../../Services/ServiceReview";
import Services from "../../Services/Services";
import ServicesAdd from "../../Services/ServicesAdd";
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
            loader:()=>fetch('https://excellent-photography-server.vercel.app/services/home')
        },
        {
          path:'/services',
          loader:()=>fetch('https://excellent-photography-server.vercel.app/services'),
          element:
            <Services></Services>
         
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
          path:'/myreviews',
          element: <MyReviews></MyReviews>
  
          },
          {
            path:'/servicesAdd',
            element:  <ServicesAdd></ServicesAdd>
          },
          {
            path:"/blogs",
            element:<Blogs></Blogs>

          } ,
          {
            path:"*",
            element:<ErrorPage></ErrorPage>

          }
          ,
        {
          path:'/services/:id',
          loader:({params})=>fetch(`https://excellent-photography-server.vercel.app/services/${params.id}`),
          element:<ServicesDetails></ServicesDetails>
        },
    
        // {
        //   path:'/services/:id',
        //   loader:({params})=>fetch(`https://excellent-photography-server.vercel.app/services/${params.id}`),
        //   element:<ServiceReview></ServiceReview>
        // }
      
        
      ]

    }
]);
export default router;