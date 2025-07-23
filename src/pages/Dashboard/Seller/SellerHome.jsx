import React from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SellerHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["sellerPayments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/seller/payments/${user.email}`);
      return res.data;
    },
  });

  const paidTotal = payments
    .filter((p) => p.status === "paid")
    .reduce((sum, p) => sum + parseFloat(p.total), 0);

  const pendingTotal = payments
    .filter((p) => p.status === "pending")
    .reduce((sum, p) => sum + parseFloat(p.total), 0);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <Helmet>
        <title>Seller Dashboard | MediMart</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
        Welcome, Seller! 🧾
      </h2>

      {isLoading ? (
        <p className="text-center text-gray-500">Loading your earnings...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-green-100 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-600">Total Paid Sales</h3>
            <p className="text-2xl font-bold text-green-600 mt-2">
              ৳ {paidTotal.toFixed(2)}
            </p>
          </div>

          <div className="bg-white border border-yellow-100 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-600">Total Pending Sales</h3>
            <p className="text-2xl font-bold text-yellow-500 mt-2">
              ৳ {pendingTotal.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SellerHome;
