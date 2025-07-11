import profilePic from "./Sunita1.jpg";
import { HERO_CONTENT } from "../../constants";
import FlagWave from "./FlagWave";
import { motion } from "framer-motion";
import flag2 from "./flag2.png";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.3,
      ease: "easeInOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <>
      <div className="font-outfit flex flex-col lg:flex-row-reverse items-center justify-between pt-16 px-4 lg:px-12 pb-4 lg:mb-36 -mt-20 md:mt-0">
        {/* Right: Profile Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-9 -mt-5"
        >
          <img
            src={profilePic}
            alt="Dr. Sunita Changkakati"
            className="w-[300px] sm:w-[360px] lg:w-[470px] border border-gray-200 shadow-2xl rounded-3xl object-cover transition-transform duration-300 hover:scale-105"
            width={440}
            height={440}
          />
        </motion.div>

        {/* Left: Content */}
        <div className="w-full lg:w-1/2 mt-10 lg:-mt-10 px-2 sm:px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            <motion.h2
              variants={childVariants}
              className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight"
            >
              Dr. Sunita Changkakati
            </motion.h2>

            <motion.span
              variants={childVariants}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700"
            >
              Politician, Social Activist
            </motion.span>

            <motion.p
              variants={childVariants}
              className="text-base sm:text-lg lg:text-lg max-w-xl text-gray-600 leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.a
              variants={childVariants}
              href="/Sunita_Changkakati"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-block mt-4 px-6 py-4 text-sm sm:text-base rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium shadow-lg hover:from-blue-700 hover:to-indigo-800 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform"
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Optional Flag Animation */}
      {/* <FlagWave /> */}

      {/* Bottom Flag Image */}
      {/* <div className="w-full mt-8">
        <img
          src={flag2}
          alt="National Flag"
         className="w-full h-32 object-cover"
        />
      </div> */}
    </>
  );
};

export default Hero;
