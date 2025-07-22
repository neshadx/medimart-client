

import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider'; // ✅ correct path
import { Navigate, useLocation } from 'react-router-dom'; // ✅ fixed
import Loading from '../../Components/Loading'; // ✅ fixed relative path

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
