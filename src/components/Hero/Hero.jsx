import React from "react";
import {
  FaPassport,
  FaPlaneDeparture,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import ConsultationForm from "../ConsultationForm/ConsultationForm";

const features = [
  { icon: <FaPassport />, label: "Schengen visa specialists" },
  { icon: <FaPlaneDeparture />, label: "Flights & holiday packages" },
  { icon: <FaShieldAlt />, label: "Trusted UK support" },
];

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-start overflow-visible"
      style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
    >
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <div className="relative z-[2] w-full max-w-[1180px] mx-auto px-8 lg:px-12 pt-[190px] pb-10 flex flex-col lg:flex-row items-start justify-between gap-20 overflow-visible">
        {/* LEFT CONTENT */}
        <div className="w-full lg:max-w-[450px] lg:-translate-x-8">
          <h1 className="font-poppins font-bold text-[42px] leading-[1.08] text-white tracking-tight">
            Your next adventure
            <br />
            is closer than you
            <br />
            think.
          </h1>

          <p className="mt-5 text-[15px] leading-7 text-[#e8e8e8] max-w-[420px]">
            Visas, flights, and tailor-made European holidays for UK residents —
            planned by real travel experts, not generic booking bots.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {features.map((feature) => (
              <li key={feature.label} className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-light-gold">
                  {feature.icon}
                </span>
                <span className="text-white font-medium">{feature.label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-4 flex-nowrap">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-light-gold to-gold text-dark-navy font-semibold hover:-translate-y-1 transition whitespace-nowrap min-w-max"
            >
              Start Your Visa Application
              <FaArrowRight />
            </a>
            <a
              href="#destinations"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-white text-white hover:bg-white hover:text-dark-navy transition whitespace-nowrap min-w-max"
            >
              Explore Destinations
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div id="consultation" className="w-full lg:w-[470px] flex-shrink-0">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
