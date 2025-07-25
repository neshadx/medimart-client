

// import React, { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet-async";
// import { toast } from "react-toastify";
// import { useCart } from "../Context/CartContext";

// const Shop = () => {
//   const baseURL = import.meta.env.VITE_API_URL;
//   const [selectedMedicine, setSelectedMedicine] = useState(null);
//   const { addToCart } = useCart();

//   const { data: medicines = [], isLoading } = useQuery({
//     queryKey: ["allMedicines"],
//     queryFn: async () => {
//       const res = await fetch(`${baseURL}/medicines`);
//       return res.json();
//     },
//   });

//   const handleSelect = (med) => {
//     const item = {
//       _id: med._id,
//       name: med.name,
//       company: med.seller || med.company || "Unknown", // ✅ Corrected company field
//       price: med.discountedPrice || med.originalPrice || 0,
//       image: med.image || "",
//       quantity: 1,
//     };

//     addToCart(item);
//     toast.success(`${med.name} added to cart!`);
//   };

//   if (isLoading) {
//     return (
//       <div className="text-center py-12 font-semibold text-lg">
//         Loading medicines...
//       </div>
//     );
//   }

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Shop | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
//         All Medicines
//       </h2>

//       {medicines.length === 0 ? (
//         <p className="text-center text-gray-500">No medicines available.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table w-full border rounded-lg">
//             <thead className="bg-green-100 text-black font-semibold">
//               <tr>
//                 <th>#</th>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Price ($)</th>
//                 <th>Rating</th>
//                 <th>Stock</th>
//                 <th>Seller</th>
//                 <th>👁</th>
//                 <th>Select</th>
//               </tr>
//             </thead>
//             <tbody>
//               {medicines.map((med, idx) => (
//                 <tr key={med._id} className="hover:bg-gray-50">
//                   <td>{idx + 1}</td>
//                   <td>
//                     <img
//                       src={med.image}
//                       alt={med.name}
//                       className="w-12 h-12 object-cover rounded"
//                     />
//                   </td>
//                   <td>{med.name}</td>
//                   <td>{med.discountedPrice || med.originalPrice || "N/A"}</td>
//                   <td>{med.rating || "N/A"}</td>
//                   <td>{med.stock || "N/A"}</td>
//                   <td>{med.seller || "N/A"}</td>
//                   <td>
//                     <button
//                       className="btn btn-sm btn-outline"
//                       onClick={() => setSelectedMedicine(med)}
//                     >
//                       👁
//                     </button>
//                   </td>
//                   <td>
//                     <button
//                       className="btn btn-sm btn-success"
//                       onClick={() => handleSelect(med)}
//                     >
//                       Select
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* ✅ Modal Section */}
//       {selectedMedicine && (
//         <dialog id="shopModal" className="modal modal-open">
//           <div className="modal-box bg-white text-gray-800 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-bold text-green-700 mb-4">
//               {selectedMedicine.name}
//             </h3>

//             <div className="flex flex-col items-center justify-center mb-4">
//               <img
//                 src={selectedMedicine.image}
//                 alt={selectedMedicine.name}
//                 className="w-32 h-32 object-cover rounded border"
//               />
//             </div>

//             <div className="space-y-2 text-left text-sm">
//               <p>
//                 <span className="font-semibold">💲 Price:</span>{" "}
//                 ${selectedMedicine.discountedPrice || selectedMedicine.originalPrice}
//               </p>
//               <p>
//                 <span className="font-semibold">⭐ Rating:</span>{" "}
//                 {selectedMedicine.rating || "N/A"}
//               </p>
//               <p>
//                 <span className="font-semibold">📦 Stock:</span>{" "}
//                 {selectedMedicine.stock || "N/A"}
//               </p>
//               <p>
//                 <span className="font-semibold">🏪 Seller:</span>{" "}
//                 {selectedMedicine.seller || "N/A"}
//               </p>
//             </div>

//             <div className="modal-action mt-6">
//               <button
//                 onClick={() => setSelectedMedicine(null)}
//                 className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </dialog>
//       )}
//     </section>
//   );
// };

// export default Shop;




































// import React, { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet-async";
// import { toast } from "react-toastify";
// import { useCart } from "../Context/CartContext";

// const Shop = () => {
//   const baseURL = import.meta.env.VITE_API_URL;
//   const { addToCart } = useCart();

