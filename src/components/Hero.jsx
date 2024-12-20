import React from 'react';

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
                Empowering Communities <br />
                <span className="text-blue-600">Preserving Rights</span>
              </h1>
              <p className="mt-6 text-lg text-gray-700">
                Join us in strengthening democratic institutions, advocating for human rights,
                and ensuring the voices of every individual are heard. Together, we can create a just and equitable society.
              </p>
              <button className="w-full px-6 py-3 mt-8 text-lg font-medium text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                Get Involved
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="h-72 w-full object-cover sm:h-80 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Nepal landscape"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
