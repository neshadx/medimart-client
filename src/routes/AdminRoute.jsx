import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Provider/AuthProvider";
import useRole from "../hooks/useRole";
import Loading from "../Components/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [role, isRoleLoading] = useRole();

  if (loading || isRoleLoading) {
    return <Loading />;
  }

  if (user && role === "admin") {
    return children;
  }

  return <Navigate to="/" replace />;
};

export default AdminRoute;
