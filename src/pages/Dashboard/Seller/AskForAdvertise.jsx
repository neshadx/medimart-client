// import React from "react";
// import { Helmet } from "react-helmet-async";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { useForm } from "react-hook-form";

// const AskForAdvertise = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const { user } = useAuth();
//   const queryClient = useQueryClient();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const { data: ads = [], isLoading } = useQuery({
//     queryKey: ["sellerAdvertised", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/seller/advertised/${user.email}`);
//       return res.data;
//     },
//   });

//   const mutation = useMutation({
//     mutationFn: async (data) => {
//       const payload = {
//         ...data,
//         sellerEmail: user.email,
//         isActive: false,
//         createdAt: new Date(),
//       };
//       const res = await axiosSecure.post("/seller/advertised", payload);
//       return res.data;
//     },
//     onSuccess: () => {
//       toast.success("Advertisement request submitted!");
//       reset();
//       queryClient.invalidateQueries(["sellerAdvertised"]);
//     },
//     onError: () => {
//       toast.error("Failed to request.");
//     },
//   });

//   const onSubmit = (data) => {
//     mutation.mutate(data);
//   };

//   // Optional: sort ads newest first
//   const sortedAds = [...ads].sort(
//     (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//   );

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Ask for Advertise | Seller | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
//         Request Advertisement
//       </h2>

//       {/* 🔍 Form */}
//       <div className="mb-10 bg-white border p-6 rounded shadow">
//         <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
//           <div>
//             <label className="font-medium">Image URL</label>
//             <input
//               type="text"
//               {...register("image", { required: true })}
//               className="input input-bordered w-full"
//             />
//             {errors.image && (
//               <p className="text-red-500 text-sm">Image is required</p>
//             )}
//           </div>
//           <div>
//             <label className="font-medium">Short Description</label>
//             <textarea
//               {...register("description", { required: true })}
//               className="textarea textarea-bordered w-full"
//             />
//             {errors.description && (
//               <p className="text-red-500 text-sm">Description is required</p>
//             )}
//           </div>
//           <button
//             type="submit"
//             className="btn bg-green-600 hover:bg-green-700 text-white"
//           >
//             Submit Request
//           </button>
//         </form>
//       </div>

//       {/* 📝 Submitted Ads */}
//       <h3 className="text-xl font-semibold text-gray-700 mb-4">
//         Your Submitted Requests
//       </h3>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {isLoading ? (
//           <p className="text-center text-gray-500 col-span-full">Loading ads...</p>
//         ) : sortedAds.length === 0 ? (
//           <p className="text-center text-gray-400 col-span-full">No advertisement requests yet.</p>
//         ) : (
//           sortedAds.map((ad) => (
//             <div
//               key={ad._id}
//               className="border rounded shadow p-4 space-y-2 bg-white"
//             >
//               <img
//                 src={ad.image}
//                 alt="advertised"
//                 className="w-full h-40 object-cover rounded"
//               />
//               <p className="text-gray-700 text-sm">{ad.description}</p>
//               <p className="text-sm">
//                 <span className="font-semibold">Status: </span>
//                 {ad.isActive ? (
//                   <span className="text-green-600 font-bold">🟢 Active</span>
//                 ) : (
//                   <span className="text-yellow-600 font-semibold">🕒 Pending</span>
//                 )}
//               </p>
//               <p className="text-xs text-gray-400">
//                 Requested on: {new Date(ad.createdAt).toLocaleDateString()}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </section>
//   );
// };

// export default AskForAdvertise;



// import React from "react";
// import { Helmet } from "react-helmet-async";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { useForm } from "react-hook-form";

// const AskForAdvertise = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const { user } = useAuth();
//   const queryClient = useQueryClient();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const { data: ads = [], isLoading } = useQuery({
//     queryKey: ["sellerAdvertised", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/seller/advertised/${user.email}`);
//       return res.data;
//     },
//   });

//   const mutation = useMutation({
//     mutationFn: async (data) => {
//       const formData = new FormData();
//       formData.append("image", data.image[0]);
//       formData.append("description", data.description);
//       formData.append("sellerEmail", user.email);

