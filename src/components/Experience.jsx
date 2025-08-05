import { EXPERIENCES } from "../../constants";
import { motion } from "framer-motion";
import Contact from "./Contact";

const Experience = () => {
  return (
    <>
      <section className="px-4 mb-16 -mt-12 md:mt-8 md:mb-20 text-gray-800 font-outfit">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -80 }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center text-4xl font-bold text-gray-800"
        >
          Experience
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-14">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6">
                {/* Year */}
                <div className="mb-2 lg:mb-0 lg:w-1/4">
                  <p className="text-base text-blue-600 font-semibold uppercase tracking-wider">
                    {experience.year}
                  </p>
                </div>

                {/* Details */}
                <div className="lg:w-3/4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {experience.role}{" "}
                    <span className="text-sm text-gray-500 font-normal">
                      – {experience.company}
                    </span>
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed tracking-wide">
                    {experience.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Experience;
