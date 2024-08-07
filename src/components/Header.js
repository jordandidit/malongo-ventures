import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-0 bg-grey-500 shadow-md">
      <div className="flex-shrink-0">
        <img src={logo} alt="Malongo Ventures" className="h-20 w-40" />
      </div>
      <nav>
        <ul className="flex space-x-6 text-lg">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about-us" className="hover:text-blue-500">About us</a></li>
          <li><a href="#objectives" className="hover:text-blue-500">Objectives</a></li>
          <li><a href="#services" className="hover:text-blue-500">Our Services</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
