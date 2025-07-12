import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Contact from "../Contact";

import img1 from "../Photos/Political/Political1.jpeg";
import img2 from "../Photos/Political/Political2.jpeg";
import img3 from "../Photos/Political/Political3.jpeg";
import img4 from "../Photos/Political/Political4.jpeg";
import img5 from "../Photos/Political/Political5.jpeg";
import img6 from "../Photos/Political/Political6.jpeg";
import img7 from "../Photos/Political/Political7.jpeg";
import img8 from "../Photos/Political/Political8.jpeg";
import img9 from "../Photos/Political/Political9.jpeg";
import img10 from "../Photos/Political/Political10.jpeg";
import img11 from "../Photos/Political/Political11.jpeg";
import img12 from "../Photos/Political/Political12.jpeg";
import img13 from "../Photos/Political/Political13.jpeg";

const Political = () => {
  const [emblaMainRef, emblaMain] = useEmblaCarousel({ loop: true });
  const [emblaThumbsRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
  ];

  const onSelect = useCallback(() => {
    if (!emblaMain || !emblaThumbs) return;
    setSelectedIndex(emblaMain.selectedScrollSnap());
    emblaThumbs.scrollTo(emblaMain.selectedScrollSnap());
  }, [emblaMain, emblaThumbs]);

  useEffect(() => {
    if (!emblaMain) return;
    emblaMain.on("select", onSelect);
    onSelect();
  }, [emblaMain, onSelect]);

  const scrollPrev = () => emblaMain && emblaMain.scrollPrev();
  const scrollNext = () => emblaMain && emblaMain.scrollNext();
  const onThumbClick = (index) => emblaMain && emblaMain.scrollTo(index);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:mb-12 mb-12 p-4 max-w-5xl mx-auto relative font-[Outfit,sans-serif]"
      >
        <h1 className="text-center text-3xl sm:text-4xl font-bold text-black -mt-20 mb-16 md:-mt-8 md:mb-16">
          Political
          <span className="block w-20 h-1 bg-gray-700 mx-auto mt-3 rounded-full"></span>
        </h1>

        {/* Main Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden rounded-xl shadow-2xl mb-10 relative"
          ref={emblaMainRef}
        >
          <div className="flex">
            {images.map((src, index) => (
              <div
                className="flex-[0_0_100%] group transition-transform duration-300 ease-in-out"
                key={index}
              >
                <img
                  src={src}
                  alt={`Political image ${index + 1}`}
                  className="w-full h-[360px] md:h-[560px] sm:h-[400px] object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>

          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-1 md:left-3 transform -translate-y-1/2 bg-white hover:bg-gray-200 rounded-full transition p-2 shadow-lg z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="md:w-5 md:h-5 w-3 h-3 text-gray-700" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-1 md:right-3 transform -translate-y-1/2 bg-white hover:bg-gray-200 transition p-2 rounded-full shadow-lg z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="md:w-5 md:h-5 w-3 h-3 text-gray-700" />
          </button>
        </motion.div>

        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex gap-3">
            {images.map((src, index) => (
              <div
                key={index}
                onClick={() => onThumbClick(index)}
                className={`flex-[0_0_25%] sm:flex-[0_0_15%] cursor-pointer border-2 transition-all duration-200 ${
                  selectedIndex === index
                    ? "border-blue-600"
                    : "border-transparent"
                } rounded-md overflow-hidden hover:opacity-80`}
              >
                <img
                  src={src}
                  alt={`Thumbnail for political image ${index + 1}`}
                  className="w-full h-16 sm:h-20 object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <Contact />
    </>
  );
};

export default Political;
