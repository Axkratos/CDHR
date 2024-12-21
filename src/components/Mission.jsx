import React from 'react';
import { FaGavel, FaShieldAlt, FaUsers, FaHandshake } from 'react-icons/fa';

export default function Mission() {
  const commitments = [
    {
      icon: FaGavel,
      title: 'Committed to Defend and Strengthen Democracy',
      description:
        'We actively work to uphold democratic institutions, ensuring that they remain robust, inclusive, and accountable to the people they serve.',
    },
    {
      icon: FaShieldAlt,
      title: 'Committed to Promote and Protect Human Rights',
      description:
        'Our efforts are dedicated to safeguarding fundamental human rights, advocating for equality, and ensuring that every individual’s dignity is respected.',
    },
    {
      icon: FaUsers,
      title: 'Committed to Enhancing Democratic Tolerance and Non-Discrimination',
      description:
        'We foster a culture of tolerance and inclusivity, promoting understanding and respect among diverse communities, free from any form of discrimination.',
    },
    {
      icon: FaHandshake,
      title: 'Committed to Maintain Integrity and Fairness',
      description:
        'Through open communication and trust, we ensure transparency in our work, upholding fairness and integrity as core principles.',
    },
  ];

  return (
    <section id="mission" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Mission and Values</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Dedicated to creating a more democratic, inclusive, and equitable society.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {commitments.map((commitment) => {
            const Icon = commitment.icon;
            return (
              <div key={commitment.title} className="relative bg-white shadow-lg rounded-lg p-6">
                <div className="absolute -top-6 left-6 flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-8">{commitment.title}</h3>
                <p className="mt-4 text-lg text-gray-600">{commitment.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
