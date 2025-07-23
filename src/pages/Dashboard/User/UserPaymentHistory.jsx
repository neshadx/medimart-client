import React from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserPaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["userPayments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>My Payment History | MediMart</title>
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
                <th>Transaction ID</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p, i) => (
                <tr key={p._id}>
                  <td>{i + 1}</td>
                  <td>{p.transactionId || "N/A"}</td>
                  <td>৳ {p.total}</td>
                  <td
                    className={
                      p.status === "paid"
                        ? "text-green-600 font-semibold"
                        : "text-yellow-600 font-semibold"
                    }
                  >
                    {p.status}
                  </td>
                  <td>{new Date(p.createdAt).toLocaleDateString("en-GB")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default UserPaymentHistory;
