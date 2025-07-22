import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Provider/AuthProvider";
import Loading from "../Components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
