

// import { useState, useContext } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/Provider/AuthProvider";
// import { toast } from "react-toastify";
// import { FaShoppingCart } from "react-icons/fa";

// const Navbar = () => {
//   const { user, logout, loading } = useContext(AuthContext);
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
//       ? "text-green-700 font-semibold border-b-2 border-green-600 pb-1"
//       : "hover:text-green-600 font-medium transition-all duration-200";

//   const profileImg =
//     user?.photoURL && user.photoURL !== "null"
//       ? user.photoURL
//       : "https://i.ibb.co/5r5C1fJ/user.png";

//   return (
//     <div className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-green-600">
//           MediMart
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden lg:flex gap-6 items-center text-gray-700">
//           <NavLink to="/" className={navLinkStyle}>Home</NavLink>
//           <NavLink to="/shop" className={navLinkStyle}>Shop</NavLink>
//           <NavLink to="/about" className={navLinkStyle}>About Us</NavLink>
//           <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
//           <NavLink to="/cart" className={navLinkStyle}>
//             <FaShoppingCart className="text-lg" />
//           </NavLink>
//         </div>

//         {/* Right Side */}
//         <div className="hidden lg:flex items-center gap-4">
//           <button
//             onClick={toggleLanguage}
//             className="border border-green-600 text-green-600 px-3 py-1 text-sm rounded hover:bg-green-600 hover:text-white transition"
//           >
//             {language === "EN" ? "ENGLISH" : "বাংলা"}
//           </button>

