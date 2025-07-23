import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Provider/AuthProvider";
import useRole from "../hooks/useRole"; // Must return: ["admin", loading]

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [role, roleLoading] = useRole();
  const location = useLocation();

  if (loading || roleLoading) return <div className="text-center mt-20">Loading...</div>;

  if (user && role === "admin") return children;

  return <Navigate to="/unauthorized" state={{ from: location }} replace />;
};

export default AdminRoute;
