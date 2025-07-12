import React from "react";
import img1 from "../Photos/Distribution of food stuff the households of Quarantine zone during Covid 19/Distribution_o_food.jpeg";
import { motion } from "framer-motion";
import Contact from "../Contact";

const FoodDistributionCovid = () => {

  return (
     <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:mb-12 mb-12 p-4 max-w-6xl mx-auto relative font-[Outfit,sans-serif]"
      >
        <h1 className="text-center text-2xl md:text-3xl sm:text-4xl font-bold text-black -mt-20 mb-16 md:-mt-6 md:mb-20">
          Food Distribution During COVID-19
          <span className="block w-20 h-1 bg-gray-700 mx-auto mt-3 rounded-full"></span>
        </h1>

        {/* Main Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden rounded-xl shadow-2xl mb-10 relative"
        >
          <img
            src={img1}
            alt="Awareness Meeting"
            className="w-full h-[380px] md:h-[760px] sm:h-[400px] object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </motion.div>
      </motion.div>
      <Contact />
    </>
  );
};

export default FoodDistributionCovid;
