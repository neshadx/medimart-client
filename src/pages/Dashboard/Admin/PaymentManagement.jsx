// import React from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { toast } from "react-toastify";
// import { Helmet } from "react-helmet-async";

// const PaymentManagement = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const queryClient = useQueryClient();

//   // 🔁 Fetch all payments
//   const { data: payments = [], isLoading } = useQuery({
//     queryKey: ["adminPayments"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/admin/payments");
//       return res.data;
//     },
//   });

//   // ✅ Accept Payment Mutation
//   const mutation = useMutation({
//     mutationFn: async (id) => {
//       const res = await axiosSecure.put(`/admin/payments/${id}`, {
//         status: "paid",
//       });
//       return res.data;
//     },
//     onSuccess: () => {
//       toast.success("✅ Payment marked as paid!");
//       queryClient.invalidateQueries(["adminPayments"]);
//     },
//     onError: () => {
//       toast.error("❌ Failed to update payment.");
//     },
//   });

//   const handleAccept = (id) => {
//     if (window.confirm("Confirm to accept this payment?")) {
//       mutation.mutate(id);
//     }
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Payment Management | Admin | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
//         Payment Management
//       </h2>

//       {isLoading ? (
//         <p className="text-center text-gray-600">Loading payments...</p>
//       ) : payments.length === 0 ? (
//         <p className="text-center text-gray-500">No payments found.</p>
//       ) : (
//         <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
//           <table className="table w-full text-black">
//             <thead className="bg-green-100 text-green-800 font-semibold text-sm">
//               <tr>
//                 <th className="py-3 px-4 text-left">#</th>
//                 <th className="py-3 px-4 text-left">Buyer</th>
//                 <th className="py-3 px-4 text-left">Transaction ID</th>
//                 <th className="py-3 px-4 text-left">Amount</th>
//                 <th className="py-3 px-4 text-left">Status</th>
//                 <th className="py-3 px-4 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[...payments]
//                 .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//                 .map((payment, idx) => (
//                   <tr key={payment._id} className="hover:bg-gray-50">
//                     <td className="py-3 px-4 font-medium">{idx + 1}</td>
//                     <td className="py-3 px-4">{payment.buyerEmail || "N/A"}</td>
//                     <td className="py-3 px-4">{payment.transactionId || "N/A"}</td>
//                     <td className="py-3 px-4">৳ {parseFloat(payment.total).toFixed(2)}</td>
//                     <td className="py-3 px-4">
//                       {payment.status === "paid" ? (
//                         <span className="inline-flex items-center gap-1 text-green-600 font-semibold">
//                           ✔ Paid
//                         </span>
//                       ) : (
//                         <span className="inline-flex items-center gap-1 text-yellow-600 font-medium">
//                           🕒 Pending
//                         </span>
//                       )}
//                     </td>
//                     <td className="py-3 px-4">
//                       {payment.status === "pending" ? (
//                         <button
//                           className="btn btn-xs bg-green-600 hover:bg-green-700 text-white"
//                           onClick={() => handleAccept(payment._id)}
//                           disabled={mutation.isLoading}
//                         >
//                           Accept
//                         </button>
//                       ) : (
//                         <span className="text-sm text-gray-400">--</span>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </section>
//   );
// };

// export default PaymentManagement;






// import React from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { toast } from "react-toastify";
// import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2"; // ✅ NEW import

// const PaymentManagement = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const queryClient = useQueryClient();

//   // 🔁 Fetch all payments
//   const { data: payments = [], isLoading } = useQuery({
//     queryKey: ["adminPayments"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/admin/payments");
//       return res.data;
//     },
//   });

//   // ✅ Accept Payment Mutation
//   const mutation = useMutation({
//     mutationFn: async (id) => {
//       const res = await axiosSecure.put(`/admin/payments/${id}`, {
//         status: "paid",
//       });
//       return res.data;
//     },
//     onSuccess: () => {
//       toast.success("✅ Payment marked as paid!");
//       queryClient.invalidateQueries(["adminPayments"]);
//     },
//     onError: () => {
//       toast.error("❌ Failed to update payment.");
//     },
//   });

