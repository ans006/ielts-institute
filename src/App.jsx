import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App; // <-- this default export is required
