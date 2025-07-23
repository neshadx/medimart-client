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

  // Mutation to add or update medicine
  const mutation = useMutation({
    mutationFn: async (data) => {
      if (editItem) {
        return await axiosSecure.put(`/medicines/${editItem._id}`, data);
      } else {
        return await axiosSecure.post("/medicines", data);
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

  // Delete medicine
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

  // Edit medicine
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

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>Manage Medicines | Seller | MediMart</title>
      </Helmet>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-green-700">Manage Medicines</h2>
        <button
          className="btn btn-sm bg-green-600 text-white"
          onClick={() => {
            setEditItem(null);
            reset();
            document.getElementById("medicineModal").showModal();
          }}
        >
          + Add Medicine
        </button>
      </div>

      {isLoading ? (
        <p className="text-center text-gray-500">Loading your medicines...</p>
      ) : medicines.length === 0 ? (
        <p className="text-center text-gray-400">No medicines listed yet.</p>
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
              {medicines.map((m, i) => (
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
            <input {...register("company", { required: true })} placeholder="Company Name" className="input input-bordered" />
            <input {...register("category", { required: true })} placeholder="Category" className="input input-bordered" />
            <input {...register("unit", { required: true })} placeholder="Unit (mg/ml)" className="input input-bordered" />
            <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered" />
            <input type="number" {...register("discount")} placeholder="Discount %" className="input input-bordered" />

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