//   // ✅ SweetAlert confirmation
//   const handleAccept = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "Do you want to mark this payment as paid?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#16a34a",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, accept it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         mutation.mutate(id);
//       }
//     });
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Payment Management | Admin | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
//         Payment Management
//       </h2>

//       {isLoading ? (
//         <p className="text-center text-gray-600">Loading payments...</p>
//       ) : payments.length === 0 ? (
//         <p className="text-center text-gray-500">No payments found.</p>
//       ) : (
//         <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
//           <table className="table w-full text-black">
//             <thead className="bg-green-100 text-green-800 font-semibold text-sm">
//               <tr>
//                 <th className="py-3 px-4 text-left">#</th>
//                 <th className="py-3 px-4 text-left">Buyer</th>
//                 <th className="py-3 px-4 text-left">Transaction ID</th>
//                 <th className="py-3 px-4 text-left">Amount</th>
//                 <th className="py-3 px-4 text-left">Status</th>
//                 <th className="py-3 px-4 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[...payments]
//                 .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//                 .map((payment, idx) => (
//                   <tr key={payment._id} className="hover:bg-gray-50">
//                     <td className="py-3 px-4 font-medium">{idx + 1}</td>
//                     <td className="py-3 px-4">{payment.buyerEmail || "N/A"}</td>
//                     <td className="py-3 px-4">{payment.transactionId || "N/A"}</td>
//                     <td className="py-3 px-4">৳ {parseFloat(payment.total).toFixed(2)}</td>
//                     <td className="py-3 px-4">
//                       {payment.status === "paid" ? (
//                         <span className="inline-flex items-center gap-1 text-green-600 font-semibold">
//                           ✔ Paid
//                         </span>
//                       ) : (
//                         <span className="inline-flex items-center gap-1 text-yellow-600 font-medium">
//                           🕒 Pending
//                         </span>
//                       )}
//                     </td>
//                     <td className="py-3 px-4">
//                       {payment.status === "pending" ? (
//                         <button
//                           className="btn btn-xs bg-green-600 hover:bg-green-700 text-white"
//                           onClick={() => handleAccept(payment._id)}
//                           disabled={mutation.isLoading}
//                         >
//                           Accept
//                         </button>
//                       ) : (
//                         <span className="text-sm text-gray-400">--</span>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </section>
//   );
// };

// export default PaymentManagement;






// import React from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { toast } from "react-toastify";
// import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2"; // ✅ SweetAlert2

// const PaymentManagement = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const queryClient = useQueryClient();

//   // 🔁 Fetch all payments
//   const { data: payments = [], isLoading } = useQuery({
//     queryKey: ["adminPayments"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/admin/payments");
//       return res.data;
//     },
//   });

//   // ✅ Accept Payment Mutation
//   const mutation = useMutation({
//     mutationFn: async (id) => {
//       const res = await axiosSecure.put(`/admin/payments/${id}`, {
//         status: "paid",
//       });
//       return res.data;
//     },
//     onSuccess: () => {
//       Swal.fire({
//         icon: "success",
//         title: "Payment Accepted!",
//         text: "The payment has been marked as paid.",
//         confirmButtonColor: "#16a34a",
//       });
//       queryClient.invalidateQueries(["adminPayments"]);
//     },
//     onError: () => {
//       toast.error("❌ Failed to update payment.");
//     },
//   });

//   const handleAccept = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "Do you want to mark this payment as paid?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#16a34a",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, accept it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         mutation.mutate(id);
//       }
//     });
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Payment Management | Admin | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
//         Payment Management
//       </h2>

