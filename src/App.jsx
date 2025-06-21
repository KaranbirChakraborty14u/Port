import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

import ProfessionalCareer from "./Pages/ProfessionalCareer";
import PoliticalCareer from './Pages/PoliticalCareer';
import LiteratureCareer from './Pages/LiteratureCareer';
import SocialWork from './Pages/SocialWork';
import AcademicCareer from './Pages/AcademicCareer';
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Awards from "./components/Awards";

const App = () => {
  return (
    <div className="relative overflow-hidden text-stone-300 antialiased">
      {/* Background effect */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
        </div>
      </div>

      {/* Fixed Navbar */}
      <Navbar />

      {/* Content with top padding to avoid overlap */}
      <div className="relative z-10 mx-auto px-8 pt-24">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <Experience />
              <Awards />
              <Contact />
            </>
          } />
          <Route path="/ProfessionalCareer" element={<ProfessionalCareer />} />
          <Route path="/PoliticalCareer" element={<PoliticalCareer />} />
          <Route path="/AcademicCareer" element={<AcademicCareer />} />
          <Route path="/SocialWork" element={<SocialWork />} /> 
          <Route path="/LiteratureCareer" element={<LiteratureCareer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
