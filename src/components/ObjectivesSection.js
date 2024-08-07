import React from 'react';
import { FaMapSigns, FaChartLine, FaCog } from 'react-icons/fa'; // Importing icons from react-icons

const objectives = [
  {
    title: 'Objective 1',
    description: 'Utilizing AI to Enhance Tourist Experiences by Providing Real-Time Information and Navigation Assistance',
    icon: <FaMapSigns size={40} />,
  },
  {
    title: 'Objective 2',
    description: 'Supporting Tourism Companies with Data-Driven Insights to Improve Service Offerings and Operational Efficiency',
    icon: <FaChartLine size={40} />,
  },
  {
    title: 'Objective 3',
    description: 'Implementing AI Solutions to Streamline Processes and Improve Customer Satisfaction',
    icon: <FaCog size={40} />,
  },
];

const Objectives = () => {
  return (
    <section id="objectives" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {objectives.map((objective, index) => (
            <div key={index} className="p-14 rounded-lg shadow-lg bg-blue-500 text-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                {objective.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{objective.title}</h3>
              <p className="text-base">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
