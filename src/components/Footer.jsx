import React from 'react'; 
import logo from '/logo.png'; // Ensure the correct path to your logo

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container p-6 mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="CDHR Nepal Logo" className="w-24 h-auto lg:w-20" />
          </div>

          {/* Text Content */}
          <div className="text-center">
            <p className="text-base text-gray-600">
              CDHR Nepal is dedicated to preserving democratic rights and promoting human rights through education, advocacy, and grassroots mobilization. Join us in empowering communities and uplifting lives.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-lg"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://x.com/cdhrnepal2024?t=wSUSWBUL-W-_7ovdjq2wdA&s=09"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-lg"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
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
            <a
              href="https://www.youtube.com/@CenterforDemocracyandHumanRigh"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-lg"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
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
