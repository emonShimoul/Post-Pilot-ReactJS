import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 pt-4 space-y-10">

      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">About PostPilot</h1>
        <p className="text-gray-500">
          A modern blog management app built with React
        </p>
      </div>

      {/* Description */}
      <section className="bg-white shadow-md rounded-xl p-6">
        <p className="text-gray-700 leading-relaxed">
          PostPilot is a simple yet powerful blog management application where users can create,
          manage, and organize their posts efficiently. It is designed to provide a clean and
          intuitive user experience while demonstrating modern frontend development practices.
        </p>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">Key Features</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            ✍️ Create, edit, and delete posts
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            🔐 User authentication (Login & Register)
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            👤 User-specific posts filtering
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            ⚡ Fast UI with React Hooks & Context API
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-3 text-center">Tech Stack</h2>

        <p className="text-gray-700 text-center">
          React, React Router, Tailwind CSS, Context API, LocalStorage
        </p>
      </section>

      {/* Author */}
      <section className="text-center">
        <h2 className="text-xl font-semibold mb-2">Developer</h2>
        <p className="text-gray-600">
          Built by <span className="font-medium">Shimoul Uddin Emon</span>
        </p>
      </section>

    </div>
  );
};

export default About;