//       const res = await axiosSecure.post("/advertised", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       return res.data;
//     },
//     onSuccess: () => {
//       toast.success("Advertisement request submitted!");
//       reset();
//       queryClient.invalidateQueries(["sellerAdvertised"]);
//     },
//     onError: () => {
//       toast.error("Failed to request.");
//     },
//   });

//   const onSubmit = (data) => {
//     mutation.mutate(data);
//   };

//   const sortedAds = [...ads].sort(
//     (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//   );

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Ask for Advertise | Seller | MediMart</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
//         Request Advertisement
//       </h2>

//       {/* Form Section */}
//       <div className="mb-10 bg-white border p-6 rounded shadow-md">
//         <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
//           {/* Image Upload */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Upload Image
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               {...register("image", { required: true })}
//               className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//             {errors.image && (
//               <p className="text-red-500 text-sm mt-1">Image is required</p>
//             )}
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Short Description
//             </label>
//             <textarea
//               {...register("description", { required: true })}
//               placeholder="Enter a short message"
//               className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
//               rows={3}
//             />
//             {errors.description && (
//               <p className="text-red-500 text-sm mt-1">Description is required</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="btn bg-green-600 hover:bg-green-700 text-white w-full"
//           >
//             Submit Request
//           </button>
//         </form>
//       </div>

//       {/* Submitted Requests */}
//       <h3 className="text-xl font-semibold text-gray-700 mb-4">
//         Your Submitted Requests
//       </h3>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {isLoading ? (
//           <p className="text-center text-gray-500 col-span-full">Loading ads...</p>
//         ) : sortedAds.length === 0 ? (
//           <p className="text-center text-gray-400 col-span-full">
//             No advertisement requests yet.
//           </p>
//         ) : (
//           sortedAds.map((ad) => (
//             <div
//               key={ad._id}
//               className="border rounded shadow p-4 space-y-2 bg-white"
//             >
//               <img
//                 src={ad.image}
//                 alt="advertised"
//                 className="w-full h-40 object-cover rounded"
//               />
//               <p className="text-gray-700 text-sm">{ad.description}</p>
//               <p className="text-sm">
//                 <span className="font-semibold">Status: </span>
//                 {ad.isActive ? (
//                   <span className="text-green-600 font-bold">🟢 Active</span>
//                 ) : (
//                   <span className="text-yellow-600 font-semibold">🕒 Pending</span>
//                 )}
//               </p>
//               <p className="text-xs text-gray-400">
//                 Requested on: {new Date(ad.createdAt).toLocaleDateString()}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </section>
//   );
// };

// export default AskForAdvertise;




// import React from "react";
// import { Helmet } from "react-helmet-async";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { useForm } from "react-hook-form";

// const AskForAdvertise = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const { user } = useAuth();
//   const queryClient = useQueryClient();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const { data: ads = [], isLoading } = useQuery({
//     queryKey: ["sellerAdvertised", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/seller/advertised/${user.email}`);
//       return res.data;
//     },
//   });

//   const mutation = useMutation({
//     mutationFn: async (data) => {
//       const formData = new FormData();
//       formData.append("image", data.image[0]);
//       formData.append("description", data.description);
//       formData.append("sellerEmail", user.email);

//       const res = await axiosSecure.post("/advertised", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       return res.data;
//     },
//     onSuccess: () => {
//       toast.success("Advertisement request submitted!");
//       reset();
//       queryClient.invalidateQueries(["sellerAdvertised"]);
//       document.getElementById("ad-modal").checked = false;
//     },
//     onError: () => {
//       toast.error("Failed to request.");
//     },
//   });

//   const onSubmit = (data) => {
//     mutation.mutate(data);
//   };

//   const sortedAds = [...ads].sort(
//     (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//   );

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Ask for Advertise | Seller | MediMart</title>
//       </Helmet>

//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl font-bold text-green-700">Advertisement Requests</h2>
//         <label htmlFor="ad-modal" className="btn btn-success">+ Add Advertisement</label>
//       </div>

