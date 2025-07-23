import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Provider/AuthProvider";
import { useRole } from "../hooks/useRole"; // ✅ named import

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [role, roleLoading] = useRole();
  const location = useLocation();

  if (loading || roleLoading) {
    return <div className="text-center mt-20 text-xl font-semibold text-gray-600">Loading...</div>;
  }

  // ✅ Allow only admin users
  if (user && role === "admin") {
    return children;
  }

  // ❌ Not authorized
  return <Navigate to="/unauthorized" state={{ from: location }} replace />;
};

export default AdminRoute;
