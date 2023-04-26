import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProviders';
import {Navigate, useLocation} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading) {
        return <p style={{fontSize: '20px', fontWeight: 'bold'}}>Loading...</p>
    }

    if(user) {
        return children; 
    }
    return <Navigate to={`/login`} replace state={{from: location}}></Navigate>;
};

export default PrivateRoute;