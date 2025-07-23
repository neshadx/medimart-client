import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"; // ✅ default import

export const useRole = () => {
  const { user } = useAuth();
  const email = user?.email;

  const { data: role = "", isLoading } = useQuery({
    queryKey: ["role", email],
    enabled: !!email,
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/role/${email}`);
      const data = await res.json();
      return data.role;
    },
  });

  return [role, isLoading];
};
