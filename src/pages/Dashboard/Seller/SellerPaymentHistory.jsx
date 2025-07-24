// import React, { useState } from "react";
// import { Helmet } from "react-helmet-async";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";

// const SellerPaymentHistory = () => {
//   const { user } = useAuth();
//   const [axiosSecure] = useAxiosSecure();
//   const [search, setSearch] = useState("");

//   const { data: payments = [], isLoading } = useQuery({
//     queryKey: ["sellerPayments", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/payments/${user.email}`);
//       return res.data;
//     },
//   });

//   const filtered = payments
//     .filter((p) =>
//       p.buyerEmail?.toLowerCase().includes(search.toLowerCase())
//     )
//     .sort((a, b) => b.total - a.total); // Sort by amount descending

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Seller Payment History | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
//         My Payment History
//       </h2>

//       <div className="mb-6 flex justify-end">
//         <input
//           type="text"
//           placeholder="Search buyer email..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="input input-bordered bg-white text-black border border-gray-300 w-full max-w-sm"
//         />
//       </div>

//       {isLoading ? (
//         <p className="text-center text-gray-500">Loading payments...</p>
//       ) : filtered.length === 0 ? (
//         <p className="text-center text-gray-400">No matching payments found.</p>
//       ) : (
//         <div className="overflow-x-auto bg-white border rounded-lg shadow">
//           <table className="table w-full text-sm text-black">
//             <thead className="bg-green-100 text-green-900 font-semibold text-[15px]">
//               <tr>
//                 <th>#</th>
//                 <th>Buyer Email</th>
//                 <th>Transaction ID</th>
//                 <th>Amount</th>
//                 <th>Status</th>
//                 <th>Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filtered.map((payment, i) => (
//                 <tr key={payment._id} className="hover">
//                   <td>{i + 1}</td>
//                   <td>{payment.buyerEmail || "N/A"}</td>
//                   <td>{payment.transactionId || "N/A"}</td>
//                   <td>৳ {parseFloat(payment.total).toFixed(2)}</td>
//                   <td
//                     className={
//                       payment.status === "paid"
//                         ? "text-green-600 font-medium"
//                         : "text-red-600 font-medium"
//                     }
//                   >
//                     {payment.status}
//                   </td>
//                   <td>
//                     {new Date(payment.createdAt).toLocaleDateString("en-GB")}
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

// export default SellerPaymentHistory;





import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const SellerPaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [search, setSearch] = useState("");

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["sellerPayments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/seller/payments/${user.email}`); // ✅ fixed route
      return res.data;
    },
  });

  const filtered = payments
    .filter((p) =>
      p.buyerEmail?.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => b.total - a.total); // Sort by amount descending

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>Seller Payment History | MediMart</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        My Payment History
      </h2>

      <div className="mb-6 flex justify-end">
        <input
          type="text"
          placeholder="Search buyer email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered bg-white text-black border border-gray-300 w-full max-w-sm"
        />
      </div>

      {isLoading ? (
        <p className="text-center text-gray-500">Loading payments...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-400">No matching payments found.</p>
      ) : (
        <div className="overflow-x-auto bg-white border rounded-lg shadow">
          <table className="table w-full text-sm text-black">
            <thead className="bg-green-100 text-green-900 font-semibold text-[15px]">
              <tr>
                <th>#</th>
                <th>Buyer Email</th>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((payment, i) => (
                <tr key={payment._id} className="hover">
                  <td>{i + 1}</td>
                  <td>{payment.buyerEmail || "N/A"}</td>
                  <td>{payment.transactionId || "N/A"}</td>
                  <td>৳ {parseFloat(payment.total).toFixed(2)}</td>
                  <td
                    className={
                      payment.status === "paid"
                        ? "text-green-600 font-medium"
                        : "text-red-600 font-medium"
                    }
                  >
                    {payment.status}
                  </td>
                  <td>
                    {new Date(payment.createdAt).toLocaleDateString("en-GB")}
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

export default SellerPaymentHistory;

