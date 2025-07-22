const Newsletter = () => {
  return (
    <section className="my-20 px-4 md:px-12">
      <div className="max-w-2xl mx-auto text-center bg-white border border-gray-200 p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-4">📬 Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Stay updated with the latest offers, health tips, and new arrivals.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="w-full sm:w-2/3 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring focus:border-blue-500 transition"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
