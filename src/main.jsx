


// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // React Query Setup
// import {
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query";

// // Auth & Routes
// import AuthProvider from "./Context/Provider/AuthProvider";
// import PrivateRoute from "./routes/PrivateRoute";
// import AdminRoute from "./routes/AdminRoute";
// import SellerRoute from "./routes/SellerRoute";

// // Pages
// import App from "./App";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Shop from "./pages/Shop";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Invoice from "./pages/Invoice";
// import CategoryDetails from "./pages/CategoryDetails";
// import NotFound from "./pages/NotFound";
// import Terms from "./pages/Terms";
// import Privacy from "./pages/Privacy";

// // Dashboard Layout
// import DashboardLayout from "./layouts/DashboardLayout";

// // Admin Pages
// import AdminHome from "./pages/Dashboard/Admin/AdminHome";
// import ManageUsers from "./pages/Dashboard/Admin/ManageUsers";
// import ManageCategories from "./pages/Dashboard/Admin/ManageCategories";
// import ManageBanner from "./pages/Dashboard/Admin/ManageBanner";
// import SalesReport from "./pages/Dashboard/Admin/SalesReport";
// import PaymentManagement from "./pages/Dashboard/Admin/PaymentManagement";

// // Seller Pages
// import SellerHome from "./pages/Dashboard/Seller/SellerHome";
// import AddMedicine from "./pages/Dashboard/Seller/AddMedicine";
// import ManageMedicines from "./pages/Dashboard/Seller/ManageMedicines";
// import RequestAdvertise from "./pages/Dashboard/Seller/RequestAdvertise";
// import SellerPaymentHistory from "./pages/Dashboard/Seller/PaymentHistory";

// // User Pages
// import UserHome from "./pages/Dashboard/User/UserHome";
// import UserPaymentHistory from "./pages/Dashboard/User/PaymentHistory";

// // Query Client
// const queryClient = new QueryClient();

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "login", element: <Login /> },
//       { path: "register", element: <Register /> },
//       { path: "shop", element: <Shop /> },
//       { path: "category/:categoryId", element: <CategoryDetails /> },
//       {
//         path: "cart",
//         element: (
//           <PrivateRoute>
//             <Cart />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "checkout",
//         element: (
//           <PrivateRoute>
//             <Checkout />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "invoice",
//         element: (
//           <PrivateRoute>
//             <Invoice />
//           </PrivateRoute>
//         ),
//       },
//       { path: "terms", element: <Terms /> },
//       { path: "privacy", element: <Privacy /> },
//     ],
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <PrivateRoute>
//         <DashboardLayout />
//       </PrivateRoute>
//     ),
//     children: [
//       // Admin
//       { path: "admin-home", element: <AdminRoute><AdminHome /></AdminRoute> },
//       { path: "manage-users", element: <AdminRoute><ManageUsers /></AdminRoute> },
//       { path: "manage-categories", element: <AdminRoute><ManageCategories /></AdminRoute> },
//       { path: "manage-banner", element: <AdminRoute><ManageBanner /></AdminRoute> },
//       { path: "sales-report", element: <AdminRoute><SalesReport /></AdminRoute> },
//       { path: "payment-management", element: <AdminRoute><PaymentManagement /></AdminRoute> },

//       // Seller
//       { path: "seller-home", element: <SellerRoute><SellerHome /></SellerRoute> },
//       { path: "add-medicine", element: <SellerRoute><AddMedicine /></SellerRoute> },
//       { path: "manage-medicines", element: <SellerRoute><ManageMedicines /></SellerRoute> },
//       { path: "request-advertise", element: <SellerRoute><RequestAdvertise /></SellerRoute> },
//       { path: "seller-payment-history", element: <SellerRoute><SellerPaymentHistory /></SellerRoute> },

//       // User
//       { path: "user-home", element: <UserHome /> },
//       { path: "payment-history", element: <UserPaymentHistory /> },
//     ],
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <HelmetProvider>
//       <QueryClientProvider client={queryClient}>
//         <AuthProvider>
//           <>
//             <RouterProvider router={router} />
//             <ToastContainer position="top-center" autoClose={3000} />
//           </>
//         </AuthProvider>
//       </QueryClientProvider>
//     </HelmetProvider>
//   </React.StrictMode>
// );








import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Providers
import AuthProvider from "./Context/Provider/AuthProvider";
import { CartProvider } from "./Context/CartContext"; // ✅ added

// Routes
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";
import SellerRoute from "./routes/SellerRoute";

// Pages
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Invoice from "./pages/Invoice";
import CategoryDetails from "./pages/CategoryDetails";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

// Dashboard Layout
import DashboardLayout from "./layouts/DashboardLayout";

// Admin Pages
import AdminHome from "./pages/Dashboard/Admin/AdminHome";
import ManageUsers from "./pages/Dashboard/Admin/ManageUsers";
import ManageCategories from "./pages/Dashboard/Admin/ManageCategories";
import ManageBanner from "./pages/Dashboard/Admin/ManageBanner";
import SalesReport from "./pages/Dashboard/Admin/SalesReport";
import PaymentManagement from "./pages/Dashboard/Admin/PaymentManagement";

// Seller Pages
import SellerHome from "./pages/Dashboard/Seller/SellerHome";
import AddMedicine from "./pages/Dashboard/Seller/AddMedicine";
import ManageMedicines from "./pages/Dashboard/Seller/ManageMedicines";
import RequestAdvertise from "./pages/Dashboard/Seller/RequestAdvertise";
import SellerPaymentHistory from "./pages/Dashboard/Seller/PaymentHistory";

// User Pages
import UserHome from "./pages/Dashboard/User/UserHome";
import UserPaymentHistory from "./pages/Dashboard/User/PaymentHistory";

// Query Client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "shop", element: <Shop /> },
      { path: "category/:categoryId", element: <CategoryDetails /> },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "invoice",
        element: (
          <PrivateRoute>
            <Invoice />
          </PrivateRoute>
        ),
      },
      { path: "terms", element: <Terms /> },
      { path: "privacy", element: <Privacy /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // Admin
      { path: "admin-home", element: <AdminRoute><AdminHome /></AdminRoute> },
      { path: "manage-users", element: <AdminRoute><ManageUsers /></AdminRoute> },
      { path: "manage-categories", element: <AdminRoute><ManageCategories /></AdminRoute> },
      { path: "manage-banner", element: <AdminRoute><ManageBanner /></AdminRoute> },
      { path: "sales-report", element: <AdminRoute><SalesReport /></AdminRoute> },
      { path: "payment-management", element: <AdminRoute><PaymentManagement /></AdminRoute> },

      // Seller
      { path: "seller-home", element: <SellerRoute><SellerHome /></SellerRoute> },
      { path: "add-medicine", element: <SellerRoute><AddMedicine /></SellerRoute> },
      { path: "manage-medicines", element: <SellerRoute><ManageMedicines /></SellerRoute> },
      { path: "request-advertise", element: <SellerRoute><RequestAdvertise /></SellerRoute> },
      { path: "seller-payment-history", element: <SellerRoute><SellerPaymentHistory /></SellerRoute> },

      // User
      { path: "user-home", element: <UserHome /> },
      { path: "payment-history", element: <UserPaymentHistory /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <CartProvider> {/* ✅ wrap entire app with CartProvider */}
            <RouterProvider router={router} />
            <ToastContainer position="top-center" autoClose={3000} />
          </CartProvider>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);

