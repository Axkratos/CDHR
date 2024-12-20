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
    <section id="mission" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Mission & Values
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Building a stronger democracy through collective action and advocacy
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{value.title}</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
            Additional Initiatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalContent.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.title}</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
