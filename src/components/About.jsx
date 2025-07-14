import React from "react";
import { motion } from "framer-motion";
import profilePicss from "./Sunita1.jpg";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Contact from "../components/Contact";

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <>
      {/* Top Section */}
      <div className="w-full px-4 md:px-16 mb-12 py-8 md:mb-12 flex flex-col md:flex-row items-center gap-32 font-outfit">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-[54%]"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-orange-600 mb-10 -mt-20 md:mt-4 font-outfit">
            Dr. Sunita Changkakati : An Introduction
          </h2>
          <p className="text-base md:text-lg text-gray-800 text-justify mb-6 leading-7 font-outfit">
            Amitbhai Anilchandra Shah, the former President of the Bharatiya
            Janata Party and India’s Home Minister, was born on 22 October 1964
            to a Gujarati couple Mrs. Kusum Ben and Mr. Anilchandra Shah living
            in Mumbai. Amitbhai Anilchandra Shah’s grandfather was a wealthy
            merchant (Nagar Seth) in Mansa, a small princely state of Baroda
            State of Gaikwad. Till the age of 16, Amitbhai Anilchandra Shah
            lived in his native village Mansa in Gujarat. It is there where he
            received his primary education. The young Shah’s early education
            took place according to the 'Indian Value Tradition' under the
            supervision of prominent scholars of the Gaikwad State. He was
            taught Indian scriptures, historical texts, grammar and epics in his
            childhood. He continued to study Indian philosophy and texts even in
            the later years.
          </p>
          <p className="text-base md:text-lg text-gray-800 text-justify leading-7">
            Amitbhai Anilchandra Shah’s family moved to Ahmedabad after the
            completion of his primary education. His mother had a deep influence
            in his life. She was an avid Gandhian and she inspired him to wear
            Khadi. In his youth, while during education, he read biographies of
            many patriots and was deeply influenced by their passion for the
            motherland. He has been greatly influenced by the writings of K.M.
            Munshi. Amitbhai Anilchandra Shah’s family moved to Ahmedabad after
            the completion of his primary education. His mother had a deep
            influence in his life. She was an avid Gandhian and she inspired him
            to wear Khadi. In his youth, while during education, he read
            biographies of many patriots and was deeply influenced by their
            passion for the motherland. He has been greatly influenced by the
            writings of K.M. Munshi.
          </p>
          <motion.a
            variants={childVariants}
            href="/Sunita_Changkakati.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-block mt-8 md:mt-8 px-6 py-4 text-sm sm:text-base rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium shadow-lg hover:from-blue-700 hover:to-indigo-800 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/3 flex flex-col items-center -mt-16"
        >
          <motion.img
            src={profilePicss}
            alt="Dr. Sunita Changkakati"
            className="md:w-[480px] md:h-[480px] w-[320px] h-[320px] object-cover rounded-full shadow-lg"
            whileHover={{
              boxShadow: "0px 10px 30px rgba(99, 102, 241, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          />

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-5 md:text-2xl text-xl text-gray-600 mt-10">
            <a
              href="https://www.facebook.com/DrSunitaChangkakati/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/91000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:sunita_chang@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              <MdEmail />
            </a>
            <a
              href="tel:+919435110275"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600"
            >
              <MdPhone />
            </a>
            <a
              href="https://maps.app.goo.gl/sJvnxtkLrTRagjri9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <MdLocationOn />
            </a>
          </div>
        </motion.div>
      </div>
      <Contact />
    </>
  );
};

export default About;
