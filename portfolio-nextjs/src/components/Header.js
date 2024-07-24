"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink, scroller } from "react-scroll";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../../public/images/Pavan.png";
import styles from "../styles/Home.module.css";

const navLinks = [
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/Pavan_Resume.pdf";
    link.download = "Pavan_Kumar_Resume.pdf";
    link.click();
  };

  const handleSetActive = (linkName) => {
    setActiveLink(linkName);
  };

  const scrollTo = (hash) => {
    scroller.scrollTo(hash, {
      smooth: true,
      duration: 500,
      offset: -70,
      onSetActive: () => handleSetActive(hash),
    });
  };

  return (
    <header className="relative z-[999] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg fixed w-full">
      <div className="flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex-shrink-0 ml-4">
          <Link href={"/"}>
            <Image src={Logo} alt="logo" width={50} height={50} />
          </Link>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex-grow hidden sm:flex items-center justify-center space-x-5">
          <ul className="flex space-x-5 text-lg font-semibold text-white">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                className="relative"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <ScrollLink
                  className={`${styles["nav-link"]} ${activeLink === link.path ? "active" : ""} block px-3 py-2 hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110`}
                  to={link.path.substring(1)} // Removing leading #
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onSetActive={() => handleSetActive(link.path.substring(1))}
                >
                  {link.name}
                </ScrollLink>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Buttons */}
        <div className="hidden sm:flex items-center space-x-3 mr-4">
          <button
            onClick={handleResumeDownload}
            className="bg-yellow-300 text-black py-2 px-4 rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Resume
          </button>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="bg-yellow-300 text-black py-2 px-4 rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Hire Me
          </ScrollLink>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="sm:hidden flex-shrink-0">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.nav
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          exit={{ y: -250 }}
          className="sm:hidden fixed top-0 left-0 w-full h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 flex flex-col items-center justify-center space-y-6"
        >
          <ul className="text-3xl font-semibold text-white space-y-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  className={`${styles["nav-link"]} ${activeLink === link.path ? "active" : ""} block px-3 py-2 hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110`}
                  to={link.path.substring(1)} // Removing leading #
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleSetActive(link.path.substring(1));
                  }}
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
            <li>
              <button
                onClick={handleResumeDownload}
                className="bg-yellow-300 text-black py-2 px-4 rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
              >
                Resume
              </button>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="bg-yellow-300 text-black py-2 px-4 rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Me
              </ScrollLink>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
}

export default Header;
