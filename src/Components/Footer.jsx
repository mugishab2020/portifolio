import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto flex justify-between items-center">

        {/* Left Section - Quick Links */}
        <div className="flex flex-col space-y-2 mt-2">
          <h3 className="text-lg font-semibold text-green-500">Quick Links</h3>
          <ul className="space-y-1/2">
            <li>
              <Link to="/about" className="hover:text-green-500">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/skills" className="hover:text-green-500">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-green-500">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:text-green-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        
        <div className="flex flex-col space-y-2 items-end">
          <h3 className="text-lg font-semibold text-white">Follow Me</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/mugishab2020"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-2xl hover:text-green-400"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mugisha-edson-204888203/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-2xl hover:text-green-400"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://twitter.com/mugisha_baraka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-2xl hover:text-green-400"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section with Background Color */}
      <div className="bg-gray-800 py-4 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} <span className="text-green-500">Edson Mugisha</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;