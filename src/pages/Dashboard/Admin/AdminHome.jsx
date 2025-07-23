import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const AdminHome = () => {
  const baseURL = import.meta.env.VITE_API_URL;

  // Fetch all payments
  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["allPaymentsForAdmin"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/admin/payments`);
      return res.json();
    },
  });

  // Calculate total revenue
  const paidTotal = payments
    .filter((p) => p.status === "paid")
    .reduce((sum, p) => sum + parseFloat(p.total), 0);

  const pendingTotal = payments
    .filter((p) => p.status === "pending")
    .reduce((sum, p) => sum + parseFloat(p.total), 0);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>Admin Dashboard | MediMart</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
        Welcome Admin
      </h2>

      {isLoading ? (
        <p className="text-center font-medium text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-600">Paid Revenue</h3>
            <p className="text-2xl font-bold text-green-600 mt-2">
              ৳ {paidTotal.toFixed(2)}
            </p>
          </div>

          <div className="bg-white border shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-600">Pending Revenue</h3>
            <p className="text-2xl font-bold text-yellow-500 mt-2">
              ৳ {pendingTotal.toFixed(2)}
            </p>
          </div>

          <div className="bg-white border shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-600">Total Payments</h3>
            <p className="text-2xl font-bold text-blue-600 mt-2">
              {payments.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminHome;
