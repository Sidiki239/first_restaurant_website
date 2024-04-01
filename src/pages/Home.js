import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Survey from '../components/Survey';
import { ThemeProvider } from '../context/ThemeContext';
import Testimonial from '../components/Testimonial';

const Home = () => {

 const currentPage ="Accueil"

  return (
    <div className='dark:bg-black bg-white w-full'>
      <Navbar  active={currentPage} />
     <Hero/>
      <Feature />
      <Services />
      <Testimonial />
     
      <Footer />
    </div>
  );
};

export default Home;