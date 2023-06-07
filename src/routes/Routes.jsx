import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../components/shared/Login/Login";
import SignUp from "../components/shared/SignUp/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/login',
                element:<Login/>
            },
            {
                path: '/signup',
                element:<SignUp/>
            }
        ]
    
    
    },
    
])


export default router;