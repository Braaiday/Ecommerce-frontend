import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        allowedRoles?.includes(auth?.role)
            ?
            <Outlet />
            : auth?.token
                ? <Navigate to="/login" state={{ from: location }} replace />
                : <Navigate to="/unauthroized" state={{ from: location }} replace />
    )
}

export default RequireAuth;
