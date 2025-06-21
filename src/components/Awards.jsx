import React from "react";
import { motion } from "framer-motion";

const awards = [
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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Awards = () => {
  return (
    <section
      id="awards" // 👈 This is the key update!
      className="px-6 pb-20 max-w-7xl mx-auto text-gray-800 font-[Outfit,sans-serif]"
    >
      {/* Section Header */}
      <div className="text-center mb-24 mt-24">
        <h1 className="text-4xl font-bold mb-24">Awards</h1>
      </div>

      {/* Alternating Book Layout */}
      <div className="space-y-28">
        {awards.map((book, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={book.id}
              className={`flex flex-col md:flex-row ${
                isEven ? "" : "md:flex-row-reverse"
              } items-center gap-18 md:gap-12`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              custom={index}
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
                <h2 className="text-2xl font-semibold mb-3">{book.title}</h2>
                <p className="text-gray-700 text-justify leading-relaxed">
                  {book.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Awards;
