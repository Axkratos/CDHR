import React from 'react';
import logo from '/logo.jpg'; // Assuming logo.jpg is in the same directory as this file

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          {/* Left Section */}
          <div className="w-full lg:w-2/5 -mx-6">
            <div className="px-6">
              <img src={logo} alt="CDHR Nepal Logo" className="w-28 h-auto mb-4" />
              <p className="max-w-sm text-lg text-gray-600">
                CDHR Nepal is dedicated to preserving democratic rights and promoting human rights through education, advocacy, and grassroots mobilization. Join us in empowering communities and uplifting lives.
              </p>
              <div className="flex mt-6 -mx-2">
                <a
                  href="#"
                  className="mx-3 text-gray-600 hover:text-blue-500 transition-colors duration-300 text-xl"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="mx-3 text-gray-600 hover:text-blue-500 transition-colors duration-300 text-xl"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="mx-3 text-gray-600 hover:text-blue-500 transition-colors duration-300 text-xl"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-8 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-xl text-gray-700 uppercase">About Us</h3>
                <a
                  href="#mission"
                  className="block mt-4 text-lg text-gray-600 hover:underline"
                >
                  Mission
                </a>
                <a
                  href="#team"
                  className="block mt-4 text-lg text-gray-600 hover:underline"
                >
                  Team
                </a>
                <a
                  href="#contact"
                  className="block mt-4 text-lg text-gray-600 hover:underline"
                >
                  Contact
                </a>
              </div>

              <div>
                <h3 className="text-xl text-gray-700 uppercase">Programs</h3>
                <a
                  href="#education"
                  className="block mt-4 text-lg text-gray-600 hover:underline"
                >
                  Education Initiatives
                </a>
                <a
                  href="#advocacy"
                  className="block mt-4 text-lg text-gray-600 hover:underline"
                >
                  Advocacy Campaigns
                </a>
                <a
                  href="#community"
                  className="block mt-4 text-lg text-gray-600 hover:underline"
                >
                  Community Outreach
                </a>
              </div>

              <div>
                <h3 className="text-xl text-gray-700 uppercase">Resources</h3>
                <a
                  href="#publications"
                  className="block mt-4 text-lg text-gray-600 hover:underline"
                >
                  Publications
                </a>
                <a
                  href="#reports"
                  className="block mt-4 text-lg text-gray-600 hover:underline"
                >
                  Reports
                </a>
                <a
                  href="#media"
                  className="block mt-4 text-lg text-gray-600 hover:underline"
                >
                  Media Kit
                </a>
              </div>

              <div>
                <h3 className="text-xl text-gray-700 uppercase">Contact</h3>
                <span className="block mt-4 text-lg text-gray-600">
                  +977-1-XXXXXXX
                </span>
                <span className="block mt-4 text-lg text-gray-600">
                  info@cdhrnepal.org
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-8 bg-gray-200 border-none" />

        <div>
          <p className="text-center text-lg text-gray-600">
            © CDHR Nepal {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
