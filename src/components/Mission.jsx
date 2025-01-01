import React from 'react';

export default function Mission() {
  return (
    <section id="mission" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Dedicated to creating a more democratic, inclusive, and equitable society.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-lg text-gray-600">
            Center for Democracy and Human Rights is a non-governmental, non-profit, non-partition
            organization. It was established in 2024 and is based in Kathmandu, Nepal.
            It acts at the national level to promote democracy, human rights, and good governance.
            It supports democratic, free, and fair election processes through election observation
            and civic education. It strives to empower the people to participate in decision-making
            within a society. Center for Democracy and Human Rights is committed to conducting
            human rights monitoring, evaluation, analysis, and putting pressure on governments and
            related institutions through lobbying and policy advocacy.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">
            Our Organization works on the following main thematic areas:
          </h3>
          <ul className="mt-4 text-lg text-gray-600 list-disc list-inside">
            <li>Participatory Democracy</li>
            <li>Human Rights</li>
            <li>Free and Fair Election</li>
            <li>Good Governance</li>
          </ul>

          <p className="mt-6 text-lg text-gray-600">
            We organize workshops, seminars, and programs to disseminate information
            to promote democracy, good governance, and human rights. We undertake
            research and offer training related to those thematic areas.
          </p>
        </div>
      </div>
    </section>
  );
}