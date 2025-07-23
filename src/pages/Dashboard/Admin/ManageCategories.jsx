import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ManageCategories = () => {
  const [axiosSecure] = useAxiosSecure();
  const queryClient = useQueryClient();
  const [editCategory, setEditCategory] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // 🔁 Fetch categories
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["adminCategories"],
    queryFn: async () => {
      const res = await axiosSecure.get("/categories");
      return res.data;
    },
  });

  // 🧩 Add or Update
  const mutation = useMutation({
    mutationFn: async (data) => {
      if (editCategory) {
        return await axiosSecure.put(`/categories/${editCategory._id}`, data);
      } else {
        return await axiosSecure.post("/categories", data);
      }
    },
    onSuccess: () => {
      toast.success(`Category ${editCategory ? "updated" : "added"} successfully!`);
      reset();
      setEditCategory(null);
      queryClient.invalidateQueries(["adminCategories"]);
      document.getElementById("catModal").close();
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });

  // ❌ Delete
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;
    try {
      await axiosSecure.delete(`/categories/${id}`);
      toast.success("Category deleted!");
      queryClient.invalidateQueries(["adminCategories"]);
    } catch {
      toast.error("Failed to delete.");
    }
  };

  // 📝 Edit
  const handleEdit = (category) => {
    setEditCategory(category);
    setValue("name", category.name);
    setValue("image", category.image);
    document.getElementById("catModal").showModal();
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>Manage Categories | Admin | MediMart</title>
      </Helmet>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-green-700">Manage Categories</h2>
        <button
          onClick={() => {
            setEditCategory(null);
            reset();
            document.getElementById("catModal").showModal();
          }}
          className="btn btn-sm bg-green-600 hover:bg-green-700 text-white"
        >
          + Add Category
        </button>
      </div>

      {isLoading ? (
        <p className="text-center">Loading categories...</p>
      ) : categories.length === 0 ? (
        <p className="text-center text-gray-500">No categories found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead className="bg-green-100 text-green-900 font-semibold">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, idx) => (
                <tr key={cat._id} className="hover:bg-gray-50">
                  <td>{idx + 1}</td>
                  <td>
                    <img src={cat.image} alt={cat.name} className="w-12 h-12 object-cover rounded" />
                  </td>
                  <td>{cat.name}</td>
                  <td>
                    <button onClick={() => handleEdit(cat)} className="btn btn-xs btn-outline mr-2">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(cat._id)} className="btn btn-xs btn-error text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal for Add/Edit */}
      <dialog id="catModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4 text-green-600">
            {editCategory ? "Edit Category" : "Add New Category"}
          </h3>

          <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="space-y-4">
            <div>
              <label className="font-semibold">Category Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input input-bordered w-full"
              />
              {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
            </div>

            <div>
              <label className="font-semibold">Image URL</label>
              <input
                type="text"
                {...register("image", { required: true })}
                className="input input-bordered w-full"
              />
              {errors.image && <p className="text-red-500 text-sm">Image URL is required</p>}
            </div>

            <div className="modal-action">
              <button type="submit" className="btn btn-sm bg-green-600 hover:bg-green-700 text-white">
                {editCategory ? "Update" : "Add"}
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline"
                onClick={() => {
                  setEditCategory(null);
                  document.getElementById("catModal").close();
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default ManageCategories;
