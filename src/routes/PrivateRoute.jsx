import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import Loader from "../components/shared/Loader";

const PrivateRoute = ({ children }) => {
    const { loader, user } = useAuth();
    const location = useLocation()
    if (loader) {
        return <Loader/>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;