// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useRole from "../../hooks/useRole"; // ✅ Corrected path

// const DashboardRedirect = () => {
//   const navigate = useNavigate();
//   const [role, loading] = useRole();

//   useEffect(() => {
//     if (!loading) {
//       if (role === "admin") navigate("/dashboard/admin-home");
//       else if (role === "seller") navigate("/dashboard/seller-home");
//       else navigate("/dashboard/user-home");
//     }
//   }, [role, loading, navigate]);

//   return (
//     <div className="text-center mt-20 text-lg text-gray-600">
//       Redirecting to your dashboard...
//     </div>
//   );
// };

// export default DashboardRedirect;




import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRole from "../../hooks/useRole";

const DashboardRedirect = () => {
  const navigate = useNavigate();
  const [role, roleLoading] = useRole();  // ✅ fixed variable name

  useEffect(() => {
    if (!roleLoading) {
      if (role === "admin") navigate("/dashboard/admin-home");
      else if (role === "seller") navigate("/dashboard/seller-home");
      else navigate("/dashboard/user-home");
    }
  }, [role, roleLoading, navigate]);

  return (
    <div className="text-center mt-20 text-lg text-gray-600">
      Redirecting to your dashboard...
    </div>
  );
};

export default DashboardRedirect;
