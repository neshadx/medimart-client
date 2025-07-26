

// import React from "react";
// import { Helmet } from "react-helmet-async";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { toast } from "react-toastify";

// const ManageAdvertise = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const queryClient = useQueryClient();

//   // Fetch advertised medicines
//   const { data: advertised = [], isLoading } = useQuery({
//     queryKey: ["adminAdvertised"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/admin/advertised");
//       return res.data;
//     },
//   });

//   // Toggle advertise status
//   const mutation = useMutation({
//     mutationFn: async (item) => {
//       return await axiosSecure.put(`/admin/advertised/${item._id}`, {
//         isActive: !item.isActive,
//       });
//     },
//     onSuccess: () => {
//       toast.success("✅ Slider status updated!");
//       queryClient.invalidateQueries(["adminAdvertised"]);
//     },
//     onError: () => {
//       toast.error("❌ Failed to update.");
//     },
//   });

//   const handleToggle = (item) => {
//     mutation.mutate(item);
//   };

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Manage Advertise | Admin | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
//         Manage Homepage Banners
//       </h2>

//       {isLoading ? (
//         <p className="text-center text-gray-600">Loading advertised medicines...</p>
//       ) : advertised.length === 0 ? (
//         <p className="text-center text-gray-500">No items found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {advertised.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white border rounded shadow-md p-4 flex flex-col items-center text-center space-y-3"
//             >
//               <img
//                 src={item.image || "https://via.placeholder.com/300x180.png?text=Image+Not+Found"}
//                 alt={item.name}
//                 className="w-full h-40 object-cover rounded border"
//               />
//               <h3 className="text-lg font-bold text-green-700">{item.name}</h3>
//               <p className="text-sm text-gray-600">{item.description}</p>
//               <p className="text-sm text-gray-500">
//                 <strong>Seller:</strong>{" "}
//                 {item.sellerEmail || <span className="italic text-red-400">Not Provided</span>}
//               </p>
//               <button
//                 onClick={() => handleToggle(item)}
//                 className={`btn btn-sm ${item.isActive ? "bg-red-500 hover:bg-red-600" : "bg-green-600 hover:bg-green-700"} text-white`}
//               >
//                 {item.isActive ? "Remove from Slider" : "Add to Slider"}
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default ManageAdvertise;




import React from "react";
import { Helmet } from "react-helmet-async";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const ManageAdvertise = () => {
  const [axiosSecure] = useAxiosSecure();
  const queryClient = useQueryClient();

  // Fetch advertised medicines
  const { data: advertised = [], isLoading } = useQuery({
    queryKey: ["adminAdvertised"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/advertised");
      return res.data;
    },
  });

  // Toggle advertise status
  const mutation = useMutation({
    mutationFn: async (item) => {
      return await axiosSecure.put(`/admin/advertised/${item._id}`, {
        isActive: !item.isActive,
      });
    },
    onSuccess: () => {
      toast.success(" Slider status updated!");
      queryClient.invalidateQueries(["adminAdvertised"]);
    },
    onError: () => {
      toast.error("❌ Failed to update.");
    },
  });

  const handleToggle = (item) => {
    mutation.mutate(item);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <Helmet>
        <title>Manage Advertise | Admin | MediMart</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Manage Homepage Banners
      </h2>

      {isLoading ? (
        <p className="text-center text-gray-600">Loading advertised medicines...</p>
      ) : advertised.length === 0 ? (
        <p className="text-center text-gray-500">No items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {advertised.map((item) => {
            const sellerEmail =
              item.sellerEmail || item.seller?.email || null;

            return (
              <div
                key={item._id}
                className="bg-white border rounded shadow-md p-4 flex flex-col items-center text-center space-y-3"
              >
                <img
  src={
    item.image
      ? `${import.meta.env.VITE_API_URL}${item.image}`
      : "https://via.placeholder.com/300x180.png?text=Image+Not+Found"
  }
  alt={item.name}
  className="w-full h-40 object-cover rounded border"
/>

                <h3 className="text-lg font-bold text-green-700">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-sm text-gray-500">
                  <strong>Seller:</strong>{" "}
                  {sellerEmail ? (
                    <span className="text-black">{sellerEmail}</span>
                  ) : (
                    <span className="italic text-red-400">Not Provided</span>
                  )}
                </p>
                <button
                  onClick={() => handleToggle(item)}
                  className={`btn btn-sm ${item.isActive
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-green-600 hover:bg-green-700"} text-white`}
                >
                  {item.isActive ? "Remove from Slider" : "Add to Slider"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ManageAdvertise;


