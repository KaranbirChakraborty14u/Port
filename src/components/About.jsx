import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b  px-4 pt-20 pb-28 flex items-center justify-center font-outfit"
    >
      <div className="max-w-4xl w-full text-gray-800">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 tracking-tight"
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 0.8 }}
          variants={{
            initial: { opacity: 0, y: -100 },
            whileInView: { opacity: 1, y: 0 },
          }}
        >
          About
        </motion.h1>

        <div className="space-y-12 text-base md:text-lg leading-relaxed">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            transition={{ ...fadeInUp.transition }}
            variants={fadeInUp}
            viewport={{ once: false }}
            className="border-l-4 border-blue-500 pl-5"
          >
            <h2 className="font-semibold text-2xl text-gray-900 mb-2">
              Date of Birth
            </h2>
            <p className="text-gray-700">March 31, 1961</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="whileInView"
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            variants={fadeInUp}
            viewport={{ once: false }}
            className="border-l-4 border-green-500 pl-5"
          >
            <h2 className="font-semibold text-2xl text-gray-900 mb-2">
              Spouse
            </h2>
            <p className="text-gray-700">
              Wife of Sri Pradipta Pran Changkakati, Former Secretary to the
              Government of Assam & Former Member, Assam Administrative
              Tribunal.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="whileInView"
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
            variants={fadeInUp}
            viewport={{ once: false }}
            className="border-l-4 border-purple-500 pl-5"
          >
            <h2 className="font-semibold text-2xl text-gray-900 mb-2">
              Family Legacy
            </h2>
            <p className="text-gray-700">
              Granddaughter of Bharat Ratna Lokapriya Gopinath Bordoloi, Freedom
              Fighter and the first Chief Minister of Assam.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
