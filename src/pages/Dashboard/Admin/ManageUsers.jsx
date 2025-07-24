// import React from "react";
// import { Helmet } from "react-helmet-async";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { toast } from "react-toastify";

// const ManageUsers = () => {
//   const [axiosSecure] = useAxiosSecure();

//   const { data: users = [], isLoading, refetch } = useQuery({
//     queryKey: ["allUsers"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/admin/users");
//       return res.data;
//     },
//   });

//   const handleRoleChange = async (id, role) => {
//     try {
//       await axiosSecure.put(`/admin/update-role/${id}`, { role });
//       toast.success(`Role updated to ${role}`);
//       refetch();
//     } catch (err) {
//       toast.error("Failed to update role");
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <Helmet>
//         <title>Dashboard | Manage Users</title>
//       </Helmet>
//       <h2 className="text-2xl font-bold text-green-700 mb-6">Manage Users</h2>

//       {isLoading ? (
//         <p className="text-center text-gray-500">Loading users...</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table w-full border">
//             <thead className="bg-green-100 text-green-900">
//               <tr>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((u, i) => (
//                 <tr key={u._id}>
//                   <td>{i + 1}</td>
//                   <td>{u.name || "No name"}</td>
//                   <td>{u.email}</td>
//                   <td className="capitalize">{u.role || "user"}</td>
//                   <td className="space-x-2">
//                     <button
//                       disabled={u.role === "admin"}
//                       onClick={() => handleRoleChange(u._id, "admin")}
//                       className="btn btn-xs bg-green-600 text-white"
//                     >
//                       Make Admin
//                     </button>
//                     <button
//                       disabled={u.role === "seller"}
//                       onClick={() => handleRoleChange(u._id, "seller")}
//                       className="btn btn-xs bg-yellow-500 text-white"
//                     >
//                       Make Seller
//                     </button>
//                     <button
//                       disabled={u.role === "user"}
//                       onClick={() => handleRoleChange(u._id, "user")}
//                       className="btn btn-xs bg-red-500 text-white"
//                     >
//                       Downgrade
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageUsers;










import React from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/users");
      return res.data;
    },
  });

  const handleRoleChange = async (id, role) => {
    try {
      await axiosSecure.put(`/admin/update-role/${id}`, { role });
      toast.success(`✅ Role updated to ${role}`);
      refetch();
    } catch (err) {
      toast.error("❌ Failed to update role");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>Admin Dashboard | Manage Users</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Manage Users</h2>

      {isLoading ? (
        <p className="text-center text-gray-600 font-medium">Loading users...</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
          <table className="table w-full">
            <thead className="bg-green-100 text-green-800 text-sm">
              <tr>
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Role</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-900">
              {users.map((u, i) => (
                <tr key={u._id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{i + 1}</td>
                  <td className="py-3 px-4">{u.name || "No name"}</td>
                  <td className="py-3 px-4">{u.email}</td>
                  <td className="py-3 px-4 capitalize">{u.role || "user"}</td>
                  <td className="py-3 px-4 space-x-1">
                    <button
                      disabled={u.role === "admin"}
                      onClick={() => handleRoleChange(u._id, "admin")}
                      className="btn btn-xs bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
                    >
                      Make Admin
                    </button>
                    <button
                      disabled={u.role === "seller"}
                      onClick={() => handleRoleChange(u._id, "seller")}
                      className="btn btn-xs bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50"
                    >
                      Make Seller
                    </button>
                    <button
                      disabled={u.role === "user"}
                      onClick={() => handleRoleChange(u._id, "user")}
                      className="btn btn-xs bg-red-500 text-white hover:bg-red-600 disabled:opacity-50"
                    >
                      Downgrade
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;