//       {/* Modal */}
//       <input type="checkbox" id="ad-modal" className="modal-toggle" />
//       <div className="modal">
//         <div className="modal-box relative">
//           <label htmlFor="ad-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//           <h3 className="font-bold text-lg mb-4 text-center text-green-600">Submit Advertisement Request</h3>
//           <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
//             {/* Image Upload */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 {...register("image", { required: true })}
//                 className="w-full border border-gray-300 px-3 py-2 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//               {errors.image && <p className="text-red-500 text-sm mt-1">Image is required</p>}
//             </div>

//             {/* Description */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
//               <textarea
//                 {...register("description", { required: true })}
//                 placeholder="Enter a short message"
//                 className="w-full border border-gray-300 px-3 py-2 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 rows={3}
//               />
//               {errors.description && <p className="text-red-500 text-sm mt-1">Description is required</p>}
//             </div>

//             <button
//               type="submit"
//               className="btn bg-green-600 hover:bg-green-700 text-white"
//             >
//               Submit Request
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Submitted Ads */}
//       <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-10">Your Submitted Requests</h3>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {isLoading ? (
//           <p className="text-center text-gray-500 col-span-full">Loading ads...</p>
//         ) : sortedAds.length === 0 ? (
//           <p className="text-center text-gray-400 col-span-full">No advertisement requests yet.</p>
//         ) : (
//           sortedAds.map((ad) => (
//             <div key={ad._id} className="border rounded shadow p-4 space-y-2 bg-white">
//               <img
//                 src={ad.image}
//                 alt="advertised"
//                 className="w-full h-40 object-cover rounded"
//               />
//               <p className="text-gray-700 text-sm">{ad.description}</p>
//               <p className="text-sm">
//                 <span className="font-semibold">Status: </span>
//                 {ad.isActive ? (
//                   <span className="text-green-600 font-bold">🟢 Active</span>
//                 ) : (
//                   <span className="text-yellow-600 font-semibold">🕒 Pending</span>
//                 )}
//               </p>
//               <p className="text-xs text-gray-400">
//                 Requested on: {new Date(ad.createdAt).toLocaleDateString()}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </section>
//   );
// };

// export default AskForAdvertise;



// import React from "react";
// import { Helmet } from "react-helmet-async";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { useForm } from "react-hook-form";

// const AskForAdvertise = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const { user } = useAuth();
//   const queryClient = useQueryClient();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const { data: ads = [], isLoading } = useQuery({
//     queryKey: ["sellerAdvertised", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/seller/advertised/${user.email}`);
//       return res.data;
//     },
//   });

//   const mutation = useMutation({
//     mutationFn: async (data) => {
//       const formData = new FormData();
//       formData.append("image", data.image[0]);
//       formData.append("description", data.description);
//       formData.append("sellerEmail", user.email);

//       const res = await axiosSecure.post("/advertised", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       return res.data;
//     },
//     onSuccess: () => {
//       toast.success("Advertisement request submitted!");
//       reset();
//       queryClient.invalidateQueries(["sellerAdvertised"]);
//       document.getElementById("ad-modal").checked = false;
//     },
//     onError: () => {
//       toast.error("Failed to request.");
//     },
//   });

//   const onSubmit = (data) => {
//     mutation.mutate(data);
//   };

//   const sortedAds = [...ads].sort(
//     (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//   );

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Ask for Advertise | Seller | MediMart</title>
//       </Helmet>

//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl font-bold text-green-700">Advertisement Requests</h2>
//         <label htmlFor="ad-modal" className="btn btn-success">+ Add Advertisement</label>
//       </div>

//       {/* Modal */}
//       <input type="checkbox" id="ad-modal" className="modal-toggle" />
//       <div className="modal bg-black bg-opacity-30 backdrop-blur-sm">
//         <div className="modal-box relative bg-white text-gray-800 border border-gray-200 shadow-lg max-w-md">
//           <label htmlFor="ad-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//           <h3 className="font-bold text-lg mb-4 text-center text-green-600">Submit Advertisement Request</h3>
//           <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
//             {/* Image Upload */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 {...register("image", { required: true })}
//                 className="w-full border border-gray-300 px-3 py-2 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//               {errors.image && <p className="text-red-500 text-sm mt-1">Image is required</p>}
//             </div>

