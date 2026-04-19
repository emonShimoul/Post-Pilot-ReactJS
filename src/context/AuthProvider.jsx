
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { getCurrentUser, logoutUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const handleLogOut = () => {
        logoutUser();
        setUser(null);
        navigate("/login");
    }

    useEffect(() => {
        const storedUser = getCurrentUser();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUser(storedUser);
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser, handleLogOut}}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;