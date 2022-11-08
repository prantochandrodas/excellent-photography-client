import { createBrowserRouter } from "react-router-dom";
import Signin from "../../../Signin/Signin";
import Home from "../../Home/Home";
import Main from "../../Layout/Main/Main";
import Login from "../../Login/Login";
import Services from "../../Services/Services";

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
          element:<Services></Services>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signIn',
          element:<Signin></Signin>
        }
      ]

    }
]);
export default router;