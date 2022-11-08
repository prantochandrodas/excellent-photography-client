import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Main from "../../Layout/Main/Main";

const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:async()=>fetch('http://localhost:5000/services')
        }
      ]

    }
]);
export default router;