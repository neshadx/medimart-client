# 🏥 MediMart - Multi-Vendor Medicine Selling Platform

MediMart is a full-stack multi-vendor e-commerce platform designed to sell medicines online. It supports user, seller, and admin roles, dynamic category-based browsing, Firebase authentication, Stripe payments, and a full-featured dashboard. The UI is built using React, TailwindCSS, and DaisyUI with an elegant light-only design.

## 🔥 Features

### 🧑‍⚕️ General Users
- Browse medicines by category
- Add items to cart
- Checkout with Stripe payment
- View and download invoices
- Multi-language support (EN/BN)

### 🧾 Sellers
- Upload & manage medicines with images
- Set discounts and request advertisements
- Track payment history
- Role-based protected dashboard

### 🛡️ Admin
- Manage users and categories
- Approve advertisement requests
- Monitor payment transactions
- Generate sales report (Excel & PDF)
- Role-based route protection

---

## 🛠️ Tech Stack

### 🔹 Frontend
- React + Vite
- Tailwind CSS + DaisyUI
- React Router DOM
- React Hook Form
- React Toastify
- TanStack React Query
- SwiperJS (for sliders)

### 🔸 Backend
- Node.js + Express
- MongoDB (with Atlas)
- Firebase Admin SDK (JWT Verification)
- express-fileupload (for image upload)
- Stripe Payment Integration

---


---

## 🔐 Authentication
- Firebase Authentication
- Login with Email/Password or Google
- JWT Token issued and verified by Firebase Admin SDK
- Role-based dashboard routing

---

## 💳 Payment Integration
- Stripe checkout
- Invoice saved to MongoDB
- Admin can mark payment as “Paid”
- Sales report filtered by date range
- Export to Excel or PDF

---

## 📸 Image Handling
- Medicine images and advertisement banners uploaded with `express-fileupload`
- Stored temporarily (can be migrated to Cloudinary/AWS later)

---

## 📊 Advanced Features
- Admin Sales Report with date filters
- Download as PDF/Excel
- Animated sliders for banners & discounted products
- Animated floating top company logos
- Clean and responsive design (mobile & desktop)



## 🚀 Live Preview 

🌐 Live URL: https://medimart.vercel.app



---

## 🔧 Installation & Setup

## 📦 Getting Started

This project was created using **Create React App**.

### Available Scripts

In the project directory, you can run:

- **`npm run dev`**
  Runs the app in development mode.  

- **`npm run build`**  
  Builds the app for production in the `build` folder.  
  React will be optimized and bundled for deployment.

