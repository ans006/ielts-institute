
import React from "react";

const reviews = [
  { name: "Aditi Sharma", review: "Scored Band 8.5 thanks to IELTS Institute!" },
  { name: "Ravi Kumar", review: "Amazing mock tests and trainers." },
  { name: "Sara Khan", review: "Personal mentoring helped me get Band 7.5." },
];

const Testimonials = () => (
  <section id="testimonials" className="py-16 px-8 text-center bg-blue-50">
    <h2 className="text-3xl font-bold text-blue-700 mb-10">Testimonials</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {reviews.map((r,i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="italic mb-4">“{r.review}”</p>
          <h4 className="text-blue-700 font-semibold">{r.name}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