//       {isLoading ? (
//         <p className="text-center text-gray-600">Loading payments...</p>
//       ) : payments.length === 0 ? (
//         <p className="text-center text-gray-500">No payments found.</p>
//       ) : (
//         <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
//           <table className="table w-full text-black">
//             <thead className="bg-green-100 text-green-800 font-semibold text-sm">
//               <tr>
//                 <th className="py-3 px-4 text-left">#</th>
//                 <th className="py-3 px-4 text-left">Buyer</th>
//                 <th className="py-3 px-4 text-left">Transaction ID</th>
//                 <th className="py-3 px-4 text-left">Amount</th>
//                 <th className="py-3 px-4 text-left">Status</th>
//                 <th className="py-3 px-4 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[...payments]
//                 .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//                 .map((payment, idx) => (
//                   <tr key={payment._id} className="hover:bg-gray-50">
//                     <td className="py-3 px-4 font-medium">{idx + 1}</td>
//                     <td className="py-3 px-4">{payment.buyerEmail || "N/A"}</td>
//                     <td className="py-3 px-4">{payment.transactionId || "N/A"}</td>
//                     <td className="py-3 px-4">৳ {parseFloat(payment.total).toFixed(2)}</td>
//                     <td className="py-3 px-4">
//                       {payment.status === "paid" ? (
//                         <span className="inline-flex items-center gap-1 text-green-600 font-semibold">
//                           ✔ Paid
//                         </span>
//                       ) : (
//                         <span className="inline-flex items-center gap-1 text-yellow-600 font-medium">
//                           🕒 Pending
//                         </span>
//                       )}
//                     </td>
//                     <td className="py-3 px-4">
//                       {payment.status === "pending" ? (
//                         <button
//                           className="btn btn-xs bg-green-600 hover:bg-green-700 text-white"
//                           onClick={() => handleAccept(payment._id)}
//                           disabled={mutation.isLoading}
//                         >
//                           Accept
//                         </button>
//                       ) : (
//                         <span className="text-sm text-gray-400">--</span>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </section>
//   );
// };

// export default PaymentManagement;



import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const PaymentManagement = () => {
  const [axiosSecure] = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["adminPayments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/payments");
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.put(`/admin/payments/${id}`, {
        status: "paid",
      });
      return res.data;
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Payment Accepted!",
        text: "The payment has been marked as paid.",
        confirmButtonColor: "#16a34a",
        customClass: {
          popup: "w-[90%] max-w-sm", // ✅ Responsive fix
        },
      });
      queryClient.invalidateQueries(["adminPayments"]);
    },
    onError: () => {
      toast.error("❌ Failed to update payment.");
    },
  });

  const handleAccept = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to mark this payment as paid?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, accept it!",
      customClass: {
        popup: "w-[90%] max-w-sm", // ✅ Mobile-friendly width
      },
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate(id);
      }
    });
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
        <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
          <table className="table w-full min-w-[700px] text-black">
            <thead className="bg-green-100 text-green-800 font-semibold text-sm">
              <tr>
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Buyer</th>
                <th className="py-3 px-4 text-left">Transaction ID</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {[...payments]
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((payment, idx) => (
                  <tr key={payment._id} className="hover:bg-gray-50 text-sm">
                    <td className="py-3 px-4 font-medium">{idx + 1}</td>
                    <td className="py-3 px-4">{payment.buyerEmail || "N/A"}</td>
                    <td className="py-3 px-4 break-words max-w-[160px]">
                      {payment.transactionId || "N/A"}
                    </td>
                    <td className="py-3 px-4">
                      ৳ {parseFloat(payment.total).toFixed(2)}
                    </td>
                    <td className="py-3 px-4">
                      {payment.status === "paid" ? (
                        <span className="inline-flex items-center gap-1 text-green-600 font-semibold">
                          ✔ Paid
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-yellow-600 font-medium">
                          🕒 Pending
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {payment.status === "pending" ? (
                        <button
                          className="btn btn-xs bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => handleAccept(payment._id)}
                          disabled={mutation.isLoading}
                        >
                          Accept
                        </button>
                      ) : (
                        <span className="text-sm text-gray-400">--</span>
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



