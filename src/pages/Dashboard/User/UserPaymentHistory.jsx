// ✅ File: UserPaymentHistory.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const UserPaymentHistory = () => {
  return (
    <div className="p-6">
      <Helmet>
        <title>Dashboard | My Payment History</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-[#38A169] mb-4">💳 My Payments</h2>
      <p className="text-gray-600">
        Here you’ll see all the payments you have made with their statuses.
      </p>
    </div>
  );
};

export default UserPaymentHistory;
