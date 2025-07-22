import React from "react";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl">
      <img
        src={car.imageUrl}
        alt={car.model}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      <div className="p-5 space-y-1">
        <h3 className="text-lg font-bold text-[#DD6B20] dark:text-white line-clamp-1">
          {car.model}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          💰 ${car.dailyPrice}/day
        </p>

        <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-gray-700 dark:text-gray-300">
          <p>
            📍 <strong>Location:</strong> {car.location}
          </p>
          <p>
            📦 <strong>Status:</strong> {car.availability}
          </p>
        </div>

        <button
          onClick={() => navigate(`/car/${car._id}`)}
          className="w-full mt-4 bg-[#DD6B20] hover:bg-[#c5530c] text-white py-2 rounded text-sm font-semibold transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
