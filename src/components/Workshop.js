import React from 'react';
import workshopImage from '../assets/images/workshop.png'

const Workshop = () => {
  return (
    <section id="workshop" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Workshop</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="w-full md:w-1/2 text-gray-800 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">AI in Tourism</h3>
            <p className="text-lg mb-4">
              In this workshop, we discussed how artificial intelligence can revolutionize the tourism sector by providing real-time information and enhancing tourist experiences. Our experts shared insights on data-driven solutions and innovative technologies that are shaping the future of tourism in Rwanda.
            </p>
            <p className="text-lg mb-4">
              Watch the recorded session to learn more about the potential of AI in tourism and how Malongo Ventures is at the forefront of this transformation.
            </p>
            <a
              href="https://drive.google.com/file/d/1-VdI8beVYqjB_RvmXpEGk4Guc8UYNhXi/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 mt-4 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Click to Watch Full Workshop
            </a>
          </div>
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img
              className="w-full max-w-sm rounded-lg shadow-lg object-cover"
              src={workshopImage}
              alt="AI in Tourism Workshop"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
