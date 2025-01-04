import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Form Data
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required!');
      return;
    }

    setLoading(true);
    setError('');

    // Send Email using EmailJS
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSent(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (err) => {
          console.error('FAILED...', err);
          setError('Failed to send message. Please try again later.');
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    if (!newsletterEmail) {
      setError('Please enter a valid email address!');
      return;
    }

    // Simulate newsletter subscription
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <section id="contact" className="relative bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Get in touch with us to learn more about our work or how you can get involved.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {isSent ? (
              <p className="text-green-600 text-lg font-medium text-center">
                ✅ Your message has been sent successfully!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full border-b border-gray-300 bg-transparent py-2 px-1 focus:outline-none focus:border-blue-500 focus:ring-0"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full border-b border-gray-300 bg-transparent py-2 px-1 focus:outline-none focus:border-blue-500 focus:ring-0"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Enter your message"
                    rows={4}
                    className="w-full border-b border-gray-300 bg-transparent py-2 px-1 focus:outline-none focus:border-blue-500 focus:ring-0"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                {/* Error Message */}
                {error && <p className="text-red-500 text-sm">{error}</p>}

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Address</h4>
                  <p className="mt-1 text-gray-600">
                    Chandragiri Municipality<br />
                    Ward No. 6, ItaKhel<br />
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                  <p className="mt-1 text-gray-600">+977-9840807497</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <p className="mt-1 text-gray-600">cdhr@ntc.net.np</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Form */}
        {/* Newsletter Subscription Form */}
<div className="mt-12 bg-blue-50 rounded-lg shadow-lg p-8">
  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Subscribe to our Newsletter</h3>
  <p className="text-center text-gray-600 mb-6">
    Stay updated with the latest news and blogs. Enter your email to subscribe!
  </p>
  {newsletterSubscribed ? (
    <p className="text-green-600 text-lg font-medium text-center">
      ✅ You have successfully subscribed to the newsletter!
    </p>
  ) : (
    <form onSubmit={handleNewsletterSubmit} className="space-y-4 max-w-4xl mx-auto">
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full border border-gray-300 rounded-md py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={newsletterEmail}
        onChange={(e) => setNewsletterEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Subscribe
      </button>
    </form>
  )}
</div>

      </div>
    </section>
  );
}
