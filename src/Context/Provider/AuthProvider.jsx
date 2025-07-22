// import React, { createContext, useEffect, useState } from "react";
// import app from "../firebase/firebase.config";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import axios from "axios";

// export const AuthContext = createContext();

// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const googleProvider = new GoogleAuthProvider();

//   // ✅ Email/Password Register
//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // ✅ Email/Password Login
//   const loginUser = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // ✅ Google Login with backend call + token
//   const createUserWithLoginGoogle = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider).then(async (result) => {
//       const token = await result.user.getIdToken();

//       // ✅ Send required info to backend
//       const userPayload = {
//         email: result.user.email,
//         name: result.user.displayName,
//         photoURL: result.user.photoURL,
//       };

//       // 🔧 Update user state immediately
//       setUser(result.user);

//       // 🔐 Send token + user info to backend
//       await axios.post(
//         `${import.meta.env.VITE_API_URL}/api/auth/login`,
//         userPayload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           withCredentials: true,
//         }
//       );
//     });
//   };

//   // ✅ Update Firebase profile
//   const profile = (updateData) => {
//     return updateProfile(auth.currentUser, updateData);
//   };

//   // ✅ Logout and clear cookie/token
//   const logout = () => {
//     setLoading(true);
//     return signOut(auth).then(() => {
//       setUser(null);
//       localStorage.removeItem("token");

//       axios.post(
//         `${import.meta.env.VITE_API_URL}/api/auth/logout`,
//         {},
//         { withCredentials: true }
//       );
//     });
//   };

//   // ✅ Auto-auth observer
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);

//       if (currentUser) {
//         const token = await currentUser.getIdToken();
//         localStorage.setItem("token", token);
//       } else {
//         localStorage.removeItem("token");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   // ✅ Context Export
//   const authData = {
//     user,
//     loading,
//     createUser,
//     loginUser,
//     logout,
//     profile,
//     createUserWithLoginGoogle,
//     setUser,
//     setLoading,
//   };

//   return (
//     <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;


import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).then(async (result) => {
      const userPayload = {
        email: result.user.email,
        name: result.user.displayName,
        photoURL: result.user.photoURL,
      };

      setUser(result.user);

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        userPayload,
        {
          withCredentials: true, // ✅ sends JWT cookie
        }
      );

      return result;
    });
  };

  const createUserWithLoginGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).then(async (result) => {
      const userPayload = {
        email: result.user.email,
        name: result.user.displayName,
        photoURL: result.user.photoURL,
      };

      setUser(result.user);

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        userPayload,
        {
          withCredentials: true,
        }
      );
    });
  };

  const profile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth).then(() => {
      setUser(null);
      localStorage.removeItem("token");

      axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        const token = await currentUser.getIdToken();
        localStorage.setItem("token", token);
      } else {
        localStorage.removeItem("token");
      }
    });

    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    loading,
    createUser,
    loginUser,
    logout,
    profile,
    createUserWithLoginGoogle,
    setUser,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

