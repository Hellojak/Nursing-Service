import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo4.png'
import { SiWorldhealthorganization } from "react-icons/si";
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" nbr shadow-2xl fixed w-full z-50">
      <div className="container">
        <div className="flex justify-between items-center py-4 ">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="  flex items-center justify-center mr-3">
                <span className=''>
                  <SiWorldhealthorganization className='text-7xl' />
                </span>


              </div>

            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 gap-2 font-Roboto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/aboutus" className="nav-link">About Us</Link>
            <Link to="/testimonials" className="nav-link">Testimonials</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link
              to="/booknow"
              className="btn btn-secondary"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary-light h-dvh text-center pb-4">
            <div className="container flex flex-col space-y-4">
              <Link to="/" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/services" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/about" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to="/testimonials" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
              <Link to="/contact" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link
                to="/appointment"
                className="btn btn-secondary w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;