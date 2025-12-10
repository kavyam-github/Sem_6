"use client";
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us!');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="px-8 py-10 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">
        Contact Us
      </h1>

      {/* Contact Form */}
      <section className="mb-12 max-w-lg mx-auto bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Submit
          </button>
        </form>
      </section>

      {/* WhatsApp CTA */}
      <section className="mb-12 max-w-lg mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Chat with us on WhatsApp</h2>
        <a
          href="https://wa.me/911234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
        >
          Message Us
        </a>
      </section>

      {/* Location */}
      <section className="mb-12 max-w-lg mx-auto bg-white p-6 rounded-xl shadow text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <p className="text-gray-700">123, Your Street, Your City, India</p>
        {/* Optional: add Google Maps iframe here */}
      </section>

      {/* Social Links */}
      <section className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex justify-center gap-6 text-blue-600">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
