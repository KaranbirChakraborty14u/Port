import React from 'react';
import Contact from "../components/Contact"

const ProfessionalCareer = () => {
  const roles = [
    {
      year: "2017 – 2023",
      title: "Former Executive Director, Assam Centre for Rural Development",
      description:
        "Led one of Assam’s premier NGOs working on women empowerment, trafficking, child rights, child labour, and disability rights. Directly involved in project formulation, implementation, administration, networking with Government and international bodies, and monitoring of NGO programmes.",
    },
    {
      year: "2017 – 2023",
      title: "Former Chairperson, Assam State Commission for the Protection of Child Rights",
      description:
        "Oversaw child rights protection at the state level, contributing to policies, investigations, awareness drives, and systemic improvements related to children's welfare across Assam.",
    },
    {
      title: "Assistant Project Coordinator",
      description:
        "Served in a collaborative project between Oxfam and the Royal Netherlands Embassy through Tezpur District Mahila Samiti in Tezpur, Assam.",
    },
    {
      title: "Coordinator - Project on Women in Agriculture",
      description:
        "Oversaw initiatives focused on women's roles in agriculture, addressing rural women’s issues and promoting sustainable agricultural practices.",
    },
    {
      title: "Trainer for Grassroots Women",
      description:
        "Provided extensive training on gender sensitization and women's empowerment to grassroots-level women leaders.",
    },
    {
      year: "1985",
      title: "Lecturer in Political Science",
      description:
        "Taught Political Science at Dimoria College, Khetri, Kamrup (M), Assam.",
    },
    {
      title: "Organizer - Gram Shree Melas",
      description:
        "Organized two national-level Gram Shree Melas with CAPART (Ministry of Rural Development) to promote rural artisans from across India.",
    },
    {
      title: "Rural Women Empowerment Facilitator",
      description:
        "Worked among tribal and marginalized communities across Assam. Since 1998, helped form and nurture self-help groups for rural women.",
    },
  ];

  return (
    <>
    <section id="professional-career" className="max-w-4xl mx-auto px-4 pb-10 text-gray-800">

      <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">
        Professional Career
      </h2>

      <div className="space-y-8">
        {roles.map((role, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 border border-blue-100"
          >
            {role.year && (
              <div className="text-sm text-blue-600 font-semibold mb-1">
                {role.year}
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2 text-blue-900">
              {role.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{role.description}</p>
          </div>
        ))}
        
      </div>
    </section>
    
    <Contact />
    </>
  );
};

export default ProfessionalCareer;
