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
      "Born in 1961 to renowned anthropologist Tapan Kumar Mazinder Baruah and Aruna Baruah, who is the youngest daughter of Lokopriya Gopinath Bordoloi. She is youngest among four sibling. Most of her childhood was spent in Tezu where her father was posted.",
  },
  {
    year: "1978",
    image: journeyPic,
    title: "College Days",
    description:
      "In 1978 Dr Sunita Changkakati joined Cotton College to enrol herself in B.A with Hons in Political Science. During College she was actively involved in the Assam Andolan Movement. She was part of the key youth brigades.",
  },
  {
    year: "1988-92",
    image: journeyPic,
    title: "PhD",
    description:
      "She completed her PhD in Political science from Guahati University where dissertation was on “Impact of Urbanisation & Modernisation in the tribal villages of Assam. A comparative study of Rabha tribes in Odalbakra & Rajapara Villages”. As part of her research, she spent a lot of time in villages of Odalbakra and Rajapara studying & researching their ways of life especially the cultural, religious and socio-economic aspects.",
  },
  {
    year: "1987",
    image: journeyPic,
    title: "Early Political Career",
    description:
      "Amit Shah started his political journey through student wings and gradually became known for his leadership. During his schooling, Amit Shah showed great interest in debates, history, and Indian politics,During his schooling, Amit Shah showed great interest in debates, history, and Indian politics",
  },
  {
    year: "1993",
    image: journeyPic,
    title: "Professional Career",
    description:
      "In 1993 Dr Sunita joined District Primary Education Programme (Govt. of Asam) as a consultant and from there she moved to Assam Mahila Samata Society as a Gender consultany",
  },
  {
    year: "1995",
    image: journeyPic,
    title: "Rising to Prominence",
    description:
      "In 1995, he got a major opportunity in the state politics, marking the beginning of a new phase.During his schooling, Amit Shah showed great interest in debates, history, and Indian politics,During his schooling, Amit Shah showed great interest in debates, history, and Indian politics",
  },
  {
    year: "1995",
    image: journeyPic,
    title: "CO Founding ACRD",
    description:
      "After working for a couple of years for different govt schemes, she realised that there is a need for a social platform through which she could work issues such as women empowerment, poverty, child rights at a grassroots level. These ideas gave birth to Assam Centre for Rural Development (ACRD),  an NGO Dr Sunita Changkakati co-founded with Dr. Lily Mazinder Baruah.",
  },
  {
    year: "1997",
    image: journeyPic,
    title: "Executive Director",
    description:
      "After working in the capacity as a secretary of the organisation for the first 2 years, she was made the Executive Director. She worked in this capacity till 2014 growing the organisation leaps and bounds.",
  },
  {
    year: "1999",
    image: journeyPic,
    title: "Vocational Training and Skill Development Centre",
    description:
      "In 1999 she started a training centre named VTSDC in Chayani Borduar area which mainly focused on livelihood and skill development of the villagers.",
  },
  {
    year: "2005",
    image: journeyPic,
    title: "Author",
    description:
      "In 2005 Dr Sunita started here journey as a author with her first book called Surya Kalanka, a collection of three Assamese short stories. This started a decades long passion on writing different books. Prior to this book she had already been writing on various social issues on different local newspapers as a columnist.",
  },
  {
    year: "2009",
    image: journeyPic,
    title: "Navajeevan",
    description:
      "Navajeevan Rehabilitation Home was started in 2009 under ACRD to act as a shelter home for all the trafficked victims from various different districts of Assam. Navajeevan has been a huge success where so far more than 200 trafficked victims have been rehabilitated. The girls in Navajeevan are given various different training and education to make sure that the trafficked victims are taken well care of and have the capacity to lead a normal life. Navajeevan is also registered as a Children’s Home under Juvenile Justice Act.",
  },
  {
    year: "2014",
    image: journeyPic,
    title: "BJP",
    description:
      "In 2014 Dr Sunita joined Bharatiya Janata Party inspired by the passion and leadership of Hon PM Shri Narendra Modi. She wanted to be part of the social change under Narendra Modi where she could serve her nation in even a bigger way.",
  },
  {
    year: "2017–2023",
    image: journeyPic,
    title: "Leadership in Child Rights & Public Advocacy",
    description: `
      Dr. Sunita was appointed as the Chairperson of the Assam State Commission for Protection of Child Rights (ASCPCR). 
      Under her leadership, the commission intervened in over 500 cases involving child abuse, child marriage, and trafficking. 
      Several workshops were also conducted on the New Education Policy, child trafficking, and the Right to Education (RTE).

      Key issues addressed as Chairperson since 2017:
      1. Child Rights Violation cases
      2. Protection of Children from Sexual Offences (POCSO) cases
      3. Child Labour cases
      4. Corporal Punishment cases
      5. Child Marriage cases
      6. Children in Need of Care and Protection (CNCP)
      7. Right to Education (RTE) cases
      8. Child Trafficking, Missing, and Abduction cases
      9. Other cases: Cyber-crime, conflict with law, substance abuse, illegal adoption
    `,
  },
  {
    year: "2024",
    image: journeyPic,
    title: "Chandraprabha Saikiani Award",
    description:
      "She was chosen to be the recipient of Chandraprabha Saikiani Award for Social Work for women and children for the year 2024 by the Govt. of Assam on Bishnu Rabha Diwas, 2024.",
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