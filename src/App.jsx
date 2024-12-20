import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Team from './components/Team';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Navigation />

        <Routes>
          {/* Single-page sections */}
          <Route
            path="/"
            element={
              <main>
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
              </main>
            }
          />

          {/* Blog post page */}
          <Route path="/blog/:id" element={<BlogPost />} />

          <Route path="*" element={<ComingSoon />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
