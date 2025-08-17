// import React from "react";
// import { Helmet } from "react-helmet-async";
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const SellerHome = () => {
//   const { user } = useAuth();
//   const [axiosSecure] = useAxiosSecure();

//   const { data: payments = [], isLoading } = useQuery({
//     queryKey: ["sellerPayments", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/seller/payments/${user.email}`);
//       return res.data;
//     },
//   });

//   const paidTotal = payments
//     .filter((p) => p.status === "paid")
//     .reduce((sum, p) => sum + parseFloat(p.total), 0);

//   const pendingTotal = payments
//     .filter((p) => p.status === "pending")
//     .reduce((sum, p) => sum + parseFloat(p.total), 0);

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Seller Dashboard | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
//         Welcome, Seller! 🧾
//       </h2>

//       {isLoading ? (
//         <p className="text-center text-gray-500">Loading your earnings...</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white border border-green-100 shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-600">Total Paid Sales</h3>
//             <p className="text-2xl font-bold text-green-600 mt-2">
//               ৳ {paidTotal.toFixed(2)}
//             </p>
//           </div>

//           <div className="bg-white border border-yellow-100 shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-600">Total Pending Sales</h3>
//             <p className="text-2xl font-bold text-yellow-500 mt-2">
//               ৳ {pendingTotal.toFixed(2)}
//             </p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default SellerHome;



// import React from "react";
// import { Helmet } from "react-helmet-async";
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const SellerHome = () => {
//   const { user } = useAuth();
//   const [axiosSecure] = useAxiosSecure();

//   //  Seller Payments API
//   const { data: payments = [], isLoading: loadingPayments } = useQuery({
//     queryKey: ["sellerPayments", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/seller/payments/${user.email}`);
//       return res.data;
//     },
//   });

//   //  Seller Stats API (Extra medicine)
//   const { data: stats = {}, isLoading: loadingStats } = useQuery({
//     queryKey: ["sellerStats", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/seller/stats/${user.email}`);
//       return res.data; // { totalMedicines: 20, totalOrders: 50 }
//     },
//   });

//   // Earnings Calculation
//   const paidTotal = payments
//     .filter((p) => p.status === "paid")
//     .reduce((sum, p) => sum + (parseFloat(p.total) || 0), 0);

//   const pendingTotal = payments
//     .filter((p) => p.status === "pending")
//     .reduce((sum, p) => sum + (parseFloat(p.total) || 0), 0);

//   const isLoading = loadingPayments || loadingStats;

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Seller Dashboard | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
//         Welcome, {user?.displayName || "Seller"} 
//       </h2>

//       {isLoading ? (
//         <p className="text-center text-gray-500">Loading your dashboard...</p>
//       ) : (
//         <>
//           {/* Seller Profile Section */}
//           <div className="bg-white border shadow-md rounded-lg p-6 mb-8 flex items-center gap-6">
//             <img
//               src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
//               alt="Seller Avatar"
//               className="w-20 h-20 rounded-full object-cover border"
//             />
//             <div>
//               <h3 className="text-xl font-bold text-gray-700">
//                 {user?.displayName || "No Name"}
//               </h3>
//               <p className="text-gray-600">{user?.email}</p>
//               <p className="text-gray-500 mt-1">Phone: {user?.phone || "N/A"}</p>
//               <p className="text-gray-500">Address: {user?.address || "N/A"}</p>
//             </div>
//           </div>

//           {/* Overview Stats Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="bg-white border shadow-md rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-600">Paid Sales</h3>
//               <p className="text-2xl font-bold text-green-600 mt-2">
//                 ৳ {paidTotal.toFixed(2)}
//               </p>
//             </div>

//             <div className="bg-white border shadow-md rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-600">Pending Sales</h3>
//               <p className="text-2xl font-bold text-yellow-500 mt-2">
//                 ৳ {pendingTotal.toFixed(2)}
//               </p>
//             </div>

//             <div className="bg-white border shadow-md rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-600">My Medicines</h3>
//               <p className="text-2xl font-bold text-blue-600 mt-2">
//                 {stats.totalMedicines || 0}
//               </p>
//             </div>

//             <div className="bg-white border shadow-md rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-600">Total Orders</h3>
//               <p className="text-2xl font-bold text-purple-600 mt-2">
//                 {stats.totalOrders || 0}
//               </p>
//             </div>
//           </div>
//         </>
//       )}
//     </section>
//   );
// };

// export default SellerHome;

import React from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { FaStore } from "react-icons/fa";

const SellerHome = () => {
  const { user } = useAuth();

  //  Overview Data
  const paidTotal = 15230.5;
  const pendingTotal = 3850.0;
  const stats = {
    totalMedicines: 42,
    totalOrders: 128,
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <Helmet>
        <title>Seller Dashboard | MediMart</title>
      </Helmet>

      {/* Seller Info Card */}
      <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center text-center mb-10">
        <FaStore className="text-6xl text-green-600 mb-4" />
        <h2 className="text-3xl font-bold text-green-700 mb-2">
          Welcome, {user?.displayName || "Seller"}! 
        </h2>
        <p className="text-gray-600 text-base">
          Manage your medicines, track sales, and check order statistics here.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-600">Paid Sales</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">
            ৳ {paidTotal.toFixed(2)}
          </p>
        </div>

        <div className="bg-white border shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-600">Pending Sales</h3>
          <p className="text-2xl font-bold text-yellow-500 mt-2">
            ৳ {pendingTotal.toFixed(2)}
          </p>
        </div>

        <div className="bg-white border shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-600">My Medicines</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">
            {stats.totalMedicines}
          </p>
        </div>

        <div className="bg-white border shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-600">Total Orders</h3>
          <p className="text-2xl font-bold text-purple-600 mt-2">
            {stats.totalOrders}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SellerHome;
