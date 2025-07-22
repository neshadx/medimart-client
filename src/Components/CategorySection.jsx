// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";

// const CategorySection = () => {
//   const navigate = useNavigate();

//   const { data: categories = [], isLoading } = useQuery({
//     queryKey: ["categories"],
//     queryFn: async () => {
//       const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/categories`);
//       return res.json();
//     },
//   });

//   if (isLoading) {
//     return <p className="text-center py-6">Loading categories...</p>;
//   }

//   return (
//     <section className="my-20 px-4 max-w-7xl mx-auto">
//       <h2 className="text-3xl md:text-4xl font-bold text-[#2F855A] text-center mb-12">
//         Browse by Categories
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {categories.slice(0, 6).map((category) => (
//           <div
//             key={category._id}
//             onClick={() => navigate(`/category/${category._id}`)}
//             className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
//           >
//             <img
//               src={category.image}
//               alt={category.name}
//               className="w-full h-40 object-cover"
//             />
//             <div className="text-center py-3 font-semibold text-gray-800">
//               {category.name}
//               <p className="text-sm text-gray-500 mt-1">
//                 {category.totalMedicines || 0} medicines
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategorySection;



import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const CategorySection = () => {
  const navigate = useNavigate();

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/categories`);
      return res.json();
    },
  });

  if (isLoading) {
    return <p className="text-center py-6">Loading categories...</p>;
  }

  return (
    <section className="my-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#2F855A] text-center mb-12">
        Browse by Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.slice(0, 6).map((category) => (
          <div
            key={category._id}
            onClick={() => navigate(`/category/${category._id}`)}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover"
            />
            <div className="text-center py-3 font-semibold text-gray-800">
              {category.name}
              <p className="text-sm text-gray-500 mt-1">
                {category.totalMedicines || 0} medicines
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;

