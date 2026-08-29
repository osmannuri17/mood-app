import React from 'react';
import SkyBackground from './components/zazizmir/SkyBackground';
import Navbar from './components/zazizmir/Navbar';
import Hero from './components/zazizmir/Hero';
import Concept from './components/zazizmir/Concept';
import Experience from './components/zazizmir/Experience';
import Menu from './components/zazizmir/Menu';
import Events from './components/zazizmir/Events';
import Gallery from './components/zazizmir/Gallery';
import Location from './components/zazizmir/Location';
import Reservation from './components/zazizmir/Reservation';
import Footer from './components/zazizmir/Footer';
import WaveDivider from './components/zazizmir/WaveDivider';

function App() {
  return (
    <>
      <SkyBackground />
      <Navbar />
      <Hero />
      <Concept />
      <Experience />
      <WaveDivider />
      <Menu />
      <Events />
      <Gallery />
      <Location />
      <Reservation />
      <Footer />
    </>
  );
}

export default App;
