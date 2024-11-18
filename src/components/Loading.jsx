import React from "react";
import { Car } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-blue-50">
      {/* Main Loading Container */}
      <div className="text-center p-10 rounded-lg shadow-lg bg-white">
        {/* Animated Car Icon */}
        <div className="relative">
          <Car
            className="w-20 h-20 text-blue-500 animate-bounce mx-auto mb-6"
            strokeWidth={1.5}
          />

          {/* Animated Dots beneath the car */}
          <div className="flex justify-center gap-2 mt-4">
            <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-150"></span>
            <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-300"></span>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-3xl font-bold text-blue-900 mt-8 mb-3">
          Loading...
        </h2>

        {/* Loading Message */}
        <p className="text-blue-600 text-sm">
          Sit tight! We’re preparing something amazing for you.
        </p>

        {/* Loading Progress Bar */}
        <div className="mt-10 w-72 h-2 bg-blue-200 rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-full animate-loading-progress"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-progress {
          0% {
            left: -100%;
          }
          50% {
            left: 0%;
          }
          100% {
            left: 100%;
          }
        }
        .animate-loading-progress {
          animation: loading-progress 2.5s ease-in-out infinite;
          width: 50%;
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
