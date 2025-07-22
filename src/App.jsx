// // src/App.jsx

// import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import Loading from "./Components/Loading";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [loading, setLoading] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setLoading(true);
//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 1000); // 1 second loading animation on route change
//     return () => clearTimeout(timeout);
//   }, [location]);

//   return (
//     <div className="app-container flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-grow">
//         {loading ? <Loading /> : <Outlet />}
//       </main>
//       <Footer />
//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// }

// export default App;

// src/App.jsx

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second loading animation on route change
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="app-container flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />
      <main className="flex-grow">
        {loading ? <Loading /> : <Outlet />}
      </main>
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;

