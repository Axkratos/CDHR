import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Navigation />

        {/* Page Sections */}
        <div id="home">
          <Hero />
        </div>
        <div id="mission">
          <Mission />
        </div>
        <div id="team">
          <Team />
        </div>
        <div id="blog">
          <Blog />
        </div>
        <div id="contact">
          <Contact />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
