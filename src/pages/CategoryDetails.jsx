
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "../Context/CartContext";
import { toast } from "react-toastify";

const CategoryDetails = () => {
  const { categoryId } = useParams();
  const baseURL = import.meta.env.VITE_API_URL;
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const { addToCart } = useCart();

  // 🔍 Pagination, search, sort
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { data: medicines = [], isLoading } = useQuery({
    queryKey: ["medicines", categoryId],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/category/${categoryId}`);
      return res.json();
    },
  });

  // 🔎 Filter + Sort
  const filtered = medicines
    .filter(
      (med) =>
        med.name?.toLowerCase().includes(search.toLowerCase()) ||
        med.company?.toLowerCase().includes(search.toLowerCase()) ||
        med.generic?.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const priceA = a.discountedPrice || a.originalPrice || 0;
      const priceB = b.discountedPrice || b.originalPrice || 0;
      if (sortOrder === "asc") return priceA - priceB;
      if (sortOrder === "desc") return priceB - priceA;
      return 0;
    });

  // 📄 Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSelect = (med) => {
    addToCart({
      _id: med._id,
      name: med.name,
      company: med.company || "Unknown",
      price: med.discountedPrice || med.originalPrice || 0,
      image: med.image || "",
      quantity: 1,
    });
    toast.success(`${med.name} added to cart!`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
        Medicines in this Category
      </h2>

      {/* 🔍 Search + Sort */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name, company..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full md:max-w-sm px-4 py-2 border border-gray-300 rounded-md text-gray-800 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <select
          className="md:w-52 px-4 py-2 border border-gray-300 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort By Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* 📦 Table */}
      {isLoading ? (
        <div className="text-center py-12 font-semibold text-lg">
          Loading medicines...
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-500">
          No medicines found for this category.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border rounded-lg">
            <thead className="bg-green-100 text-green-900 font-semibold">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price ($)</th>
                <th>Rating</th>
                <th>Stock</th>
                <th>Seller</th>
                <th>👁</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((med, idx) => (
                <tr key={med._id} className="hover:bg-gray-50">
                  <td>{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                  <td>
                    <img
                      src={med.image}
                      alt={med.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td>{med.name}</td>
                  <td>{med.discountedPrice || med.originalPrice || "N/A"}</td>
                  <td>{med.rating || "N/A"}</td>
                  <td>{med.stock || "N/A"}</td>
                  <td>{med.seller || "N/A"}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => setSelectedMedicine(med)}
                    >
                      👁
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => handleSelect(med)}
                    >
                      Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 🔢 Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num}
              className={`btn btn-sm ${
                currentPage === num + 1
                  ? "bg-green-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setCurrentPage(num + 1)}
            >
              {num + 1}
            </button>
          ))}
        </div>
      )}

      {/* 🧾 Modal */}
      {selectedMedicine && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 w-[90%] md:w-[400px] relative">
            <h3 className="font-bold text-xl mb-4 text-green-700 text-center">
              {selectedMedicine.name}
            </h3>
            <img
              src={selectedMedicine.image}
              alt={selectedMedicine.name}
              className="w-32 h-32 object-cover mb-4 mx-auto rounded"
            />
            <p>
              <strong>Price:</strong>{" "}
              ${selectedMedicine.discountedPrice || selectedMedicine.originalPrice}
            </p>
            <p>
              <strong>Rating:</strong> {selectedMedicine.rating || "N/A"}
            </p>
            <p>
              <strong>Stock:</strong> {selectedMedicine.stock || "N/A"}
            </p>
            <p>
              <strong>Seller:</strong> {selectedMedicine.seller || "N/A"}
            </p>
            <button
              onClick={() => setSelectedMedicine(null)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded px-2 text-sm hover:bg-red-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoryDetails;
