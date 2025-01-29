import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/logo.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About us", href: "#about", hasDropdown: true },
    { name: "Thematic Areas", href: "#area" },
    { name: "Events", href: "#events" },
    { name: "Blogs", href: "#blog" },
    { name: "Support us", href: "/contact" },
  ];

  const handleNavigation = (href, isDropdown = false) => {
    if (href === "/contact") {
      navigate("/contact");
    } else if (location.pathname === "/") {
      const element = document.querySelector(href);
      if (element) {
        const yOffset = -80;
        const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    } else {
      window.location.href = `/${href}`;
    }

    if (!isDropdown) {
      setIsOpen(false);
    }
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setAboutDropdown(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setAboutDropdown(false);
    }, 500);

    setDropdownTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="CDHR Nepal Logo" className="w-20 h-auto" />
          <div className="ml-3">
            <span className="block text-lg lg:text-2xl font-bold text-gray-900">
              सेन्टर फर डेमोक्रेसी एण्ड ह्युमन राइट्स
            </span>
            <span className="block text-lg lg:text-2xl font-bold text-blue-600">
              Center for Democracy and Human Rights
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-6 relative">
          {navigation.map((item) =>
            item.hasDropdown ? (
              <div key={item.name} className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button
                  className="text-base lg:text-lg font-medium text-gray-700 hover:text-blue-600 transition flex items-center"
                  onClick={() => handleNavigation(item.href)}
                >
                  {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {/* Dropdown Menu */}
                {aboutDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 transition" onClick={() => navigate("/mission-statement")}>
                      Mission Statement
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 transition" onClick={() => navigate("/team")}>
                      Team
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button key={item.name} className="text-base lg:text-lg font-medium text-gray-700 hover:text-blue-600 transition" onClick={() => handleNavigation(item.href)}>
                {item.name}
              </button>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden bg-gray-100 py-4">
          {navigation.map((item) =>
            item.hasDropdown ? (
              <div key={item.name}>
                <button className="block w-full text-left px-6 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200 transition flex justify-between items-center" onClick={() => setAboutDropdown(!aboutDropdown)}>
                  {item.name} <ChevronDown className="h-4 w-4" />
                </button>

                {aboutDropdown && (
                  <div className="bg-white shadow-md">
                    <button className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-200 transition" onClick={() => navigate("/mission-statement")}>
                      Mission Statement
                    </button>
                    <button className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-200 transition" onClick={() => navigate("/team")}>
                      Team
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button key={item.name} className="block px-6 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200 transition" onClick={() => handleNavigation(item.href)}>
                {item.name}
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
}
