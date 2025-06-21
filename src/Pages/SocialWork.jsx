import React from 'react';
import Contact from "../components/Contact"
const SocialWork = () => {
  return (
    <>
    <section id="social-work" className="max-w-4xl mx-auto px-4 pb-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-12 text-center">Social Work</h1>

      <div className="space-y-6">
        <ul className="list-disc list-inside space-y-6 text-justify">
          <li>Started an NGO named <strong>Assam Centre For Rural Development</strong> in 1995.</li>
          <li>A Social Activist since 1991, working in the remotest, militancy-affected, and flood-affected areas of Assam.</li>
          <li>Worked for the empowerment of women among tribal communities in remote areas since 1996 by implementing various programs.</li>
          <li>Set up a <strong>Vocational Training Cum Skill Development Centre</strong> to promote traditional silk among tribal women since 1998.</li>
          <li>Formed 100 Self Help Groups (SHGs) in remote tribal villages and helped them secure loans from NEDFi, NABARD, and RGVN (1999–2004).</li>
          <li>Formed another 100 SHGs in Kamrup district for cash crop farming and bamboo plantation through grant facilitation.</li>
          <li>Worked with women practicing Jhoom cultivation in remote tribal villages of Karbi Anglong district, Assam.</li>
          <li>Opened zero balance bank accounts for around 5000 women under the <strong>Dhan Jan Yojana</strong> in Kamrup district in 2015.</li>
          <li>Organized 20 skill development trainings on jute-based product making in Kamrup district during 2015–2016.</li>
          <li>Organized more than 500 free health check-up camps in remote tribal villages of Kamrup district from 2003 to 2016.</li>
          <li>Worked for the inclusion of disabled women in social, economic, and decision-making processes, and facilitated education and medical support for disabled children in mainstream schools.</li>
          <li>Set up four schools for child laborers in Kamrup Metro district under the <strong>National Child Labour Project (NCLP)</strong>, Govt. of India.</li>
          <li>Established a rehabilitation home for victims of human trafficking named <strong>Naba Jeevan</strong> in 2008, successfully rehabilitating over 500 victims.</li>
          <li>Set up two sub-centres of <strong>CHILDLINE</strong> in Kamrup District.</li>
          <li>Actively involved in the rescue of child laborers, child marriage victims, and survivors of child sexual abuse.</li>
        </ul>
      </div>
    </section>
    <Contact />
    </>
  );
};

export default SocialWork;
