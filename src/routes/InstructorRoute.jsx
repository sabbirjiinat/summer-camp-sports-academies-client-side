import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/shared/Loader";
import useAuth from "../hooks/UseAuth";
import useInstructor from '../hooks/UseInstructor'

const AdminRoute = ({ children }) => {
    const [isInstructor, isInstructorLoading] = useInstructor()
    const { user, loader } = useAuth();
    const location = useLocation()
 
    if (isInstructorLoading && loader) {
        return <Loader/>
    }
    if (isInstructor && user) {
        return children
    }

    return <Navigate to='/' state={{from:location}} replace></Navigate>
};

export default AdminRoute;