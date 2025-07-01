import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import journeyPic from "./Sunita1.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const timelineDatas = [
  {
    year: "1964",
    image: journeyPic,
    title: "Birth In Assam",
    description:
      "Amit Shah was born to Gujarati parents Mrs. Kusumben and Mr. Anilchandra Shah on October 22, 1964 in Mumbai. He. Amit Shah was born to Gujarati parents Mrs. Kusumben and Mr. Anilchandra Shah on October 22, 1964 in Mumbai. Amit Shah was born to Gujarati parents Mrs. Kusumben and Mr. Anilchandra Shah on October 22, 1964 in Mumbai.",
  },
  {
    year: "1980",
    image: journeyPic,
    title: "Schooling Days",
    description:
      "During his schooling, Amit Shah showed great interest in debates, history, and Indian politics, During his schooling, Amit Shah showed great interest in debates, history, and Indian politics,During his schooling, Amit Shah showed great interest in debates, history, and Indian politics ",
  },
  {
    year: "1982",
    image: journeyPic,
    title: "College Life",
    description:
      "In 1982, he joined college and began taking active interest in student organizations and social work. During his schooling, Amit Shah showed great interest in debates, history, and Indian politics,During his schooling, Amit Shah showed great interest in debates, history, and Indian politics",
  },
  {
    year: "1987",
    image: journeyPic,
    title: "Early Political Career",
    description:
      "Amit Shah started his political journey through student wings and gradually became known for his leadership. During his schooling, Amit Shah showed great interest in debates, history, and Indian politics,During his schooling, Amit Shah showed great interest in debates, history, and Indian politics",
  },
  {
    year: "1989",
    image: journeyPic,
    title: "Major Breakthrough",
    description:
      "By 1989, Amit Shah had become a recognizable name in his constituency.During his schooling, Amit Shah showed great interest in debates, history, and Indian politics,During his schooling, Amit Shah showed great interest in debates, history, and Indian politics",
  },
  {
    year: "1995",
    image: journeyPic,
    title: "Rising to Prominence",
    description:
      "In 1995, he got a major opportunity in the state politics, marking the beginning of a new phase.During his schooling, Amit Shah showed great interest in debates, history, and Indian politics,During his schooling, Amit Shah showed great interest in debates, history, and Indian politics",
  },
  {
    year: "1997",
    image: journeyPic,
    title: "Leadership Roles",
    description:
      "Amit Shah took up leadership roles and was acknowledged as a skilled strategist.During his schooling, Amit Shah showed great interest in debates, history, and Indian politics,During his schooling, Amit Shah showed great interest in debates, history, and Indian politics",
  },
  {
    year: "1999",
    image: journeyPic,
    title: "National Recognition",
    description:
      "By 1999, he had earned national recognition in political circles. During his schooling, Amit Shah showed great interest in debates, history, and Indian politicsDuring his schooling, Amit Shah showed great interest in debates, history, and Indian politicsDuring his schooling, Amit Shah showed great interest in debates, history, and Indian politics",
  },
];

const Journey = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  return (
    <>
    <div>
      {/* Timeline Section */}
      <motion.div
        className=" py-20 px-4 md:px-16 md:mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative md:mb-10 mb-14">
          {/* Centered Heading */}
          <h2 className="font-outfit md:text-4xl text-3xl font-semibold text-center text-gray-900 underline decoration-gray-400 decoration-1 underline-offset-8">
            Journey
          </h2>

          {/* Right-Aligned Buttons */}
          <div className="absolute right-0.5 md:right-5 top-1/2 -translate-y-1/2 hidden md:flex gap-3">
            {/* Left Button */}
            <button
              onClick={() => {
                if (activeIndex > 0) {
                  setPrevIndex(activeIndex);
                  setActiveIndex((prev) => prev - 1);
                  setIsExpanded(false);
                }
              }}
              disabled={activeIndex === 0}
              className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-xl border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition disabled:opacity-40"
            >
              <FaArrowLeft />
            </button>

            {/* Right Button */}
            <button
              onClick={() => {
                if (activeIndex < timelineDatas.length - 1) {
                  setPrevIndex(activeIndex);
                  setActiveIndex((prev) => prev + 1);
                  setIsExpanded(false);
                }
              }}
              disabled={activeIndex === timelineDatas.length - 1}
              className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-xl border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition disabled:opacity-40"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Year Navigation */}
        <div className="flex items-center justify-between overflow-x-auto text-base md:text-lg font-semibold text-gray-500 border-b pb-4 mb-12 md:mb-16">
          {timelineDatas.map((item, index) => (
            <div
              key={item.year}
              onClick={() => {
                setPrevIndex(activeIndex);
                setActiveIndex(index);
                setIsExpanded(false);
              }}
              className={`font-outfit flex mt-4 md:mt-12 flex-col items-center min-w-[80px] md:min-w-[100px] cursor-pointer transition-colors duration-300 ${
                index === activeIndex ? "text-orange-500" : ""
              }`}
            >
              <span>{item.year}</span>
              <span
                className={`md:mt-3 mt-4 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${
                  index === activeIndex ? "bg-orange-500" : "bg-gray-400"
                }`}
              ></span>
            </div>
          ))}
        </div>

        {/* Timeline Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: activeIndex > prevIndex ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeIndex > prevIndex ? -100 : 100 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center"
          >
            {/* Left: Image */}
            <img
              src={timelineDatas[activeIndex].image}
              alt={timelineDatas[activeIndex].title}
              className="w-[95%] h-[250px] md:w-[45%] md:h-[480px] object-cover md:ml-16 md:mt-8"
            />

            {/* Right: Text */}
            <div className="font-outfit w-[95%] md:mt-8 md:w-[45%] relative bg-white p-6 shadow-lg transition-all duration-500 ease-in-out flex flex-col justify-start min-h-[250px] md:min-h-[480px]">
              <span className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 rounded-sm font-semibold md:text-2xl">
                {timelineDatas[activeIndex].year}
              </span>

              <h3 className="text-orange-600 text-xl md:text-2xl font-bold mb-2 mt-4 md:mb-4 md:mt-12 md:ml-4">
                {timelineDatas[activeIndex].title}
              </h3>

              <div
                className={`text-gray-700 md:ml-4 text-base overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpanded ? "max-h-[500px]" : "max-h-[80px]"
                }`}
              >
                <p className="leading-relaxed whitespace-pre-line">
                  {timelineDatas[activeIndex].description}
                </p>
              </div>

              <div className="mt-3 md:ml-4">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-base text-orange-600 font-semibold underline hover:text-orange-700 transition duration-300"
                >
                  {isExpanded ? "Read less" : "Read more"}
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      </div>
    </>
  );
};

export default Journey;