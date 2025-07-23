// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth"; // 

// const useRole = () => {
//   const { user } = useAuth();
//   const email = user?.email;

//   const { data: role = "", isLoading } = useQuery({
//     queryKey: ["role", email],
//     enabled: !!email,
//     queryFn: async () => {
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/users/role/${email}`);
//       const data = await res.json();
//       return data.role;
//     },
//   });

//   return [role, isLoading];
// };

// export default useRole; // 



// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";

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









// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";

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






















import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useRole = () => {
  const { user } = useAuth();
  const email = user?.email;

  const { data: role = "", isLoading } = useQuery({
    queryKey: ["role", email],
    enabled: !!email,
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/role/${email}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });

      // ✅ Prevent crash on 403 or other errors
      if (!res.ok) {
        if (res.status === 403) {
          console.warn("403 Forbidden: Invalid or missing access-token");
        } else {
          console.error(`Error ${res.status}: ${res.statusText}`);
        }
        return ""; // fallback role
      }

      const data = await res.json();
      return data.role;
    },
  });

  return [role, isLoading];
};

export default useRole;
