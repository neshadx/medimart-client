// import { useQuery } from "@tanstack/react-query";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Scrollbar } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import { useEffect } from "react";

// const DiscountedSlider = () => {
//   const {
//     data: medicines = [],
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["discountedMedicines"],
//     queryFn: async () => {
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/medicines/discounted`);
//       if (!res.ok) throw new Error("Failed to fetch");
//       return res.json();
//     },
//   });

//   useEffect(() => {
//     console.log("🚀 Discounted Medicines:", medicines);
//   }, [medicines]);

//   if (isLoading) return <div className="text-center py-10">Loading...</div>;
//   if (isError) return <div className="text-center py-10 text-red-500">Failed to load data.</div>;

//   if (medicines.length === 0) {
//     return (
//       <section className="my-16 px-4 md:px-12 text-center">
//         <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-2">
//           <span className="text-red-600 text-4xl">💊</span> Discounted Medicines
//         </h2>
//         <p className="text-gray-500">No discounted medicines available at the moment.</p>
//       </section>
//     );
//   }

//   return (
//     <section className="my-16 px-4 md:px-12">
//       <h2 className="text-3xl font-bold text-center mb-8 flex justify-center items-center gap-2">
//         <span className="text-red-600 text-4xl">💊</span> Discounted Medicines
//       </h2>

//       <Swiper
//         spaceBetween={20}
//         grabCursor={true}
//         freeMode={true}
//         scrollbar={{ draggable: true }}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 4 },
//         }}
//         modules={[Navigation, Scrollbar]}
//       >
//         {medicines.map((med) => (
//           <SwiperSlide key={med._id}>
//             <div className="bg-white border rounded-xl shadow-md p-4 text-center">
//               <img
//                 src={med.image}
//                 alt={med.name}
//                 className="h-40 w-full object-contain mb-2"
//               />
//               <h3 className="text-lg font-semibold">{med.name}</h3>
//               <p className="text-gray-500 line-through">${med.originalPrice}</p>
//               <p className="text-green-600 font-bold text-lg">${med.discountedPrice}</p>
//               <button className="mt-3 bg-blue-600 text-white text-sm py-1 px-4 rounded hover:bg-blue-700">
//                 Buy Now
//               </button>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default DiscountedSlider;


// import { useQuery } from "@tanstack/react-query";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import "swiper/css/autoplay";
// import { toast } from "react-toastify";
// import { useCart } from "../Context/CartContext";

// const DiscountedSlider = () => {
//   const { addToCart } = useCart();

//   const {
//     data: medicines = [],
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["discountedMedicines"],
//     queryFn: async () => {
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/medicines/discounted`);
//       if (!res.ok) throw new Error("Failed to fetch discounted medicines");
//       return res.json();
//     },
//   });

//   if (isLoading) {
//     return <div className="text-center py-10 text-gray-500">Loading discounted products...</div>;
//   }

//   if (isError) {
//     return <div className="text-center py-10 text-red-500">Failed to load discounted medicines.</div>;
//   }

//   if (medicines.length === 0) {
//     return (
//       <section className="my-16 px-4 md:px-12 text-center">
//         <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-2">
//           <span className="text-red-600 text-4xl">💊</span> Discounted Medicines
//         </h2>
//         <p className="text-gray-500">No discounted medicines available at the moment.</p>
//       </section>
//     );
//   }

//   const handleBuyNow = (med) => {
//     addToCart({
//       _id: med._id,
//       name: med.name,
//       company: med.company || "Unknown",
//       price: med.discountedPrice || med.originalPrice || 0,
//       image: med.image || "",
//       quantity: 1,
//     });
//     toast.success(`${med.name} added to cart!`);
//   };

//   return (
//     <section className="my-16 px-4 md:px-12">
//       <h2 className="text-3xl font-bold text-center mb-8 flex justify-center items-center gap-2">
//         <span className="text-red-600 text-4xl">💊</span> Discounted Medicines
//       </h2>

//       <Swiper
//         spaceBetween={20}
//         grabCursor={true}
//         freeMode={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         scrollbar={{ draggable: true }}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           640: { slidesPerView: 2 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 4 },
//         }}
//         modules={[Navigation, Scrollbar, Autoplay]}
//       >
//         {medicines.map((med) => (
//           <SwiperSlide key={med._id}>
//             <div className="bg-white border rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-all">
//               <img
//                 src={med.image}
//                 alt={med.name}
//                 className="h-40 w-full object-contain mb-2"
//               />
//               <h3 className="text-lg font-semibold">{med.name}</h3>
//               <p className="text-gray-500 line-through text-sm">${med.originalPrice}</p>
//               <p className="text-green-600 font-bold text-lg">${med.discountedPrice}</p>
//               <button
//                 className="mt-3 bg-green-600 text-white text-sm py-1 px-4 rounded hover:bg-green-700"
//                 onClick={() => handleBuyNow(med)}
//               >
//                 Buy Now
//               </button>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default DiscountedSlider;






import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { toast } from "react-toastify";
import { useCart } from "../Context/CartContext";

const DiscountedSlider = () => {
  const { addToCart } = useCart();

  const {
    data: medicines = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["discountedMedicines"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/medicines/discounted`);
      if (!res.ok) throw new Error("Failed to fetch discounted medicines");
      return res.json();
    },
  });

  const handleBuyNow = (med) => {
    addToCart({
      _id: med._id,
      name: med.name,
      company: med.company || "Unknown",
      price: med.discountedPrice || med.originalPrice || 0,
      image: med.image || "",
      quantity: 1,
    });
    toast.success(`${med.name} added to cart!`);
  };

  if (isLoading) {
    return <div className="text-center py-10 text-gray-500">Loading discounted medicines...</div>;
  }

  if (isError) {
    return <div className="text-center py-10 text-red-500">Failed to load discounted medicines.</div>;
  }

  if (medicines.length === 0) {
    return (
      <section className="my-16 px-4 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Discounted Medicines</h2>
        <p className="text-gray-500">No discounted medicines available at the moment.</p>
      </section>
    );
  }

  return (
    <section className="my-16 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#2F855A]">Discounted Medicines</h2>

      <Swiper
        spaceBetween={20}
        grabCursor={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation, Scrollbar, Autoplay]}
      >
        {medicines.map((med) => (
          <SwiperSlide key={med._id}>
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4 text-center hover:shadow-xl transition-all duration-300">
              <img
                src={med.image}
                alt={med.name}
                className="h-40 w-full object-contain mb-4 rounded"
              />
              <h3 className="text-lg font-semibold text-gray-800">{med.name}</h3>
              <p className="text-sm text-gray-500 line-through">৳{med.originalPrice}</p>
              <p className="text-green-600 font-bold text-xl">৳{med.discountedPrice}</p>
              <button
                className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-5 py-2 rounded"
                onClick={() => handleBuyNow(med)}
              >
                Buy Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default DiscountedSlider;


