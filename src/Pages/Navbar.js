import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa'; // Import the heart icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#CB6040] text-[#F2E5BF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16"> {/* Centering items */}
          
          {/* Center - Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="relative text-lg hover:text-[#FFD700] flex items-center group transition-all"
            >
              <FaHeart className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all"/> {/* Heart icon */}
              Home
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span> {/* Hover underline */}
            </Link>
            <Link 
              to="/about" 
              className="relative text-lg hover:text-[#FFD700] flex items-center group transition-all"
            >
              <FaHeart className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all"/>
              About Us
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              to="/vendor-listing" 
              className="relative text-lg hover:text-[#FFD700] flex items-center group transition-all"
            >
              <FaHeart className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all"/>
              Vendor Listing
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              to="/planning-tools" 
              className="relative text-lg hover:text-[#FFD700] flex items-center group transition-all"
            >
              <FaHeart className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all"/>
              Planning Tools
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              to="/testimonial" 
              className="relative text-lg hover:text-[#FFD700] flex items-center group transition-all"
            >
              <FaHeart className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all"/>
              Testimonial
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4">
            <button onClick={toggleMenu} className="text-[#FFF5E4]">
              {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#CB6040] px-4 pb-4">
          <Link 
            to="/" 
            onClick={toggleMenu} 
            className="block relative py-2 text-lg hover:text-[#FFD700] flex items-center group transition-all"
          >
            <FaHeart className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all"/> Home
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span> {/* Hover underline */}
          </Link>
          <Link 
            to="/about" 
            onClick={toggleMenu} 
            className="block relative py-2 text-lg hover:text-[#FFD700] flex items-center group transition-all"
          >
            <FaHeart className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all"/> About Us
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span>
          </Link>
          <Link 
            to="/vendor-listing" 
            onClick={toggleMenu} 
            className="block relative py-2 text-lg hover:text-[#FFD700] flex items-center group transition-all"
          >
            <FaHeart className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all"/> Vendor Listing
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span>
          </Link>
          <Link 
            to="/planning-tools" 
            onClick={toggleMenu} 
            className="block relative py-2 text-lg hover:text-[#FFD700] flex items-center group transition-all"
          >
            <FaHeart className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all"/> Planning Tools
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span>
          </Link>
          <Link 
            to="/testimonial" 
            onClick={toggleMenu} 
            className="block relative py-2 text-lg hover:text-[#FFD700] flex items-center group transition-all"
          >
            <FaHeart className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all"/> Testimonial
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
