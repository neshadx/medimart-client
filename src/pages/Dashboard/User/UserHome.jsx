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



import React from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";

const UserHome = () => {
  const { user } = useAuth();

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <Helmet>
        <title>User Dashboard | MediMart</title>
      </Helmet>

      <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center text-center">
        <FaUserCircle className="text-6xl text-green-600 mb-4" />
        <h2 className="text-3xl font-bold text-green-700 mb-2">
          Welcome, {user?.displayName || "User"}! 👋
        </h2>
        <p className="text-gray-600 text-base">
          You can track your purchases and payment history from here.
        </p>
      </div>
    </section>
  );
};

export default UserHome;

