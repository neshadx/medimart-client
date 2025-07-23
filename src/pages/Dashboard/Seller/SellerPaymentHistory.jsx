import React from "react";
import { Helmet } from "react-helmet-async";

const SellerPaymentHistory = () => {
  return (
    <div className="p-6">
      <Helmet>
        <title>Dashboard | Seller Payment History</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-[#38A169] mb-4">💳 Payment History</h2>
      <p className="text-gray-600">
        This page will show all your received payments with their statuses.
      </p>
    </div>
  );
};

export default SellerPaymentHistory;
