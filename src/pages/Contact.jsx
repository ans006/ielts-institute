import React from "react";

const Contact = () => (
  <section id="contact" className="py-16 px-8 bg-white">
    <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">Contact Us</h2>
    <p className="text-center text-gray-600 mb-8">Have questions? Reach out to us!</p>
    <form className="max-w-xl mx-auto bg-blue-50 p-6 rounded-xl shadow space-y-4">
      <input type="text" placeholder="Name" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="email" placeholder="Email" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <textarea placeholder="Message" rows="4" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      <button className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800 transition">Send Message</button>
    </form>
  </section>
);

export default Contact;
