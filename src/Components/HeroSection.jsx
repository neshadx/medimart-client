import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <section className="w-full bg-base-100 py-10 md:py-16 px-4 md:px-10">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <Fade direction="up" cascade triggerOnce>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2F855A] leading-tight">
              Trusted Marketplace for <span className="text-[#38A169]">Medicines</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
              Discover affordable and authentic medicines from trusted vendors. We ensure fast delivery and secure checkout.
            </p>
            <Link to="/shop">
              <button className="btn bg-[#38A169] hover:bg-[#2F855A] text-white px-6">
                Explore Medicines
              </button>
            </Link>
          </Fade>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.ibb.co/mDpjpXF/medicine-banner.png"
            alt="Medicine Banner"
            className="w-full max-w-lg mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
