


// import React, { useContext } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import { AuthContext } from "../Context/Provider/AuthProvider";
// import useRole from "../hooks/useRole";

// const DashboardLayout = () => {
//   const { user, logout } = useContext(AuthContext);
//   const [role, roleLoading] = useRole();

//   console.log("Logged-in user from AuthContext:", user);
//   console.log("Role from useRole hook:", role);

//   const linkClass = ({ isActive }) =>
//     isActive
//       ? "font-semibold text-white bg-green-800 px-3 py-2 rounded"
//       : "hover:text-green-200 px-3 py-2 rounded transition";

//   // ✅ Wait until role is fully loaded
//   if (roleLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-lg text-gray-600">
//         Loading Dashboard...
//       </div>
//     );
//   }

//   return (
//     <div className="lg:flex min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-full lg:w-64 bg-[#38A169] text-white p-6">
//         <h2 className="text-xl font-bold mb-6">Dashboard</h2>
//         <nav className="flex flex-col gap-2 text-sm">
//           {/* Admin Links */}
//           {role === "admin" && (
//             <>
//               <NavLink to="/dashboard/admin-home" className={linkClass}>
//                 Admin Home
//               </NavLink>
//               <NavLink to="/dashboard/manage-users" className={linkClass}>
//                 Manage Users
//               </NavLink>
//               <NavLink to="/dashboard/manage-categories" className={linkClass}>
//                 Manage Categories
//               </NavLink>
//               <NavLink to="/dashboard/payment-management" className={linkClass}>
//                 Payment Management
//               </NavLink>
//               <NavLink to="/dashboard/sales-report" className={linkClass}>
//                 Sales Report
//               </NavLink>
//               <NavLink to="/dashboard/manage-advertise" className={linkClass}>
//                 Manage Advertise
//               </NavLink>
//             </>
//           )}

//           {/* Seller Links */}
//           {role === "seller" && (
//             <>
//               <NavLink to="/dashboard/seller-home" className={linkClass}>
//                 Seller Home
//               </NavLink>
//               <NavLink to="/dashboard/manage-medicines" className={linkClass}>
//                 Manage Medicines
//               </NavLink>
//               <NavLink to="/dashboard/payment-history" className={linkClass}>
//                 Payment History
//               </NavLink>
//               <NavLink to="/dashboard/ask-for-advertise" className={linkClass}>
//                 Ask for Advertise
//               </NavLink>
//             </>
//           )}

//           {/* User Links */}
//           {role === "user" && (
//             <>
//               <NavLink to="/dashboard/user-home" className={linkClass}>
//                 User Home
//               </NavLink>
//               <NavLink to="/dashboard/user-payment-history" className={linkClass}>
//                 Payment History
//               </NavLink>
//             </>
//           )}

//           {/* Back to Home */}
//           <NavLink to="/" className="hover:text-green-200 mt-6 text-white text-sm underline">
//             ← Back to Home
//           </NavLink>

//           {/* Logout */}
//           <button
//             onClick={logout}
//             className="mt-4 text-sm text-red-100 hover:text-red-300 text-left"
//           >
//             Logout
//           </button>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 bg-gray-50 p-6">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;



// import React, { useContext } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import { AuthContext } from "../Context/Provider/AuthProvider";
// import useRole from "../hooks/useRole";

// const DashboardLayout = () => {
//   const { user, logout } = useContext(AuthContext);
//   const [role, roleLoading] = useRole();

//   const linkClass = ({ isActive }) =>
//     isActive
//       ? "bg-white text-green-700 font-semibold shadow px-4 py-2 rounded"
//       : "text-white hover:bg-green-500 transition px-4 py-2 rounded";

//   if (roleLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-lg text-gray-600">
//         Loading Dashboard...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-green-600 text-white flex flex-col justify-between py-6 px-4 shadow-md fixed top-0 bottom-0">
//         <div>
//           <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
//           <nav className="flex flex-col gap-2 text-sm">
//             {role === "admin" && (
//               <>
//                 <NavLink to="/dashboard/admin-home" className={linkClass}>
//                   Admin Home
//                 </NavLink>
//                 <NavLink to="/dashboard/manage-users" className={linkClass}>
//                   Manage Users
//                 </NavLink>
//                 <NavLink to="/dashboard/manage-categories" className={linkClass}>
//                   Manage Categories
//                 </NavLink>
//                 <NavLink to="/dashboard/payment-management" className={linkClass}>
//                   Payment Management
//                 </NavLink>
//                 <NavLink to="/dashboard/sales-report" className={linkClass}>
//                   Sales Report
//                 </NavLink>
//                 <NavLink to="/dashboard/manage-advertise" className={linkClass}>
//                   Manage Advertise
//                 </NavLink>
//               </>
//             )}

