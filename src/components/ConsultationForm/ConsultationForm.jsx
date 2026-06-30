import React, { useState } from "react";
import { FaFileAlt, FaBolt, FaArrowRight } from "react-icons/fa";

const countries = [
  "Switzerland",
  "France",
  "Italy",
  "Spain",
  "Germany",
  "Greece",
  "Portugal",
  "Austria",
];

const inputClasses =
  "w-full h-[36px] rounded-[10px] border border-input-border px-4 text-sm font-medium text-[#2b2f38] bg-white outline-none transition-all duration-300 placeholder:text-[#aeb3bd] focus:border-focus-blue focus:shadow-[0_0_0_3px_rgba(12,140,233,0.12)]";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "Switzerland",
    bestTime: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submission handling would go here
  };

  return (
    <div className="w-full md:w-[500px] max-w-full bg-white rounded-card shadow-card p-3 md:p-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
        <div className="flex items-start gap-3.5">
          <span className="w-[46px] h-[46px] flex-shrink-0 rounded-xl bg-gradient-to-br from-[#2bb8c4] to-[#1496a6] text-white flex items-center justify-center text-lg">
            <FaFileAlt />
          </span>
          <div>
            <h2 className="text-[19px] font-bold text-dark-navy mb-1">
              Get a Free Consultation
            </h2>
            <p className="text-[13px] font-normal text-[#8a8f9a]">
              We&apos;ll get back to you quickly
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#9c7a2e] bg-[#faf1de] px-3 py-1.5 rounded-full whitespace-nowrap">
          <FaBolt aria-hidden="true" /> Fast Response
        </span>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-1.5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="fullName"
            className="text-[13px] font-semibold text-[#2b2f38]"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Your full name"
            value={formData.fullName}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[13px] font-semibold text-[#2b2f38]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@email.com"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-[13px] font-semibold text-[#2b2f38]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+44 7..."
              value={formData.phone}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="destination"
            className="text-[13px] font-semibold text-[#2b2f38]"
          >
            Destination Country
          </label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className={`${inputClasses} select-arrow appearance-none cursor-pointer pr-10`}
          >
            {countries.map((country) => (
              <option value={country} key={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="bestTime"
            className="text-[13px] font-semibold text-[#2b2f38]"
          >
            Best Time to Contact
          </label>
          <input
            type="text"
            id="bestTime"
            name="bestTime"
            placeholder="e.g. Weekdays after 5pm"
            value={formData.bestTime}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-[13px] font-semibold text-[#2b2f38]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your travel plans..."
            rows="3"
            value={formData.message}
            onChange={handleChange}
            className="w-full min-h-[60px] rounded-[10px] border border-input-border px-4 py-3 text-sm font-normal text-[#2b2f38] bg-white outline-none transition-all duration-300 placeholder:text-[#aeb3bd] focus:border-focus-blue focus:shadow-[0_0_0_3px_rgba(12,140,233,0.12)] resize-y"
          />
        </div>

        <button
          type="submit"
          className="mt-3 w-full h-12 rounded-full bg-gradient-to-br from-light-gold to-gold hover:from-[#c8a04e] hover:to-gold-hover text-dark-navy font-bold text-[14px] tracking-wide flex items-center justify-center gap-2 transition-all duration-300 shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5"
        >
          Enquire Now
          <FaArrowRight aria-hidden="true" />
        </button>
      </form>
    </div>
  );
};

export default ConsultationForm;
