import React from "react";

const courses = [
  {
    title: "IELTS Academic",
    desc: "Focused on students aiming for higher education abroad.",
  },
  {
    title: "IELTS General",
    desc: "Perfect for professionals seeking work or migration opportunities.",
  },
  {
    title: "Spoken English",
    desc: "Enhance your fluency, grammar, and pronunciation with expert guidance.",
  },
];

const Courses = () => {
  return (
    <div className="pt-24 px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Our Courses
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              {course.title}
            </h3>
            <p className="text-gray-600">{course.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
