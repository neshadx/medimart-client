import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const queryClient = useQueryClient();

  // 🔁 Get all users
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["adminUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/users");
      return res.data;
    },
  });

  // 🔁 Update role mutation
  const mutation = useMutation({
    mutationFn: async ({ id, role }) => {
      const res = await axiosSecure.put(`/admin/update-role/${id}`, { role });
      return res.data;
    },
    onSuccess: () => {
      toast.success("User role updated!");
      queryClient.invalidateQueries(["adminUsers"]);
    },
    onError: () => {
      toast.error("Failed to update role.");
    },
  });

  const handleRoleChange = (user, role) => {
    if (!window.confirm(`Make ${user.name} an ${role}?`)) return;
    mutation.mutate({ id: user._id, role });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>Manage Users | Admin | MediMart</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        Manage Users
      </h2>

      {isLoading ? (
        <p className="text-center font-medium text-gray-600">Loading users...</p>
      ) : users.length === 0 ? (
        <p className="text-center text-gray-500">No users found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border rounded-lg">
            <thead className="bg-green-100 text-green-900 font-semibold">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Current Role</th>
                <th>Make Seller</th>
                <th>Make Admin</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td>{idx + 1}</td>
                  <td>{user.name || "N/A"}</td>
                  <td>{user.email}</td>
                  <td className="capitalize">{user.role || "user"}</td>
                  <td>
                    {user.role === "seller" ? (
                      <span className="text-green-500 font-semibold">Seller</span>
                    ) : (
                      <button
                        className="btn btn-xs btn-outline"
                        onClick={() => handleRoleChange(user, "seller")}
                        disabled={mutation.isLoading}
                      >
                        Make Seller
                      </button>
                    )}
                  </td>
                  <td>
                    {user.role === "admin" ? (
                      <span className="text-blue-500 font-semibold">Admin</span>
                    ) : (
                      <button
                        className="btn btn-xs btn-outline"
                        onClick={() => handleRoleChange(user, "admin")}
                        disabled={mutation.isLoading}
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default ManageUsers;
