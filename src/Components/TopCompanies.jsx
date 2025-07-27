

// const companies = [
//   {
//     name: "Square Pharma",
//     image: "https://i.postimg.cc/bvJtngns/sauare-pharma-logo.png",
//   },
//   {
//     name: "Beximco Pharma",
//     image: "https://i.postimg.cc/W1K29wKD/beximco-pharmaceuticals-ltd-beximco-pharma-logo-vector.png",
//   },
//   {
//     name: "Incepta Pharma",
//     image: "https://i.postimg.cc/J4f6Pyxr/Incepta-780647819.jpg",
//   },
//   {
//     name: "Renata Limited",
//     image: "https://i.postimg.cc/502n6843/renata-logo-post.jpg",
//   },
//   {
//     name: "ACI Limited",
//     image: "https://i.postimg.cc/Px7zJcFX/unnamed-1550074311993.webp",
//   },
//   {
//     name: "Opsonin Pharma",
//     image: "https://i.postimg.cc/VkwTzrC7/logo.png",
//   },
// ];

// const TopCompanies = () => {
//   return (
//     <section className="bg-gradient-to-b from-white to-green-50 py-16 px-4 md:px-12 my-20">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
//         Trusted by Leading <span className="text-green-600">Pharma Brands</span>
//       </h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
//         {companies.map((company, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 w-40 h-24 flex items-center justify-center"
//           >
//             <img
//               src={company.image}
//               alt={company.name}
//               title={company.name}
//               className="object-contain h-16 w-32"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TopCompanies;



const companies = [
  {
    name: "Square Pharma",
    image: "https://i.postimg.cc/bvJtngns/sauare-pharma-logo.png",
  },
  {
    name: "Beximco Pharma",
    image: "https://i.postimg.cc/W1K29wKD/beximco-pharmaceuticals-ltd-beximco-pharma-logo-vector.png",
  },
  {
    name: "Incepta Pharma",
    image: "https://i.postimg.cc/J4f6Pyxr/Incepta-780647819.jpg",
  },
  {
    name: "Renata Limited",
    image: "https://i.postimg.cc/502n6843/renata-logo-post.jpg",
  },
  {
    name: "ACI Limited",
    image: "https://i.postimg.cc/Px7zJcFX/unnamed-1550074311993.webp",
  },
  {
    name: "Opsonin Pharma",
    image: "https://i.postimg.cc/VkwTzrC7/logo.png",
  },
];

const TopCompanies = () => {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-16 px-4 md:px-12 my-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
        Trusted by Leading <span className="text-green-600">Pharma Brands</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
        {companies.map((company, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 w-40 h-24 flex items-center justify-center"
          >
            <img
              src={company.image}
              alt={company.name}
              title={company.name}
              className="object-contain h-16 w-32 animate-float" //  Animation added
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCompanies;

