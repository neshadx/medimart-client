// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const BannerSlider = () => {
//   const { data: banners = [], isLoading } = useQuery({
//     queryKey: ["advertisedProducts"],
//     queryFn: async () => {
//       const res = await fetch("http://localhost:5000/");
//       return res.json();
//     },
//   });

//   if (isLoading) return <p className="text-center py-6">Loading slider...</p>;

//   return (
//     <section className="w-full px-4 md:px-10 py-6 md:py-10">
//       <Swiper
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         modules={[Pagination, Autoplay]}
//         className="rounded-xl shadow-md"
//       >
//         {banners.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
//                 <h2 className="text-xl md:text-3xl font-bold">{item.name}</h2>
//                 <p className="text-sm md:text-base mt-2 max-w-xl">{item.description}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default BannerSlider;



// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const BannerSlider = () => {
//   const { data: banners = [], isLoading } = useQuery({
//     queryKey: ["advertisedProducts"],
//     queryFn: async () => {
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/advertised`);
//       if (!res.ok) throw new Error("Failed to fetch slider");
//       return res.json();
//     },
//   });

//   if (isLoading)
//     return <p className="text-center py-6 text-lg text-gray-500">Loading slider...</p>;

//   if (!banners.length)
//     return <p className="text-center py-6 text-red-400">No advertised products found.</p>;

//   return (
//     <section className="w-full px-4 md:px-10 py-6 md:py-10">
//       <Swiper
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         modules={[Pagination, Autoplay]}
//         className="rounded-xl shadow-md"
//       >
//         {banners.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
//                 <h2 className="text-xl md:text-3xl font-bold">{item.name}</h2>
//                 <p className="text-sm md:text-base mt-2 max-w-xl">{item.description}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default BannerSlider;


import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BannerSlider = () => {
  const { data: banners = [], isLoading } = useQuery({
    queryKey: ["advertisedProducts"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/advertised`);
      if (!res.ok) throw new Error("Failed to fetch slider");
      return res.json();
    },
  });

  if (isLoading)
    return <p className="text-center py-6 text-lg text-gray-500">Loading slider...</p>;

  if (!banners.length)
    return <p className="text-center py-6 text-red-400">No advertised products found.</p>;

  return (
    <section className="w-full px-4 md:px-10 py-6 md:py-10">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="rounded-xl shadow-md"
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl">
              <img
                src={`${import.meta.env.VITE_API_URL}${item.image}`}
                alt={item.name || "Advertisement"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
                <h2 className="text-xl md:text-3xl font-bold">
                  {item.name || "Advertisement"}
                </h2>
                <p className="text-sm md:text-base mt-2 max-w-xl">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSlider;



