import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-[18px] right-[18px] md:bottom-[30px] md:right-[30px] flex flex-col items-end gap-2.5 z-50">
      <span className="bg-dark-navy text-white text-xs font-medium px-3.5 py-2 rounded-[10px] shadow-lg whitespace-nowrap">
        Chat with us!
      </span>
      <a
        href="https://wa.me/442045722672"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="w-[50px] h-[50px] md:w-[58px] md:h-[58px] rounded-full bg-[#25d366] text-white flex items-center justify-center text-2xl md:text-[28px] shadow-[0_12px_24px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110 hover:shadow-[0_16px_30px_rgba(37,211,102,0.55)]"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsAppButton;
