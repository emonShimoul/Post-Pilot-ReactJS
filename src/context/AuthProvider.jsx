
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { getCurrentUser } from '../utils/auth';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = getCurrentUser();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUser(storedUser);
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser}}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;