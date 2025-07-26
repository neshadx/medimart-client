
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

// export const AuthContext = createContext();
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const googleProvider = new GoogleAuthProvider();

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const loginUser = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const createUserWithLoginGoogle = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   const profile = (updateData) => {
//     return updateProfile(auth.currentUser, updateData);
//   };

//   const logout = () => {
//     setLoading(true);
//     localStorage.removeItem("access-token");
//     return signOut(auth).then(() => {
//       setUser(null);
//     });
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       if (currentUser) {
//         const token = await currentUser.getIdToken();
//         localStorage.setItem("access-token", token);
//         setUser(currentUser);
//       } else {
//         setUser(null);
//         localStorage.removeItem("access-token");
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

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
//     <AuthContext.Provider value={authData}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;




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

// export const AuthContext = createContext();
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const googleProvider = new GoogleAuthProvider();

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const loginUser = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const createUserWithLoginGoogle = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   const profile = (updateData) => {
//     return updateProfile(auth.currentUser, updateData);
//   };

//   const logout = () => {
//     setLoading(true);
//     localStorage.removeItem("access-token");
//     return signOut(auth).then(() => {
//       setUser(null);
//     });
//   };

//   // ✅ Fix photoURL missing issue from Google Auth
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       if (currentUser) {
//         // ✅ Force photoURL update if missing
//         if (!currentUser.photoURL && currentUser.providerData[0]?.photoURL) {
//           await updateProfile(currentUser, {
//             photoURL: currentUser.providerData[0].photoURL,
//           });
//         }

//         const token = await currentUser.getIdToken();
//         localStorage.setItem("access-token", token);
//         setUser({ ...currentUser }); // ✅ force trigger re-render
//       } else {
//         setUser(null);
//         localStorage.removeItem("access-token");
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

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
//     <AuthContext.Provider value={authData}>
//       {children}
//     </AuthContext.Provider>
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
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUserWithLoginGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const profile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const logout = () => {
    setLoading(true);
    localStorage.removeItem("access-token");
    return signOut(auth).then(() => {
      setUser(null);
    });
  };

  //  Fix for Google login missing photoURL
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        //  If photoURL is missing but providerData has it
        const providerPhoto = currentUser.providerData[0]?.photoURL;
        if (!currentUser.photoURL && providerPhoto) {
          await updateProfile(currentUser, {
            photoURL: providerPhoto,
          });
        }

        const token = await currentUser.getIdToken();
        localStorage.setItem("access-token", token);

        //  Force re-render
        setUser({ ...currentUser });
      } else {
        setUser(null);
        localStorage.removeItem("access-token");
      }
      setLoading(false);
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
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;