//             {role === "seller" && (
//               <>
//                 <NavLink to="/dashboard/seller-home" className={linkClass}>
//                   Seller Home
//                 </NavLink>
//                 <NavLink to="/dashboard/manage-medicines" className={linkClass}>
//                   Manage Medicines
//                 </NavLink>
//                 <NavLink to="/dashboard/payment-history" className={linkClass}>
//                   Payment History
//                 </NavLink>
//                 <NavLink to="/dashboard/ask-for-advertise" className={linkClass}>
//                   Ask for Advertise
//                 </NavLink>
//               </>
//             )}

//             {role === "user" && (
//               <>
//                 <NavLink to="/dashboard/user-home" className={linkClass}>
//                   User Home
//                 </NavLink>
//                 <NavLink to="/dashboard/user-payment-history" className={linkClass}>
//                   Payment History
//                 </NavLink>
//               </>
//             )}
//           </nav>
//         </div>

//         <div className="mt-8 space-y-2">
//           <NavLink
//             to="/"
//             className="block text-white text-sm hover:text-green-200 underline"
//           >
//             ← Back to Home
//           </NavLink>
//           <button
//             onClick={logout}
//             className="text-sm text-red-100 hover:text-red-300"
//           >
//             Logout
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="ml-64 flex-1 p-6">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;


import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/Provider/AuthProvider";
import useRole from "../hooks/useRole";
import { FiMenu } from "react-icons/fi";

const DashboardLayout = () => {
  const { logout } = useContext(AuthContext);
  const [role, roleLoading] = useRole();

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-white text-green-700 font-semibold shadow px-4 py-2 rounded"
      : "text-white hover:bg-green-500 transition px-4 py-2 rounded";

  if (roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-gray-600">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="drawer lg:drawer-open">
      {/* ✅ Toggle Button (Mobile only) */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-gray-100 min-h-screen">
        {/* ✅ Mobile Toggle Button - green style */}
        <div className="lg:hidden p-4">
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-sm bg-green-600 text-white hover:bg-green-700 border-none"
          >
            <FiMenu className="text-xl" />
          </label>
        </div>

        {/* Main Dashboard Content */}
        <div className="px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>

      {/* ✅ Sidebar Drawer */}
      <div className="drawer-side z-50">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <aside className="w-64 bg-green-600 text-white min-h-screen flex flex-col justify-between px-4 py-6">
          <div>
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
            <nav className="flex flex-col gap-2 text-sm">
              {role === "admin" && (
                <>
                  <NavLink to="/dashboard/admin-home" className={linkClass}>Admin Home</NavLink>
                  <NavLink to="/dashboard/manage-users" className={linkClass}>Manage Users</NavLink>
                  <NavLink to="/dashboard/manage-categories" className={linkClass}>Manage Categories</NavLink>
                  <NavLink to="/dashboard/payment-management" className={linkClass}>Payment Management</NavLink>
                  <NavLink to="/dashboard/sales-report" className={linkClass}>Sales Report</NavLink>
                  <NavLink to="/dashboard/manage-advertise" className={linkClass}>Manage Advertise</NavLink>
                </>
              )}

              {role === "seller" && (
                <>
                  <NavLink to="/dashboard/seller-home" className={linkClass}>Seller Home</NavLink>
                  <NavLink to="/dashboard/manage-medicines" className={linkClass}>Manage Medicines</NavLink>
                  <NavLink to="/dashboard/payment-history" className={linkClass}>Payment History</NavLink>
                  <NavLink to="/dashboard/ask-for-advertise" className={linkClass}>Ask for Advertise</NavLink>
                </>
              )}

              {role === "user" && (
                <>
                  <NavLink to="/dashboard/user-home" className={linkClass}>User Home</NavLink>
                  <NavLink to="/dashboard/user-payment-history" className={linkClass}>Payment History</NavLink>
                </>
              )}
            </nav>
          </div>

          {/* Bottom Links */}
          <div className="mt-6 space-y-2">
            <NavLink to="/" className="block text-white text-sm hover:text-green-200 underline">
              ← Back to Home
            </NavLink>
            <button
              onClick={logout}
              className="text-sm text-red-100 hover:text-red-300"
            >
              Logout
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
