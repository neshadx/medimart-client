import React from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const SellerPaymentHistory = () => {
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

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>Seller Payment History | MediMart</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        My Payment History
      </h2>

      {isLoading ? (
        <p className="text-center text-gray-500">Loading payments...</p>
      ) : payments.length === 0 ? (
        <p className="text-center text-gray-400">No payments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead className="bg-green-100 text-green-900 font-semibold">
              <tr>
                <th>#</th>
                <th>Buyer</th>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, i) => (
                <tr key={payment._id}>
                  <td>{i + 1}</td>
                  <td>{payment.buyerEmail || "N/A"}</td>
                  <td>{payment.transactionId || "N/A"}</td>
                  <td>৳ {payment.total}</td>
                  <td className={payment.status === "paid" ? "text-green-600" : "text-yellow-600"}>
                    {payment.status}
                  </td>
                  <td>{new Date(payment.createdAt).toLocaleDateString("en-GB")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default SellerPaymentHistory;
