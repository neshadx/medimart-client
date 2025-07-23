import { useContext } from "react";
import { AuthContext } from "../Context/Provider/AuthProvider";

export const useAuth = () => {
  return useContext(AuthContext);
};
