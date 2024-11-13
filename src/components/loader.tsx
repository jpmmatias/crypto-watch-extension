import React from 'react';

export default function Loader() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px] w-full ">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-blue-500 rounded-full opacity-75 animate-pulse"></div>
          </div>
        </div>
        <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300 animate-pulse">
          Loading Crypto Data...
        </p>
        <div className="mt-2 flex space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    )
}