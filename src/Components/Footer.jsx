import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 rounded-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Left Section - Quick Links */}
        <div className="flex flex-col space-y-4 md:ml-6 mt-2">
          <h3 className="text-lg font-semibold text-green-500">Quick Links</h3>
          <ul className="flex flex-col space-y-2">
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

        {/* Center Section - Year and Copyright */}
        <div className="text-center my-4 md:my-0">
          <p>&copy; {new Date().getFullYear()} <span className="text-green-500">Edson Mugisha</span>. All rights reserved.</p>
        </div>

        {/* Right Section - Follow Me */}
        <div className="flex flex-col space-y-2 md:mr-6 items-center md:items-end mt-4 md:mt-0">
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
    </footer>
  );
};

export default Footer;
