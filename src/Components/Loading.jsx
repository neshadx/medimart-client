import { ThreeDot } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-white to-[#FDF4F0] dark:from-gray-900 dark:to-gray-950 px-4">
      <ThreeDot color="#DD6B20" size="medium" />
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
