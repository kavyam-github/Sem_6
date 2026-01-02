import React from "react";

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-start">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-3xl w-full">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>

        {/* Contact Info */}
        <div className="space-y-3 text-gray-700 mb-8">
          <p className="text-lg">If you have any queries, feel free to reach out to us:</p>

          <p><span className="font-medium">📧 Email:</span> example@gmail.com</p>
          <p><span className="font-medium">📞 Phone:</span> +91 98765 43210</p>
          <p><span className="font-medium">📍 Address:</span> Ahmedabad, Gujarat, India</p>
        </div>

        {/* Contact Form */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send us a Message</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          />

          <textarea
            // rows="4"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        {/* Social Media */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Follow Us
        </h2>

        <div className="flex space-x-6 text-lg text-gray-700">
          <a href="#" className="hover:text-blue-600">🌐 Website</a>
          <a href="#" className="hover:text-blue-600">📘 Facebook</a>
          <a href="#" className="hover:text-blue-600">📷 Instagram</a>
          <a href="#" className="hover:text-blue-600">🐦 Twitter</a>
        </div>

        {/* Map Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Find Us on Map
        </h2>

        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
          Google Map Placeholder
        </div>

      </div>
    </div>
  );
}

export default ContactPage;
