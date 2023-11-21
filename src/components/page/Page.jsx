import React from 'react';
import Navbar from '../navbar/Navbar';
import BackToTopButton from '../backToTop/BackToTop';
import './page.css';
import Home from '../home/Home';
import About from '../about/About';
import Projects from '../projects/Projects';
import Footer from '../footer/Footer';

function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default Page;
