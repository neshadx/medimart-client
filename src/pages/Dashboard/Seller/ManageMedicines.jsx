import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ManageMedicines = () => {
  const [axiosSecure] = useAxiosSecure();
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [editItem, setEditItem] = useState(null);
  const [search, setSearch] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Get medicines added by seller
  const { data: medicines = [], isLoading } = useQuery({
    queryKey: ["sellerMedicines", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/medicines?seller=${user.email}`);
      return res.data;
    },
  });

  // Get dynamic dropdown options (categories and companies)
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

  // Mutation for Add / Update
  const mutation = useMutation({
    mutationFn: async (data) => {
      if (editItem) {
        return await axiosSecure.put(`/medicines/${editItem._id}`, data);
      } else {
        return await axiosSecure.post("/medicines", { ...data, seller: user.email });
      }
    },
    onSuccess: () => {
      toast.success(`Medicine ${editItem ? "updated" : "added"} successfully`);
      reset();
      setEditItem(null);
      document.getElementById("medicineModal").close();
      queryClient.invalidateQueries(["sellerMedicines"]);
    },
    onError: () => {
      toast.error("Something went wrong.");
    },
  });

  // Delete
  const handleDelete = async (id) => {
    if (!confirm("Are you sure to delete this medicine?")) return;
    try {
      await axiosSecure.delete(`/medicines/${id}`);
      toast.success("Medicine deleted!");
      queryClient.invalidateQueries(["sellerMedicines"]);
    } catch {
      toast.error("Delete failed.");
    }
  };

  // Edit
  const handleEdit = (item) => {
    setEditItem(item);
    setValue("name", item.name);
    setValue("generic", item.generic);
    setValue("description", item.description);
    setValue("image", item.image);
    setValue("company", item.company);
    setValue("category", item.category);
    setValue("unit", item.unit);
    setValue("price", item.price);
    setValue("discount", item.discount || 0);
    document.getElementById("medicineModal").showModal();
  };

  // Filtered & Sorted data
  const filtered = medicines
    .filter((m) => m.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.price - b.price); // sort by price ascending

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>Manage Medicines | Seller | MediMart</title>
      </Helmet>

      <div className="flex justify-between flex-wrap items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold text-green-700">Manage Medicines</h2>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered"
          />
          <button
            className="btn bg-green-600 text-white"
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
        <div className="overflow-x-auto">
          <table className="table w-full">
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
            <tbody>
              {filtered.map((m, i) => (
                <tr key={m._id}>
                  <td>{i + 1}</td>
                  <td>
                    <img src={m.image} className="w-12 h-12 rounded" alt="" />
                  </td>
                  <td>{m.name}</td>
                  <td>{m.generic}</td>
                  <td>{m.company}</td>
                  <td>{m.unit}</td>
                  <td>৳ {m.price}</td>
                  <td>{m.discount || 0}%</td>
                  <td>
                    <button onClick={() => handleEdit(m)} className="btn btn-xs mr-1">Edit</button>
                    <button onClick={() => handleDelete(m._id)} className="btn btn-xs btn-error text-white">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      <dialog id="medicineModal" className="modal">
        <div className="modal-box w-11/12 max-w-2xl">
          <h3 className="font-bold text-lg text-green-600 mb-4">
            {editItem ? "Update Medicine" : "Add New Medicine"}
          </h3>
          <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="grid gap-3">
            <input {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
            <input {...register("generic", { required: true })} placeholder="Generic Name" className="input input-bordered" />
            <textarea {...register("description", { required: true })} placeholder="Short Description" className="textarea textarea-bordered" />
            <input {...register("image", { required: true })} placeholder="Image URL" className="input input-bordered" />

            <select {...register("company", { required: true })} className="select select-bordered">
              <option value="">Select Company</option>
              {companies.map((c) => (
                <option key={c._id} value={c.name}>{c.name}</option>
              ))}
            </select>

            <select {...register("category", { required: true })} className="select select-bordered">
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.name}>{cat.name}</option>
              ))}
            </select>

            <input {...register("unit", { required: true })} placeholder="Unit (mg/ml)" className="input input-bordered" />
            <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered" />
            <input type="number" {...register("discount")} placeholder="Discount %" defaultValue={0} className="input input-bordered" />

            <div className="modal-action">
              <button type="submit" className="btn bg-green-600 text-white">
                {editItem ? "Update" : "Add"}
              </button>
              <button type="button" className="btn" onClick={() => document.getElementById("medicineModal").close()}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default ManageMedicines;
