import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Mission />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
