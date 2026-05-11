import React from 'react';
import { Link } from 'react-router-dom';
import core1 from '../assets/images/core1.jpeg';
import core2 from '../assets/images/core2.jpeg';
import core3 from '../assets/images/core3.jpeg';
import core4 from '../assets/images/core4.jpeg';
import core5 from '../assets/images/core5.jpeg';

const teamMembers = [
  {
    name: "Dr. (Prof) Veerendra Kumar",
    title: "Founder & Director",
    image: core1,
    credentials: "FIE, MICI, MISTE, FIGS, MIBC",
    education: [
      "B.Tech in Civil Engineering, IIT Kanpur (1979)",
      "M.Tech in Structural Engineering, IIT Kanpur (1981)",
      "Ph.D. in Structural Engineering, IIT (BHU) Varanasi (1987)"
    ],
    experience: "40+ Years of Experience in Academia and Structural Consultancy for Mega Projects",
    position: "Ex Head and Professor, Civil Engineering, IIT (BHU) Varanasi",
    email: "vkumar@ascombuild.com",
    highlights: [
      "Published 75+ research papers in ASCE and Scopus-indexed journals.",
      "Designed numerous multi-storied buildings at Indian Institute of Technology (BHU) Varanasi with project costs exceeding ₹500 Crores.",
      "Provided structural design and consultancy services for several bridges and distressed structures, including retrofitting and rehabilitation to extend their service life.",
      "Expert in transmission line tower foundation design.",
      "Served as Structural Consultant for the Kashi Vishwanath Corridor and various other projects of national importance."
    ]
  },
  {
    name: "Dr. Anjani Kumar Shukla",
    title: "Managing Director",
    image: core2,
    credentials: "MASCE, MIE, MICI",
    education: [
      "Ph.D. in Structural Engineering, IIT (BHU) Varanasi",
      "M.Tech. in Structural Engineering",
      "B.Tech. in Civil Engineering"
    ],
    experience: "10+ years in retrofitting and consultancy",
    specialization: "Structural rehabilitation and modern strengthening techniques",
    email: "anjani@ascombuild.com",
    mobile: "+91 9415 872 871",
    highlights: [
      "Research focus: Retrofitting and strengthening of damaged structures",
      "Former VP at Mumbai-based multinational construction company",
      "Published extensively in international peer-reviewed journals",
      "Expert in structural assessment, testing, and rehabilitation"
    ]
  },
  {
    name: "Dr. Dheeresh Nayak",
    title: "Design Expert",
    image: core4,
    credentials: "Ph.D. IIT (BHU) Varanasi",
    education: [
      "Ph.D. in Structural Engineering, IIT (BHU) Varanasi",
      "Specialization: Design of Structures"
    ],
    experience: "15+ years in design of steel and concrete structures",
    specialization: "Structural design and analysis",
    highlights: [
      "Expert in design of bridges and buildings",
      "Proficient in finite element analysis",
      "Specialized in complex structural systems",
      "Extensive experience in steel and concrete design"
    ]
  },
  {
    name: "Mr. Rajesh Ranjan Srivastava",
    title: "Execution Expert",
    image: core5,
    credentials: "B.Tech Civil Engg, MBA (Executive) IIM Calcutta",
    education: [
      "B.Tech in Civil Engineering",
      "MBA (Executive), IIM Calcutta"
    ],
    experience: "40+ Years Experience in Civil & Infrastructure Projects",
    position: "Ex-UPJVNL Engineer | Ex-AGM, Moser Baer Projects | Ex-GM, Angle Infra | Chief Design Coordinator, HCC",
    specialization: "Project Management, Execution and strengthening of damaged structures",
    highlights: [
      "Expert in project management and delivery",
      "Government sector experience",
      "Specialized in execution of strengthening projects",
      "Strong business acumen and operational expertise"
    ]
  },
  {
    name: "Mr. Raghavendra Kumar",
    title: "Execution Expert",
    image: core3,
    credentials: "M.Tech. Structural Engineering",
    education: [
      "M.Tech. in Structural Engineering"
    ],
    experience: "Expert in project management and execution",
    specialization: "Project Management, Execution and strengthening of damaged structures",
    highlights: [
      "Specialized in field execution",
      "Expert in strengthening project delivery",
      "Strong technical and management skills",
      "Hands-on experience in rehabilitation projects"
    ]
  }
];

const Leadership = () => {
  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-200 pt-20">
      <div className="relative bg-gray-900 py-16 flex flex-col justify-center items-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 relative">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl mb-4">Leadership</h1>
          <div className="flex space-x-2 text-sm md:text-base">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-red-500">Leadership</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium mb-2">Our Team</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            IIT Professors & Alumni Leading Innovation
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A unique collaboration between academic excellence from IIT (BHU) and practical field expertise, bringing together 36+ years of combined experience in structural engineering and rehabilitation.
          </p>
        </div>

        <div className="grid gap-10 md:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start bg-white dark:bg-gray-700 shadow-lg p-6 rounded-lg transition-all hover:-translate-y-1"
            >
              <div className="w-full md:w-1/3 lg:w-1/4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto object-cover rounded-md shadow-sm border border-gray-200"
                />
              </div>
              <div className="w-full md:w-2/3 lg:w-3/4">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h4>
                <p className="text-red-600 dark:text-red-400 font-medium mb-2">{member.title}</p>

                {member.credentials && (
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {member.credentials}
                  </p>
                )}

                <div className="text-gray-600 dark:text-gray-300 space-y-2 text-sm md:text-base">
                  {member.position && (
                    <p className="font-semibold">{member.position}</p>
                  )}

                  {member.education && (
                    <div className="mt-2">
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Education:</p>
                      <ul className="list-disc list-inside ml-2">
                        {member.education.map((edu, i) => (
                          <li key={i}>{edu}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.experience && (
                    <p className="mt-2">
                      <span className="font-semibold">Experience:</span> {member.experience}
                    </p>
                  )}

                  {member.specialization && (
                    <p className="mt-2">
                      <span className="font-semibold">Specialization:</span> {member.specialization}
                    </p>
                  )}

                  {member.highlights && (
                    <div className="mt-3">
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Key Highlights:</p>
                      <ul className="list-disc list-inside ml-2">
                        {member.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm">{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-4 flex flex-col gap-1">
                    {member.email && (
                      <p>
                        <span className="font-semibold">Email:</span>{' '}
                        <a href={`mailto:${member.email}`} className="text-red-600 hover:text-red-700">
                          {member.email}
                        </a>
                      </p>
                    )}
                    {member.mobile && (
                      <p>
                        <span className="font-semibold">Mobile:</span>{' '}
                        <a href={`tel:${member.mobile}`} className="text-red-600 hover:text-red-700">
                          {member.mobile}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
