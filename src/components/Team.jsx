import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export default function Team() {
  const team = [
    {
      name: 'Aarav Sharma',
      role: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Priya Patel',
      role: 'Programs Director',
    },
    {
      name: 'Rajesh Thapa',
      role: 'Advocacy Manager',
    },
    {
      name: 'Maya Gurung',
      role: 'Community Outreach',
    },
    {
      name: 'Bikash KC',
      role: 'Research Coordinator',
    }
  ];

  const featuredMember = team[0]; // Managing Director
  const otherMembers = team.slice(1); // Remaining members

  return (
    <section id="team" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Team
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Meet the dedicated individuals working to strengthen democracy in Nepal.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Section: Featured Member */}
          <Card className="w-full lg:w-4/5 mx-auto">
            <CardHeader floated={false} className="h-80">
              <img src={featuredMember.image} alt={featuredMember.name} className="w-full h-full object-cover" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {featuredMember.name}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                {featuredMember.role}
              </Typography>
            </CardBody>
          </Card>

          {/* Right Section: Other Members */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Other Team Members</h3>
            <ul className="space-y-4">
              {otherMembers.map((member) => (
                <li
                  key={member.name}
                  className="flex items-center space-x-4 border-b border-gray-300 pb-2"
                >
                  <div className="text-lg font-medium text-gray-700">{member.name}</div>
                  <div className="text-sm text-gray-500">{member.role}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
