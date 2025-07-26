




// import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { Helmet } from "react-helmet-async";
// import { useCart } from "../Context/CartContext";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import useAuth from "../hooks/useAuth"; // ✅ added

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
// const baseURL = import.meta.env.VITE_API_URL;

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();
//   const { cartItems, clearCart, getTotalPrice } = useCart();
//   const { user } = useAuth(); // ✅ useAuth for current user
//   const [loading, setLoading] = useState(false);
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     if (!cartItems?.length) {
//       const saved = JSON.parse(localStorage.getItem("invoice"));
//       if (saved?.total) setTotal(saved.total);
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
//       buyerEmail: user?.email || "anonymous@medimart.com", // ✅ fixed line
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
//       toast.warning("Backend unreachable. Payment saved locally.");
//     }

//     clearCart();
//     navigate("/invoice");
//     setLoading(false);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-xl mx-auto bg-white shadow p-6 rounded space-y-4"
//     >
//       <h3 className="text-xl font-bold text-center text-green-600">
//         Secure Checkout
//       </h3>
//       <CardElement className="p-4 border rounded" />
//       <p className="text-center font-semibold">
//         Total: ${total?.toFixed(2) || "0.00"}
//       </p>
//       <button
//         type="submit"
//         disabled={!stripe || loading}
//         className="btn btn-success w-full"
//       >
//         {loading ? "Processing..." : "Pay Now"}
//       </button>
//     </form>
//   );
// };

// const Checkout = () => {
//   return (
//     <div className="py-10 px-4 min-h-screen bg-gray-100">
//       <Helmet>
//         <title>Checkout | MediMart</title>
//       </Helmet>
//       <Elements stripe={stripePromise}>
//         <CheckoutForm />
//       </Elements>
//     </div>
//   );
// };

// export default Checkout;



import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";
import { useCart } from "../Context/CartContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const baseURL = import.meta.env.VITE_API_URL;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { cartItems, clearCart, getTotalPrice } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!cartItems?.length) {
      const saved = JSON.parse(localStorage.getItem("invoice"));
      if (saved?.total) setTotal(saved.total);
    } else {
      setTotal(getTotalPrice());
    }
  }, [cartItems, getTotalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const card = elements.getElement(CardElement);
    const { error } = await stripe.createPaymentMethod({ type: "card", card });

    if (error) {
      toast.error(error.message);
      setLoading(false);
      return;
    }

    const transactionId = "TXN-" + Math.random().toString(36).substring(2, 10).toUpperCase();

    const sellerEmails = cartItems
      .map((item) => item.sellerEmail || item.seller?.email)
      .filter(Boolean);

    const sellerEmail = sellerEmails[0] || "seller@medimart.com";

    const invoiceData = {
      cartItems,
      total,
      transactionId,
      paymentDate: new Date().toISOString(),
      buyerEmail: user?.email || "anonymous@medimart.com",
      sellerEmail,
      status: "paid", // ✅ Ensure this is included
      createdAt: new Date(),
    };

    localStorage.setItem("invoice", JSON.stringify(invoiceData));

    try {
      const token = localStorage.getItem("access-token");
      const res = await fetch(`${baseURL}/payments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(invoiceData),
      });

      const data = await res.json();
      if (data.insertedId || data.acknowledged) {
        toast.success(" Payment Successful!");
      } else {
        toast.warning("⚠️ Saved locally. Backend didn’t confirm.");
      }
    } catch (err) {
      toast.warning("⚠️ Backend unreachable. Payment saved locally.");
    }

    clearCart();
    navigate("/invoice");
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white shadow p-6 rounded space-y-4"
    >
      <h3 className="text-xl font-bold text-center text-green-600">Secure Checkout</h3>
      <CardElement className="p-4 border rounded" />
      <p className="text-center font-semibold">
        Total: <span className="text-green-600 font-bold">৳ {total?.toFixed(2) || "0.00"}</span>
      </p>
      <button
        type="submit"
        disabled={!stripe || loading}
        className="btn btn-success w-full"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

const Checkout = () => {
  return (
    <div className="py-10 px-4 min-h-screen bg-gray-100">
      <Helmet>
        <title>Checkout | MediMart</title>
      </Helmet>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Checkout;
