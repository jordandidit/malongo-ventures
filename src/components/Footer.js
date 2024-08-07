import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Malongo Ventures</h3>
            <p className="text-sm">
              Helping tourists and tourism companies leverage AI and data analytics to simplify navigation and information around tourist spots in Rwanda.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#home" className="text-sm hover:underline">Home</a></li>
              <li className="mb-2"><a href="#objectives" className="text-sm hover:underline">objectives</a></li>
              <li className="mb-2"><a href="#services" className="text-sm hover:underline">Our Services</a></li>
              <li className="mb-2"><a href="#contact" className="text-sm hover:underline">Contact Us</a></li>
              <li className="mb-2"><a href="#about-us" className="text-sm hover:underline">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: info@malongoventures.com</p>
            <p className="text-sm">Phone: +250 780 796 082</p>
            <p className="text-sm">Address: Kigali, Rwanda</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Malongo Ventures. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
