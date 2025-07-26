// const companies = [
//   {
//     name: "Square Pharma",
//     image: "https://i.ibb.co/ZNRwpXP/square.png",
//   },
//   {
//     name: "Beximco Pharma",
//     image: "https://i.ibb.co/J27RRY9/beximco.png",
//   },
//   {
//     name: "Incepta Pharma",
//     image: "https://i.ibb.co/Ks5xBGY/incepta.png",
//   },
//   {
//     name: "Renata Limited",
//     image: "https://i.ibb.co/0t9vTP1/renata.png",
//   },
//   {
//     name: "ACI Limited",
//     image: "https://i.ibb.co/M6J6FLS/aci.png",
//   },
//   {
//     name: "Opsonin Pharma",
//     image: "https://i.ibb.co/jJjWqwm/opsonin.png",
//   },
// ];

// const TopCompanies = () => {
//   return (
//     <section className="my-20 px-4 md:px-12">
//       <h2 className="text-3xl font-bold text-center mb-12 flex justify-center items-center gap-2">
//         <span className="text-blue-500 text-4xl">🏢</span> Top Pharma Companies
//       </h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
//         {companies.map((company, idx) => (
//           <div
//             key={idx}
//             className="bg-white border border-gray-200 rounded-xl shadow-md p-4 w-full flex flex-col items-center hover:shadow-xl transition"
//           >
//             <img
//               src={company.image}
//               alt={company.name}
//               className="h-16 object-contain mb-3"
//             />
//             <p className="text-center text-gray-800 font-medium">{company.name}</p>
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
    image: "https://i.postimg.cc/g2zW9fD5/home01.jpg",
  },
  {
    name: "Beximco Pharma",
    image: "https://i.postimg.cc/tR3wXBYH/Rabbu-Reza-Beximco-Pharmaceutical-2.jpg",
  },
  {
    name: "Incepta Pharma",
    image: "https://i.ibb.co/Ks5xBGY/incepta.png",
  },
  {
    name: "Renata Limited",
    image: "https://i.ibb.co/0t9vTP1/renata.png",
  },
  {
    name: "ACI Limited",
    image: "https://i.ibb.co/M6J6FLS/aci.png",
  },
  {
    name: "Opsonin Pharma",
    image: "https://i.ibb.co/jJjWqwm/opsonin.png",
  },
];

const TopCompanies = () => {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-16 px-4 md:px-12 rounded-xl my-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
        Trusted by Top <span className="text-green-600">Pharma Companies</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
        {companies.map((company, idx) => (
          <div
            key={idx}
            className="bg-white border border-green-100 rounded-xl shadow hover:shadow-lg p-4 w-full flex flex-col items-center transition-transform transform hover:-translate-y-1"
          >
            <img
              src={company.image}
              alt={company.name}
              className="h-16 object-contain mb-3 grayscale hover:grayscale-0 transition"
            />
            <p className="text-center text-gray-700 font-semibold text-sm">
              {company.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCompanies;

