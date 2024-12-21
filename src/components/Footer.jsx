import React from 'react';
import logo from '/logo.png'; // Ensure the correct path to your logo

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container p-6 mx-auto">
      <div className="flex items-center justify-center gap-4 lg:gap-6 w-full">
  {/* Left Section - Logo */}
  <div className="flex-shrink-0">
    <img src={logo} alt="CDHR Nepal Logo" className="w-24 h-auto lg:w-28" />
  </div>

  {/* Right Section - Text Content */}
  <div className="flex-1 max-w-lg text-center lg:text-left">
    <p className="text-base text-gray-600">
      CDHR Nepal is dedicated to preserving democratic rights and promoting human rights through education, advocacy, and grassroots mobilization. Join us in empowering communities and uplifting lives.
    </p>
    <div className="flex justify-center lg:justify-start mt-4 space-x-4">
      <a
        href="#"
        className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-lg"
        aria-label="Facebook"
      >
        <i className="fab fa-facebook-f"></i>
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-lg"
        aria-label="Twitter"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-lg"
        aria-label="Instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  </div>
</div>




        <hr className="h-px my-6 bg-gray-200 border-none" />

        <div>
          <p className="text-center text-sm text-gray-600">
            © CDHR Nepal {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
