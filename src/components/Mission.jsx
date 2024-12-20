import React from 'react';
import { FaBullseye, FaHeart, FaUsers, FaHandHoldingHeart } from 'react-icons/fa';

export default function Mission() {
  const values = [
    {
      icon: FaBullseye,
      title: 'Our Mission',
      description:
        'To strengthen democratic institutions and protect human rights in Nepal through advocacy, education, and grassroots mobilization.',
    },
    {
      icon: FaHeart,
      title: 'Our Vision',
      description:
        'A Nepal where democracy thrives, human rights are protected, and every citizen has the opportunity to participate in governance.',
    },
    {
      icon: FaUsers,
      title: 'Our Values',
      description:
        'Integrity, transparency, inclusivity, and commitment to democratic principles guide everything we do.',
    },
  ];

  const additionalContent = [
    {
      icon: FaHandHoldingHeart,
      title: 'Community Outreach',
      description:
        'Collaborating with local communities to build awareness, resolve conflicts, and promote a democratic culture.',
    },
    {
      icon: FaUsers,
      title: 'Capacity Building',
      description:
        'Equipping individuals and organizations with the skills needed to advocate for their rights and democratic ideals.',
    },
  ];

  return (
    <section id="mission" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="lg:text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
            Our Mission, Vision & Values
          </h2>
          <p className="mt-8 max-w-3xl text-xl text-gray-600 lg:mx-auto">
            We are dedicated to empowering Nepal's citizens and institutions through transparent governance, human rights advocacy, and inclusive practices.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="relative bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-600 text-white mb-6">
                  <Icon className="h-10 w-10" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-lg text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <h3 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-10">
            Additional Initiatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {additionalContent.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-600 text-white mb-6">
                    <Icon className="h-10 w-10" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
