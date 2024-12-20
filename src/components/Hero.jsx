import { Globe } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-12 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-12 mx-auto max-w-7xl px-4 sm:mt-16 sm:px-6 md:mt-20 lg:mt-24 lg:px-8 xl:mt-32">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
                <span className="block">Empowering Democracy</span>
                <span className="block text-blue-600">Protecting Rights</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 sm:mt-8 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-10 md:text-2xl lg:mx-0">
                Working towards a more democratic and equitable Nepal through advocacy, education, and community engagement.
              </p>
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-5 md:text-xl md:px-12"
                  >
                    Get Involved
                  </a>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-4">
                  <a
                    href="#about"
                    className="w-full flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-5 md:text-xl md:px-12"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-72 w-full object-cover sm:h-80 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Nepal landscape"
        />
      </div>
    </div>
  );
}
