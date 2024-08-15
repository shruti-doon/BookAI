import React, { useState, useRef, useEffect } from 'react';
import Front from './Front.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

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
    <div ref={menuRef}>
      <div className='h-[118px] w-full flex items-center justify-center' style={{ backgroundColor: '#6366F1' }}>
        <h1 className='font-bold text-3xl md:text-4xl text-white text-center'>
          Book Generator API
        </h1>
      </div>

      <div
        className='flex flex-wrap justify-center items-center py-5 px-4 md:px-8 md:py-6'
        style={{
          backgroundColor: '#1E293B',
          color: '#E2E8F0',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          width: '100%',
        }}
      >
        <button
          className={`menu-toggle md:hidden text-white text-3xl ${isOpen ? 'hidden' : ''}`}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <ul
          className={`uppercase flex flex-col md:flex-row justify-center items-center list-none space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 ${
            isOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          <li
            onClick={() => {
              scrollToSection('overview');
              setIsOpen(false);
            }}
            className='hover:text-cyan-400 text-sm md:text-base cursor-pointer'
          >
            Overview
          </li>
          <li
            onClick={() => {
              scrollToSection('auth');
              setIsOpen(false);
            }}
            className='hover:text-cyan-400 text-sm md:text-base cursor-pointer'
          >
            Authentication
          </li>
          <li
            onClick={() => {
              scrollToSection('endpoints');
              setIsOpen(false);
            }}
            className='hover:text-cyan-400 text-sm md:text-base cursor-pointer'
          >
            Endpoints
          </li>
          <li
            onClick={() => {
              scrollToSection('tutorials');
              setIsOpen(false);
            }}
            className='hover:text-cyan-400 text-sm md:text-base cursor-pointer'
          >
            Tutorials
          </li>
          <li
            onClick={() => {
              scrollToSection('codeexp');
              setIsOpen(false);
            }}
            className='hover:text-cyan-400 text-sm md:text-base cursor-pointer'
          >
            Code Examples
          </li>
          <li
            onClick={() => {
              scrollToSection('apipricing');
              setIsOpen(false);
            }}
            className='hover:text-cyan-400 text-sm md:text-base cursor-pointer'
          >
            Pricing
          </li>
        </ul>
      </div>

      <Front />
    </div>
  );
};

export default Navbar;
