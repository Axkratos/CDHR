import React from 'react';
import { FaBalanceScale, FaGavel, FaVoteYea, FaLandmark } from 'react-icons/fa';

export default function StrategicAreas() {
  const areas = [
    {
      icon: FaBalanceScale,
      title: 'Participatory Democracy',
      description:
        'Fostering a culture where democratic values thrive, ensuring the voices of all citizens are heard and respected.',
    },
    {
      icon: FaGavel,
      title: 'Human Rights',
      description:
        'Advocating for the protection and promotion of fundamental rights, ensuring dignity and equality for everyone.',
    },
    {
      icon: FaVoteYea,
      title: 'Free and Fair Election',
      description:
        'Supporting free, fair, and transparent elections to uphold the pillars of democracy and citizens’ trust in governance.',
    },
    {
      icon: FaLandmark,
      title: 'Good Governance',
      description:
        'Strengthening governance systems to promote accountability, integrity, and efficient public service delivery.',
    },
  ];

  return (
    <section id="strategic-areas" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Strategic Thematic Areas</h2>
          <p className="mt-6 max-w-3xl text-xl text-gray-500 lg:mx-auto">
            Focused on driving impactful change across key areas essential to building a stronger and more equitable society.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="relative bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-blue-500 text-white">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-gray-900">{area.title}</h3>
                <p className="mt-4 text-lg text-gray-600">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
