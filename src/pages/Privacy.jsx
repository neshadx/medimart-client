

// src/pages/Privacy.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <div className="min-h-[80vh] px-4 sm:px-6 md:px-10 py-12 max-w-4xl mx-auto">
      <Helmet>
        <title>Privacy Policy | SwiftCarz</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-[#DD6B20] mb-6">Privacy Policy</h2>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        At <span className="font-semibold">SwiftCarz</span>, your privacy is our top priority. This policy outlines how we collect, use, and protect your personal information while using our platform.
      </p>

      <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">1. Information We Collect</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        We may collect your name, email, profile picture, and car booking history. This information is gathered when you sign up, log in, or interact with our booking features.
      </p>

      <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">2. How We Use Your Data</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Your data is used to:
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Authenticate your identity</li>
          <li>Enable car booking, modification, and cancellation</li>
          <li>Provide a personalized user experience</li>
        </ul>
      </p>

      <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">3. Data Protection</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        We store your information securely using encryption and limited-access databases. Sensitive data like JWT tokens are handled through HTTP-only cookies for enhanced protection.
      </p>

      <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">4. Third-Party Sharing</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        SwiftCarz does <span className="font-semibold">not</span> sell, rent, or share your personal information with any third party without your explicit consent, unless required by law.
      </p>

      <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">5. Account & Data Deletion</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        You have the right to delete your account and all associated data at any time. Simply contact our support team at <span className="font-medium">support@swiftcarz.com</span>.
      </p>

      <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">6. Policy Updates</h3>
      <p className="text-gray-700 dark:text-gray-300">
        We may occasionally update our privacy policy. Continued use of the platform indicates your acceptance of any changes.
      </p>
    </div>
  );
};

export default Privacy;
