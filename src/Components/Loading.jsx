import { ThreeDot } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-b from-white to-green-50 px-4">
      <ThreeDot color="#16a34a" size="medium" /> {/* green-600 */}
      <p className="mt-4 text-sm text-gray-500">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
