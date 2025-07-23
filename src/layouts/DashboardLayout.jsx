import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "font-semibold text-white bg-green-800 px-3 py-2 rounded"
      : "hover:text-green-200 px-3 py-2 rounded transition";

  return (
    <div className="lg:flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-[#38A169] text-white p-6">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-2 text-sm">
          {/* Admin Links */}
          <NavLink to="/dashboard/admin-home" className={linkClass}>Admin Home</NavLink>
          <NavLink to="/dashboard/manage-users" className={linkClass}>Manage Users</NavLink>
          <NavLink to="/dashboard/manage-categories" className={linkClass}>Manage Categories</NavLink>
          <NavLink to="/dashboard/payment-management" className={linkClass}>Payment Management</NavLink>
          <NavLink to="/dashboard/sales-report" className={linkClass}>Sales Report</NavLink>

          {/* Seller Links */}
          <NavLink to="/dashboard/seller-home" className={linkClass}>Seller Home</NavLink>

          {/* User Links */}
          <NavLink to="/dashboard/user-home" className={linkClass}>User Home</NavLink>

          {/* Back to Home */}
          <NavLink to="/" className="hover:text-green-200 mt-6 text-white text-sm underline">
            ← Back to Home
          </NavLink>
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
