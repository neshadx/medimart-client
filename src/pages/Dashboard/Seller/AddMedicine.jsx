import React from "react";

const AddMedicine = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#38A169]">
        Add New Medicine
      </h2>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Medicine Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Enter name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Category</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Enter category" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Price</label>
          <input type="number" className="w-full border rounded px-3 py-2" placeholder="Enter price" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Stock</label>
          <input type="number" className="w-full border rounded px-3 py-2" placeholder="Enter stock quantity" />
        </div>
        <button type="submit" className="w-full bg-[#38A169] hover:bg-green-600 text-white py-2 rounded transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMedicine;
