

// import { Helmet } from "react-helmet-async";
// import BannerSlider from "../Components/BannerSlider";
// import CategorySection from "../Components/CategorySection";
// import WhyChooseUs from "../Components/WhyChooseUs";
// import TopCompanies from "../Components/TopCompanies";
// import Testimonials from "../Components/Testimonials";
// import Newsletter from "../Components/Newsletter";

// const Home = () => {
//   return (
//     <>
//       <Helmet>
//         <title>MediMart | Home</title>
//         <meta
//           name="description"
//           content="Buy your medicines online from trusted sellers across multiple categories. Safe, verified and delivered fast."
//         />
//       </Helmet>

//       {/* 🔁 Slider Section (Admin-managed advertised products) */}
//       <div className="my-10">
//         <BannerSlider />
//       </div>

//       {/* 📦 Category Cards */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <CategorySection />
//       </div>

//       {/* 🔥 Why Choose Us */}
//       <div className="bg-gray-50 py-10">
//         <div className="max-w-7xl mx-auto px-4">
//           <WhyChooseUs />
//         </div>
//       </div>

//       {/* 🏥 Top Pharma Companies */}
//       <div className="bg-white py-10">
//         <div className="max-w-7xl mx-auto px-4">
//           <TopCompanies />
//         </div>
//       </div>

//       {/* 💬 Testimonials */}
//       <div className="bg-gray-50 py-10">
//         <div className="max-w-7xl mx-auto px-4">
//           <Testimonials />
//         </div>
//       </div>

//       {/* 📬 Newsletter Subscription */}
//       <Newsletter />
//     </>
//   );
// };

// export default Home;


import { Helmet } from "react-helmet-async";
import BannerSlider from "../Components/BannerSlider";
import CategorySection from "../Components/CategorySection";
import DiscountedSlider from "../Components/DiscountedSlider"; //  added
import WhyChooseUs from "../Components/WhyChooseUs";
import TopCompanies from "../Components/TopCompanies";
import Testimonials from "../Components/Testimonials";
import Newsletter from "../Components/Newsletter";
import MissionVision from "../Components/MissionVision";
import ServicesSection from "../Components/ServicesSection";
import HowItWorks from "../Components/HowItWorks";



const Home = () => {
  return (
    <>
      <Helmet>
        <title>MediMart | Home</title>
        <meta
          name="description"
          content="Buy your medicines online from trusted sellers across multiple categories. Safe, verified and delivered fast."
        />
      </Helmet>

      {/*  Slider Section (Admin-managed advertised products) */}
      <div className="my-10">
        <BannerSlider />
      </div>

      {/*  Category Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <CategorySection />
      </div>

      {/*  Discounted Medicines (Challenge Part) */}
      <div className="bg-white py-10">
        <DiscountedSlider />
      </div>

      {/*  Why Choose Us */}
      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <WhyChooseUs />
        </div>
      </div>

      {/* Mission & Vision */}
<div className="bg-white py-10">
  <div className="max-w-7xl mx-auto px-4">
    <MissionVision />
  </div>
</div>

{/* Our Services */}
      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <ServicesSection />
        </div>
      </div>


{/* How It Works */}
<div className="bg-gray-50">
  <HowItWorks />
</div>

      {/*  Top Pharma Companies */}
      <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <TopCompanies />
        </div>
      </div>

      {/*  Testimonials */}
      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <Testimonials />
        </div>
      </div>

      {/*  Newsletter Subscription */}
      <Newsletter />
    </>
  );
};

export default Home;


