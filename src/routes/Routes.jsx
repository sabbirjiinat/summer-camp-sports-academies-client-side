import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../components/shared/Login/Login";
import SignUp from "../components/shared/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ManageUser from "../pages/AdminDashboard/ManageUser/ManageUser";


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
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: 'manage-users',
                element:<ManageUser/>
            }
        ]
    }
    
])


export default router;