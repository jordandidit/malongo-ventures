import React from 'react';
import Slideshow from './Slideshow';

const LandingPage = () => {
  return (
    <section id="home" className="bg-blue-500 text-white h-screen flex flex-col justify-center items-start p-12">
      <div className="flex justify-between items-center w-full">
      
        <div>
          <h1 className="text-5xl font-bold">Malongo Ventures</h1>
          <p className="mt-4 text-xl">Helping tourists and tourism companies leverage AI and data analytics to simplify navigation and information around tourist spots in Rwanda.</p>
        </div>
        <Slideshow />
      </div>
    </section>
  );
};

export default LandingPage;
