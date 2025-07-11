import React from "react";
import { motion } from "framer-motion";
import eastern from "../components/Award/Eastern.jpeg";
import chandra from "../components/Award/Chandra.jpeg"

const awards = [
  {
    id: 1,
    title: "Chandraprabha Saikiani Award (2024)",
    description:
      "Awarded by the Government of Assam on Bishnu Rabha Diwas, 2024, for outstanding social work for women and children.",
    img: chandra,
    featured: true,
  },
  {
    id: 2,
    title: "Eastern Women Association Award",
    description:
      "Honored as the best NGO by the Eastern Women Association for impactful social work.",
    img: eastern,
  },
  {
    id: 4,
    title: "Global Congress Invitee",
    description:
      "Invited participant at the World Congress Against the Sexual Exploitation of Women & Girls.",
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
      className="px-6 pb-20 max-w-7xl mx-auto text-gray-800 font-[Outfit,sans-serif]"
    >
      <div className="text-center mb-24 mt-24 md:mt-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-24">Awards</h1>
      </div>

      <div className="space-y-28">
        {awards.map((award, index) => {
          const isEven = index % 2 === 0;
          const isFeatured = award.featured;

          return (
            <motion.div
              key={award.id}
              className={`relative flex flex-col md:flex-row ${
                isEven ? "" : "md:flex-row-reverse"
              } items-center gap-18 md:gap-12 transition-transform ${
                isFeatured ? "scale-[1.02]" : ""
              }`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              custom={index}
            >
              {/* Featured Badge */}
              {isFeatured && (
                <div className="absolute top-[-12px] left-0 bg-yellow-400 text-white text-xs px-3 py-1 rounded-full shadow-md uppercase tracking-wide font-semibold z-10">
                  Featured
                </div>
              )}

              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={award.img}
                  alt={award.title}
                  className="w-full h-72 object-cover rounded-xl shadow-md"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <p className="text-sm text-gray-500 mb-2">Recognition · Award</p>
                <h2 className="text-2xl font-semibold mb-3">{award.title}</h2>
                <p className="text-gray-700 text-justify leading-relaxed">
                  {award.description}
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