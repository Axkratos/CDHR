import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from '/logo.png'; // Assuming logo.jpg is in the same directory as this file

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Mission', href: '#mission' },
    { name: 'Team', href: '#team' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="CDHR Nepal Logo" className="w-12 h-auto" />
            <span className="ml-3 text-2xl font-bold text-gray-900">CDHR Nepal</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
            >
              {item.name}
            </Link>
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
            <Link
              key={item.name}
              to={item.href}
              className="block px-6 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
