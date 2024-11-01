import React from 'react';
import { Link } from 'react-router-dom';
import Me from '../public/images/me1.jpg';

const Home = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Introduction */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl font-bold mb-6">
            Hi, I'm <span className="text-green-500">Edson Mugisha</span>
          </h1>
          <p className="text-lg mb-6">
            I’m a passionate software developer skilled in building robust backend systems and beautiful user interfaces. I work primarily with technologies like React, Express, Django, and more.
          </p>
          <Link to="/projects">
            <button className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-400 transition duration-300">
              View My Work
            </button>
          </Link>
        </div>

        {/* Right Section - Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img 
            src={Me}
            alt="Profile" 
            className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-green-500" 
          />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">What I Do</h2>
        <p className="text-lg mb-8">
          I specialize in backend development, frontend design with React, and building scalable web applications. Explore my skills and projects to see what I can do.
        </p>
        <Link to="/skills">
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-400 transition duration-300">
            Learn More About My Skills
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
