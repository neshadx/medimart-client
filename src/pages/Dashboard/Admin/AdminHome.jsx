// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet-async";

// const AdminHome = () => {
//   const baseURL = import.meta.env.VITE_API_URL;

//   // Fetch all payments
//   const { data: payments = [], isLoading } = useQuery({
//     queryKey: ["allPaymentsForAdmin"],
//     queryFn: async () => {
//       const res = await fetch(`${baseURL}/admin/payments`);
//       return res.json();
//     },
//   });

//   // Calculate total revenue
//   const paidTotal = payments
//     .filter((p) => p.status === "paid")
//     .reduce((sum, p) => sum + parseFloat(p.total), 0);

//   const pendingTotal = payments
//     .filter((p) => p.status === "pending")
//     .reduce((sum, p) => sum + parseFloat(p.total), 0);

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Admin Dashboard | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
//         Welcome Admin
//       </h2>

//       {isLoading ? (
//         <p className="text-center font-medium text-gray-500">Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-white border shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-600">Paid Revenue</h3>
//             <p className="text-2xl font-bold text-green-600 mt-2">
//               ৳ {paidTotal.toFixed(2)}
//             </p>
//           </div>

//           <div className="bg-white border shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-600">Pending Revenue</h3>
//             <p className="text-2xl font-bold text-yellow-500 mt-2">
//               ৳ {pendingTotal.toFixed(2)}
//             </p>
//           </div>

//           <div className="bg-white border shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-600">Total Payments</h3>
//             <p className="text-2xl font-bold text-blue-600 mt-2">
//               {payments.length}
//             </p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default AdminHome;



// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet-async";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const AdminHome = () => {
//   const [axiosSecure] = useAxiosSecure();

//   const { data: payments = [], isLoading } = useQuery({
//     queryKey: ["allPaymentsForAdmin"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/admin/payments");
//       return res.data;
//     },
//   });

//   // Calculate totals
//   const paidTotal = payments
//     .filter((p) => p.status === "paid")
//     .reduce((sum, p) => sum + parseFloat(p.total), 0);

//   const pendingTotal = payments
//     .filter((p) => p.status === "pending")
//     .reduce((sum, p) => sum + parseFloat(p.total), 0);

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Admin Dashboard | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
//         Welcome Admin
//       </h2>

//       {isLoading ? (
//         <p className="text-center font-medium text-gray-500">Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-white border shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-600">Paid Revenue</h3>
//             <p className="text-2xl font-bold text-green-600 mt-2">
//               ৳ {paidTotal.toFixed(2)}
//             </p>
//           </div>

//           <div className="bg-white border shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-600">Pending Revenue</h3>
//             <p className="text-2xl font-bold text-yellow-500 mt-2">
//               ৳ {pendingTotal.toFixed(2)}
//             </p>
//           </div>

//           <div className="bg-white border shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-600">Total Payments</h3>
//             <p className="text-2xl font-bold text-blue-600 mt-2">
//               {payments.length}
//             </p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default AdminHome;













// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet-async";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const AdminHome = () => {
//   const [axiosSecure] = useAxiosSecure();

//   const { data: payments = [], isLoading } = useQuery({
//     queryKey: ["allPaymentsForAdmin"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/admin/payments");
//       return Array.isArray(res.data) ? res.data : []; // 🔒 Prevent crash
//     },
//   });

//   // ✅ Safely calculate totals
//   const paidTotal = payments?.length
//     ? payments
//         .filter((p) => p.status === "paid")
//         .reduce((sum, p) => sum + parseFloat(p.total || 0), 0)
//     : 0;

//   const pendingTotal = payments?.length
//     ? payments
//         .filter((p) => p.status === "pending")
//         .reduce((sum, p) => sum + parseFloat(p.total || 0), 0)
//     : 0;

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Admin Dashboard | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
//         Welcome Admin
//       </h2>

//       {isLoading ? (
//         <p className="text-center font-medium text-gray-500">Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-white border shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-600">Paid Revenue</h3>
//             <p className="text-2xl font-bold text-green-600 mt-2">
//               ৳ {paidTotal.toFixed(2)}
//             </p>
//           </div>

//           <div className="bg-white border shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-600">Pending Revenue</h3>
//             <p className="text-2xl font-bold text-yellow-500 mt-2">
//               ৳ {pendingTotal.toFixed(2)}
//             </p>
//           </div>

//           <div className="bg-white border shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-600">Total Payments</h3>
//             <p className="text-2xl font-bold text-blue-600 mt-2">
//               {payments.length}
//             </p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default AdminHome;



