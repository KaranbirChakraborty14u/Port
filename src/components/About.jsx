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
          
Dr. Sunita Changkakati is a prominent social worker and human rights advocate from Assam, India, whose pioneering efforts over the past three decades have significantly impacted the fields of child protection and women’s empowerment. Born on March 31, 1961, and holding a Ph.D. in Political Science from Gauhati University, Dr. Changkakati has devoted her life to the upliftment of marginalized communities, especially women and children in conflict-prone and underserved regions of Assam.

A grassroots changemaker, she co-founded the Assam Centre for Rural Development (ACRD) in 1995. This Guwahati-based NGO has been a driving force in promoting self-help groups (SHGs), vocational training, and livelihood opportunities for rural women in districts like Baksa, Kamrup, and Udalguri. Her initiatives have empowered hundreds of women through income-generating activities such as handloom weaving, Eri silk production, pig farming, and financial literacy, facilitating economic self-reliance and social dignity.

Dr. Changkakati has also made profound contributions to child welfare. Under the National Child Labour Project, she established four non-formal education centres in remote areas to rehabilitate child labourers, many of whom have been successfully mainstreamed into formal education. She worked intensively to include children with disabilities into regular schools, advocating for accessible education and societal acceptance.

One of her most transformative initiatives is *Navajeevan*, a rehabilitation home she established in 2009 for female survivors of human trafficking and abuse. The home provides shelter, education, counseling, and vocational training to help survivors rebuild their lives. It has since evolved into a registered Children’s Home under the Juvenile Justice Act, 2015, providing safe and nurturing spaces for over 100 children affected by child labour, marriage, and sexual abuse.

In her tenure as Chairperson of the Assam State Commission for Protection of Child Rights (2017–2023), Dr. Changkakati directly intervened in over 500 child rights violation cases. She responded to emerging issues during the COVID-19 pandemic by launching mental health awareness programs for children and families. Her work has shaped policies and brought attention to previously neglected areas like child trafficking, gender-based violence, and inclusive education.

Her advocacy extends beyond direct service. She is an accomplished author of six books and the producer of a documentary, *Slaughtered Dream* (2017), which highlights the plight of trafficking survivors. Her writings and media presence continue to influence public discourse and promote social justice.

In recognition of her outstanding contributions, Dr. Changkakati received the Chandraprabha Saikiani Award from the Government of Assam in 2024. Despite facing financial constraints and operating in challenging, insurgency-affected regions, her unwavering commitment to human dignity has made her a beacon of hope.

Today, Dr. Sunita Changkakati continues her mission through ACRD and *Navajeevan*, embodying resilience, compassion, and transformative leadership. Her legacy lies not only in the services she has provided but in the systemic changes she has inspired across Assam’s socio-political landscape.

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