//   const [selectedMedicine, setSelectedMedicine] = useState(null);
//   const [search, setSearch] = useState("");
//   const [sortOrder, setSortOrder] = useState(""); // asc or desc
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   const { data: medicines = [], isLoading } = useQuery({
//     queryKey: ["allMedicines"],
//     queryFn: async () => {
//       const res = await fetch(`${baseURL}/medicines`);
//       return res.json();
//     },
//   });

//   // 🔍 Search + Sort logic
//   const filtered = medicines
//     .filter(
//       (med) =>
//         med.name?.toLowerCase().includes(search.toLowerCase()) ||
//         med.company?.toLowerCase().includes(search.toLowerCase()) ||
//         med.generic?.toLowerCase().includes(search.toLowerCase())
//     )
//     .sort((a, b) => {
//       const priceA = a.discountedPrice || a.originalPrice || 0;
//       const priceB = b.discountedPrice || b.originalPrice || 0;
//       if (sortOrder === "asc") return priceA - priceB;
//       if (sortOrder === "desc") return priceB - priceA;
//       return 0;
//     });

//   // 📄 Pagination
//   const totalPages = Math.ceil(filtered.length / itemsPerPage);
//   const paginated = filtered.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handleSelect = (med) => {
//     const item = {
//       _id: med._id,
//       name: med.name,
//       company: med.seller || med.company || "Unknown",
//       price: med.discountedPrice || med.originalPrice || 0,
//       image: med.image || "",
//       quantity: 1,
//     };
//     addToCart(item);
//     toast.success(`${med.name} added to cart!`);
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Shop | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
//         All Medicines
//       </h2>

//       {/* 🔍 Search + Sort - White mode fixed */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search by name, company..."
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//             setCurrentPage(1);
//           }}
//           className="w-full md:max-w-sm px-4 py-2 border border-gray-300 rounded-md text-gray-800 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
//         />

//         <select
//           className="md:w-52 px-4 py-2 border border-gray-300 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//         >
//           <option value="">Sort By Price</option>
//           <option value="asc">Low to High</option>
//           <option value="desc">High to Low</option>
//         </select>
//       </div>

//       {/* 📦 Table */}
//       {isLoading ? (
//         <div className="text-center py-12 font-semibold text-lg">
//           Loading medicines...
//         </div>
//       ) : filtered.length === 0 ? (
//         <p className="text-center text-gray-500">No medicines found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table w-full border rounded-lg">
//             <thead className="bg-green-100 text-black font-semibold">
//               <tr>
//                 <th>#</th>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Price ($)</th>
//                 <th>Rating</th>
//                 <th>Stock</th>
//                 <th>Seller</th>
//                 <th>👁</th>
//                 <th>Select</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginated.map((med, idx) => (
//                 <tr key={med._id} className="hover:bg-gray-50">
//                   <td>{(currentPage - 1) * itemsPerPage + idx + 1}</td>
//                   <td>
//                     <img
//                       src={med.image}
//                       alt={med.name}
//                       className="w-12 h-12 object-cover rounded"
//                     />
//                   </td>
//                   <td>{med.name}</td>
//                   <td>{med.discountedPrice || med.originalPrice || "N/A"}</td>
//                   <td>{med.rating || "N/A"}</td>
//                   <td>{med.stock || "N/A"}</td>
//                   <td>{med.seller || "N/A"}</td>
//                   <td>
//                     <button
//                       className="btn btn-sm btn-outline"
//                       onClick={() => setSelectedMedicine(med)}
//                     >
//                       👁
//                     </button>
//                   </td>
//                   <td>
//                     <button
//                       className="btn btn-sm btn-success"
//                       onClick={() => handleSelect(med)}
//                     >
//                       Select
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* 🔢 Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-center mt-6 gap-2 flex-wrap">
//           {[...Array(totalPages).keys()].map((num) => (
//             <button
//               key={num}
//               className={`btn btn-sm ${
//                 currentPage === num + 1
//                   ? "bg-green-600 text-white"
//                   : "bg-gray-200"
//               }`}
//               onClick={() => setCurrentPage(num + 1)}
//             >
//               {num + 1}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* 🧾 Modal */}
//       {selectedMedicine && (
//         <dialog id="shopModal" className="modal modal-open">
//           <div className="modal-box bg-white text-gray-800 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-bold text-green-700 mb-4">
//               {selectedMedicine.name}
//             </h3>
//             <div className="flex flex-col items-center justify-center mb-4">
//               <img
//                 src={selectedMedicine.image}
//                 alt={selectedMedicine.name}
//                 className="w-32 h-32 object-cover rounded border"
//               />
//             </div>
//             <div className="space-y-2 text-left text-sm">
//               <p>
//                 <span className="font-semibold">💲 Price:</span>{" "}
//                 ${selectedMedicine.discountedPrice || selectedMedicine.originalPrice}
//               </p>
//               <p>
//                 <span className="font-semibold">⭐ Rating:</span>{" "}
//                 {selectedMedicine.rating || "N/A"}
//               </p>
//               <p>
//                 <span className="font-semibold">📦 Stock:</span>{" "}
//                 {selectedMedicine.stock || "N/A"}
//               </p>
//               <p>
//                 <span className="font-semibold">🏪 Seller:</span>{" "}
//                 {selectedMedicine.seller || "N/A"}
//               </p>
//             </div>
//             <div className="modal-action mt-6">
//               <button
//                 onClick={() => setSelectedMedicine(null)}
//                 className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </dialog>
//       )}
//     </section>
//   );
// };

// export default Shop;





// import React, { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet-async";
// import { toast } from "react-toastify";
// import { useCart } from "../Context/CartContext";

// const Shop = () => {
//   const baseURL = import.meta.env.VITE_API_URL;
//   const { addToCart } = useCart();

//   const [selectedMedicine, setSelectedMedicine] = useState(null);
//   const [search, setSearch] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   const { data: medicines = [], isLoading } = useQuery({
//     queryKey: ["allMedicines"],
//     queryFn: async () => {
//       const res = await fetch(`${baseURL}/medicines`);
//       return res.json();
//     },
//   });

//   const filtered = medicines
//     .filter(
//       (med) =>
//         med.name?.toLowerCase().includes(search.toLowerCase()) ||
//         med.company?.toLowerCase().includes(search.toLowerCase()) ||
//         med.generic?.toLowerCase().includes(search.toLowerCase())
//     )
//     .sort((a, b) => {
//       const priceA = a.discountedPrice ?? a.originalPrice ?? 0;
//       const priceB = b.discountedPrice ?? b.originalPrice ?? 0;
//       if (sortOrder === "asc") return priceA - priceB;
//       if (sortOrder === "desc") return priceB - priceA;
//       return 0;
//     });

//   const totalPages = Math.ceil(filtered.length / itemsPerPage);
//   const paginated = filtered.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handleSelect = (med) => {
//     const item = {
//       _id: med._id,
//       name: med.name,
//       company: med.seller || med.company || "Unknown",
//       price: med.discountedPrice ?? med.originalPrice ?? 0,
//       image: med.image || "",
//       quantity: 1,
//     };
//     addToCart(item);
//     toast.success(`${med.name} added to cart!`);
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Shop | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
//         All Medicines
//       </h2>

//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search by name, company..."
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//             setCurrentPage(1);
//           }}
//           className="w-full md:max-w-sm px-4 py-2 border border-gray-300 rounded-md text-gray-800 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
//         />

//         <select
//           className="md:w-52 px-4 py-2 border border-gray-300 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//         >
//           <option value="">Sort By Price</option>
//           <option value="asc">Low to High</option>
//           <option value="desc">High to Low</option>
//         </select>
//       </div>

//       {isLoading ? (
//         <div className="text-center py-12 font-semibold text-lg">
//           Loading medicines...
//         </div>
//       ) : filtered.length === 0 ? (
//         <p className="text-center text-gray-500">No medicines found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table w-full border rounded-lg">
//             <thead className="bg-green-100 text-black font-semibold">
//               <tr>
//                 <th>#</th>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Price (৳)</th>
//                 <th>Rating</th>
//                 <th>Stock</th>
//                 <th>Seller</th>
//                 <th>👁</th>
//                 <th>Select</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginated.map((med, idx) => (
//                 <tr key={med._id} className="hover:bg-gray-50">
//                   <td>{(currentPage - 1) * itemsPerPage + idx + 1}</td>
//                   <td>
//                     <img
//                       src={med.image}
//                       alt={med.name}
//                       className="w-12 h-12 object-cover rounded"
//                     />
//                   </td>
//                   <td>{med.name}</td>
//                   <td>৳ {med.discountedPrice ?? med.originalPrice ?? "N/A"}</td>
//                   <td>{med.rating || "N/A"}</td>
//                   <td>{med.stock || "N/A"}</td>
//                   <td>{med.seller || "N/A"}</td>
//                   <td>
//                     <button
//                       className="btn btn-sm btn-outline"
//                       onClick={() => setSelectedMedicine(med)}
//                     >
//                       👁
//                     </button>
//                   </td>
//                   <td>
//                     <button
//                       className="btn btn-sm btn-success"
//                       onClick={() => handleSelect(med)}
//                     >
//                       Select
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {totalPages > 1 && (
//         <div className="flex justify-center mt-6 gap-2 flex-wrap">
//           {[...Array(totalPages).keys()].map((num) => (
//             <button
//               key={num}
//               className={`btn btn-sm ${
//                 currentPage === num + 1
//                   ? "bg-green-600 text-white"
//                   : "bg-gray-200"
//               }`}
//               onClick={() => setCurrentPage(num + 1)}
//             >
//               {num + 1}
//             </button>
//           ))}
//         </div>
//       )}

//       {selectedMedicine && (
//         <dialog id="shopModal" className="modal modal-open">
//           <div className="modal-box bg-white text-gray-800 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-bold text-green-700 mb-4">
//               {selectedMedicine.name}
//             </h3>
//             <div className="flex flex-col items-center justify-center mb-4">
//               <img
//                 src={selectedMedicine.image}
//                 alt={selectedMedicine.name}
//                 className="w-32 h-32 object-cover rounded border"
//               />
//             </div>
//             <div className="space-y-2 text-left text-sm">
//               <p>
//                 <span className="font-semibold">💲 Price:</span>{" "}
//                 ৳ {selectedMedicine.discountedPrice ?? selectedMedicine.originalPrice}
//               </p>
//               <p>
//                 <span className="font-semibold">⭐ Rating:</span>{" "}
//                 {selectedMedicine.rating || "N/A"}
//               </p>
//               <p>
//                 <span className="font-semibold">📦 Stock:</span>{" "}
//                 {selectedMedicine.stock || "N/A"}
//               </p>
//               <p>
//                 <span className="font-semibold">🏪 Seller:</span>{" "}
//                 {selectedMedicine.seller || "N/A"}
//               </p>
//             </div>
//             <div className="modal-action mt-6">
//               <button
//                 onClick={() => setSelectedMedicine(null)}
//                 className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </dialog>
//       )}
//     </section>
//   );
// };

// export default Shop;



import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { useCart } from "../Context/CartContext";

const fallbackImage = "https://via.placeholder.com/48?text=No+Image"; // ✅ fallback

const Shop = () => {
  const baseURL = import.meta.env.VITE_API_URL;
  const { addToCart } = useCart();

  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { data: medicines = [], isLoading } = useQuery({
    queryKey: ["allMedicines"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/medicines`);
      return res.json();
    },
  });

  const filtered = medicines
    .filter(
      (med) =>
        med.name?.toLowerCase().includes(search.toLowerCase()) ||
        med.company?.toLowerCase().includes(search.toLowerCase()) ||
        med.generic?.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const priceA = a.discountedPrice ?? a.originalPrice ?? 0;
      const priceB = b.discountedPrice ?? b.originalPrice ?? 0;
      if (sortOrder === "asc") return priceA - priceB;
      if (sortOrder === "desc") return priceB - priceA;
      return 0;
    });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSelect = (med) => {
    const item = {
      _id: med._id,
      name: med.name,
      company: med.seller || med.company || "Unknown",
      price: med.discountedPrice ?? med.originalPrice ?? 0,
      image: med.image || fallbackImage,
      quantity: 1,
    };
    addToCart(item);
    toast.success(`${med.name} added to cart!`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>Shop | MediMart</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        All Medicines
      </h2>

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

      {isLoading ? (
        <div className="text-center py-12 font-semibold text-lg">
          Loading medicines...
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-500">No medicines found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border rounded-lg">
            <thead className="bg-green-100 text-black font-semibold">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price (৳)</th>
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
                      src={med.image || fallbackImage}
                      alt={med.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td>{med.name}</td>
                  <td>
                    ৳{" "}
                    {(med.discountedPrice ?? med.originalPrice ?? 0).toFixed(2)}
                  </td>
                  <td>{med.rating ?? "-"}</td>
                  <td>{med.stock ?? 0}</td>
                  <td>{med.seller || med.company || "Unknown"}</td>
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

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num}
              className={`btn btn-sm ${
                currentPage === num + 1
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setCurrentPage(num + 1)}
            >
              {num + 1}
            </button>
          ))}
        </div>
      )}

      {/* ✅ MODAL */}
      {selectedMedicine && (
        <dialog id="shopModal" className="modal modal-open">
          <div className="modal-box bg-white text-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">
              {selectedMedicine.name}
            </h3>
            <div className="flex flex-col items-center mb-4">
              <img
                src={selectedMedicine.image || fallbackImage}
                alt={selectedMedicine.name}
                className="w-32 h-32 object-cover rounded border"
              />
            </div>
            <div className="space-y-2 text-sm">
              <p>
                <strong> Price:</strong>{" "}
                ৳ {(selectedMedicine.discountedPrice ?? selectedMedicine.originalPrice ?? 0).toFixed(2)}
              </p>
              <p>
                <strong> Rating:</strong>{" "}
                {selectedMedicine.rating ?? "-"}
              </p>
              <p>
                <strong> Stock:</strong>{" "}
                {selectedMedicine.stock ?? 0}
              </p>
              <p>
                <strong> Seller:</strong>{" "}
                {selectedMedicine.seller || selectedMedicine.company || "Unknown"}
              </p>
            </div>
            <div className="modal-action mt-6">
              <button
                onClick={() => setSelectedMedicine(null)}
                className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default Shop;

































