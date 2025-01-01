import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import Deepak from '/deepak-sir.png';

export default function Team() {
  const team = [
    {
      name: 'Deepak Joshi Pokhrel',
      role: 'Managing Director',
      email: 'email: cdhr@ntc.net.np', // Placeholder for email
      phone: 'phone: +977-9840807497', // Placeholder for phone number
    },
    {
      name: 'Bir Bahadur Ale',
      role: 'Founder/Chairperson',
      email: 'email: bir.alenepal@gmail.com', // Placeholder for email
    },
    {
      name: 'Mohan Adhikari',
      role: 'Founder/Member',
      email: 'email: adhikarimo@gmail.com', // Placeholder for email
    },
    {
      name: 'Madhu Thapa M.Rana',
      role: 'Founder/Member',
      email: 'email: cdhr@ntc.net.np', // Placeholder for email
    },
    {
      name: 'Devu Thapa Magar',
      role: 'Founder/Member',
      email: 'email: cdhr@ntc.net.np', // Placeholder for email
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
              <img src={Deepak} alt={featuredMember.name} className="w-full h-full object-contain" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {featuredMember.name}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                {featuredMember.role}
              </Typography>
              <Typography color="blue-gray" className="text-sm mt-2">
                {featuredMember.email}
              </Typography>
              <Typography color="blue-gray" className="text-sm mt-1">
                {featuredMember.phone}
              </Typography>
            </CardBody>
          </Card>

          {/* Right Section: Other Members */}
          <div className="bg-gray-100 rounded-lg p-8 shadow-lg text-center"> {/* Centered content */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Team Members</h3>
            <ul className="space-y-1"> {/* Increased spacing between items */}
              {otherMembers.map((member) => (
                <li
                  key={member.name}
                  className="flex flex-col items-center space-y-1 border-b border-gray-300 pb-4"> {/* Centered items */}
                  <div className="flex flex-col items-center">
                    <div className="text-lg font-medium text-gray-700">{member.name}</div>
                    <div className="text-sm text-gray-500">({member.role})</div>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{member.email}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}