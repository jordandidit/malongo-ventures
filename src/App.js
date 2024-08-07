import React from 'react';
import Header from './components/Header'
import LandingPage from './components/LandingPage';
import Services from './components/ServicesSection';
import Objectives from './components/ObjectivesSection';
import ContactUs from './components/ContactUsSection';
import AboutUs from './components/AboutUs';
import Workshop from './components/Workshop';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <LandingPage />
      <AboutUs />
      <Objectives />
      <Services />
      <Workshop />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
