import React from 'react';
import profileImage from '../assets/images/profile.jpeg';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Who we are</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img src={profileImage} alt="Profile" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="w-full md:w-2/3 text-gray-800">
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p className="text-lg mb-4">
              Hi, I'm Ishimwe Ntwali Jonathan, a student at the African Leadership University (ALU). I am passionate about leveraging technology to enhance tourism experiences.
            </p>
            <h3 className="text-2xl font-semibold mb-4">About the Project</h3>
            <p className="text-lg">
              Malongo Ventures aims to help tourists and tourism companies utilize AI and data analytics to simplify navigation and provide real-time information about tourist spots across Rwanda. Our goal is to improve customer satisfaction and operational efficiency in the tourism industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
