// components/ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { valideteToken } from '../../context/redux/authentication-state/authenticationAction';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    // const [isLoggedIn, setLoggedIn] = useState(false);
    const dispatch = useDispatch();

    const valideToken = useSelector((state) => state.authenticationData.valideToken);
   

    useEffect(() => {
        // Dispatch the token validation action on mount
        dispatch(valideteToken());
    }, [dispatch]);

    useEffect(() => {
        // Check if the valid token is received
        if (valideToken !== undefined) { // Ensures it only sets after it's defined
           
        }
    }, [valideToken]); // Watch for changes to valideToken

    // Optional: handle loading state
    if (valideToken === undefined) { 
        return <div>Loading...</div>; // Or some loading spinner
    }

    return (
        valideToken ? <Component {...rest} /> : <Navigate to="/" />
    );
};

export default ProtectedRoute;
