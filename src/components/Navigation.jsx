import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '/logo.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Mission', href: '#mission' },
    { name: 'Area', href: '#area' },
    { name: 'Team', href: '/team' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavigation = (href) => {
    if (href === '/team') {
      // Navigate to the /team route
      navigate('/team');
    } else if (location.pathname === '/') {
      // Smooth scroll if on the home page
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Redirect to the home page and navigate to the section
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
              <span className="block text-lg lg:text-2xl font-bold text-gray-900">
                सेन्टर फर डेमोक्रेसी एण्ड ह्युमन राइट्स
              </span>
              <span className="block text-lg lg:text-2xl font-bold text-blue-600">
                Center for Democracy and Human Rights
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-6">
          {navigation.map((item) => (
            <button
              key={item.name}
              className="text-base lg:text-lg font-medium text-gray-700 hover:text-blue-600 transition"
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
              className="block px-6 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200 transition"
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
