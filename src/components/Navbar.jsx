import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdMenu,
  MdClose,
  MdExpandMore,
} from "react-icons/md";
import logo from "./raviKumarLogo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // Mobile
  const dropdownRef = useRef(null);

  const dropdownItems = [
    { label: "Professional Career", to: "/ProfessionalCareer" },
    { label: "Political Career", to: "/PoliticalCareer" },
    { label: "Academic Career", to: "/AcademicCareer" },
    { label: "Social Work", to: "/SocialWork" },
    { label: "Literature Career", to: "/LiteratureCareer" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="font-outfit sticky top-0 z-50 px-4 md:px-8 py-4 transition-all duration-300">
      <div className="flex items-center justify-between">
        <Link to="/" aria-label="Home">
          <img src={logo} width={50} height={33} alt="Logo" className="mr-2" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-lg font-medium text-gray-800 items-center ml-10">
          <Link
            to="/"
            className="hover:text-blue-600 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Home
          </Link>

          <Link
            to="/About"
            className="cursor-pointer hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          
           {/* Desktop Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300 ease-in-out">
              Works
              <MdExpandMore
                className={`transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-0.5 w-56 bg-white text-gray-800 border border-gray-200 rounded-md shadow-lg z-50">
                {dropdownItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 ease-in-out"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <ScrollLink
            to="experience"
            smooth
            duration={500}
            offset={-100}
            className="cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Experience
          </ScrollLink>

          <ScrollLink
            to="awards"
            smooth
            duration={500}
            offset={-100}
            className="cursor-pointer hover:text-blue-600 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Awards
          </ScrollLink>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5 text-2xl text-gray-600 mr-10">
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

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 p-6 flex flex-col gap-6 text-base font-medium text-gray-700 overflow-y-auto">
          <button
            className="self-end text-4xl text-gray-800 mb-4"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <MdClose />
          </button>

          <Link
            to="/"
            className="cursor-pointer hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/About"
            className="cursor-pointer hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              Works
              <MdExpandMore
                className={`transition-transform duration-300 ${
                  isMobileDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isMobileDropdownOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                {dropdownItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="hover:text-blue-600"
                    onClick={() => {
                      setIsOpen(false);
                      setIsMobileDropdownOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <ScrollLink
            to="experience"
            smooth
            duration={500}
            offset={-100}
            className="cursor-pointer hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="awards"
            smooth
            duration={500}
            offset={-100}
            className="cursor-pointer hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Awards
          </ScrollLink>

          {/* Mobile Icons */}
          <div className="flex gap-4 text-xl mt-3 text-gray-600">
            <a
              href="https://www.facebook.com/DrSunitaChangkakati/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:sunita_chang@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <MdEmail />
            </a>
            <a
              href="tel:+919435110275"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;