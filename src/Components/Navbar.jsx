import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  // Update active link state based on the current location when component renders
  React.useEffect(() => {
    setActiveLink(location.pathname); // this will automatically highlight the active route link based on path
  }, [location]);

  return (
    <header className="flex justify-between items-center p-5 bg-gray-900">
      <div className="text-xl font-bold">
        <Link to="/" className="hover:text-green-300 hover:overline break-after-column">
          <span className="text-green-500 text-6xl">M</span>
          <span className="text-white hover:underline">.Edson</span>
        </Link>
      </div>

      <nav className="space-x-8 justify-center p-5">
        <Link
          to="/about"
          className={`${
            activeLink === '/about' ? 'text-green-500' : 'text-white'
          } hover:text-green-500`}
          onClick={() => setActiveLink('/about')}
        >
          About
        </Link>

        <Link
          to="/skills"
          className={`${
            activeLink === '/skills' ? 'text-green-500' : 'text-white'
          } hover:text-green-500`}
          onClick={() => setActiveLink('/skills')}
        >
          Skills
        </Link>

        <Link
          to="/projects"
          className={`${
            activeLink === '/projects' ? 'text-green-500' : 'text-white'
          } hover:text-green-500`}
          onClick={() => setActiveLink('/projects')}
        >
          Projects
        </Link>

        <Link
          to="/contacts"
          className={`${
            activeLink === '/contacts' ? 'text-green-500' : 'text-white'
          } hover:text-green-500`}
          onClick={() => setActiveLink('/contacts')}
        >
          Contacts
        </Link>
      </nav>

      <button className="bg-green-500 text-white py-2 px-8 rounded-xl ml-10">
        Hire Me
      </button>
    </header>
  );
};

export default Navbar;
