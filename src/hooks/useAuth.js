import { useContext } from "react";
import { AuthContext } from "../Context/Provider/AuthProvider";

// ✅ FIXED: default export
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
