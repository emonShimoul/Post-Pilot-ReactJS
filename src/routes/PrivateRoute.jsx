import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, authLoading} = useAuth();

    if (authLoading) return <p>Loading...</p>;

    if (!user) return <Navigate to="/login" />;

    return children;
};

export default PrivateRoute;