// import React, { useState } from "react";
// import { Helmet } from "react-helmet-async";
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const UserPaymentHistory = () => {
//   const { user } = useAuth();
//   const [axiosSecure] = useAxiosSecure();
//   const [search, setSearch] = useState("");

//   const { data: payments = [], isLoading } = useQuery({
//     queryKey: ["userPayments", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/payments/${user.email}`);
//       return Array.isArray(res.data) ? res.data : [];
//     },
//   });

//   // Optional search by transaction ID
//   const filtered = payments.filter((p) =>
//     p.transactionId?.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>My Payment History | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
//         My Payment History
//       </h2>

//       {/* 🔍 Search */}
//       <div className="mb-4 text-right">
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search by Transaction ID"
//           className="input input-bordered max-w-sm w-full"
//         />
//       </div>

//       {/* 📋 Payment Table */}
//       {isLoading ? (
//         <p className="text-center text-gray-500">Loading payments...</p>
//       ) : filtered.length === 0 ? (
//         <p className="text-center text-gray-400">No matching payments found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table w-full border">
//             <thead className="bg-green-100 text-green-900 font-semibold">
//               <tr>
//                 <th>#</th>
//                 <th>Transaction ID</th>
//                 <th>Total</th>
//                 <th>Status</th>
//                 <th>Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filtered.map((p, i) => (
//                 <tr key={p._id || i}>
//                   <td>{i + 1}</td>
//                   <td>{p.transactionId || "N/A"}</td>
//                   <td>৳ {parseFloat(p.total || 0).toFixed(2)}</td>
//                   <td
//                     className={
//                       p.status === "paid"
//                         ? "text-green-600 font-semibold"
//                         : "text-yellow-600 font-semibold"
//                     }
//                   >
//                     {p.status || "pending"}
//                   </td>
//                   <td>
//                     {p.createdAt
//                       ? new Date(p.createdAt).toLocaleDateString("en-GB")
//                       : "N/A"}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </section>
//   );
// };

// export default UserPaymentHistory;



// import React, { useState } from "react";
// import { Helmet } from "react-helmet-async";
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const UserPaymentHistory = () => {
//   const { user } = useAuth();
//   const [axiosSecure] = useAxiosSecure();
//   const [search, setSearch] = useState("");

//   const { data: payments = [], isLoading } = useQuery({
//     queryKey: ["userPayments", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/payments/${user.email}`);
//       return Array.isArray(res.data) ? res.data : [];
//     },
//   });

//   const filtered = payments.filter((p) =>
//     p.transactionId?.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>My Payment History | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
//         My Payment History
//       </h2>

//       {/* Search Field */}
//       <div className="flex justify-end mb-4">
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search by Transaction ID"
//           className="border border-gray-300 px-4 py-2 rounded-md w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-800"
//         />
//       </div>

//       {/* Table or Status */}
//       {isLoading ? (
//         <p className="text-center text-gray-500">Loading payments...</p>
//       ) : filtered.length === 0 ? (
//         <p className="text-center text-gray-400">No payments found.</p>
//       ) : (
//         <div className="overflow-x-auto bg-white shadow rounded-lg border border-gray-200">
//           <table className="min-w-full table-auto text-sm text-gray-800">
//             <thead className="bg-green-100 text-green-900 font-semibold">
//               <tr className="text-left">
//                 <th className="px-4 py-3 border-b">#</th>
//                 <th className="px-4 py-3 border-b">Transaction ID</th>
//                 <th className="px-4 py-3 border-b">Total</th>
//                 <th className="px-4 py-3 border-b">Status</th>
//                 <th className="px-4 py-3 border-b">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filtered.map((p, i) => (
//                 <tr key={p._id || i} className="hover:bg-gray-50 transition">
//                   <td className="px-4 py-3 border-b">{i + 1}</td>
//                   <td className="px-4 py-3 border-b font-medium">
//                     {p.transactionId || "N/A"}
//                   </td>
//                   <td className="px-4 py-3 border-b">
//                     ৳ {parseFloat(p.total || 0).toFixed(2)}
//                   </td>
//                   <td className="px-4 py-3 border-b">
//                     {p.status === "paid" ? (
//                       <span className="text-green-600 font-semibold">Paid</span>
//                     ) : (
//                       <span className="text-yellow-600 font-semibold">Pending</span>
//                     )}
//                   </td>
//                   <td className="px-4 py-3 border-b">
//                     {p.createdAt
//                       ? new Date(p.createdAt).toLocaleDateString("en-GB")
//                       : "N/A"}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </section>
//   );
// };

// export default UserPaymentHistory;


import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserPaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [search, setSearch] = useState("");

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["userPayments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return Array.isArray(res.data) ? res.data : [];
    },
  });

  // ✅ Filter by Transaction ID (case insensitive)
  const filtered = payments.filter((p) =>
    p.transactionId?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>My Payment History | MediMart</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        My Payment History
      </h2>

      {/* 🔍 Search by TXN ID */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Transaction ID"
          className="border border-gray-300 px-4 py-2 rounded-md w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-800"
        />
      </div>

      {isLoading ? (
        <p className="text-center text-gray-500">Loading payments...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-400">No payments found.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow rounded-lg border border-gray-200">
          <table className="min-w-full table-auto text-sm text-gray-700">
            <thead className="bg-green-100 text-green-900 font-semibold">
              <tr className="text-left">
                <th className="px-4 py-3 border-b">#</th>
                <th className="px-4 py-3 border-b">Transaction ID</th>
                <th className="px-4 py-3 border-b">Total</th>
                <th className="px-4 py-3 border-b">Status</th>
                <th className="px-4 py-3 border-b">Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, i) => (
                <tr key={p._id || i} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 border-b">{i + 1}</td>
                  <td className="px-4 py-3 border-b font-medium text-green-800">{p.transactionId || "N/A"}</td>
                  <td className="px-4 py-3 border-b">৳ {parseFloat(p.total || 0).toFixed(2)}</td>
                  <td className="px-4 py-3 border-b">
                    {p.status === "paid" ? (
                      <span className="text-green-600 font-semibold">Paid</span>
                    ) : (
                      <span className="text-yellow-600 font-semibold">Pending</span>
                    )}
                  </td>
                  <td className="px-4 py-3 border-b">
                    {p.createdAt
                      ? new Date(p.createdAt).toLocaleDateString("en-GB")
                      : "N/A"}
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

export default UserPaymentHistory;

