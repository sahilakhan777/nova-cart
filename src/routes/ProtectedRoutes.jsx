import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router';
import { Auth } from '../context/AuthContext';

const ProtectedRoutes = () => {
    let {loggedInUser} = useContext(Auth)
  

  if (!loggedInUser) {
    return <Navigate to={'/'}/>;
  }

  return <Outlet />;
};

export default ProtectedRoutes;