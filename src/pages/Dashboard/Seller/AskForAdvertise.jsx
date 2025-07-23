import React from "react";
import { Helmet } from "react-helmet-async";

const AskForAdvertise = () => {
  return (
    <div className="p-6">
      <Helmet>
        <title>Dashboard | Ask For Advertisement</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-[#38A169] mb-4">📢 Request Advertisement</h2>
      <p className="text-gray-600">
        Sellers can request their medicine to be featured in the homepage slider from here.
      </p>
    </div>
  );
};

export default AskForAdvertise;
