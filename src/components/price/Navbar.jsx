import React, { useState, useRef, useEffect } from 'react';
import Front from './Front.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('.menu-toggle')
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className={isDarkMode ? 'bg-gray-900' : 'bg-white'}>
      <div
        className={`h-[118px] w-full flex items-center justify-center ${isDarkMode ? 'bg-[#6366F1]' : 'bg-blue-600'}`}
      >
        <h1 className={`font-bold text-3xl md:text-4xl ${isDarkMode ? 'text-white' : 'text-white'} text-center`}>
          Book Generator API
        </h1>
      </div>

      <div
        className={`flex flex-wrap justify-center items-center py-5 px-4 md:px-8 md:py-6 ${isDarkMode ? 'bg-gray-900 text-gray-300 border-gray-700' : 'bg-gray-200 text-gray-700 border-gray-300'} border-t`}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          width: '100%',
        }}
      >
        <button
          className={`menu-toggle md:hidden text-${isDarkMode ? 'white' : 'black'} text-3xl ${isOpen ? 'hidden' : ''}`}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <ul
          className={`uppercase flex flex-col md:flex-row justify-center items-center list-none space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden md:flex'}`}
        >
          {['overview', 'auth', 'endpoints', 'tutorials', 'code examples', 'api pricing'].map((section, index) => (
            <li
              key={index}
              onClick={() => {
                scrollToSection(section);
                setIsOpen(false);
              }}
              className='hover:text-cyan-400 text-sm md:text-base cursor-pointer'
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>

        <button
          className={`ml-4 text-xl ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={toggleDarkMode}
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </div>

      <Front val={isDarkMode} />
    </div>
  );
};

export default Navbar;
