// import { FaCapsules, FaShippingFast, FaThumbsUp, FaHeadset } from "react-icons/fa";

// const WhyChooseUs = () => {
//   const reasons = [
//     {
//       icon: <FaCapsules className="text-4xl text-green-600" />,
//       title: "Genuine Medicines",
//       desc: "We ensure that all medicines are 100% authentic and verified from top pharmaceutical companies.",
//     },
//     {
//       icon: <FaShippingFast className="text-4xl text-green-600" />,
//       title: "Fast Delivery",
//       desc: "Get your medicines delivered at your doorstep within 24 hours with real-time tracking.",
//     },
//     {
//       icon: <FaThumbsUp className="text-4xl text-green-600" />,
//       title: "Customer Satisfaction",
//       desc: "Our dedicated customer support and easy return policy make your experience smooth.",
//     },
//     {
//       icon: <FaHeadset className="text-4xl text-green-600" />,
//       title: "24/7 Support",
//       desc: "Need help? Contact our support anytime via chat, email, or phone.",
//     },
//   ];

//   return (
//     <section className="my-20 px-4 md:px-12">
//       <h2 className="text-3xl font-bold text-center mb-12 flex justify-center items-center gap-2">
//         <span className="text-yellow-500 text-4xl">🌟</span> Why Choose Us
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {reasons.map((reason, index) => (
//           <div
//             key={index}
//             className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl text-center transition-all duration-300"
//           >
//             <div className="flex justify-center mb-4">{reason.icon}</div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">{reason.title}</h3>
//             <p className="text-gray-600 text-sm">{reason.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;



import { FaCapsules, FaShippingFast, FaThumbsUp, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaCapsules className="text-4xl text-green-600" />,
      title: "Genuine Medicines",
      desc: "All medicines are 100% authentic and sourced directly from trusted pharmaceutical brands.",
    },
    {
      icon: <FaShippingFast className="text-4xl text-green-600" />,
      title: "Fast Delivery",
      desc: "Superfast delivery across Bangladesh within 24 hours. Track your order anytime.",
    },
    {
      icon: <FaThumbsUp className="text-4xl text-green-600" />,
      title: "Trusted by Thousands",
      desc: "Thousands of customers rely on MediMart for hassle-free medicine delivery.",
    },
    {
      icon: <FaHeadset className="text-4xl text-green-600" />,
      title: "24/7 Customer Support",
      desc: "Get assistance anytime through live chat, email or call – we're always here to help.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-16 px-4 md:px-12 rounded-xl my-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
        Why Choose <span className="text-green-600">MediMart?</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white border border-green-100 shadow hover:shadow-lg rounded-xl p-6 text-center transition-transform transform hover:-translate-y-1"
          >
            <div className="flex justify-center items-center mb-4">
              {reason.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{reason.title}</h3>
            <p className="text-gray-600 text-sm">{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

