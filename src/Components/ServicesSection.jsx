import { FaTruck, FaHeadset, FaCheckCircle, FaLock } from "react-icons/fa";

const OurServices = () => {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-12 px-4 md:px-12 rounded-xl my-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Service 1 */}
        <div className="bg-white border border-green-100 shadow rounded-xl p-6 text-center hover:shadow-lg transition">
          <FaTruck className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">Fast Delivery</h3>
          <p className="text-gray-600 text-sm mt-2">
            Get your medicines delivered quickly and safely at your doorstep.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white border border-green-100 shadow rounded-xl p-6 text-center hover:shadow-lg transition">
          <FaHeadset className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">24/7 Support</h3>
          <p className="text-gray-600 text-sm mt-2">
            Our customer care team is available round the clock to assist you.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white border border-green-100 shadow rounded-xl p-6 text-center hover:shadow-lg transition">
          <FaCheckCircle className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">
            Verified Medicines
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            We provide only 100% authentic and government-approved medicines.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-white border border-green-100 shadow rounded-xl p-6 text-center hover:shadow-lg transition">
          <FaLock className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">
            Secure Payments
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Pay online with complete safety and data protection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
