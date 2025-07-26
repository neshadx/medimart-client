// import { useCart } from "../Context/CartContext";


// const Cart = () => {
//   const { cartItems, removeFromCart } = useCart();

//   return (
//     <div className="min-h-screen px-4 py-10 text-center">
//       <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

//       {cartItems.length === 0 ? (
//         <p className="text-gray-600">No items in the cart yet.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table w-full max-w-3xl mx-auto border">
//             <thead>
//               <tr className="bg-green-100">
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item, i) => (
//                 <tr key={item._id}>
//                   <td>{i + 1}</td>
//                   <td>{item.name}</td>
//                   <td>${item.price}</td>
//                   <td>
//                     <button onClick={() => removeFromCart(item._id)} className="btn btn-sm btn-error">
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;



// import { useCart } from "../Context/CartContext";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const {
//     cartItems,
//     removeFromCart,
//     clearCart,
//     increaseQuantity,
//     decreaseQuantity,
//     getTotalPrice,
//   } = useCart();

//   const total = getTotalPrice();

//   return (
//     <div className="min-h-screen px-4 py-10 text-center">
//       <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

//       {cartItems.length === 0 ? (
//         <p className="text-gray-600">No items in the cart yet.</p>
//       ) : (
//         <>
//           <div className="overflow-x-auto">
//             <table className="table w-full max-w-5xl mx-auto border">
//               <thead>
//                 <tr className="bg-green-100 text-black">
//                   <th>#</th>
//                   <th>Name</th>
//                   <th>Company</th>
//                   <th>Price/Unit</th>
//                   <th>Quantity</th>
//                   <th>Total</th>
//                   <th>Remove</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.map((item, i) => (
//                   <tr key={item._id}>
//                     <td>{i + 1}</td>
//                     <td>{item.name}</td>
//                     <td>{item.company}</td>
//                     <td>৳ {item.price}</td>
//                     <td className="flex items-center justify-center gap-2">
//                       <button
//                         onClick={() => decreaseQuantity(item._id)}
//                         className="btn btn-xs"
//                       >
//                         −
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button
//                         onClick={() => increaseQuantity(item._id)}
//                         className="btn btn-xs"
//                       >
//                         +
//                       </button>
//                     </td>
//                     <td>৳ {(item.price * item.quantity).toFixed(2)}</td>
//                     <td>
//                       <button
//                         onClick={() => removeFromCart(item._id)}
//                         className="btn btn-sm btn-error"
//                       >
//                         Remove
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="mt-8 flex flex-col items-center gap-4">
//             <p className="text-xl font-semibold">
//               Grand Total: <span className="text-green-600">৳ {total.toFixed(2)}</span>
//             </p>

//             <div className="flex gap-4">
//               <button onClick={clearCart} className="btn btn-warning">
//                 Clear All
//               </button>
//               <Link to="/checkout" className="btn btn-success">
//                 Proceed to Checkout
//               </Link>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;





import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
  } = useCart();

  const total = getTotalPrice();

  return (
    <div className="min-h-screen px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-6 text-[#0AA946]">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">No items in the cart yet.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="table w-full max-w-5xl mx-auto border">
              <thead>
                <tr className="bg-green-100 text-black">
                  <th>#</th>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Price/Unit (৳)</th>
                  <th>Quantity</th>
                  <th>Total (৳)</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, i) => (
                  <tr key={item._id}>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.company}</td>
                    <td>৳ {parseFloat(item.price).toFixed(2)}</td>
                    <td className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(item._id)}
                        className="btn btn-xs"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item._id)}
                        className="btn btn-xs"
                      >
                        +
                      </button>
                    </td>
                    <td>৳ {(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="btn btn-sm btn-error"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-xl font-semibold">
              Grand Total:{" "}
              <span className="text-green-600">
                ৳ {parseFloat(total).toFixed(2)}
              </span>
            </p>

            <div className="flex gap-4">
              <button onClick={clearCart} className="btn btn-warning">
                Clear All
              </button>
              <Link to="/checkout" className="btn btn-success">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;


