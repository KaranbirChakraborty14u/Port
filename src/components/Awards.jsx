import React from "react";
import { motion } from "framer-motion";

const awards = [
 
 {
    id: 1,
    title: "Chandraprabha Saikiani Award (2024)",
    description:
      "Awarded by the Government of Assam on Bishnu Rabha Diwas, 2024, for outstanding social work for women and children.",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  }, 
  {
    id: 2,
    title: "Eastern Women Association Award",
    description:
      "Honored as the best NGO by the Eastern Women Association for impactful social work.",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
 {
    id: 3,
    title: "Parivartan Award by Amway",
    description:
      "Received for significant contributions towards the development of women in society.",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c", // Replace with actual award images if available
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
      id="awards"
      className="px-6 pb-20 max-w-7xl mx-auto text-gray-800 font-[Outfit,sans-serif]"
    >
      {/* Section Header */}
      <div className="text-center mb-24 mt-24">
        <h1 className="text-4xl font-bold mb-24">Awards</h1>
      </div>

      {/* Alternating Layout */}
      <div className="space-y-28">
        {awards.map((award, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={award.id}
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
