import React from "react";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import surjyaKalankaImg from "../components/Books/Suryakanlkar.jpg";
import angha from "../components/Books/Angha.jpg";
import hajika from "../components/Books/Hajik.jpg";
import cotton from "../components/Books/Cotton.jpg";
import sita from "../components/Books/Sita.jpg";

const books = [
  {
    id: 1,
    title: "Surjya Kalanka",
    description: "A collection of three Assamese novels.",
    img: surjyaKalankaImg,
  },
  {
    id: 2,
    title: "Hajik Longhadu",
    description:
      "A novel based on the Hmar-Dimasa ethnic clash in Dima Hasao (2003–04), drawn from personal experiences and interviews.",
    img: hajika,
  },
  {
    id: 3,
    title: "Moi Cottonian Asilu",
    description:
      "A semi-autobiographical novel about the author’s days in Cotton College during the Assam Agitation (1979–81).",
    img: cotton,
  },
  {
    id: 4,
    title: "Agnisnata Sita",
    description:
      "Based on true stories of women who were victims of trafficking, gang rape, and gender-based violence.",
    img: sita,
  },
  {
    id: 5,
    title: "Angha",
    description:
      "Set in Varanasi, the story explores cultural dissonance and inner conflict faced by a US-based Assamese woman seeking peace.",
    img: angha,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const LiteratureCareer = () => {
  return (
    <>
      <section className="px-6 pb-20 max-w-6xl mx-auto text-gray-800 font-outfit">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-center mb-14 -mt-8 md:mt-2" // ✅ Adjust top spacing here
        >
          <h1 className="text-4xl font-bold mb-2 relative inline-block">
            Literature Career
            <span className="block w-24 h-1 mt-2 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></span>
          </h1>
          <p className="text-2xl font-bold mt-8 mb-2 relative text-gray-600">
            Books Published
            <span className="block w-24 h-1 mt-2 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></span>
          </p>
        </motion.div>

        {/* Book List */}
        <div className="space-y-20 mt-24">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-start gap-6 md:gap-12`}
            >
              {/* Image */}
              <div className="w-full md:w-1/3">
                <motion.img
                  src={book.img}
                  alt={book.title}
                  className="rounded-xl object-cover w-full h-73 hover:scale-105 transition-transform duration-500 ease-in-out shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-2/3 flex flex-col justify-center h-full md:pl-10 group animate-slide-in-fade">
                <h2 className="text-2xl font-semibold mb-1 text-center md:text-left transition-all duration-300 group-hover:text-indigo-600 cursor-pointer">
                  {book.title}
                </h2>

                {/* Gradient Underline on Hover */}
                <div className="relative h-4">
                  <div className="w-24 h-1 mx-auto md:mx-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                </div>

                <p className="text-gray-700 text-justify text-lg leading-relaxed mt-1">
                  {book.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-2xl font-semibold mb-6 relative inline-block">
            Research Reports and Publications
            <span className="block w-16 h-1 mt-1 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full"></span>
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-justify">
            <li>
              <strong>
                Impact of Irrigation on Social Change and Development
              </strong>
              : Case study of Mora Bhorali Lift Irrigation Scheme.
            </li>
            <li>
              <strong>North East India: Future Perspectives</strong>: Document
              by Tezpur District Mahila Samiti.
            </li>
            <li>
              <strong>
                Socio-Economic Evaluation of Bordikorai Irrigation Scheme
              </strong>
              : Commissioned by Ministry of Water Resources, Govt. of India.
            </li>
            <li>
              <strong>Women’s Freedom: An Ignoble Myth</strong>: Women’s Studies
              Research Centre, Gauhati University.
            </li>
            <li>
              <strong>Women and Rural Development Schemes</strong>: National
              Seminar on Women Development, Department of Commerce, Gauhati
              University.
            </li>
            <li>
              <strong>
                Women & Social Harmony: Role of Women’s Institutions
              </strong>
              : Assam Institute of Research for Scheduled Castes and Tribals.
            </li>
            <li>
              <strong>Effectiveness of Education Guarantee Scheme</strong>:
              Study in minority-concentrated districts of Assam.
            </li>
            <li>
              <strong>
                Impact of Urbanisation and Modernisation on Rabha Community
              </strong>
              : Focused on Odalbakra and Rajapara in Kamrup District.
            </li>
          </ul>
        </motion.div>
      </section>

      <Contact />
    </>
  );
};

export default LiteratureCareer;