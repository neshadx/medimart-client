// import { useEffect } from "react";
// import axios from "axios";

// const axiosSecure = axios.create();

// const useAxiosSecure = () => {
//   useEffect(() => {
//     axiosSecure.interceptors.request.use((config) => {
//       const token = localStorage.getItem("access-token");
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     });
//   }, []);

//   return [axiosSecure];
// };

// export default useAxiosSecure;





// import { useEffect } from "react";
// import axios from "axios";

// const axiosSecure = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   withCredentials: true,
// });

// const useAxiosSecure = () => {
//   useEffect(() => {
//     axiosSecure.interceptors.request.use((config) => {
//       const token = localStorage.getItem("access-token");
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     });
//   }, []);

//   return [axiosSecure];
// };

// export default useAxiosSecure;





import { useEffect } from "react";
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }, []);

  return [axiosSecure];
};

export default useAxiosSecure;
