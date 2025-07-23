// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth"; // 
// export const useRole = () => {
//   const { user } = useAuth();
//   const email = user?.email;

//   const { data: role = "", isLoading } = useQuery({
//     queryKey: ["role", email],
//     enabled: !!email,
//     queryFn: async () => {
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/users/role/${email}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("access-token")}`,
//         },
//       });
//       const data = await res.json();
//       return data.role;
//     },
//   });

//   return [role, isLoading];
// };


// // File: src/hooks/useRole.js
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth"; // 

// export const useRole = () => {
//   const { user } = useAuth();
//   const email = user?.email;

//   const { data: role = "", isLoading } = useQuery({
//     queryKey: ["role", email],
//     enabled: !!email,
//     queryFn: async () => {
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/users/role/${email}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("access-token")}`, // 
//         },
//       });
//       const data = await res.json();
//       return data.role;
//     },
//   });

//   return [role, isLoading];
// };



// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth"; // 

// const useRole = () => {
//   const { user } = useAuth();
//   const email = user?.email;

//   const { data: role = "", isLoading } = useQuery({
//     queryKey: ["role", email],
//     enabled: !!email,
//     queryFn: async () => {
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/users/role/${email}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("access-token")}`,
//         },
//       });
//       const data = await res.json();
//       return data.role;
//     },
//   });

//   return [role, isLoading];
// };

// export default useRole; 




























import { useContext } from "react";
import { AuthContext } from "../Context/Provider/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
