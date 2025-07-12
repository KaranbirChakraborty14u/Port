import React from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import Contact from "../components/Contact";

import img1 from "./Photos/Podcast/Podcast1.jpeg";
import img2 from "./Photos/Religious/Religious8.jpeg";
import img3 from "./Photos/Child Right Commission/Child_rights3.jpeg";
import img4 from "./Photos/Naba Jeevan/Naba_Jeevan_Children.jpeg";
import img5 from "./Photos/TV show/TVshow4.jpeg";
import img6 from "./Photos/Child work/Childwork1.jpeg";
import img7 from "./Photos/Awareness Meeting with the Mayor, Deputy Mayor and Councilors/Awareness.jpeg";
import img8 from "./Photos/Distribution of food stuff the households of Quarantine zone during Covid 19/Distribution_o_food.jpeg";
import img9 from "./Photos/Book released/book.jpeg";
import img10 from "./Photos/BJP Meeting/BJP meeting.jpeg";
import img11 from "./Photos/Bodoland International/Bodoland1.jpeg";
import img12 from "./Photos/Stakeholder/Stakeholder.jpeg";
import img13 from "./Photos/Janashankhiya/Janashankiya1.jpeg";
import img14 from "./Photos/Teenage photo/Teenage photo.jpeg";
import img15 from "./Photos/Cotton College/Cotton College.jpeg";
import img16 from "./Photos/Political/Political10.jpeg";
import img17 from "./Photos/Observation of World Environment day/Environment.jpeg";
import img18 from "./Photos/human_trafficking_assam/Movie.jpeg";

const galleryItems = [
  { title: "Podcast", image: img1, isVideo: false, link: "/podcast" },
  { title: "Political", image: img16, isVideo: false, link: "/political" },
  {
    title: "Religious Photos",
    image: img2,
    isVideo: false,
    link: "/religious-photos",
  },
  {
    title: "Children Right Commission",
    image: img3,
    isVideo: false,
    link: "/children-right-commission",
  },
  { title: "Nava Jeevan", image: img4, isVideo: false, link: "/nava-jeevan" },
  { title: "TV Show", image: img5, isVideo: false, link: "/tv-show" },
  { title: "Child Work", image: img6, isVideo: false, link: "/child-work" },
  {
    title: "Awareness Meeting with the Mayor, Deputy Mayor and Councilors",
    image: img7,
    isVideo: false,
    link: "/awareness-meeting-mayor",
  },
  {
    title: "Distribution of food during covid",
    image: img8,
    isVideo: false,
    link: "/food-distribution-covid",
  },
  {
    title: "Book Released",
    image: img9,
    isVideo: false,
    link: "/book-released",
  },
  { title: "BJP meeting", image: img10, isVideo: false, link: "/bjp-meeting" },
  { title: "Bodoland", image: img11, isVideo: false, link: "/bodoland" },
  { title: "Stakeholder", image: img12, isVideo: false, link: "/stakeholder" },
  {
    title: "Janashankiya",
    image: img13,
    isVideo: false,
    link: "/janashankiya",
  },
  {
    title: "Observation of World Environment day",
    image: img17,
    isVideo: false,
    link: "/environment",
  },
  {
    title: "Produced a film on Human trafficking in Assam",
    image: img18,
    isVideo: false,
    link: "/movie",
  },
  {
    title: "Teenage Photo",
    image: img14,
    isVideo: false,
    link: "/teenage-photo",
  },
  {
    title: "Cotton College",
    image: img15,
    isVideo: false,
    link: "/cotton-college",
  },
];

const Gallery = () => {
  return (
    <>
    <section className="max-w-7xl mx-auto -mt-16 mb-12 md:-mt-4 md:mb-12 px-4 md:px-8">

      {/* Title */}
      <motion.h2
        className="text-4xl font-semibold text-center text-black font-[Outfit] mb-16 md:mb-20 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Gallery
        <span className="block w-20 h-1 bg-gray-700 mx-auto mt-3 rounded-full"></span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl shadow-lg overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link to={item.link}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
              />
              {item.isVideo && (
                <FaPlay className="absolute top-1/2 left-1/2 text-white text-3xl transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2" />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4">
                <h3 className="text-base font-semibold truncate">
                  {item.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
    <Contact />
    </>
  );
};

export default Gallery;