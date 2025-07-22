import { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logout, loading } = useContext(AuthContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [language, setLanguage] = useState("EN");
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logged out successfully");
        navigate("/login");
      })
      .catch(() => toast.error("Logout failed"));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "BN" : "EN"));
  };

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-[#2F855A] font-semibold"
      : "hover:text-[#2F855A] transition font-medium";

  return (
    <div className="navbar bg-white shadow-md sticky top-0 z-50 px-4 border-b border-gray-100">
      {/* Brand */}
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold text-[#38A169]">MediMart</Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-700">
          <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
          <li><NavLink to="/shop" className={navLinkStyle}>Shop</NavLink></li>
          <li><NavLink to="/cart" className={navLinkStyle}><FaShoppingCart /></NavLink></li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end hidden lg:flex items-center gap-4">
        {/* Language */}
        <button onClick={toggleLanguage} className="btn btn-sm btn-outline text-sm">
          {language === "EN" ? "ENGLISH" : "বাংলা"}
        </button>

        {/* User Auth */}
        {!loading && user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border-2 border-[#38A169]">
                <img src={user.photoURL || "https://i.ibb.co/5r5C1fJ/user.png"} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white border rounded-box w-52 text-sm text-gray-800">
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/dashboard/update-profile">Update Profile</Link></li>
              <li><button onClick={handleLogout} className="text-red-500">Logout</button></li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="px-4 py-1 border border-[#38A169] text-[#38A169] rounded hover:bg-[#38A169] hover:text-white transition"
          >
            Join Us
          </Link>
        )}
      </div>

      {/* Mobile Toggle */}
      <div className="lg:hidden navbar-end">
        <button
          className="text-2xl text-[#38A169]"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute top-16 left-0 w-full bg-white p-4 border-t z-40 lg:hidden">
          <ul className="flex flex-col gap-3 text-gray-800">
            <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
            <li><NavLink to="/shop" className={navLinkStyle}>Shop</NavLink></li>
            <li><NavLink to="/cart" className={navLinkStyle}>Cart</NavLink></li>
            <li>
              <button onClick={toggleLanguage} className="btn btn-sm w-full">
                {language === "EN" ? "Switch to বাংলা" : "Switch to English"}
              </button>
            </li>
            {!loading && user ? (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/dashboard/update-profile">Update Profile</Link></li>
                <li><button onClick={handleLogout} className="text-red-500">Logout</button></li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="text-center border border-[#38A169] text-[#38A169] py-1 rounded hover:bg-[#38A169] hover:text-white"
                >
                  Join Us
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;


// import { useState, useContext } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/Provider/AuthProvider";
// import { toast } from "react-toastify";
// import { FaShoppingCart } from "react-icons/fa";

// const Navbar = () => {
//   const { user, logout, loading } = useContext(AuthContext);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [language, setLanguage] = useState("EN");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout()
//       .then(() => {
//         toast.success("Logged out successfully");
//         navigate("/login");
//       })
//       .catch(() => toast.error("Logout failed"));
//   };

//   const toggleLanguage = () => {
//     setLanguage((prev) => (prev === "EN" ? "BN" : "EN"));
//   };

//   const navLinkStyle = ({ isActive }) =>
//     isActive
//       ? "text-[#2F855A] font-semibold"
//       : "hover:text-[#2F855A] transition font-medium";

//   return (
//     <div className="navbar bg-white shadow-md sticky top-0 z-50 px-4 border-b border-gray-100">
//       <div className="navbar-start">
//         <Link to="/" className="text-2xl font-bold text-[#38A169]">
//           MediMart
//         </Link>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 text-gray-700">
//           <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
//           <li><NavLink to="/shop" className={navLinkStyle}>Shop</NavLink></li>
//           <li><NavLink to="/cart" className={navLinkStyle}><FaShoppingCart /></NavLink></li>
//         </ul>
//       </div>

//       <div className="navbar-end hidden lg:flex items-center gap-4">
//         {/* Language Toggle */}
//         <button onClick={toggleLanguage} className="btn btn-sm btn-outline text-sm">
//           {language === "EN" ? "ENGLISH" : "বাংলা"}
//         </button>

//         {/* Auth Section */}
//         {!loading && user ? (
//           <div className="dropdown dropdown-end">
//             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//               <div className="w-10 rounded-full border-2 border-[#38A169]">
//                 <img src={user.photoURL || "https://i.ibb.co/5r5C1fJ/user.png"} />
//               </div>
//             </label>
//             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-sm">
//               <li><Link to="/dashboard">Dashboard</Link></li>
//               <li><Link to="/dashboard/update-profile">Update Profile</Link></li>
//               <li><button onClick={handleLogout} className="text-red-500">Logout</button></li>
//             </ul>
//           </div>
//         ) : (
//           <Link
//             to="/login"
//             className="px-4 py-1 border border-[#38A169] text-[#38A169] rounded hover:bg-[#38A169] hover:text-white transition"
//           >
//             Join Us
//           </Link>
//         )}
//       </div>

//       {/* Mobile Toggle */}
//       <div className="lg:hidden navbar-end">
//         <button
//           className="text-2xl text-[#38A169]"
//           onClick={() => setMobileMenu(!mobileMenu)}
//         >
//           {mobileMenu ? "✖" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenu && (
//         <div className="absolute top-16 left-0 w-full bg-white p-4 border-t z-40 lg:hidden">
//           <ul className="flex flex-col gap-3 text-gray-700">
//             <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
//             <li><NavLink to="/shop" className={navLinkStyle}>Shop</NavLink></li>
//             <li><NavLink to="/cart" className={navLinkStyle}>Cart</NavLink></li>
//             <li>
//               <button onClick={toggleLanguage} className="btn btn-sm w-full">
//                 {language === "EN" ? "Switch to বাংলা" : "Switch to English"}
//               </button>
//             </li>
//             {!loading && user ? (
//               <>
//                 <li><Link to="/dashboard">Dashboard</Link></li>
//                 <li><Link to="/dashboard/update-profile">Update Profile</Link></li>
//                 <li><button onClick={handleLogout} className="text-red-500">Logout</button></li>
//               </>
//             ) : (
//               <li>
//                 <Link
//                   to="/login"
//                   className="text-center border border-[#38A169] text-[#38A169] py-1 rounded hover:bg-[#38A169] hover:text-white"
//                 >
//                   Join Us
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

