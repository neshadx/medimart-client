

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
//                 src={`${import.meta.env.VITE_API_URL}${item.image}`}
//                 alt={item.name || "Advertisement"}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
//                 <h2 className="text-xl md:text-3xl font-bold">
//                   {item.name || "Advertisement"}
//                 </h2>
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
//         className="rounded-2xl shadow-xl"
//       >
//         {banners.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative h-[220px] sm:h-[300px] md:h-[420px] lg:h-[480px] overflow-hidden rounded-2xl">
//               <img
//                 src={`${import.meta.env.VITE_API_URL}${item.image}`}
//                 alt={item.description?.slice(0, 40) || "Ad Banner"}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center pl-10 text-white">
//                 <h2 className="text-2xl md:text-4xl font-extrabold mb-2 drop-shadow">
//                   {item.title || ""}
//                 </h2>
//                 <p className="text-base md:text-lg max-w-xl drop-shadow">
//                   {item.description}
//                 </p>
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
        className="rounded-2xl shadow-xl"
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[240px] sm:h-[340px] md:h-[460px] lg:h-[500px] overflow-hidden rounded-2xl">
              <img
                src={`${import.meta.env.VITE_API_URL}${item.image}`}
                alt={item.title || "Ad"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center items-center text-center px-6">
                <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-sm">
                  {item.title || ""}
                </h2>
                <p className="text-white text-lg md:text-xl mt-2 max-w-2xl drop-shadow-md">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSlider;





