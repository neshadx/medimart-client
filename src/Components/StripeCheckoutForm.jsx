// // src/Components/StripeCheckoutForm.jsx
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useCart } from "../Context/CartContext";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const baseURL = import.meta.env.VITE_API_URL;

// const StripeCheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();
//   const { cartItems, clearCart, getTotalPrice } = useCart();
//   const [loading, setLoading] = useState(false);
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     if (!cartItems?.length) {
//       const savedCart = JSON.parse(localStorage.getItem("invoice"));
//       if (savedCart?.total) setTotal(savedCart.total);
//     } else {
//       setTotal(getTotalPrice());
//     }
//   }, [cartItems, getTotalPrice]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     setLoading(true);

//     const card = elements.getElement(CardElement);
//     const { error } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });

//     if (error) {
//       toast.error(error.message);
//       setLoading(false);
//       return;
//     }

//     const transactionId = "TXN-" + Math.random().toString(36).substring(2, 10).toUpperCase();

//     const invoiceData = {
//       cartItems,
//       total,
//       transactionId,
//       paymentDate: new Date().toISOString(),
//     };

//     localStorage.setItem("invoice", JSON.stringify(invoiceData));

//     try {
//       const token = localStorage.getItem("access-token");
//       const res = await fetch(`${baseURL}/payments`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(invoiceData),
//       });

//       const data = await res.json();
//       if (data.insertedId || data.acknowledged) {
//         toast.success("Payment Successful!");
//       } else {
//         toast.warning("Saved locally. But backend didn't confirm.");
//       }
//     } catch (err) {
//       toast.warning("Payment saved locally only. Backend failed.");
//     }

//     clearCart();
//     navigate("/invoice");
//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow p-6 rounded space-y-4">
//       <h3 className="text-xl font-bold text-center text-green-600">Secure Checkout</h3>
//       <CardElement className="p-4 border rounded" />
//       <p className="text-center font-semibold">Total: ${total.toFixed(2)}</p>
//       <button type="submit" disabled={!stripe || loading} className="btn btn-success w-full">
//         {loading ? "Processing..." : "Pay Now"}
//       </button>
//     </form>
//   );
// };

// export default StripeCheckoutForm;
