
// // src/Context/CartContext.jsx
// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (medicine) => {
//     const exists = cartItems.find((item) => item._id === medicine._id);
//     if (exists) {
//       setCartItems((prev) =>
//         prev.map((item) =>
//           item._id === medicine._id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...medicine, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prev) => prev.filter((item) => item._id !== id));
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const increaseQuantity = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item._id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decreaseQuantity = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item._id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         increaseQuantity,
//         decreaseQuantity,
//         getTotalPrice,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);



// // src/Context/CartContext.jsx
// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // ✅ Add to cart with quantity support
//   const addToCart = (medicine) => {
//     const exists = cartItems.find((item) => item._id === medicine._id);
//     if (exists) {
//       setCartItems((prev) =>
//         prev.map((item) =>
//           item._id === medicine._id
//             ? { ...item, quantity: (item.quantity || 1) + 1 }
//             : item
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...medicine, quantity: 1 }]);
//     }
//   };

//   // ✅ Remove a specific item
//   const removeFromCart = (id) => {
//     setCartItems((prev) => prev.filter((item) => item._id !== id));
//   };

//   // ✅ Clear all items
//   const clearCart = () => {
//     setCartItems([]);
//   };

//   // ✅ Increase quantity
//   const increaseQuantity = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item._id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   // ✅ Decrease quantity (min 1)
//   const decreaseQuantity = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item._id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   // ✅ Calculate total price
//   const getTotalPrice = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         increaseQuantity,
//         decreaseQuantity,
//         getTotalPrice,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);





// src/Context/CartContext.jsx
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Add to cart with quantity support (fix: parseFloat for price)
  const addToCart = (medicine) => {
    const parsedPrice = parseFloat(medicine.price);
    const parsedDiscount = medicine.discountedPrice
      ? parseFloat(medicine.discountedPrice)
      : null;

    const exists = cartItems.find((item) => item._id === medicine._id);
    if (exists) {
      setCartItems((prev) =>
        prev.map((item) =>
          item._id === medicine._id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...medicine,
          price: parsedPrice,
          discountedPrice: parsedDiscount,
          quantity: 1,
        },
      ]);
    }
  };

  // ✅ Remove a specific item
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  // ✅ Clear all items
  const clearCart = () => {
    setCartItems([]);
  };

  // ✅ Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ✅ Decrease quantity (min 1)
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // ✅ Calculate total price (discounted if available)
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const unitPrice = item.discountedPrice ?? item.price;
      return total + unitPrice * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