//             {/* Description */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
//               <textarea
//                 {...register("description", { required: true })}
//                 placeholder="Enter a short message"
//                 className="w-full border border-gray-300 px-3 py-2 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 rows={3}
//               />
//               {errors.description && <p className="text-red-500 text-sm mt-1">Description is required</p>}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
//             >
//               Submit Request
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Submitted Ads */}
//       <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-10">Your Submitted Requests</h3>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {isLoading ? (
//           <p className="text-center text-gray-500 col-span-full">Loading ads...</p>
//         ) : sortedAds.length === 0 ? (
//           <p className="text-center text-gray-400 col-span-full">No advertisement requests yet.</p>
//         ) : (
//           sortedAds.map((ad) => (
//             <div key={ad._id} className="border rounded shadow p-4 space-y-2 bg-white">
//               <img
//                 src={ad.image}
//                 alt="advertised"
//                 className="w-full h-40 object-cover rounded"
//               />
//               <p className="text-gray-700 text-sm">{ad.description}</p>
//               <p className="text-sm">
//                 <span className="font-semibold">Status: </span>
//                 {ad.isActive ? (
//                   <span className="text-green-600 font-bold">🟢 Active</span>
//                 ) : (
//                   <span className="text-yellow-600 font-semibold">🕒 Pending</span>
//                 )}
//               </p>
//               <p className="text-xs text-gray-400">
//                 Requested on: {new Date(ad.createdAt).toLocaleDateString()}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </section>
//   );
// };

// export default AskForAdvertise;





import React from "react";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const AskForAdvertise = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const baseURL = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: ads = [], isLoading } = useQuery({
    queryKey: ["sellerAdvertised", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/advertised?sellerEmail=${user.email}`);
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (data) => {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      formData.append("description", data.description);
      formData.append("sellerEmail", user.email);

      const res = await axiosSecure.post("/advertised", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    },
    onSuccess: () => {
      toast.success("Advertisement request submitted!");
      reset();
      queryClient.invalidateQueries(["sellerAdvertised"]);
      document.getElementById("ad-modal").checked = false;
    },
    onError: () => {
      toast.error("Failed to request.");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  const sortedAds = [...ads].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <Helmet>
        <title>Ask for Advertise | Seller | MediMart</title>
      </Helmet>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-green-700">Advertisement Requests</h2>
        <label htmlFor="ad-modal" className="btn btn-success">+ Add Advertisement</label>
      </div>

      {/* Modal */}
      <input type="checkbox" id="ad-modal" className="modal-toggle" />
      <div className="modal bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="modal-box relative bg-white text-gray-800 border border-gray-200 shadow-lg max-w-md">
          <label htmlFor="ad-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg mb-4 text-center text-green-600">Submit Advertisement Request</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                {...register("image", { required: true })}
                className="w-full border border-gray-300 px-3 py-2 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.image && <p className="text-red-500 text-sm mt-1">Image is required</p>}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
              <textarea
                {...register("description", { required: true })}
                placeholder="Enter a short message"
                className="w-full border border-gray-300 px-3 py-2 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={3}
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">Description is required</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>

      {/* Submitted Ads */}
      <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-10">Your Submitted Requests</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <p className="text-center text-gray-500 col-span-full">Loading ads...</p>
        ) : sortedAds.length === 0 ? (
          <p className="text-center text-gray-400 col-span-full">No advertisement requests yet.</p>
        ) : (
          sortedAds.map((ad) => (
            <div key={ad._id} className="border rounded shadow p-4 space-y-2 bg-white">
              <img
                src={`${baseURL}${ad.image}`}
                alt="advertised"
                className="w-full h-40 object-cover rounded"
              />
              <p className="text-gray-700 text-sm">{ad.description}</p>
              <p className="text-sm">
                <span className="text-black font-semibold">Status: </span>
                {ad.isActive ? (
                  <span className="text-green-600 font-bold">🟢 Active</span>
                ) : (
                  <span className="text-yellow-600 font-semibold">🕒 Pending</span>
                )}
              </p>
              <p className="text-xs text-gray-400">
                Requested on: {new Date(ad.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default AskForAdvertise;

