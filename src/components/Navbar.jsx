import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-700">IELTS Institute</h1>
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#features" className="hover:text-blue-600">Features</a></li>
          <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? "✖" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 flex flex-col gap-3">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