//           {!loading && user ? (
//             <div className="dropdown dropdown-end">
//               <label tabIndex={0} className="cursor-pointer">
//                 <div className="w-10 h-10 rounded-full border-2 border-green-600 overflow-hidden">
//                   <img
//                     src={profileImg}
//                     alt="profile"
//                     className="w-full h-full object-cover"
//                     referrerPolicy="no-referrer"
//                   />
//                 </div>
//               </label>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-white border rounded-box w-52 text-sm text-gray-800"
//               >
//                 <li><Link to="/dashboard">Dashboard</Link></li>
//                 <li><Link to="/dashboard/update-profile">Update Profile</Link></li>
//                 <li>
//                   <button onClick={handleLogout} className="text-red-500">
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           ) : (
//             <Link
//               to="/login"
//               className="border border-green-600 text-green-600 px-4 py-1 rounded hover:bg-green-600 hover:text-white transition"
//             >
//               Join Us
//             </Link>
//           )}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="lg:hidden">
//           <button
//             className="text-2xl text-green-600"
//             onClick={() => setMobileMenu(!mobileMenu)}
//           >
//             {mobileMenu ? "✖" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {mobileMenu && (
//         <div className="lg:hidden px-4 pb-4">
//           <ul className="flex flex-col gap-3 text-gray-800 border-t pt-4">
//             <NavLink to="/" className={navLinkStyle}>Home</NavLink>
//             <NavLink to="/shop" className={navLinkStyle}>Shop</NavLink>
//             <NavLink to="/about" className={navLinkStyle}>About Us</NavLink>
//             <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
//             <NavLink to="/cart" className={navLinkStyle}>Cart</NavLink>

//             <button
//               onClick={toggleLanguage}
//               className="border border-green-600 text-green-600 px-3 py-1 text-sm rounded hover:bg-green-600 hover:text-white transition w-full"
//             >
//               {language === "EN" ? "Switch to বাংলা" : "Switch to English"}
//             </button>

//             {!loading && user ? (
//               <>
//                 <Link to="/dashboard">Dashboard</Link>
//                 <Link to="/dashboard/update-profile">Update Profile</Link>
//                 <button onClick={handleLogout} className="text-red-500">
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <Link
//                 to="/login"
//                 className="text-center border border-green-600 text-green-600 py-1 rounded hover:bg-green-600 hover:text-white"
//               >
//                 Join Us
//               </Link>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;




// import { useContext, useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/Provider/AuthProvider";
// import { toast } from "react-toastify";
// import { FaShoppingCart } from "react-icons/fa";
// import { useTranslation } from "react-i18next";
// import logo from "../assets/medimart-logo.png";


// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const { user, logout, loading } = useContext(AuthContext);
//   const [mobileMenu, setMobileMenu] = useState(false);
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
//     i18n.changeLanguage(i18n.language === "en" ? "bn" : "en");
//   };

//   const navLinkStyle = ({ isActive }) =>
//     isActive
//       ? "text-green-700 font-semibold border-b-2 border-green-600 pb-1"
//       : "hover:text-green-600 font-medium transition-all duration-200";

//   const profileImg =
//     user?.photoURL && user.photoURL !== "null"
//       ? user.photoURL
//       : "https://i.ibb.co/5r5C1fJ/user.png";

//   return (
//     <div className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
//         {/* Logo */}
//         {/* <Link to="/" className="text-2xl font-bold text-green-600">
//           MediMart
//         </Link> */}
//         <Link to="/" className="flex items-center gap-2">
//   <img src={logo} alt="MediMart Logo" className="w-8 h-8 object-contain" />
//   <span className="text-2xl font-bold text-green-600">MediMart</span>
// </Link>


//         {/* Desktop Nav */}
//         <div className="hidden lg:flex gap-6 items-center text-gray-700">
//           <NavLink to="/" className={navLinkStyle}>{t("home")}</NavLink>
//           <NavLink to="/shop" className={navLinkStyle}>{t("shop")}</NavLink>
//           <NavLink to="/about" className={navLinkStyle}>{t("about")}</NavLink>
//           <NavLink to="/contact" className={navLinkStyle}>{t("contact")}</NavLink>
//           <NavLink to="/cart" className={navLinkStyle}>
//             <FaShoppingCart className="text-lg" />
//           </NavLink>
//         </div>

//         {/* Right Side */}
//         <div className="hidden lg:flex items-center gap-4">
//           <button
//             onClick={toggleLanguage}
//             className="border border-green-600 text-green-600 px-3 py-1 text-sm rounded hover:bg-green-600 hover:text-white transition"
//           >
//             {i18n.language === "en" ? "ENGLISH" : "বাংলা"}
//           </button>

//           {!loading && user ? (
//             <div className="dropdown dropdown-end">
//               <label tabIndex={0} className="cursor-pointer">
//                 <div className="w-10 h-10 rounded-full border-2 border-green-600 overflow-hidden">
//                   <img
//                     src={profileImg}
//                     alt="profile"
//                     className="w-full h-full object-cover"
//                     referrerPolicy="no-referrer"
//                   />
//                 </div>
//               </label>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-white border rounded-box w-52 text-sm text-gray-800"
//               >
//                 <li><Link to="/dashboard">{t("dashboard")}</Link></li>
//                 <li><Link to="/dashboard/update-profile">{t("update_profile")}</Link></li>
//                 <li>
//                   <button onClick={handleLogout} className="text-red-500">
//                     {t("logout")}
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           ) : (
//             <Link
//               to="/login"
//               className="border border-green-600 text-green-600 px-4 py-1 rounded hover:bg-green-600 hover:text-white transition"
//             >
//               {t("join")}
//             </Link>
//           )}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="lg:hidden">
//           <button
//             className="text-2xl text-green-600"
//             onClick={() => setMobileMenu(!mobileMenu)}
//           >
//             {mobileMenu ? "✖" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {mobileMenu && (
//         <div className="lg:hidden px-4 pb-4">
//           <ul className="flex flex-col gap-3 text-gray-800 border-t pt-4">
//             <NavLink to="/" className={navLinkStyle}>{t("home")}</NavLink>
//             <NavLink to="/shop" className={navLinkStyle}>{t("shop")}</NavLink>
//             <NavLink to="/about" className={navLinkStyle}>{t("about")}</NavLink>
//             <NavLink to="/contact" className={navLinkStyle}>{t("contact")}</NavLink>
//             <NavLink to="/cart" className={navLinkStyle}>Cart</NavLink>

//             <button
//               onClick={toggleLanguage}
//               className="border border-green-600 text-green-600 px-3 py-1 text-sm rounded hover:bg-green-600 hover:text-white transition w-full"
//             >
//               {i18n.language === "en" ? "Switch to বাংলা" : "Switch to English"}
//             </button>

//             {!loading && user ? (
//               <>
//                 <Link to="/dashboard">{t("dashboard")}</Link>
//                 <Link to="/dashboard/update-profile">{t("update_profile")}</Link>
//                 <button onClick={handleLogout} className="text-red-500">
//                   {t("logout")}
//                 </button>
//               </>
//             ) : (
//               <Link
//                 to="/login"
//                 className="text-center border border-green-600 text-green-600 py-1 rounded hover:bg-green-600 hover:text-white"
//               >
//                 {t("join")}
//               </Link>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;




// import { useContext, useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/Provider/AuthProvider";
// import { toast } from "react-toastify";
// import { FaShoppingCart } from "react-icons/fa";
// import { useTranslation } from "react-i18next";
// import logo from "../assets/medimart-logo.png";

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const { user, logout, loading } = useContext(AuthContext);
//   const [mobileMenu, setMobileMenu] = useState(false);
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
//     i18n.changeLanguage(i18n.language === "en" ? "bn" : "en");
//   };

//   const navLinkStyle = ({ isActive }) =>
//     isActive
//       ? "text-green-700 font-semibold border-b-2 border-green-600 pb-1"
//       : "hover:text-green-600 font-medium transition-all duration-200";

//   const profileImg =
//     user?.photoURL && user.photoURL !== "null"
//       ? user.photoURL
//       : "https://i.ibb.co/5r5C1fJ/user.png";

//   // Routes configuration
//   const commonRoutes = [
//     { path: "/", label: t("home") },
//     { path: "/shop", label: t("shop") },
//     { path: "/about", label: t("about") },
//   ];

//   const loggedInRoutes = [
//     { path: "/dashboard", label: t("dashboard") },
//     { path: "/contact", label: t("contact") },
//   ];

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50 w-full border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2">
//             <img 
//               src={logo} 
//               alt="MediMart Logo" 
//               className="w-8 h-8 object-contain" 
//             />
//             <span className="text-2xl font-bold text-green-600">MediMart</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {/* Common routes */}
//             {commonRoutes.map((route) => (
//               <NavLink 
//                 key={route.path} 
//                 to={route.path} 
//                 className={navLinkStyle}
//               >
//                 {route.label}
//               </NavLink>
//             ))}

//             {/* Additional routes for logged in users */}
//             {user && loggedInRoutes.map((route) => (
//               <NavLink 
//                 key={route.path} 
//                 to={route.path} 
//                 className={navLinkStyle}
//               >
//                 {route.label}
//               </NavLink>
//             ))}

//             {/* Cart icon */}
//             <NavLink to="/cart" className={navLinkStyle}>
//               <FaShoppingCart className="text-lg" />
//             </NavLink>

//             {/* Language toggle */}
//             <button
//               onClick={toggleLanguage}
//               className="border border-green-600 text-green-600 px-3 py-1 text-sm rounded hover:bg-green-600 hover:text-white transition"
//             >
//               {i18n.language === "en" ? "EN" : "BN"}
//             </button>

//             {/* User dropdown */}
//             {!loading && (user ? (
//               <div className="dropdown dropdown-end">
//                 <label tabIndex={0} className="cursor-pointer">
//                   <div className="w-10 h-10 rounded-full border-2 border-green-600 overflow-hidden">
//                     <img
//                       src={profileImg}
//                       alt="profile"
//                       className="w-full h-full object-cover"
//                       referrerPolicy="no-referrer"
//                     />
//                   </div>
//                 </label>
//                 <ul
//                   tabIndex={0}
//                   className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-white border rounded-box w-52 text-sm text-gray-800"
//                 >
//                   <li><Link to="/dashboard">{t("dashboard")}</Link></li>
//                   <li><Link to="/dashboard/update-profile">{t("update_profile")}</Link></li>
//                   <li>
//                     <button onClick={handleLogout} className="text-red-500">
//                       {t("logout")}
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             ) : (
//               <Link
//                 to="/login"
//                 className="border border-green-600 text-green-600 px-4 py-1 rounded hover:bg-green-600 hover:text-white transition"
//               >
//                 {t("join")}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden flex items-center">
//             <button
//               className="text-green-600 hover:text-green-700 focus:outline-none"
//               onClick={() => setMobileMenu(!mobileMenu)}
//               aria-label="Toggle menu"
//             >
//               {mobileMenu ? (
//                 <span className="text-2xl">✖</span>
//               ) : (
//                 <span className="text-2xl">☰</span>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {mobileMenu && (
//         <div className="lg:hidden bg-white px-4 pb-4 shadow-md">
//           <div className="flex flex-col space-y-4 pt-2">
//             {[...commonRoutes, ...(user ? loggedInRoutes : [])].map((route) => (
//               <NavLink
//                 key={route.path}
//                 to={route.path}
//                 className={navLinkStyle}
//                 onClick={() => setMobileMenu(false)}
//               >
//                 {route.label}
//               </NavLink>
//             ))}

//             <NavLink 
//               to="/cart" 
//               className={navLinkStyle}
//               onClick={() => setMobileMenu(false)}
//             >
//               Cart
//             </NavLink>

//             <button
//               onClick={toggleLanguage}
//               className="border border-green-600 text-green-600 px-3 py-2 rounded hover:bg-green-600 hover:text-white transition w-full text-left"
//             >
//               {i18n.language === "en" ? "Switch to বাংলা" : "Switch to English"}
//             </button>

//             {!loading && (user ? (
//               <div className="flex flex-col space-y-3 border-t pt-3">
//                 <Link 
//                   to="/dashboard/update-profile"
//                   className="text-gray-800 hover:text-green-600"
//                   onClick={() => setMobileMenu(false)}
//                 >
//                   {t("update_profile")}
//                 </Link>
//                 <button 
//                   onClick={() => {
//                     handleLogout();
//                     setMobileMenu(false);
//                   }}
//                   className="text-red-500 hover:text-red-700 text-left"
//                 >
//                   {t("logout")}
//                 </button>
//               </div>
//             ) : (
//               <Link
//                 to="/login"
//                 className="text-center border border-green-600 text-green-600 py-2 rounded hover:bg-green-600 hover:text-white"
//                 onClick={() => setMobileMenu(false)}
//               >
//                 {t("join")}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logo from "../assets/medimart-logo.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { user, logout, loading } = useContext(AuthContext);
  const [mobileMenu, setMobileMenu] = useState(false);
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
    i18n.changeLanguage(i18n.language === "en" ? "bn" : "en");
  };

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-green-700 font-semibold relative after:content-[''] after:block after:h-[2px] after:w-full after:bg-green-600 after:mt-1"
      : "hover:text-green-600 font-medium transition-colors duration-200";

  const profileImg =
    user?.photoURL && user.photoURL !== "null"
      ? user.photoURL
      : "https://i.ibb.co/5r5C1fJ/user.png";

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="MediMart Logo" className="w-9 h-9 object-contain" />
          <span className="text-2xl font-bold text-green-600">MediMart</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6 items-center text-gray-700">
          <NavLink to="/" className={navLinkStyle}>{t("home")}</NavLink>
          <NavLink to="/shop" className={navLinkStyle}>{t("shop")}</NavLink>
          <NavLink to="/about" className={navLinkStyle}>{t("about")}</NavLink>
          <NavLink to="/contact" className={navLinkStyle}>{t("contact")}</NavLink>
          <NavLink to="/cart" className={navLinkStyle}>
            <FaShoppingCart className="text-lg" />
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="border border-green-600 text-green-600 px-3 py-1 text-sm rounded-lg hover:bg-green-600 hover:text-white transition"
          >
            {i18n.language === "en" ? "ENGLISH" : "বাংলা"}
          </button>

          {!loading && user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="cursor-pointer">
                <div className="w-10 h-10 rounded-full border-2 border-green-600 overflow-hidden">
                  <img
                    src={profileImg}
                    alt="profile"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow-md bg-white border border-gray-200 rounded-lg w-52 text-sm text-gray-800"
              >
                <li><Link to="/dashboard">{t("dashboard")}</Link></li>
                <li><Link to="/dashboard/update-profile">{t("update_profile")}</Link></li>
                <li>
                  <button onClick={handleLogout} className="text-red-500 hover:text-red-600">
                    {t("logout")}
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="border border-green-600 text-green-600 px-4 py-1 rounded-lg hover:bg-green-600 hover:text-white transition"
            >
              {t("join")}
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            className="text-2xl text-green-600"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenu && (
        <div className="lg:hidden px-4 pb-4 animate-slideDown">
          <ul className="flex flex-col gap-3 text-gray-800 border-t border-gray-200 pt-4">
            <NavLink to="/" className={navLinkStyle}>{t("home")}</NavLink>
            <NavLink to="/shop" className={navLinkStyle}>{t("shop")}</NavLink>
            <NavLink to="/about" className={navLinkStyle}>{t("about")}</NavLink>
            <NavLink to="/contact" className={navLinkStyle}>{t("contact")}</NavLink>
            <NavLink to="/cart" className={navLinkStyle}>Cart</NavLink>

            <button
              onClick={toggleLanguage}
              className="border border-green-600 text-green-600 px-3 py-1 text-sm rounded-lg hover:bg-green-600 hover:text-white transition w-full"
            >
              {i18n.language === "en" ? "Switch to বাংলা" : "Switch to English"}
            </button>

            {!loading && user ? (
              <>
                <Link to="/dashboard">{t("dashboard")}</Link>
                <Link to="/dashboard/update-profile">{t("update_profile")}</Link>
                <button onClick={handleLogout} className="text-red-500 hover:text-red-600">
                  {t("logout")}
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-center border border-green-600 text-green-600 py-1 rounded-lg hover:bg-green-600 hover:text-white transition"
              >
                {t("join")}
              </Link>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;



