import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | MediMart</title>
        <meta name="description" content="Learn more about MediMart's mission and team." />
      </Helmet>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">
          About MediMart
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://i.postimg.cc/qq27CbGV/pexels-castorlystock-4058358.jpg"
              alt="About MediMart"
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Trusted Online Pharmacy
            </h2>
            <p className="text-gray-600 mb-4 text-justify">
              At MediMart, we believe healthcare should be simple, accessible, and reliable. Our platform brings authentic medicines to your doorstep with just a few clicks — saving you time, money, and effort.
            </p>
            <p className="text-gray-600 mb-4 text-justify">
              We partner with top pharmaceutical companies in Bangladesh to ensure quality, safety, and compliance. Our 24/7 customer support and fast delivery make us the most trusted online pharmacy in the country.
            </p>
            <p className="text-gray-600 text-justify">
              Whether it's regular prescriptions or emergency needs, we’re here to serve you with care and responsibility.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
