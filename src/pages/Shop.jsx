

// import React, { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet-async";
// import { toast } from "react-toastify";
// import { useCart } from "../Context/CartContext"; // ✅ Cart context import

// const Shop = () => {
//   const baseURL = import.meta.env.VITE_API_URL;
//   const [selectedMedicine, setSelectedMedicine] = useState(null);
//   const { addToCart } = useCart(); // ✅ useCart hook

//   const { data: medicines = [], isLoading } = useQuery({
//     queryKey: ["allMedicines"],
//     queryFn: async () => {
//       const res = await fetch(`${baseURL}/medicines`);
//       return res.json();
//     },
//   });

//   // ✅ Fixed handleSelect for proper cart data
//   const handleSelect = (med) => {
//     addToCart({
//       _id: med._id,
//       name: med.name,
//       company: med.company || "Unknown",
//       price: med.discountedPrice || med.originalPrice || 0, // ✅ Prevents NaN
//       image: med.image || "",
//       quantity: 1,
//     });

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

//      {/* ✅ Medicine Info Modal */}
// {selectedMedicine && (
//   <dialog id="shopModal" className="modal modal-open">
//     <div className="modal-box bg-white text-gray-800 rounded-lg shadow-lg">
//       <h3 className="text-2xl font-bold text-green-700 mb-4">
//         {selectedMedicine.name}
//       </h3>

//       <div className="flex flex-col items-center justify-center mb-4">
//         <img
//           src={selectedMedicine.image}
//           alt={selectedMedicine.name}
//           className="w-32 h-32 object-cover rounded border"
//         />
//       </div>

//       <div className="space-y-2 text-left text-sm">
//         <p>
//           <span className="font-semibold">💲 Price:</span>{" "}
//           ${selectedMedicine.discountedPrice || selectedMedicine.originalPrice}
//         </p>
//         <p>
//           <span className="font-semibold">⭐ Rating:</span>{" "}
//           {selectedMedicine.rating || "N/A"}
//         </p>
//         <p>
//           <span className="font-semibold">📦 Stock:</span>{" "}
//           {selectedMedicine.stock || "N/A"}
//         </p>
//         <p>
//           <span className="font-semibold">🏪 Seller:</span>{" "}
//           {selectedMedicine.seller || "N/A"}
//         </p>
//       </div>

//       <div className="modal-action mt-6">
//         <button
//           onClick={() => setSelectedMedicine(null)}
//           className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   </dialog>
// )}

     
//     </section>
//   );
// };

// export default Shop;

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { useCart } from "../Context/CartContext";

const Shop = () => {
  const baseURL = import.meta.env.VITE_API_URL;
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const { addToCart } = useCart();

  const { data: medicines = [], isLoading } = useQuery({
    queryKey: ["allMedicines"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/medicines`);
      return res.json();
    },
  });

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

  if (isLoading) {
    return (
      <div className="text-center py-12 font-semibold text-lg">
        Loading medicines...
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>Shop | MediMart</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
        All Medicines
      </h2>

      {medicines.length === 0 ? (
        <p className="text-center text-gray-500">No medicines available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border rounded-lg">
            <thead className="bg-green-100 text-black font-semibold">
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
              {medicines.map((med, idx) => (
                <tr key={med._id} className="hover:bg-gray-50">
                  <td>{idx + 1}</td>
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

      {/* ✅ Modal Section */}
      {selectedMedicine && (
        <dialog id="shopModal" className="modal modal-open">
          <div className="modal-box bg-white text-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              {selectedMedicine.name}
            </h3>

            <div className="flex flex-col items-center justify-center mb-4">
              <img
                src={selectedMedicine.image}
                alt={selectedMedicine.name}
                className="w-32 h-32 object-cover rounded border"
              />
            </div>

            <div className="space-y-2 text-left text-sm">
              <p>
                <span className="font-semibold">💲 Price:</span>{" "}
                ${selectedMedicine.discountedPrice || selectedMedicine.originalPrice}
              </p>
              <p>
                <span className="font-semibold">⭐ Rating:</span>{" "}
                {selectedMedicine.rating || "N/A"}
              </p>
              <p>
                <span className="font-semibold">📦 Stock:</span>{" "}
                {selectedMedicine.stock || "N/A"}
              </p>
              <p>
                <span className="font-semibold">🏪 Seller:</span>{" "}
                {selectedMedicine.seller || "N/A"}
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



