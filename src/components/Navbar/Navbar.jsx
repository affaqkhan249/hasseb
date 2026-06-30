import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPlane,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navLinks = ["Homepage", "About Us", "Countries", "Blog", "Contact Us"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Homepage");

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      {/* ---------- Top Header ---------- */}
      <div className="w-full bg-primary-navy/95 backdrop-blur-xl py-3 md:py-0 md:h-[75px] flex items-center">
        <div className="w-full max-w-[980px] mx-auto px-6 md:px-8 lg:px-10 flex flex-wrap items-center justify-between gap-3">
          {/* Logo */}
          <a
            href="/"
            aria-label="Elite Holidays Home"
            className="flex flex-col leading-none"
          >
            <span className="flex items-center gap-1.5 font-poppins font-bold text-xl md:text-[26px] tracking-wide text-white">
              <span className="text-2xl md:text-[30px] font-extrabold bg-gradient-to-br from-light-gold to-gold bg-clip-text text-transparent">
                E
              </span>
              <span className="font-bold">LITE</span>
              <span className="font-extrabold ml-1">HOLIDAYS</span>
              <FaPlane
                className="ml-1.5 text-sm md:text-base text-light-gold rotate-45"
                aria-hidden="true"
              />
            </span>
            <span className="mt-1 ml-0.5 text-[10px] font-medium tracking-[2.5px] text-light-gold uppercase">
              Fly Elite With Us
            </span>
          </a>

          {/* Contacts */}
          <div className="flex items-center gap-3.5 md:gap-5">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 md:w-[38px] md:h-[38px] flex-shrink-0 rounded-full border border-white/30 flex items-center justify-center text-white text-sm">
                <FaPhoneAlt />
              </span>
              <span className="hidden sm:flex flex-col">
                <span className="text-[11px] font-normal text-white/65 mb-0.5">
                  Contact us for Help
                </span>
                <span className="text-sm font-semibold text-white">
                  +44 20 4572 2672
                </span>
              </span>
            </div>

            <span
              className="hidden md:block w-px h-9 bg-white/20"
              aria-hidden="true"
            />

            <div className="flex items-center gap-3">
              <span className="w-9 h-9 md:w-[38px] md:h-[38px] flex-shrink-0 rounded-full border border-white/30 flex items-center justify-center text-white text-sm">
                <FaMapMarkerAlt />
              </span>
              <span className="hidden sm:flex flex-col">
                <span className="text-[11px] font-normal text-white/65 mb-0.5">
                  Office Location
                </span>
                <span className="text-sm font-semibold text-white">
                  United Kingdom
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Floating Navigation ---------- */}
      <nav
        className="relative w-full flex justify-center mt-4 z-40"
        aria-label="Primary navigation"
      >
        <div className="w-[calc(100%-52px)] md:w-[calc(100%-100px)] lg:w-[calc(100%-108px)] max-w-[960px] bg-primary-navy/75 rounded-[24px] shadow-nav border border-white/10 flex flex-wrap items-center justify-between px-5 md:px-6 lg:px-8 py-2.5 md:py-2.5 md:pl-7 backdrop-blur-sm">
          {/* Mobile toggle */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Links */}
          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-stretch md:items-center gap-1 md:gap-1.5 w-full md:w-auto mt-3.5 md:mt-0 list-none`}
          >
            {navLinks.map((link) => (
              <li key={link} className="w-full md:w-auto">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(link);
                    setMenuOpen(false);
                  }}
                  className={`flex items-center gap-1.5 w-full md:w-auto whitespace-nowrap text-sm font-medium tracking-wide px-5 md:px-[20px] py-3 rounded-full transition-colors duration-300 cursor-pointer ${
                    active === link
                      ? "bg-white text-primary-navy font-semibold"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link}
                  {link === "Countries" && (
                    <FaChevronDown
                      className="text-[10px] mt-0.5"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            ))}

            {/* CTA shown inline on mobile menu */}
            <li className="md:hidden mt-2">
              <a
                href="#consultation"
                className="block text-center bg-brand-blue hover:bg-brand-blue-hover text-white text-[13px] font-semibold tracking-wider px-6 py-3.5 rounded-full transition-all duration-300"
              >
                GET STARTED
              </a>
            </li>
          </ul>

          {/* CTA desktop */}
          <a
            href="#consultation"
            className="hidden md:inline-block bg-brand-blue hover:bg-brand-blue-hover text-white text-[13px] font-semibold tracking-wider px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(30,79,163,0.4)]"
          >
            GET STARTED
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
