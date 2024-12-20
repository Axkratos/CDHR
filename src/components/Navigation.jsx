import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/logo.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Mission', href: '#mission' },
    { name: 'Team', href: '#team' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavigation = (href) => {
    if (location.pathname === '/') {
      // Smooth scroll if on the home page
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Redirect to home page
      window.location.href = `/${href}`;
    }
    setIsOpen(false); // Close mobile menu
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="CDHR Nepal Logo" className="w-14 h-auto" />
            <div className="ml-3">
              <span className="block text-lg font-medium text-gray-700">
                सेन्टर फर डेमोक्रेसी एण्ड ह्युमन राइट्स
              </span>
              <span className="block text-2xl font-bold text-gray-900">CDHR Nepal</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-6">
          {navigation.map((item) => (
            <button
              key={item.name}
              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
              onClick={() => handleNavigation(item.href)}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden bg-gray-100 py-4">
          {navigation.map((item) => (
            <button
              key={item.name}
              className="block px-6 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200 transition"
              onClick={() => handleNavigation(item.href)}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
