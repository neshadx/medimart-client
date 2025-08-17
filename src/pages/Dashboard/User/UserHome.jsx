// import React from "react";
// import { Helmet } from "react-helmet-async";
// import useAuth from "../../../hooks/useAuth";

// const UserHome = () => {
//   const { user } = useAuth();

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>User Dashboard | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
//         Welcome, {user?.displayName || "User"}! 👋
//       </h2>

//       <p className="text-center text-gray-600">
//         You can track your purchases and payment history from here.
//       </p>
//     </section>
//   );
// };

// export default UserHome;



// import React from "react";
// import { Helmet } from "react-helmet-async";
// import useAuth from "../../../hooks/useAuth";
// import { FaUserCircle } from "react-icons/fa";

// const UserHome = () => {
//   const { user } = useAuth();

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>User Dashboard | MediMart</title>
//       </Helmet>

//       <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center text-center">
//         <FaUserCircle className="text-6xl text-green-600 mb-4" />
//         <h2 className="text-3xl font-bold text-green-700 mb-2">
//           Welcome, {user?.displayName || "User"}! 
//         </h2>
//         <p className="text-gray-600 text-base">
//           You can track your purchases and payment history from here.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default UserHome;



import React from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";

const UserHome = () => {
  const { user } = useAuth();

  // Overview Data
  const stats = {
    totalOrders: 12,
    paidOrders: 8,
    pendingOrders: 4,
    totalSpent: 4520.75,
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <Helmet>
        <title>User Dashboard | MediMart</title>
      </Helmet>

      {/* User Info */}
      <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center text-center mb-10">
        <FaUserCircle className="text-6xl text-green-600 mb-4" />
        <h2 className="text-3xl font-bold text-green-700 mb-2">
          Welcome, {user?.displayName || "User"}! 
        </h2>
        <p className="text-gray-600 text-base">
          You can track your purchases and payment history from here.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-600">Total Orders</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">
            {stats.totalOrders}
          </p>
        </div>

        <div className="bg-white border shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-600">Paid Orders</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">
            {stats.paidOrders}
          </p>
        </div>

        <div className="bg-white border shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-600">Pending Orders</h3>
          <p className="text-2xl font-bold text-yellow-500 mt-2">
            {stats.pendingOrders}
          </p>
        </div>

        <div className="bg-white border shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-600">Total Spent</h3>
          <p className="text-2xl font-bold text-purple-600 mt-2">
            ৳ {stats.totalSpent.toFixed(2)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserHome;


