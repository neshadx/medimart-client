

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";

// const CategoryDetails = () => {
//   const { categoryId } = useParams();
//   const baseURL = import.meta.env.VITE_API_URL;
//   const [selectedMedicine, setSelectedMedicine] = useState(null);

//   const { data: medicines = [], isLoading } = useQuery({
//     queryKey: ["medicines", categoryId],
//     queryFn: async () => {
//       const res = await fetch(`${baseURL}/category/${categoryId}`);
//       return res.json();
//     },
//   });

//   const handleSelect = (med) => {
//     console.log("Selected Medicine for cart:", med);
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
//       <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
//         Medicines in this Category
//       </h2>

//       {medicines.length === 0 ? (
//         <p className="text-center text-gray-500">
//           No medicines found for this category.
//         </p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table w-full border rounded-lg">
//             <thead className="bg-green-100 text-green-900 font-semibold">
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

//       {/* ✅ Modal without overlay background */}
//       {selectedMedicine && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 w-[90%] md:w-[400px] relative">
//             <h3 className="font-bold text-xl mb-4 text-green-700 text-center">
//               {selectedMedicine.name}
//             </h3>
//             <img
//               src={selectedMedicine.image}
//               alt={selectedMedicine.name}
//               className="w-32 h-32 object-cover mb-4 mx-auto rounded"
//             />
//             <p><strong>Price:</strong> ${selectedMedicine.discountedPrice || selectedMedicine.originalPrice}</p>
//             <p><strong>Rating:</strong> {selectedMedicine.rating || "N/A"}</p>
//             <p><strong>Stock:</strong> {selectedMedicine.stock || "N/A"}</p>
//             <p><strong>Seller:</strong> {selectedMedicine.seller || "N/A"}</p>
//             <button
//               onClick={() => setSelectedMedicine(null)}
//               className="absolute top-2 right-2 bg-red-500 text-white rounded px-2 text-sm hover:bg-red-600"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default CategoryDetails;




