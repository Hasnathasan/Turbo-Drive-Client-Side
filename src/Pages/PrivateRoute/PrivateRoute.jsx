import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <h1>Loading</h1>
    }
    if(!user){
        return <Navigate state={{from: location}} to="/login"></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;