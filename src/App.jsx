import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <div className="w-full min-h-screen overflow-auto">
      <Navbar />
      <Hero />
      <WhatsAppButton />
    </div>
  );
}

export default App;
