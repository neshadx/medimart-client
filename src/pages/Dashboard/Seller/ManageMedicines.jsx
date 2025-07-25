// import React, { useState } from "react";
// import { Helmet } from "react-helmet-async";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";

// const ManageMedicines = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const queryClient = useQueryClient();
//   const { user } = useAuth();
//   const [editItem, setEditItem] = useState(null);
//   const [search, setSearch] = useState("");

//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   // Get medicines added by seller
//   const { data: medicines = [], isLoading } = useQuery({
//     queryKey: ["sellerMedicines", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/medicines?seller=${user.email}`);
//       return res.data;
//     },
//   });

//   // Get dynamic dropdown options (categories and companies)
//   const { data: categories = [] } = useQuery({
//     queryKey: ["categories"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/categories");
//       return res.data;
//     },
//   });

//   const { data: companies = [] } = useQuery({
//     queryKey: ["companies"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/companies");
//       return res.data;
//     },
//   });

//   // Mutation for Add / Update
//   const mutation = useMutation({
//     mutationFn: async (data) => {
//       if (editItem) {
//         return await axiosSecure.put(`/medicines/${editItem._id}`, data);
//       } else {
//         return await axiosSecure.post("/medicines", { ...data, seller: user.email });
//       }
//     },
//     onSuccess: () => {
//       toast.success(`Medicine ${editItem ? "updated" : "added"} successfully`);
//       reset();
//       setEditItem(null);
//       document.getElementById("medicineModal").close();
//       queryClient.invalidateQueries(["sellerMedicines"]);
//     },
//     onError: () => {
//       toast.error("Something went wrong.");
//     },
//   });

//   // Delete
//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure to delete this medicine?")) return;
//     try {
//       await axiosSecure.delete(`/medicines/${id}`);
//       toast.success("Medicine deleted!");
//       queryClient.invalidateQueries(["sellerMedicines"]);
//     } catch {
//       toast.error("Delete failed.");
//     }
//   };

//   // Edit
//   const handleEdit = (item) => {
//     setEditItem(item);
//     setValue("name", item.name);
//     setValue("generic", item.generic);
//     setValue("description", item.description);
//     setValue("image", item.image);
//     setValue("company", item.company);
//     setValue("category", item.category);
//     setValue("unit", item.unit);
//     setValue("price", item.price);
//     setValue("discount", item.discount || 0);
//     document.getElementById("medicineModal").showModal();
//   };

//   // Filtered & Sorted data
//   const filtered = medicines
//     .filter((m) => m.name.toLowerCase().includes(search.toLowerCase()))
//     .sort((a, b) => a.price - b.price); // sort by price ascending

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Manage Medicines | Seller | MediMart</title>
//       </Helmet>

//       <div className="flex justify-between flex-wrap items-center mb-6 gap-4">
//         <h2 className="text-3xl font-bold text-green-700">Manage Medicines</h2>
//         <div className="flex gap-3">
//           <input
//             type="text"
//             placeholder="Search by name..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="input input-bordered"
//           />
//           <button
//             className="btn bg-green-600 text-white"
//             onClick={() => {
//               setEditItem(null);
//               reset();
//               document.getElementById("medicineModal").showModal();
//             }}
//           >
//             + Add Medicine
//           </button>
//         </div>
//       </div>

//       {isLoading ? (
//         <p className="text-center text-gray-500">Loading your medicines...</p>
//       ) : filtered.length === 0 ? (
//         <p className="text-center text-gray-400">No medicines found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table w-full">
//             <thead className="bg-green-100 text-green-800 font-semibold">
//               <tr>
//                 <th>#</th>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Generic</th>
//                 <th>Company</th>
//                 <th>Unit</th>
//                 <th>Price</th>
//                 <th>Discount</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filtered.map((m, i) => (
//                 <tr key={m._id}>
//                   <td>{i + 1}</td>
//                   <td>
//                     <img src={m.image} className="w-12 h-12 rounded" alt="" />
//                   </td>
//                   <td>{m.name}</td>
//                   <td>{m.generic}</td>
//                   <td>{m.company}</td>
//                   <td>{m.unit}</td>
//                   <td>৳ {m.price}</td>
//                   <td>{m.discount || 0}%</td>
//                   <td>
//                     <button onClick={() => handleEdit(m)} className="btn btn-xs mr-1">Edit</button>
//                     <button onClick={() => handleDelete(m._id)} className="btn btn-xs btn-error text-white">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Modal */}
//       <dialog id="medicineModal" className="modal">
//         <div className="modal-box w-11/12 max-w-2xl">
//           <h3 className="font-bold text-lg text-green-600 mb-4">
//             {editItem ? "Update Medicine" : "Add New Medicine"}
//           </h3>
//           <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="grid gap-3">
//             <input {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
//             <input {...register("generic", { required: true })} placeholder="Generic Name" className="input input-bordered" />
//             <textarea {...register("description", { required: true })} placeholder="Short Description" className="textarea textarea-bordered" />
//             <input {...register("image", { required: true })} placeholder="Image URL" className="input input-bordered" />

