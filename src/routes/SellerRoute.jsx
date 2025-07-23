// import { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../Context/Provider/AuthProvider";
// import { useRole } from "../hooks/useRole"; // ✅ named import

// const SellerRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const [role, roleLoading] = useRole();
//   const location = useLocation();

//   if (loading || roleLoading) {
//     return <div className="text-center mt-20 text-xl font-semibold text-gray-600">Loading...</div>;
//   }

//   if (user && role === "seller") {
//     return children;
//   }

//   return <Navigate to="/unauthorized" state={{ from: location }} replace />;
// };

// export default SellerRoute;



import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Provider/AuthProvider";
import { useRole } from "../hooks/useRole";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [role, roleLoading] = useRole();
  const location = useLocation();

  if (loading || roleLoading) {
    return <div className="text-center mt-20 text-xl font-semibold text-gray-600">Loading...</div>;
  }

  if (user && role === "seller") {
    return children;
  }

  return <Navigate to="/unauthorized" state={{ from: location }} replace />;
};

export default SellerRoute;

