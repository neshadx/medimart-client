import React, { useState } from "react";
import { toast } from "react-toastify";

const UpdateCarModal = ({ car, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    model: car.model,
    dailyPrice: car.dailyPrice,
    availability: car.availability,
    registrationNo: car.registrationNo,
    features: car.features,
    description: car.description,
    imageUrl: car.imageUrl,
    location: car.location,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/cars/${car._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // for cookie-based JWT
          body: JSON.stringify(formData),
        }
      );

      const result = await res.json();

      if (res.ok) {
        toast.success("Car updated successfully!");
        onUpdate({ ...car, ...formData });
      } else {
        throw new Error(result?.error || "Failed to update");
      }
    } catch (err) {
      toast.error("❌ Failed to update car.");
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 w-full max-w-2xl relative">
        <h3 className="text-2xl font-bold mb-4 text-[#DD6B20] dark:text-white">Update Car</h3>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Car Model"
            required
          />
          <input
            type="number"
            name="dailyPrice"
            value={formData.dailyPrice}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Price"
            required
          />
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="input input-bordered w-full"
          >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
          <input
            type="text"
            name="registrationNo"
            value={formData.registrationNo}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Registration No"
          />
          <input
            type="text"
            name="features"
            value={formData.features}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Features"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Location"
          />
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="input input-bordered w-full col-span-2"
            placeholder="Image URL"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered col-span-2"
            placeholder="Description"
            required
          ></textarea>

          <div className="col-span-2 flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#DD6B20] hover:bg-[#c25e16] text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCarModal;
