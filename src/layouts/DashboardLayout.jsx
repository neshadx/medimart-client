import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="lg:flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-[#38A169] text-white p-6">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-2 text-sm">
          <NavLink to="/dashboard/admin-home" className="hover:text-green-200">Admin Home</NavLink>
          <NavLink to="/dashboard/seller-home" className="hover:text-green-200">Seller Home</NavLink>
          <NavLink to="/dashboard/user-home" className="hover:text-green-200">User Home</NavLink>
          <NavLink to="/" className="hover:text-green-200 mt-6">← Back to Home</NavLink>
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
