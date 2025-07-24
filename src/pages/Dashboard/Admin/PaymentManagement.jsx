import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const PaymentManagement = () => {
  const [axiosSecure] = useAxiosSecure();
  const queryClient = useQueryClient();

  // 🔁 Fetch all payments
  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["adminPayments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/payments");
      return res.data;
    },
  });

  // ✅ Accept Payment Mutation
  const mutation = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.put(`/admin/payments/${id}`, {
        status: "paid",
      });
      return res.data;
    },
    onSuccess: () => {
      toast.success("Payment marked as paid!");
      queryClient.invalidateQueries(["adminPayments"]);
    },
    onError: () => {
      toast.error("Failed to update payment.");
    },
  });

  const handleAccept = (id) => {
    if (window.confirm("Confirm to accept this payment?")) {
      mutation.mutate(id);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>Payment Management | Admin | MediMart</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        Payment Management
      </h2>

      {isLoading ? (
        <p className="text-center text-gray-600">Loading payments...</p>
      ) : payments.length === 0 ? (
        <p className="text-center text-gray-500">No payments found.</p>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[...payments]
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((payment, idx) => (
                  <tr key={payment._id} className="hover:bg-gray-50">
                    <td>{idx + 1}</td>
                    <td>{payment.buyerEmail || "N/A"}</td>
                    <td>{payment.transactionId || "N/A"}</td>
                    <td>৳ {parseFloat(payment.total).toFixed(2)}</td>
                    <td>
                      {payment.status === "paid" ? (
                        <span className="text-green-600 font-semibold">✔ Paid</span>
                      ) : (
                        <span className="text-yellow-600 font-medium">🕒 Pending</span>
                      )}
                    </td>
                    <td>
                      {payment.status === "pending" ? (
                        <button
                          className="btn btn-xs bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => handleAccept(payment._id)}
                          disabled={mutation.isLoading}
                        >
                          Accept
                        </button>
                      ) : (
                        <span className="text-xs text-gray-400">--</span>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default PaymentManagement;
