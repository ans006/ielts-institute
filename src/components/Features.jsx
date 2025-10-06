import React from "react";

const features = [
  { title: "Speaking Practice", desc: "Interactive sessions with certified trainers.", icon: "🗣️" },
  { title: "Mock Tests", desc: "Simulated tests like the real IELTS exam.", icon: "📝" },
  { title: "Band Score Tracking", desc: "Monitor your progress and improve.", icon: "📊" },
  { title: "Live Classes", desc: "One-on-one mentoring with experts.", icon: "🎥" },
];

const Features = () => (
  <section id="features" className="py-16 px-8 text-center bg-white">
    <h2 className="text-3xl font-bold text-blue-700 mb-10">Features</h2>
    <div className="grid gap-8 md:grid-cols-4">
      {features.map((f, i) => (
        <div key={i} className="p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="text-5xl mb-4">{f.icon}</div>
          <h3 className="text-xl font-semibold text-blue-700 mb-2">{f.title}</h3>
          <p className="text-gray-600">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