import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AdminHome = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Mock data
    const fakeStats = {
      totalUsers: 120,
      totalSellers: 15,
      totalMedicines: 340,
      totalRevenue: 150000,
    };

    const fakePayments = [
      { status: "paid", total: 2000 },
      { status: "paid", total: 3500 },
      { status: "pending", total: 1500 },
      { status: "paid", total: 1000 },
    ];

    setTimeout(() => {
      setStats(fakeStats);
      setPayments(fakePayments);
      setLoading(false);
    }, 1000); // simulate API delay
  }, []);

  // Calculate totals
  const paidTotal = payments.filter((p) => p.status === "paid")
    .reduce((sum, p) => sum + p.total, 0);

  const pendingTotal = payments.filter((p) => p.status === "pending")
    .reduce((sum, p) => sum + p.total, 0);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>Admin Dashboard | MediMart</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
        Welcome Admin
      </h2>

      {loading ? (
        <p className="text-center font-medium text-gray-500">Loading...</p>
      ) : (
        <>
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-600">Total Users</h3>
              <p className="text-2xl font-bold text-blue-600 mt-2">{stats.totalUsers}</p>
            </div>
            <div className="bg-white border shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-600">Total Sellers</h3>
              <p className="text-2xl font-bold text-purple-600 mt-2">{stats.totalSellers}</p>
            </div>
            <div className="bg-white border shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-600">Total Medicines</h3>
              <p className="text-2xl font-bold text-green-600 mt-2">{stats.totalMedicines}</p>
            </div>
            <div className="bg-white border shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-600">Total Revenue</h3>
              <p className="text-2xl font-bold text-pink-600 mt-2">৳ {stats.totalRevenue}</p>
            </div>
          </div>

          {/* Payments Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-600">Paid Revenue</h3>
              <p className="text-2xl font-bold text-green-600 mt-2">৳ {paidTotal}</p>
            </div>
            <div className="bg-white border shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-600">Pending Revenue</h3>
              <p className="text-2xl font-bold text-yellow-500 mt-2">৳ {pendingTotal}</p>
            </div>
            <div className="bg-white border shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-600">Total Payments</h3>
              <p className="text-2xl font-bold text-blue-600 mt-2">{payments.length}</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default AdminHome;


// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const AdminHome = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const [loading, setLoading] = useState(true);
//   const [stats, setStats] = useState({});
//   const [payments, setPayments] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // 📌 দুটি API একসাথে কল করলাম
//         const [statsRes, paymentsRes] = await Promise.all([
//           axiosSecure.get("/admin/stats"),
//           axiosSecure.get("/admin/payments"),
//         ]);

//         setStats(statsRes.data || {});
//         setPayments(Array.isArray(paymentsRes.data) ? paymentsRes.data : []);
//       } catch (err) {
//         console.error("Error fetching admin data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [axiosSecure]);

//   //  Calculate totals
//   const paidTotal = payments
//     .filter((p) => p.status === "paid")
//     .reduce((sum, p) => sum + (parseFloat(p.total) || 0), 0);

//   const pendingTotal = payments
//     .filter((p) => p.status === "pending")
//     .reduce((sum, p) => sum + (parseFloat(p.total) || 0), 0);

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Admin Dashboard | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
//         Welcome Admin
//       </h2>

//       {loading ? (
//         <p className="text-center font-medium text-gray-500">Loading...</p>
//       ) : (
//         <>
//           {/* Overview Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             <div className="bg-white border shadow-md rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-600">Total Users</h3>
//               <p className="text-2xl font-bold text-blue-600 mt-2">{stats.totalUsers}</p>
//             </div>
//             <div className="bg-white border shadow-md rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-600">Total Sellers</h3>
//               <p className="text-2xl font-bold text-purple-600 mt-2">{stats.totalSellers}</p>
//             </div>
//             <div className="bg-white border shadow-md rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-600">Total Medicines</h3>
//               <p className="text-2xl font-bold text-green-600 mt-2">{stats.totalMedicines}</p>
//             </div>
//             <div className="bg-white border shadow-md rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-600">Total Revenue</h3>
//               <p className="text-2xl font-bold text-pink-600 mt-2">৳ {stats.totalRevenue}</p>
//             </div>
//           </div>

//           {/* Payments Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="bg-white border shadow-md rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-600">Paid Revenue</h3>
//               <p className="text-2xl font-bold text-green-600 mt-2">৳ {paidTotal}</p>
//             </div>
//             <div className="bg-white border shadow-md rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-600">Pending Revenue</h3>
//               <p className="text-2xl font-bold text-yellow-500 mt-2">৳ {pendingTotal}</p>
//             </div>
//             <div className="bg-white border shadow-md rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-600">Total Payments</h3>
//               <p className="text-2xl font-bold text-blue-600 mt-2">{payments.length}</p>
//             </div>
//           </div>
//         </>
//       )}
//     </section>
//   );
// };

// export default AdminHome;


