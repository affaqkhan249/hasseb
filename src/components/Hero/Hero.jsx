import React from "react";
import { FaPassport, FaPlaneDeparture, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import ConsultationForm from "../ConsultationForm/ConsultationForm";

const features = [
  { icon: <FaPassport />, label: "Schengen visa specialists" },
  { icon: <FaPlaneDeparture />, label: "Flights & holiday packages" },
  { icon: <FaShieldAlt />, label: "Trusted UK support" },
];

// NOTE: Hotlinked stock photo standing in for the reference image.
// Swap this URL for your own licensed photo, or place a local file in
// src/assets and import it instead (e.g. import heroImage from "../../assets/hero-bg.jpg").
const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[750px] -mt-px pt-[68px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
      aria-label="Elite Holidays hero section"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" aria-hidden="true" />

      <div className="relative z-[2] w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-16 lg:py-[90px] flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* ---------- Left Content ---------- */}
        <div className="max-w-full lg:max-w-[640px] pt-0 lg:pt-7">
          <h1 className="font-poppins font-extrabold text-[32px] sm:text-[44px] md:text-[58px] lg:text-[70px] leading-[1.0] text-white tracking-tight">
            Your next adventure
            <br />
            is closer than you
            <br />
            think.
          </h1>

          <p className="mt-6 text-base md:text-lg lg:text-[22px] font-normal leading-relaxed text-[#e8e8e8] max-w-full lg:max-w-[520px]">
            Visas, flights, and tailor-made European holidays for UK residents — planned by
            real travel experts, not generic booking bots.
          </p>

          <ul className="list-none mt-8 flex flex-col gap-4">
            {features.map((feature) => (
              <li className="flex items-center gap-3.5" key={feature.label}>
                <span className="w-[38px] h-[38px] flex-shrink-0 rounded-[10px] bg-white/10 backdrop-blur-sm flex items-center justify-center text-light-gold text-base">
                  {feature.icon}
                </span>
                <span className="text-base font-medium text-white">{feature.label}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-9 flex-wrap">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2.5 h-[58px] px-8 rounded-full text-[15px] font-semibold tracking-wide text-dark-navy bg-gradient-to-br from-light-gold to-gold shadow-gold transition-all duration-300 hover:from-[#c8a04e] hover:to-gold-hover hover:-translate-y-[3px] hover:shadow-gold-lg whitespace-nowrap"
            >
              Start Your Visa Application
              <FaArrowRight className="text-sm" aria-hidden="true" />
            </a>
            <a
              href="#destinations"
              className="inline-flex items-center justify-center h-[58px] px-8 rounded-full text-[15px] font-semibold tracking-wide text-white border-[1.5px] border-white/80 bg-transparent transition-all duration-300 hover:bg-white hover:text-dark-navy hover:-translate-y-[3px] whitespace-nowrap"
            >
              Explore Destinations
            </a>
          </div>
        </div>

        {/* ---------- Right Side: Consultation Card ---------- */}
        <div className="w-full lg:w-auto flex-shrink-0 mt-8 lg:mt-0" id="consultation">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
