// src/Components/CategoryCard.jsx

import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { _id, name, image, totalMedicines } = category;

  return (
    <Link
      to={`/category/${_id}`}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">
          {totalMedicines} medicines
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
