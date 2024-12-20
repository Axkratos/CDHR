import React, { useState } from 'react';
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: 'Quick Links',
      items: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Mission', href: '#mission' },
        { label: 'Team', href: '#team' },
        { label: 'Contact', href: '#contact' },
        { label: 'Blog', href: '#blog' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { label: 'Publications', href: '/publications' },
        { label: 'Research', href: '/research' },
        { label: 'Media Kit', href: '/media-kit' },
        { label: 'Annual Reports', href: '/reports' }
      ]
    }
  ];

  const socials = [
    { icon: Twitter, href: 'https://twitter.com/cdhrnepal' },
    { icon: Facebook, href: 'https://facebook.com/cdhrnepal' },
    { icon: Instagram, href: 'https://instagram.com/cdhrnepal' },
    { icon: Youtube, href: 'https://youtube.com/cdhrnepal' }
  ];

  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About CDHR Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About CDHR</h3>
            <p className="text-gray-400 text-sm">
              Working towards a more democratic and equitable Nepal through advocacy, 
              education, and community engagement.
            </p>
            <div className="flex space-x-4">
              {socials.map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="grid grid-cols-1 space-y-4">
            {links.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for updates on our work and impact.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} CDHR Nepal. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
