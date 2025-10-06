import React from "react";

const Home = () => {
  return (
    <section className="pt-24 text-center bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4">
        Achieve Your Dream IELTS Score
      </h1>
      <p className="max-w-xl text-gray-600 text-lg mb-6">
        Join thousands of students who have improved their English proficiency
        and achieved top IELTS band scores with our expert trainers.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
  );
};

export default Home;
