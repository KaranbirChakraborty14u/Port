import React from 'react';
import Contact from "../components/Contact"

const AcademicCareer = () => {
  return (
    <>
    <section id="academic-career" className="max-w-4xl mx-auto px-4 pb-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-12 text-center">Academic Career</h1>

      <div className="space-y-6">
        {/* Education & Training Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-blue-700">Education & Training</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ph.D in Political Science (Sociology), 1992, Gauhati University</li>
            <li>MA in Political Science, 1982, Gauhati University</li>
            <li>Training on ‘Gender Issues In Development’ at Asian Institute of Technology (AIT), Bangkok, Thailand</li>
            <li>Assistant Project Coordinator, Oxfam Project and Royal Netherlands Embassy, Tezpur District Mahila Samiti</li>
            <li>Lecturer, Political Science in Dimoria College</li>
            <li>Participated as invitee in the ‘World Congress Against The Sexual Exploitation Of Women & Girls’</li>
          </ul>
        </div>

        {/* Awards & Contributions Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-blue-700">Recognition & Contributions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Received ‘Parivartan’ Award by Amway for working for the development of women in society</li>
            <li>Recipient of the Award from Eastern Women Association for best NGO</li>
            <li>Recipient of Chandraprabha Saikiani Award for Social Work for women and children (2024) by Govt. of Assam on Bishnu Rabha Diwas</li>
            <li>Resource person on Women Empowerment since 1999</li>
            <li>Trainer/Resource person on Child Rights since 2015</li>
          </ul>
        </div>
      </div>
    </section>
    <Contact />
    </>
  );
};

export default AcademicCareer;
