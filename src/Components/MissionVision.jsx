// const MissionVision = () => {
//   return (
//     <section className="bg-gradient-to-b from-white to-green-50 py-16 px-4 md:px-12 rounded-xl my-20">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
//         Our <span className="text-green-600">Mission & Vision</span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//         <div className="bg-white border border-green-100 shadow hover:shadow-lg rounded-xl p-6 transition">
//           <h3 className="text-xl font-semibold text-green-700 mb-4">🎯 Our Mission</h3>
//           <p className="text-gray-600 leading-relaxed">
//             To make healthcare accessible to every household in Bangladesh by delivering 
//             genuine medicines and healthcare essentials quickly, safely, and affordably.
//           </p>
//         </div>
//         <div className="bg-white border border-green-100 shadow hover:shadow-lg rounded-xl p-6 transition">
//           <h3 className="text-xl font-semibold text-green-700 mb-4">🌟 Our Vision</h3>
//           <p className="text-gray-600 leading-relaxed">
//             To become Bangladesh’s most trusted digital pharmacy, ensuring no one 
//             ever struggles to find authentic medicines and healthcare support.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MissionVision;

import { FaBullseye, FaRegLightbulb } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-8 px-4 md:px-12 rounded-xl my-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">
        Our Mission & Vision
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Mission */}
        <div className="bg-white border border-green-100 shadow rounded-xl p-6 text-center">
          <FaBullseye className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h3>
          <p className="text-gray-600 text-sm">
            To make healthcare accessible to every household in Bangladesh by
            delivering genuine medicines and healthcare essentials quickly,
            safely, and affordably.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white border border-green-100 shadow rounded-xl p-6 text-center">
          <FaRegLightbulb className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Our Vision
          </h3>
          <p className="text-gray-600 text-sm">
            To become Bangladesh’s most trusted digital pharmacy, ensuring no one
            ever struggles to find authentic medicines and healthcare support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

