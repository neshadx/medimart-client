import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/Provider/AuthProvider";
import axios from "axios";

const useRole = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/users/role/${user.email}`)
        .then((res) => {
          setRole(res.data.role);
          setLoading(false);
        })
        .catch(() => {
          setRole(null);
          setLoading(false);
        });
    }
  }, [user]);

  return [role, loading];
};

export default useRole;
