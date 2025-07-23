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

  // Toggle isActive mutation
  const mutation = useMutation({
    mutationFn: async (item) => {
      return await axiosSecure.put(`/admin/advertised/${item._id}`, {
        isActive: !item.isActive,
      });
    },
    onSuccess: () => {
      toast.success("Slider status updated!");
      queryClient.invalidateQueries(["adminAdvertised"]);
    },
    onError: () => {
      toast.error("Failed to update.");
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
          {advertised.map((item) => (
            <div key={item._id} className="bg-white border rounded shadow p-4 space-y-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-semibold text-green-700">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-sm text-gray-500">
                <strong>Seller:</strong> {item.sellerEmail}
              </p>
              <button
                onClick={() => handleToggle(item)}
                className={`btn btn-sm ${item.isActive ? "btn-error" : "btn-success"} text-white`}
              >
                {item.isActive ? "Remove from Slider" : "Add to Slider"}
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ManageAdvertise;
