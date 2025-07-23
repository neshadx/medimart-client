import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/Provider/AuthProvider";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const [role, roleLoading] = useRole(); // ✅ Now handles loading

  const linkClass = ({ isActive }) =>
    isActive
      ? "font-semibold text-white bg-green-800 px-3 py-2 rounded"
      : "hover:text-green-200 px-3 py-2 rounded transition";

  // ✅ Show loading until role is determined
  if (roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-gray-600">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="lg:flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-[#38A169] text-white p-6">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-2 text-sm">
          {/* Admin Links */}
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

          {/* Seller Links */}
          {role === "seller" && (
            <>
              <NavLink to="/dashboard/seller-home" className={linkClass}>Seller Home</NavLink>
              <NavLink to="/dashboard/manage-medicines" className={linkClass}>Manage Medicines</NavLink>
              <NavLink to="/dashboard/payment-history" className={linkClass}>Payment History</NavLink>
              <NavLink to="/dashboard/ask-for-advertise" className={linkClass}>Ask for Advertise</NavLink>
            </>
          )}

          {/* User Links */}
          {role === "user" && (
            <>
              <NavLink to="/dashboard/user-home" className={linkClass}>User Home</NavLink>
              <NavLink to="/dashboard/user-payment-history" className={linkClass}>Payment History</NavLink>
            </>
          )}

          {/* Back to Home */}
          <NavLink to="/" className="hover:text-green-200 mt-6 text-white text-sm underline">
            ← Back to Home
          </NavLink>

          {/* Logout */}
          <button onClick={logout} className="mt-4 text-sm text-red-100 hover:text-red-300 text-left">
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
