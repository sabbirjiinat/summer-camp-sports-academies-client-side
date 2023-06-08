import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/shared/Loader";
import useAdmin from "../hooks/UseAdmin";
import useAuth from "../hooks/UseAuth";

const AdminRoute = ({ children }) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const { user, loader } = useAuth();
    const location = useLocation()
 
    if (isAdminLoading && loader) {
        return <Loader/>
    }
    if (isAdmin && user) {
        return children
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;