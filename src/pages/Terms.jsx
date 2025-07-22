


// src/pages/Terms.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <div className="min-h-[80vh] px-4 sm:px-6 md:px-10 py-12 max-w-4xl mx-auto">
      <Helmet>
        <title>Terms & Conditions | SwiftCarz</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-[#DD6B20] mb-6">Terms & Conditions</h2>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Welcome to <span className="font-semibold">SwiftCarz</span>! By accessing and using our platform, you agree to abide by the terms and conditions outlined below. Please read them carefully before using our services.
      </p>

      <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">1. User Accounts</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        All users must register with a valid email address. You are responsible for maintaining the confidentiality of your login information. SwiftCarz is not responsible for unauthorized access to your account.
      </p>

      <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">2. Car Booking & Cancellations</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Users can browse, book, or cancel car reservations directly through the platform. Cancellations must be made before the booking start time. SwiftCarz reserves the right to deny future bookings for repeated misuse.
      </p>

      <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">3. Use of Vehicles</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Users must not use vehicles for illegal purposes. Misuse or third-party sharing of booked vehicles is strictly prohibited. SwiftCarz is not liable for any issues arising from vehicle condition, pickup, or handover.
      </p>

      <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">4. Privacy</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        We collect limited user data (name, email, photo) to offer personalized experiences. This data is stored securely and never shared without consent. Please refer to our full Privacy Policy for details.
      </p>

      <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">5. Modifications</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        SwiftCarz reserves the right to update or modify these terms at any time. Continued use of the platform indicates your acceptance of the revised terms.
      </p>

      <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">6. Contact</h3>
      <p className="text-gray-700 dark:text-gray-300">
        If you have any questions about these Terms & Conditions, please contact us at: <span className="font-medium">support@swiftcarz.com</span>
      </p>
    </div>
  );
};

export default Terms;

