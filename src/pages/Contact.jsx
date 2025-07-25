// import { Helmet } from "react-helmet-async";

// const Contact = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Contact Us | MediMart</title>
//       </Helmet>

//       <section className="min-h-screen bg-gradient-to-b from-white to-[#F9FDFB] py-20 px-4">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl font-bold text-center text-[#2F855A] mb-10">Contact Us</h1>

//           <div className="grid md:grid-cols-2 gap-10">
//             {/* Contact Info */}
//             <div className="space-y-5 text-gray-700">
//               <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
//               <p>If you have any questions, feedback, or need help — we're here for you.</p>

//               <div>
//                 <p className="font-medium">📧 Email:</p>
//                 <p className="text-sm text-gray-600">support@medimart.com</p>
//               </div>

//               <div>
//                 <p className="font-medium">📞 Phone:</p>
//                 <p className="text-sm text-gray-600">+880 1234-567890</p>
//               </div>

//               <div>
//                 <p className="font-medium">🏢 Address:</p>
//                 <p className="text-sm text-gray-600">Banani, Dhaka, Bangladesh</p>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <form className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F855A]"
//                   placeholder="Enter your name"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   required
//                   className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F855A]"
//                   placeholder="Enter your email"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//                 <textarea
//                   rows="4"
//                   required
//                   className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F855A]"
//                   placeholder="Type your message here..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="bg-[#2F855A] hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;



import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | MediMart</title>
      </Helmet>

      <section className="min-h-screen bg-[#F9FDFB] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#2F855A] mb-12">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Column - Info */}
            <div className="space-y-6 text-gray-700">
              <div>
                <h2 className="text-lg font-semibold mb-1">Customer Support</h2>
                <p className="text-sm text-gray-600">
                  We're here to help with any questions, concerns, or support you need.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-gray-600">support@medimart.com</p>
              </div>

              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-gray-600">+880 1234-567890</p>
              </div>

              <div>
                <p className="text-sm font-medium">Office</p>
                <p className="text-sm text-gray-600">Banani, Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Right Column - Form */}
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F855A]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F855A]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Write your message"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F855A]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#2F855A] hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

