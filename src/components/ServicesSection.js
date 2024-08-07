import React from 'react';
import service1Image from '../assets/images/service1.jpg';
import service2Image from '../assets/images/service2.png';
import service3Image from '../assets/images/service3.webp';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
           
            <img src={service1Image} alt="Service 1" className="mx-auto rounded-lg shadow-lg w-full h-50" />
            <hr className="my-4 border-t-2 border-gray-300" />
            <p>Offering AI-powered navigation tools for tourists.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
           
            <img src={service2Image} alt="Service 2" className="mx-auto rounded-lg shadow-lg w-full h-50" />
            <hr className="my-4 border-t-2 border-gray-300" />
            <p>Providing data analytics solutions for tourism companies.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          
            <img src={service3Image} alt="Service 3" className="mx-auto rounded-lg shadow-lg w-full h-50" />
            <hr className="my-4 border-t-2 border-gray-300" />
            <p>Creating customized travel plans based on AI insights.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
