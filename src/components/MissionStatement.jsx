import React from "react";

export default function MissionStatement() {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-800" id="mission-statement">
      {/* Mission, Vision & Goal Section */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission, Vision & Goal</h2>
        <p className="text-lg mb-6">
          The Center for Democracy and Human Rights (CDHR Nepal) is committed to
          empowering citizens, strengthening democratic institutions, and advocating
          for human rights.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Mission</h3>
            <p>
                        The mission of the Center for Democracy and Human Rights (CDHR Nepal) is
            to empower citizens and civil society representatives to actively engage in political
            participation and uphold democratic values. Through awareness campaigns, advocacy,
            and education, we strive to strengthen democratic practices, institutions, and reforms,
            ensuring free, fair, and credible elections. We work to promote transparency, human
            rights, and accountable governance while building trust between local governments and
            citizens for equitable access to resources and opportunities.
                        </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Vision</h3>
            <p>
                        Our vision is to create a society where democracy thrives, and every citizen has
            a voice in shaping their governance. We aim to foster an environment of open dialogue,
            transparency, and human rights, ensuring that all individuals have the tools and
            opportunities to participate fully in the democratic process. CDHR Nepal envisions a
            country where citizens can confidently advocate for their rights, influence policy
            decisions, and contribute to the peaceful transition of power.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Goal</h3>
            <p>
                        The goal of CDHR Nepal is to develop a space where citizens can freely discuss
            political and social issues, exchange ideas, and collaborate on finding solutions to
            challenges facing the nation. We seek to ensure that democracy is upheld through
            credible elections, transparent governance, and the protection of human rights. Our
            efforts aim to enhance civic engagement, promote responsible political participation,
            and drive systemic changes that ensure all individuals can contribute to the democratic
            process and hold their government accountable.
            </p>
          </div>
        </div>
      </section>
      
      {/* Thematic Areas Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">Thematic Areas</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Participatory Democracy",
              description:
                "The Center for Democracy and Human Rights (CDHR Nepal) is dedicated to empowering citizens and civil society representatives to engage in political participation, ensuring that their voices are heard.We run awareness campaigns to promote democratic values and work towards strengthening democratic practices,  institutions, and reforms. We advocate and lobby governments, parliamentarians, and officials to take decisive action in defending democracy. Our goal is to develop this  center as a open space where citizens can come together to discuss relevant issues,  exchange ideas and debate solutions.",
            },
            {
              title: "Free & Fair Elections",
              description:
                "We strive to promote credible, free, and fair elections, ensuring the peaceful transition of power. Our work empowers citizens to actively participate in the electoral process and have their voices accurately represented. We conduct civic voter education and carry out independent electoral observation activities to ensure transparency and integrity.",
            },
            {
              title: "Good Governance",
              description:
                "We assist local governments in building trust to ensure equitable access to resources and opportunities for citizens. We encourage transparency by promoting open and accessible decision-making, policies and procedures. Our efforts focus on raising awareness among citizens and educating them to better equip them for active participation in governance.",
            },
            {
              title: "Promoting Human Rights",
              description:
                "We advocate for governments to enact and enforce human rights laws and actively campaign for policy changes to drive governmental action. We independently monitor, document and report human rights violations across the country, ensuring they are published for public awareness and intervention. Additionally, we run educational campaigns to inform citizens about their rights and how to safeguard them. We also  collaborate with national organizations as well as international organizations to promote human rights on a global scale.",
            },
          ].map((area, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="text-center py-8 bg-blue-100 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Together, We Can Create a Better Tomorrow
        </h2>
        <p className="text-lg mb-6">
          Your donations enable us to act independently and respond quickly to
          challenges. Help us make a real impact!
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700 transition">
          Donate Now
        </button>
      </section>
    </div>
  );
}
