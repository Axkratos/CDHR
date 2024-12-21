import React from 'react';
import Hero from '/hero.jpg';

export default function Header() {
  const handleGetInvolvedClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 lg:ml-12"> {/* Adjusted spacing with lg:ml-12 */}
            <div className="lg:max-w-lg">
              <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
                Empowering Communities <br />
                <span className="text-blue-600">Preserving Rights</span>
              </h1>
              <p className="mt-6 text-lg text-gray-700">
                Join us in strengthening democratic institutions, advocating for human rights,
                and ensuring the voices of every individual are heard. Together, we can create a just and equitable society.
              </p>
              <button
                onClick={handleGetInvolvedClick}
                className="w-full px-6 py-3 mt-8 text-lg font-medium text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                Get Involved
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="h-72 w-full object-cover sm:h-80 md:h-96 lg:w-full lg:h-full"
              src={Hero}
              alt="Nepal landscape"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
