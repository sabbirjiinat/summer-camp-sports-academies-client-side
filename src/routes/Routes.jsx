import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../components/shared/Login/Login";
import SignUp from "../components/shared/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ManageUser from "../pages/AdminDashboard/ManageUser/ManageUser";
import AdminRoute from "./AdminRoute";
import AddClass from "../pages/InstructorDashboard/AddClass/AddClass";
import ManageClass from "../pages/AdminDashboard/ManageClass/ManageClass";
import MyClasses from "../pages/InstructorDashboard/MyClasses/MyClasses";


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
                element:<AdminRoute><ManageUser/></AdminRoute>
            },
            {
                path: 'manage-classes',
                element:<AdminRoute><ManageClass/></AdminRoute>
            },
            //instructor dashboard
            {
                path: 'add-class',
                element:<AddClass/>
            },
            {
                path: 'my-classes',
                element:<MyClasses/>
            }
        ]
    }
    
])


export default router;