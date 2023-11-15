import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    if (allowedRoles?.includes(auth?.role)) return (<Outlet />)
    if (!allowedRoles?.includes(auth?.role)) return (<Navigate to="/unauthroized" state={{ from: location }} replace />)
}

export default RequireAuth;
