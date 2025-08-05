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
import Journey from "./components/Journey";
import Gallery from "./components/Gallery";

// gallery pages
import Podcast from "./components/Galleries/Podcast";
import ReligiousPhotos from "./components/Galleries/ReligiousPhotos.jsx";
import ChildrenRightCommission from "./components/Galleries/ChildrenRightCommission.jsx";
import NavaJeevan from "./components/Galleries/NavaJeevan.jsx";
import TVShow from "./components/Galleries/TVShow.jsx";
import ChildWork from "./components/Galleries/ChildWork.jsx";
import AwarenessMeetingMayor from "./components/Galleries/AwarenessMeetingMayor.jsx";
import FoodDistributionCovid from "./components/Galleries/FoodDistributionCovid.jsx";
import BookReleased from "./components/Galleries/BookReleased.jsx";
import BJPMeeting from "./components/Galleries/BJPMeeting.jsx";
import Bodoland from "./components/Galleries/Bodoland.jsx";
import Stakeholder from "./components/Galleries/Stakeholder.jsx";
import Janashankiya from "./components/Galleries/Janashankiya.jsx";
import TeenagePhoto from "./components/Galleries/TeenagePhoto.jsx";
import CottonCollege from "./components/Galleries/CottonCollege.jsx";
import Political from "./components/Galleries/Political.jsx";
import Environment from "./components/Galleries/Environment.jsx";
import Movie from "./components/Galleries/Movie.jsx" ;

const App = () => {
  return (
    <div className="relative overflow-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
        </div>
      </div>

      <Navbar />

      <div className="relative z-10 mx-auto px-8 pt-24">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Journey />
                <Projects />
                {/* <Experience />
                <Awards /> */}
                <Contact />
              </>
            }
          />
          <Route path="/ProfessionalCareer" element={<ProfessionalCareer />} />
          <Route path="/PoliticalCareer" element={<PoliticalCareer />} />
          <Route path="/AcademicCareer" element={<AcademicCareer />} />
          <Route path="/SocialWork" element={<SocialWork />} />
          <Route path="/LiteratureCareer" element={<LiteratureCareer />} />
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Awards" element={<Awards />} />
          <Route path="/Gallery" element={<Gallery />} />

          {/* gallery pages */}
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/political" element={<Political />} />
          <Route path="/religious-photos" element={<ReligiousPhotos />} />
          <Route path="/children-right-commission" element={<ChildrenRightCommission />} />
          <Route path="/nava-jeevan" element={<NavaJeevan />} />
          <Route path="/tv-show" element={<TVShow />} />
          <Route path="/child-work" element={<ChildWork />} />
          <Route path="/awareness-meeting-mayor" element={<AwarenessMeetingMayor />} />
          <Route path="/food-distribution-covid" element={<FoodDistributionCovid />} />
          <Route path="/book-released" element={<BookReleased />} />
          <Route path="/bjp-meeting" element={<BJPMeeting />} />
          <Route path="/bodoland" element={<Bodoland />} />
          <Route path="/stakeholder" element={<Stakeholder />} />
          <Route path="/janashankiya" element={<Janashankiya />} />
          <Route path="/teenage-photo" element={<TeenagePhoto />} />
          <Route path="/cotton-college" element={<CottonCollege />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
