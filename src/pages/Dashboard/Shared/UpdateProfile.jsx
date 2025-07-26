// import React, { useState } from "react";
// import { Helmet } from "react-helmet-async";
// import useAuth from "../../../hooks/useAuth"; // ✅ Fixed path
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import useAxiosSecure from "../../../hooks/useAxiosSecure"; // ✅ Fixed path

// const UpdateProfile = () => {
//   const { user } = useAuth();
//   const [axiosSecure] = useAxiosSecure();
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const [preview, setPreview] = useState(user?.photoURL);

//   const onSubmit = async (data) => {
//     try {
//       const formData = new FormData();
//       formData.append("displayName", data.name);
//       formData.append("email", user?.email);
//       formData.append("photo", data.photo[0]);

//       const res = await axiosSecure.patch("/api/user/update-profile", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       if (res.data?.modifiedCount > 0) {
//         toast.success("Profile updated successfully");
//         reset();
//       } else {
//         toast.info("No changes made to the profile.");
//       }
//     } catch (error) {
//       toast.error("Profile update failed");
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-10 px-4">
//       <Helmet>
//         <title>MediMart | Update Profile</title>
//       </Helmet>
//       <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Update Profile</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-xl p-6 space-y-5 border border-gray-200">
//         <div className="flex flex-col">
//           <label className="mb-1 font-semibold text-gray-700">Name</label>
//           <input
//             type="text"
//             defaultValue={user?.displayName}
//             {...register("name", { required: true })}
//             className="input input-bordered w-full bg-white text-black"
//           />
//           {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
//         </div>

//         <div className="flex flex-col">
//           <label className="mb-1 font-semibold text-gray-700">Email</label>
//           <input
//             type="email"
//             defaultValue={user?.email}
//             readOnly
//             className="input input-bordered w-full bg-gray-100 text-black cursor-not-allowed"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="mb-1 font-semibold text-gray-700">Upload New Photo</label>
//           <input
//             type="file"
//             accept="image/*"
//             {...register("photo", { required: true })}
//             className="file-input file-input-bordered w-full bg-white text-black"
//             onChange={(e) => {
//               if (e.target.files[0]) {
//                 setPreview(URL.createObjectURL(e.target.files[0]));
//               }
//             }}
//           />
//           {errors.photo && <p className="text-red-500 text-sm mt-1">Profile photo is required</p>}
//         </div>

//         {preview && (
//           <div className="mt-4">
//             <p className="font-semibold text-gray-700 mb-1">Preview:</p>
//             <img src={preview} alt="Preview" className="w-24 h-24 rounded-full object-cover border border-gray-300" />
//           </div>
//         )}

//         <button
//           type="submit"
//           className="btn btn-success w-full mt-4 text-white"
//         >
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateProfile;

import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../Context/firebase/firebase.config";

const UpdateProfile = () => {
  const { user, setUser } = useAuth(); // ✅ Now using setUser to refresh navbar
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [preview, setPreview] = useState(user?.photoURL);
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("displayName", data.name);
      formData.append("email", user?.email);
      formData.append("photo", data.photo[0]);

      const res = await axiosSecure.patch("/api/user/update-profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data?.modifiedCount > 0 && res.data?.photoURL) {
        const imageURL = `${import.meta.env.VITE_API_URL}${res.data.photoURL}`;

        // ✅ Update Firebase
        await updateProfile(auth.currentUser, {
          displayName: data.name,
          photoURL: imageURL,
        });

        // ✅ Update context so Navbar refreshes immediately
        setUser({
          ...auth.currentUser,
          displayName: data.name,
          photoURL: imageURL,
        });

        toast.success(" Profile updated successfully");
        reset();
      } else {
        toast.info("No changes made.");
      }
    } catch (error) {
      console.error(error);
      toast.error("❌ Profile update failed");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <Helmet>
        <title>MediMart | Update Profile</title>
      </Helmet>

      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Update Profile</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              defaultValue={user?.displayName}
              {...register("name", { required: true })}
              className="input input-bordered w-full bg-white border-gray-300 text-black"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered w-full bg-gray-100 text-black border-gray-300 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Upload New Photo</label>
            <input
              type="file"
              accept="image/*"
              {...register("photo", { required: true })}
              className="file-input file-input-bordered w-full bg-white border-gray-300 text-black"
              onChange={(e) => {
                if (e.target.files[0]) {
                  setPreview(URL.createObjectURL(e.target.files[0]));
                  setSelectedFile(e.target.files[0]);
                }
              }}
            />
            {errors.photo && <p className="text-red-500 text-sm mt-1">Profile photo is required</p>}
          </div>

          {preview && (
            <div className="text-center">
              <p className="font-semibold text-gray-700 mb-2">Preview:</p>
              <img
                src={preview}
                alt="Preview"
                className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300 object-cover"
              />
            </div>
          )}

          <button type="submit" className="btn btn-success w-full text-white text-lg">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
