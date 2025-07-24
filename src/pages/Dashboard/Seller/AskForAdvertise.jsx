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
      const res = await axiosSecure.get(`/seller/advertised/${user.email}`);
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (data) => {
      const payload = {
        ...data,
        sellerEmail: user.email,
        isActive: false,
        createdAt: new Date(),
      };
      const res = await axiosSecure.post("/seller/advertised", payload);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Advertisement request submitted!");
      reset();
      queryClient.invalidateQueries(["sellerAdvertised"]);
    },
    onError: () => {
      toast.error("Failed to request.");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  // Optional: sort ads newest first
  const sortedAds = [...ads].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <Helmet>
        <title>Ask for Advertise | Seller | MediMart</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Request Advertisement
      </h2>

      {/* 🔍 Form */}
      <div className="mb-10 bg-white border p-6 rounded shadow">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div>
            <label className="font-medium">Image URL</label>
            <input
              type="text"
              {...register("image", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">Image is required</p>
            )}
          </div>
          <div>
            <label className="font-medium">Short Description</label>
            <textarea
              {...register("description", { required: true })}
              className="textarea textarea-bordered w-full"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">Description is required</p>
            )}
          </div>
          <button
            type="submit"
            className="btn bg-green-600 hover:bg-green-700 text-white"
          >
            Submit Request
          </button>
        </form>
      </div>

      {/* 📝 Submitted Ads */}
      <h3 className="text-xl font-semibold text-gray-700 mb-4">
        Your Submitted Requests
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <p className="text-center text-gray-500 col-span-full">Loading ads...</p>
        ) : sortedAds.length === 0 ? (
          <p className="text-center text-gray-400 col-span-full">No advertisement requests yet.</p>
        ) : (
          sortedAds.map((ad) => (
            <div
              key={ad._id}
              className="border rounded shadow p-4 space-y-2 bg-white"
            >
              <img
                src={ad.image}
                alt="advertised"
                className="w-full h-40 object-cover rounded"
              />
              <p className="text-gray-700 text-sm">{ad.description}</p>
              <p className="text-sm">
                <span className="font-semibold">Status: </span>
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
