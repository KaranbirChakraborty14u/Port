import React from "react";
import { motion } from "framer-motion";
import Contact from "../components/Contact"

const books = [
  {
    id: 1,
    title: "Surjya Kalanka",
    description: "A collection of three Assamese novels.",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136",
  },
  {
    id: 2,
    title: "Hajik Longhadu",
    description:
      "A novel based on the Hmar-Dimasa ethnic clash in Dima Hasao (2003–04), drawn from personal experiences and interviews.",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    id: 3,
    title: "Moi Cottonian Asilu",
    description:
      "A semi-autobiographical novel about the author’s days in Cotton College during the Assam Agitation (1979–81).",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    id: 4,
    title: "Agnisnata Sita",
    description:
      "Based on true stories of women who were victims of trafficking, gang rape, and gender-based violence.",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
  },
  {
    id: 5,
    title: "Angha",
    description:
      "Set in Varanasi, the story explores cultural dissonance and inner conflict faced by a US-based Assamese woman seeking peace.",
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const LiteratureCareer = () => {
  return (
    <>
    <section className="px-6 pb-16 max-w-7xl mx-auto text-gray-800 font-outfit">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-2">Literature Career</h1>
        <p className="text-lg text-gray-600">Books Published</p>
      </motion.div>

      {/* Alternating Book Layout */}
      <div className="space-y-16">
        {books.map((book, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={book.id}
              className={`flex flex-col md:flex-row ${
                isEven ? "" : "md:flex-row-reverse"
              } items-center gap-12`}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={book.img}
                  alt={book.title}
                  className="w-full h-72 object-cover rounded-xl shadow-md"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <p className="text-sm text-gray-500 mb-2">
                  Literature · Book Release
                </p>
                <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
                <p className="text-gray-700 text-justify">{book.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Research Reports Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-6">
          Research Reports and Publications
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 text-justify">
          <li>
            <strong>Impact of Irrigation on Social Change and Development</strong>: Case study of Mora Bhorali Lift Irrigation Scheme.
          </li>
          <li>
            <strong>North East India: Future Perspectives</strong>: Document by Tezpur District Mahila Samiti.
          </li>
          <li>
            <strong>Socio-Economic Evaluation of Bordikorai Irrigation Scheme</strong>: Commissioned by Ministry of Water Resources, Govt. of India.
          </li>
          <li>
            <strong>Women’s Freedom: An Ignoble Myth</strong>: Women’s Studies Research Centre, Gauhati University.
          </li>
          <li>
            <strong>Women and Rural Development Schemes</strong>: National Seminar on Women Development, Department of Commerce, Gauhati University.
          </li>
          <li>
            <strong>Women & Social Harmony: Role of Women’s Institutions</strong>: Assam Institute of Research for Scheduled Castes and Tribals.
          </li>
          <li>
            <strong>Effectiveness of Education Guarantee Scheme</strong>: Study in minority-concentrated districts of Assam.
          </li>
          <li>
            <strong>Impact of Urbanisation and Modernisation on Rabha Community</strong>: Focused on Odalbakra and Rajapara in Kamrup District.
          </li>
        </ul>
      </motion.div>
    </section>
    <Contact />
    </>
  );
};

export default LiteratureCareer;
