import React from 'react';

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800">Coming Soon</h1>
        <p className="mt-4 text-xl text-gray-600">
          This page is under development. Stay tuned!
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
}