//             <select {...register("company", { required: true })} className="select select-bordered">
//               <option value="">Select Company</option>
//               {companies.map((c) => (
//                 <option key={c._id} value={c.name}>{c.name}</option>
//               ))}
//             </select>

//             <select {...register("category", { required: true })} className="select select-bordered">
//               <option value="">Select Category</option>
//               {categories.map((cat) => (
//                 <option key={cat._id} value={cat.name}>{cat.name}</option>
//               ))}
//             </select>

//             <input {...register("unit", { required: true })} placeholder="Unit (mg/ml)" className="input input-bordered" />
//             <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered" />
//             <input type="number" {...register("discount")} placeholder="Discount %" defaultValue={0} className="input input-bordered" />

//             <div className="modal-action">
//               <button type="submit" className="btn bg-green-600 text-white">
//                 {editItem ? "Update" : "Add"}
//               </button>
//               <button type="button" className="btn" onClick={() => document.getElementById("medicineModal").close()}>
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </dialog>
//     </section>
//   );
// };

// export default ManageMedicines;









// import React, { useState } from "react";
// import { Helmet } from "react-helmet-async";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";

// const ITEMS_PER_PAGE = 5;

// const ManageMedicines = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const queryClient = useQueryClient();
//   const { user } = useAuth();
//   const [editItem, setEditItem] = useState(null);
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [deleteId, setDeleteId] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   const { data: medicines = [], isLoading } = useQuery({
//     queryKey: ["sellerMedicines", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/medicines?seller=${user.email}`);
//       return res.data;
//     },
//   });

//   const { data: categories = [] } = useQuery({
//     queryKey: ["categories"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/categories");
//       return res.data;
//     },
//   });

//   const { data: companies = [] } = useQuery({
//     queryKey: ["companies"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/companies");
//       return res.data;
//     },
//   });

//   const mutation = useMutation({
//     mutationFn: async (data) => {
//       if (editItem) {
//         return await axiosSecure.put(`/medicines/${editItem._id}`, data);
//       } else {
//         return await axiosSecure.post("/medicines", {
//           ...data,
//           seller: user.email,
//         });
//       }
//     },
//     onSuccess: () => {
//       toast.success(`Medicine ${editItem ? "updated" : "added"} successfully`);
//       reset();
//       setEditItem(null);
//       document.getElementById("medicineModal").close();
//       queryClient.invalidateQueries(["sellerMedicines"]);
//     },
//     onError: () => {
//       toast.error("Something went wrong.");
//     },
//   });

//   const handleEdit = (item) => {
//     setEditItem(item);
//     setValue("name", item.name);
//     setValue("generic", item.generic);
//     setValue("description", item.description);
//     setValue("image", item.image);
//     setValue("company", item.company);
//     setValue("category", item.category);
//     setValue("unit", item.unit);
//     setValue("price", item.price);
//     setValue("discount", item.discount || 0);
//     document.getElementById("medicineModal").showModal();
//   };

//   const handleDeleteConfirm = async () => {
//     try {
//       await axiosSecure.delete(`/medicines/${deleteId}`);
//       toast.success("Medicine deleted!");
//       queryClient.invalidateQueries(["sellerMedicines"]);
//       setDeleteId(null);
//     } catch (error) {
//       console.error(error.response?.data || error.message);
//       toast.error("Delete failed. Please try again.");
//     }
//   };

//   const filtered = medicines
//     .filter((m) => m.name.toLowerCase().includes(search.toLowerCase()))
//     .sort((a, b) => a.price - b.price);

//   const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
//   const paginated = filtered.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Manage Medicines | Seller | MediMart</title>
//       </Helmet>

//       <div className="flex justify-between flex-wrap items-center mb-6 gap-4">
//         <h2 className="text-3xl font-bold text-green-700">Manage Medicines</h2>
//         <div className="flex gap-3">
//           <input
//             type="text"
//             placeholder="Search by name..."
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="input input-bordered bg-white text-black"
//           />
//           <button
//             className="btn bg-green-600 hover:bg-green-700 text-white"
//             onClick={() => {
//               setEditItem(null);
//               reset();
//               document.getElementById("medicineModal").showModal();
//             }}
//           >
//             + Add Medicine
//           </button>
//         </div>
//       </div>

//       {isLoading ? (
//         <p className="text-center text-gray-500">Loading your medicines...</p>
//       ) : filtered.length === 0 ? (
//         <p className="text-center text-gray-400">No medicines found.</p>
//       ) : (
//         <>
//           <div className="overflow-x-auto rounded-md shadow border bg-white">
//             <table className="table w-full text-sm">
//               <thead className="bg-green-100 text-green-800 font-semibold">
//                 <tr>
//                   <th>#</th>
//                   <th>Image</th>
//                   <th>Name</th>
//                   <th>Generic</th>
//                   <th>Company</th>
//                   <th>Unit</th>
//                   <th>Price</th>
//                   <th>Discount</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody className="text-black">
//                 {paginated.map((m, i) => (
//                   <tr key={m._id}>
//                     <td>{(currentPage - 1) * ITEMS_PER_PAGE + i + 1}</td>
//                     <td>
//                       <img
//                         src={m.image}
//                         alt="med"
//                         className="w-12 h-12 object-cover border rounded"
//                       />
//                     </td>
//                     <td>{m.name}</td>
//                     <td>{m.generic || "N/A"}</td>
//                     <td>{m.company || "N/A"}</td>
//                     <td>{m.unit || "N/A"}</td>
//                    <td>{m.price ? `৳ ${m.price}` : "N/A"}</td>
//                     <td>{m.discount || 0}%</td>
//                     <td className="space-x-1">
//                       <button
//                         onClick={() => handleEdit(m)}
//                         className="btn btn-xs bg-yellow-400 hover:bg-yellow-500 text-white"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => setDeleteId(m._id)}
//                         className="btn btn-xs bg-red-500 hover:bg-red-600 text-white"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex justify-center mt-6">
//             <div className="join">
//               {[...Array(totalPages)].map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrentPage(i + 1)}
//                   className={`join-item btn btn-sm ${
//                     currentPage === i + 1
//                       ? "bg-green-600 text-white"
//                       : "bg-white text-black border"
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </>
//       )}

//       {/* Modal */}
//       <dialog id="medicineModal" className="modal">
//         <div className="modal-box bg-white max-w-2xl rounded-lg shadow-xl">
//           <h3 className="text-xl font-semibold text-green-700 mb-4">
//             {editItem ? "Update Medicine" : "Add New Medicine"}
//           </h3>
//           <form
//             onSubmit={handleSubmit((data) => mutation.mutate(data))}
//             className="grid gap-4"
//           >
//             <label className="form-control">
//               <span className="label-text">Medicine Name</span>
//               <input {...register("name", { required: true })} className="input input-bordered bg-white text-black" />
//             </label>
//             <label className="form-control">
//               <span className="label-text">Generic Name</span>
//               <input {...register("generic", { required: true })} className="input input-bordered bg-white text-black" />
//             </label>
//             <label className="form-control">
//               <span className="label-text">Short Description</span>
//               <textarea {...register("description", { required: true })} className="textarea textarea-bordered bg-white text-black" />
//             </label>
//             <label className="form-control">
//               <span className="label-text">Image URL</span>
//               <input {...register("image", { required: true })} className="input input-bordered bg-white text-black" />
//             </label>
//             <label className="form-control">
//               <span className="label-text">Select Company</span>
//               <select {...register("company", { required: true })} className="select select-bordered bg-white text-black">
//                 <option value="">Select Company</option>
//                 {companies.map((c) => (
//                   <option key={c._id} value={c.name}>{c.name}</option>
//                 ))}
//               </select>
//             </label>
//             <label className="form-control">
//               <span className="label-text">Select Category</span>
//               <select {...register("category", { required: true })} className="select select-bordered bg-white text-black">
//                 <option value="">Select Category</option>
//                 {categories.map((cat) => (
//                   <option key={cat._id} value={cat.name}>{cat.name}</option>
//                 ))}
//               </select>
//             </label>
//             <label className="form-control">
//               <span className="label-text">Unit (mg/ml)</span>
//               <input {...register("unit", { required: true })} className="input input-bordered bg-white text-black" />
//             </label>
//             <label className="form-control">
//               <span className="label-text">Price</span>
//               <input type="number" {...register("price", { required: true })} className="input input-bordered bg-white text-black" />
//             </label>
//             <label className="form-control">
//               <span className="label-text">Discount (%)</span>
//               <input type="number" {...register("discount")} defaultValue={0} className="input input-bordered bg-white text-black" />
//             </label>
//             <div className="modal-action">
//               <button type="submit" className="btn bg-green-600 text-white">
//                 {editItem ? "Update" : "Add"}
//               </button>
//               <button type="button" onClick={() => document.getElementById("medicineModal").close()} className="btn">
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </dialog>

//       {/* Confirm Delete Modal */}
//       {deleteId && (
//         <dialog id="deleteModal" className="modal modal-open">
//           <div className="modal-box bg-white text-black">
//             <h3 className="font-bold text-lg">Confirm Deletion</h3>
//             <p className="py-4">Are you sure you want to delete this medicine?</p>
//             <div className="modal-action">
//               <button onClick={handleDeleteConfirm} className="btn bg-red-500 text-white">Yes</button>
//               <button onClick={() => setDeleteId(null)} className="btn">Cancel</button>
//             </div>
//           </div>
//         </dialog>
//       )}
//     </section>
//   );
// };

// export default ManageMedicines;






// import React, { useState } from "react";
// import { Helmet } from "react-helmet-async";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";

// const ITEMS_PER_PAGE = 5;

// const ManageMedicines = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const queryClient = useQueryClient();
//   const { user } = useAuth();
//   const [editItem, setEditItem] = useState(null);
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [deleteId, setDeleteId] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   const { data: medicines = [], isLoading } = useQuery({
//     queryKey: ["sellerMedicines", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/medicines?seller=${user.email}`);
//       return res.data;
//     },
//   });

//   const { data: categories = [] } = useQuery({
//     queryKey: ["categories"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/categories");
//       return res.data;
//     },
//   });

//   const { data: companies = [] } = useQuery({
//     queryKey: ["companies"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/companies");
//       return res.data;
//     },
//   });

//   const mutation = useMutation({
//     mutationFn: async (data) => {
//       const formData = new FormData();
//       for (const key in data) {
//         formData.append(key, data[key]);
//       }
//       if (editItem) {
//         return await axiosSecure.put(`/medicines/${editItem._id}`, formData);
//       } else {
//         formData.append("seller", user.email);
//         return await axiosSecure.post("/medicines", formData);
//       }
//     },
//     onSuccess: () => {
//       toast.success(`Medicine ${editItem ? "updated" : "added"} successfully`);
//       reset();
//       setEditItem(null);
//       document.getElementById("medicineModal").close();
//       queryClient.invalidateQueries(["sellerMedicines"]);
//     },
//     onError: () => {
//       toast.error("Something went wrong.");
//     },
//   });

//   const handleEdit = (item) => {
//     setEditItem(item);
//     setValue("name", item.name || "");
//     setValue("generic", item.generic || "");
//     setValue("description", item.description || "");
//     setValue("company", item.company || "");
//     setValue("category", item.category || "");
//     setValue("unit", item.unit || "");
//     setValue("price", item.price || "");
//     setValue("discount", item.discount || 0);
//     document.getElementById("medicineModal").showModal();
//   };

//   const handleDeleteConfirm = async () => {
//     try {
//       await axiosSecure.delete(`/medicines/${deleteId}`);
//       toast.success("Medicine deleted!");
//       queryClient.invalidateQueries(["sellerMedicines"]);
//       setDeleteId(null);
//     } catch (error) {
//       console.error(error.response?.data || error.message);
//       toast.error("Delete failed. Please try again.");
//     }
//   };

//   const filtered = medicines
//     .filter((m) => m.name.toLowerCase().includes(search.toLowerCase()))
//     .sort((a, b) => (parseFloat(a.price || 0) - parseFloat(b.price || 0)));

//   const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
//   const paginated = filtered.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Manage Medicines | Seller | MediMart</title>
//       </Helmet>

//       <div className="flex justify-between flex-wrap items-center mb-6 gap-4">
//         <h2 className="text-3xl font-bold text-green-700">Manage Medicines</h2>
//         <div className="flex gap-3">
//           <input
//             type="text"
//             placeholder="Search by name..."
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="input input-bordered bg-white text-black"
//           />
//           <button
//             className="btn bg-green-600 hover:bg-green-700 text-white"
//             onClick={() => {
//               setEditItem(null);
//               reset();
//               document.getElementById("medicineModal").showModal();
//             }}
//           >
//             + Add Medicine
//           </button>
//         </div>
//       </div>

//       {isLoading ? (
//         <p className="text-center text-gray-500">Loading your medicines...</p>
//       ) : filtered.length === 0 ? (
//         <p className="text-center text-gray-400">No medicines found.</p>
//       ) : (
//         <>
//           <div className="overflow-x-auto rounded-md shadow border bg-white">
//             <table className="table w-full text-sm">
//               <thead className="bg-green-100 text-green-800 font-semibold">
//                 <tr>
//                   <th>#</th>
//                   <th>Image</th>
//                   <th>Name</th>
//                   <th>Generic</th>
//                   <th>Company</th>
//                   <th>Unit</th>
//                   <th>Price</th>
//                   <th>Discount</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody className="text-black">
//                 {paginated.map((m, i) => (
//                   <tr key={m._id}>
//                     <td>{(currentPage - 1) * ITEMS_PER_PAGE + i + 1}</td>
//                     <td>
//                       <img
//                         src={m.image}
//                         alt="med"
//                         className="w-12 h-12 object-cover border rounded"
//                       />
//                     </td>
//                     <td>{m.name}</td>
//                     <td>{m.generic || "N/A"}</td>
//                     <td>{m.company || "N/A"}</td>
//                     <td>{m.unit || "N/A"}</td>
//                     <td>{m.price ? `৳ ${m.price}` : "N/A"}</td>
//                     <td>{m.discount || 0}%</td>
//                     <td className="space-x-1">
//                       <button
//                         onClick={() => handleEdit(m)}
//                         className="btn btn-xs bg-yellow-400 hover:bg-yellow-500 text-white"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => setDeleteId(m._id)}
//                         className="btn btn-xs bg-red-500 hover:bg-red-600 text-white"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex justify-center mt-6">
//             <div className="join">
//               {[...Array(totalPages)].map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrentPage(i + 1)}
//                   className={`join-item btn btn-sm ${
//                     currentPage === i + 1
//                       ? "bg-green-600 text-white"
//                       : "bg-white text-black border"
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </>
//       )}

//       {/* Modal */}
//       <dialog id="medicineModal" className="modal">
//         <div className="modal-box bg-white text-black max-w-2xl rounded-lg shadow-xl">
//           <h3 className="text-xl font-semibold text-green-700 mb-4">
//             {editItem ? "Update Medicine" : "Add New Medicine"}
//           </h3>
//           <form
//             onSubmit={handleSubmit((data) => mutation.mutate(data))}
//             className="grid gap-4"
//           >
//             <label className="form-control w-full">
//               <span className="label-text text-black">Medicine Name</span>
//               <input {...register("name", { required: true })} className="input input-bordered w-full bg-white text-black border border-gray-300" />
//             </label>
//             <label className="form-control w-full">
//               <span className="label-text text-black">Generic Name</span>
//               <input {...register("generic", { required: true })} className="input input-bordered w-full bg-white text-black border border-gray-300" />
//             </label>
//             <label className="form-control w-full">
//               <span className="label-text text-black">Short Description</span>
//               <textarea {...register("description", { required: true })} className="textarea textarea-bordered w-full bg-white text-black border border-gray-300" />
//             </label>
//             <label className="form-control w-full">
//               <span className="label-text text-black">Image Upload</span>
//               <input type="file" {...register("image", { required: !editItem })} className="file-input file-input-bordered w-full bg-white text-black border border-gray-300" />
//             </label>
//             <label className="form-control w-full">
//               <span className="label-text text-black">Select Company</span>
//               <select {...register("company", { required: true })} className="select select-bordered w-full bg-white text-black border border-gray-300">
//                 <option value="">Select Company</option>
//                 {companies.map((c) => (
//                   <option key={c._id} value={c.name}>{c.name}</option>
//                 ))}
//               </select>
//             </label>
//             <label className="form-control w-full">
//               <span className="label-text text-black">Select Category</span>
//               <select {...register("category", { required: true })} className="select select-bordered w-full bg-white text-black border border-gray-300">
//                 <option value="">Select Category</option>
//                 {categories.map((cat) => (
//                   <option key={cat._id} value={cat.name}>{cat.name}</option>
//                 ))}
//               </select>
//             </label>
//             <label className="form-control w-full">
//               <span className="label-text text-black">Unit (mg/ml)</span>
//               <input {...register("unit", { required: true })} className="input input-bordered w-full bg-white text-black border border-gray-300" />
//             </label>
//             <label className="form-control w-full">
//               <span className="label-text text-black">Price</span>
//               <input type="number" {...register("price", { required: true })} className="input input-bordered w-full bg-white text-black border border-gray-300" />
//             </label>
//             <label className="form-control w-full">
//               <span className="label-text text-black">Discount (%)</span>
//               <input type="number" {...register("discount")} defaultValue={0} className="input input-bordered w-full bg-white text-black border border-gray-300" />
//             </label>
//             <div className="modal-action">
//               <button type="submit" className="btn bg-green-600 text-white">
//                 {editItem ? "Update" : "Add"}
//               </button>
//               <button type="button" onClick={() => document.getElementById("medicineModal").close()} className="btn">
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </dialog>

//       {deleteId && (
//         <dialog id="deleteModal" className="modal modal-open">
//           <div className="modal-box bg-white text-black">
//             <h3 className="font-bold text-lg">Confirm Deletion</h3>
//             <p className="py-4">Are you sure you want to delete this medicine?</p>
//             <div className="modal-action">
//               <button onClick={handleDeleteConfirm} className="btn bg-red-500 text-white">Yes</button>
//               <button onClick={() => setDeleteId(null)} className="btn">Cancel</button>
//             </div>
//           </div>
//         </dialog>
//       )}
//     </section>
//   );
// };

// export default ManageMedicines;
















import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ITEMS_PER_PAGE = 5;

const ManageMedicines = () => {
  const [axiosSecure] = useAxiosSecure();
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [editItem, setEditItem] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteId, setDeleteId] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const { data: medicines = [], isLoading } = useQuery({
    queryKey: ["sellerMedicines", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/medicines?seller=${user.email}`);
      return res.data;
    },
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosSecure.get("/categories");
      return res.data;
    },
  });

  const { data: companies = [] } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      const res = await axiosSecure.get("/companies");
      return res.data;
    },
  });

  const handleEdit = (item) => {
    setEditItem(item);
    setValue("name", item.name || "");
    setValue("generic", item.generic || "");
    setValue("description", item.description || "");
    setValue("company", item.company || "");
    setValue("category", item.category || "");
    setValue("unit", item.unit || "");
    setValue("price", item.price || "");
    setValue("discount", item.discount || 0);
    document.getElementById("medicineModal").showModal();
  };

  const handleDeleteConfirm = async () => {
    try {
      if (!deleteId) return;
      await axiosSecure.delete(`/medicines/${deleteId}`);
      toast.success("Medicine deleted!");
      queryClient.invalidateQueries(["sellerMedicines"]);
      setDeleteId(null);
    } catch (error) {
      toast.error("Delete failed. Please try again.");
    }
  };

  const filtered = medicines
    .filter((m) => m.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (parseFloat(a.price || 0) - parseFloat(b.price || 0)));

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>Manage Medicines | Seller | MediMart</title>
      </Helmet>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700">Manage Medicines</h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="input input-bordered bg-white text-black w-full"
          />
          <button
            className="btn bg-green-600 hover:bg-green-700 text-white"
            onClick={() => {
              setEditItem(null);
              reset();
              document.getElementById("medicineModal").showModal();
            }}
          >
            + Add Medicine
          </button>
        </div>
      </div>

      {isLoading ? (
        <p className="text-center text-gray-500">Loading your medicines...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-400">No medicines found.</p>
      ) : (
        <div className="overflow-x-auto rounded-md shadow border bg-white">
          <table className="table w-full text-sm">
            <thead className="bg-green-100 text-green-800 font-semibold">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Generic</th>
                <th>Company</th>
                <th>Unit</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {paginated.map((m, i) => (
                <tr key={m._id}>
                  <td>{(currentPage - 1) * ITEMS_PER_PAGE + i + 1}</td>
                  <td>
                    <img
                      src={m.image}
                      alt="med"
                      className="w-12 h-12 object-cover border rounded"
                    />
                  </td>
                  <td>{m.name}</td>
                  <td>{m.generic || "N/A"}</td>
                  <td>{m.company || "N/A"}</td>
                  <td>{m.unit || "N/A"}</td>
  <td> ৳{" "} {(m.originalPrice ?? m.price)?.toFixed(2) ?? "N/A"}</td>
                  <td>{m.discount || 0}%</td>
                  <td className="space-x-1">
                    <button
                      onClick={() => handleEdit(m)}
                      className="btn btn-xs bg-yellow-400 hover:bg-yellow-500 text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleteId(m._id)}
                      className="btn btn-xs bg-red-500 hover:bg-red-600 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex justify-center mt-6 flex-wrap gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`btn btn-sm ${
              currentPage === i + 1
                ? "bg-green-600 text-white"
                : "bg-white text-black border"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Modal */}
      <dialog id="medicineModal" className="modal">
        <div className="modal-box bg-white text-black max-w-2xl rounded-lg shadow-xl">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            {editItem ? "Update Medicine" : "Add New Medicine"}
          </h3>
          <form
            className="grid gap-4"
            id="medicineForm"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = document.getElementById("medicineForm");
              const formData = new FormData(form);
              try {
  if (editItem) {
    await axiosSecure.put(`/medicines/${editItem._id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("Medicine updated successfully!");
  } else {
    formData.append("seller", user.email);
    await axiosSecure.post("/medicines", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("Medicine added successfully!");
  }

  reset();
  setEditItem(null);
  document.getElementById("medicineModal").close();
  queryClient.invalidateQueries(["sellerMedicines"]);
} catch (err) {
  console.error("❌ Medicine error:", err.message);
  toast.error("Something went wrong.");
}

            }}
          >
            <label className="form-control w-full">
              <span className="label-text text-black">Medicine Name</span>
              <input name="name" required className="input input-bordered w-full bg-white text-black border border-gray-300" />
            </label>
            <label className="form-control w-full">
              <span className="label-text text-black">Generic Name</span>
              <input name="generic" required className="input input-bordered w-full bg-white text-black border border-gray-300" />
            </label>
            <label className="form-control w-full">
              <span className="label-text text-black">Short Description</span>
              <textarea name="description" required className="textarea textarea-bordered w-full bg-white text-black border border-gray-300" />
            </label>
            <label className="form-control w-full">
              <span className="label-text text-black">Image Upload</span>
              <input type="file" name="image" className="file-input file-input-bordered w-full bg-white text-black border border-gray-300" />
            </label>
            <label className="form-control w-full">
              <span className="label-text text-black">Select Company</span>
              <select name="company" required className="select select-bordered w-full bg-white text-black border border-gray-300">
                <option value="">Select Company</option>
                {companies.map((c) => (
                  <option key={c._id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </label>
            <label className="form-control w-full">
              <span className="label-text text-black">Select Category</span>
              <select name="category" required className="select select-bordered w-full bg-white text-black border border-gray-300">
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat.name}>{cat.name}</option>
                ))}
              </select>
            </label>
            <label className="form-control w-full">
              <span className="label-text text-black">Unit (mg/ml)</span>
              <input name="unit" required className="input input-bordered w-full bg-white text-black border border-gray-300" />
            </label>
            <label className="form-control w-full">
              <span className="label-text text-black">Price</span>
              <input name="price" type="number" required className="input input-bordered w-full bg-white text-black border border-gray-300" />
            </label>
            <label className="form-control w-full">
              <span className="label-text text-black">Discount (%)</span>
              <input name="discount" type="number" defaultValue={0} className="input input-bordered w-full bg-white text-black border border-gray-300" />
            </label>
            <div className="modal-action">
              <button type="submit" className="btn bg-green-600 text-white">
                {editItem ? "Update" : "Add"}
              </button>
              <button type="button" onClick={() => document.getElementById("medicineModal").close()} className="btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {deleteId && (
        <dialog id="deleteModal" className="modal modal-open">
          <div className="modal-box bg-white text-black">
            <h3 className="font-bold text-lg">Confirm Deletion</h3>
            <p className="py-4">Are you sure you want to delete this medicine?</p>
            <div className="modal-action">
              <button onClick={handleDeleteConfirm} className="btn bg-red-500 text-white">Yes</button>
              <button onClick={() => setDeleteId(null)} className="btn">Cancel</button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default ManageMedicines;




