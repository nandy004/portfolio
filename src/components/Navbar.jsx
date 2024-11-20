import React, { useState } from 'react';                                                                                                                                                                                    
import Link from 'next/link';
import { TfiDownload } from "react-icons/tfi";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="flex justify-between  fixed top-0 w-full z-50 transition-all delay-200 items-center bg-[#efede6] px-10 py-4">
      <div className="w-24 h-18 flex items-center">
        <p className="text-5xl text-[#2bbcca]">nandy.</p>
      </div>

      <ul className="hidden md:flex flex-row text-blue-950 gap-x-16">
        <li className="text-lg font-medium hover:text-orange-400 transition-colors duration-300">
          <Link href="#Home">Home</Link>
        </li>
        <li className="text-lg font-medium hover:text-orange-400 transition-colors duration-300">
          <Link href="#About">About</Link>
        </li>
        <li className="text-lg font-medium hover:text-orange-400 transition-colors duration-300">
          <Link href="#Projects">Project</Link>
        </li>
        <li className="text-lg font-medium hover:text-orange-400 transition-colors duration-300">
          <Link href="#Contact">Contact</Link>
        </li>
      </ul>

      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="text-blue-950 text-2xl"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#efede6] shadow-md">
          <ul className="flex flex-col items-center gap-y-4 py-4">
            <li className="text-lg font-medium hover:text-orange-400 transition-colors duration-300">
              <Link href="#Home" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="text-lg font-medium hover:text-orange-400 transition-colors duration-300">
              <Link href="#About" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="text-lg font-medium hover:text-orange-400 transition-colors duration-300">
              <Link href="#Project" onClick={() => setMobileMenuOpen(false)}>
                Project
              </Link>
            </li>
            <li className="text-lg font-medium hover:text-orange-400 transition-colors duration-300">
              <Link href="#Contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <button
              className="rounded-2xl border-2 bg-blue-950 text-white px-6 py-2 hover:bg-orange-400 hover:text-white transition-all duration-300 ease-in-out"
              onClick={() => setMobileMenuOpen(false)}
            >
              <a
                href="/images/Nandhini_E.pdf"
                download
                className="inline-flex items-center"
              >
                Download CV <TfiDownload className="ml-2" />
              </a>
            </button>
          </ul>
        </div>
      )}

      <div className="hidden md:block">
        <button className="rounded-2xl border-2 bg-blue-950 text-white px-6 py-2 hover:bg-orange-400 hover:text-white transition-all duration-300 ease-in-out">
          <a href="/images/Nandhini_E.pdf" download className="inline-flex items-center">
            Download CV <TfiDownload className="ml-2" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
