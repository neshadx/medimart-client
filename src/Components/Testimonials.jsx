// const testimonials = [
//   {
//     name: "Tanvir Hasan",
//     review:
//       "MediMart is the most reliable online pharmacy. Their delivery is super fast and all medicines are genuine.",
//     image: "https://i.ibb.co/gT3n4JY/user1.png",
//   },
//   {
//     name: "Farzana Ahmed",
//     review:
//       "I’ve ordered multiple times and never been disappointed. Customer service is also excellent!",
//     image: "https://i.ibb.co/G0rVRrx/user2.png",
//   },
//   {
//     name: "Rafiq Islam",
//     review:
//       "Buying medicine has never been easier. Highly recommend MediMart to everyone!",
//     image: "https://i.ibb.co/y5kCWLp/user3.png",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="my-20 px-4 md:px-12">
//       <h2 className="text-3xl font-bold text-center mb-12 flex justify-center items-center gap-2">
//         <span className="text-yellow-500 text-4xl">💬</span> What Our Customers Say
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {testimonials.map((t, i) => (
//           <div
//             key={i}
//             className="bg-white border border-gray-200 rounded-xl shadow p-6 text-center hover:shadow-lg transition"
//           >
//             <img
//               src={t.image}
//               alt={t.name}
//               className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
//             />
//             <h3 className="text-lg font-semibold mb-2 text-gray-800">{t.name}</h3>
//             <p className="text-gray-600 text-sm">{t.review}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



const testimonials = [
  {
    name: "Tanvir Hasan",
    review:
      "MediMart is the most reliable online pharmacy. Their delivery is super fast and all medicines are genuine.",
    image: "https://i.ibb.co/gT3n4JY/user1.png",
  },
  {
    name: "Farzana Ahmed",
    review:
      "I’ve ordered multiple times and never been disappointed. Customer service is also excellent!",
    image: "https://i.ibb.co/G0rVRrx/user2.png",
  },
  {
    name: "Rafiq Islam",
    review:
      "Buying medicine has never been easier. Highly recommend MediMart to everyone!",
    image: "https://i.ibb.co/y5kCWLp/user3.png",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 px-4 md:px-12 rounded-xl my-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12 flex justify-center items-center gap-2">
        <span className="text-green-600 text-4xl">💬</span> What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white border border-green-100 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow"
            />
            <h3 className="text-lg font-semibold mb-2 text-green-700">{t.name}</h3>
            <p className="text-gray-600 text-sm italic">“{t.review}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
