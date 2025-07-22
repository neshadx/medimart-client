import { FaCapsules, FaShippingFast, FaThumbsUp, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaCapsules className="text-4xl text-green-600" />,
      title: "Genuine Medicines",
      desc: "We ensure that all medicines are 100% authentic and verified from top pharmaceutical companies.",
    },
    {
      icon: <FaShippingFast className="text-4xl text-green-600" />,
      title: "Fast Delivery",
      desc: "Get your medicines delivered at your doorstep within 24 hours with real-time tracking.",
    },
    {
      icon: <FaThumbsUp className="text-4xl text-green-600" />,
      title: "Customer Satisfaction",
      desc: "Our dedicated customer support and easy return policy make your experience smooth.",
    },
    {
      icon: <FaHeadset className="text-4xl text-green-600" />,
      title: "24/7 Support",
      desc: "Need help? Contact our support anytime via chat, email, or phone.",
    },
  ];

  return (
    <section className="my-20 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-12 flex justify-center items-center gap-2">
        <span className="text-yellow-500 text-4xl">🌟</span> Why Choose Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl text-center transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{reason.title}</h3>
            <p className="text-gray-600 text-sm">{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
