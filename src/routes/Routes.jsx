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
import InstructorRoute from '../routes/InstructorRoute'
import Instructors from "../pages/AdminDashboard/Instructors/Instructors";
import ErrorPage from "../components/ErrorPage";
import Classes from "../pages/Classes/Classes";
import BookmarkedClass from "../pages/UserDashboard/BookmarkedClass/BookmarkedClass";
import Payment from "../pages/UserDashboard/Payment/Payment";
import PaymentHistory from "../pages/UserDashboard/PaymentHistory/PaymentHistory";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: 'instructors',
                element:<Instructors/>
            },
            {
                path: 'classes',
                element:<Classes/>
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
                element:<InstructorRoute><AddClass/></InstructorRoute>
            },
            {
                path: 'my-classes',
                element:<InstructorRoute><MyClasses/></InstructorRoute>
            },
            //user dashboard
            {
                path: 'bookmarked-classes',
                element:<PrivateRoute><BookmarkedClass/></PrivateRoute>
            },
            {
                path: 'payment/:id',
                element: <PrivateRoute><Payment /></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/sports/${params.id}`)
            },
            {
                path: 'enrolled-class',
                element:<PrivateRoute><PaymentHistory/></PrivateRoute>
            }
        ]
    }
    
])


export default router;