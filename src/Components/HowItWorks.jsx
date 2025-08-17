// import { FaSearch, FaShoppingCart, FaMoneyCheckAlt, FaBoxOpen } from "react-icons/fa";

// const HowItWorks = () => {
//   return (
//     <section className="bg-gray-50 py-16 px-4 md:px-12">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">
//         How It Works
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
//         {/* Step 1 */}
//         <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
//           <FaSearch className="text-4xl text-green-600 mx-auto mb-4" />
//           <h3 className="text-lg font-semibold text-gray-800">Search Medicine</h3>
//           <p className="text-gray-600 text-sm mt-2">
//             Find your required medicines easily from our huge collection.
//           </p>
//         </div>

//         {/* Step 2 */}
//         <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
//           <FaShoppingCart className="text-4xl text-green-600 mx-auto mb-4" />
//           <h3 className="text-lg font-semibold text-gray-800">Add to Cart</h3>
//           <p className="text-gray-600 text-sm mt-2">
//             Select medicines and add them to your cart for a quick checkout.
//           </p>
//         </div>

//         {/* Step 3 */}
//         <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
//           <FaMoneyCheckAlt className="text-4xl text-green-600 mx-auto mb-4" />
//           <h3 className="text-lg font-semibold text-gray-800">Secure Payment</h3>
//           <p className="text-gray-600 text-sm mt-2">
//             Pay easily using safe and trusted payment methods.
//           </p>
//         </div>

//         {/* Step 4 */}
//         <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
//           <FaBoxOpen className="text-4xl text-green-600 mx-auto mb-4" />
//           <h3 className="text-lg font-semibold text-gray-800">Get Delivery</h3>
//           <p className="text-gray-600 text-sm mt-2">
//             Sit back and relax while we deliver your medicines quickly.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;


import { FaSearch, FaShoppingCart, FaMoneyCheckAlt, FaBoxOpen } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="text-4xl text-green-600 mx-auto mb-4" />,
    title: "Search Medicine",
    desc: "Find your required medicines easily from our huge collection.",
  },
  {
    icon: <FaShoppingCart className="text-4xl text-green-600 mx-auto mb-4" />,
    title: "Add to Cart",
    desc: "Select medicines and add them to your cart for a quick checkout.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-4xl text-green-600 mx-auto mb-4" />,
    title: "Secure Payment",
    desc: "Pay easily using safe and trusted payment methods.",
  },
  {
    icon: <FaBoxOpen className="text-4xl text-green-600 mx-auto mb-4" />,
    title: "Get Delivery",
    desc: "Sit back and relax while we deliver your medicines quickly.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-16 px-4 md:px-12 my-20 rounded-2xl">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-700 mb-14">
        How It <span className="text-green-600">Works</span>
      </h2>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-green-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center group"
          >
            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

