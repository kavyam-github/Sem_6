import React from 'react';

function Insurance() {
  return (
    <div className="px-8 py-10 bg-gray-50 min-h-screen font-sans">

      <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">
        Insurance Services
      </h1>

      {/* Why insurance is important */}
      <section className="mb-12 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold mb-3">Why Insurance is Important</h2>
        <p className="text-gray-700 leading-relaxed">
          Insurance helps protect you and your family against unforeseen financial losses.
          It provides security and peace of mind in case of emergencies, accidents, or health issues.
        </p>
      </section>

      {/* Types of insurance */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Types of Insurance</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-blue-700 mb-2">Term Life Insurance</h3>
            <p>Provides financial protection to your family in case of your untimely death.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-blue-700 mb-2">Health Insurance</h3>
            <p>Covers medical expenses and hospitalization costs.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-blue-700 mb-2">Motor Insurance</h3>
            <p>Protects your vehicle against damage, theft, or accidents.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-blue-700 mb-2">Travel Insurance</h3>
            <p>Provides coverage for medical emergencies, trip cancellations, or lost luggage during travel.</p>
          </div>
        </div>
      </section>

      {/* Advisory approach */}
      <section className="mb-12 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold mb-3">Your Advisory Approach</h2>
        <p className="text-gray-700 leading-relaxed">
          Our approach is personalized. We assess your financial goals, current situation, and risks
          to suggest the most suitable insurance plan for you.
        </p>
      </section>

      {/* Contact for quotes */}
      <section className="mb-12 max-w-3xl mx-auto bg-blue-50 p-6 rounded-xl shadow text-center">
        <h2 className="text-2xl font-semibold mb-3 text-blue-700">Contact for Quotes</h2>
        <p className="text-gray-700">
          Interested in getting a quote? Reach out via email at <a href="mailto:info@example.com" className="text-blue-600 underline">info@example.com</a>
          or call us at <strong>+91 12345 67890</strong>.
        </p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Request a Quote
        </button>
      </section>

    </div>
  );
}

export default Insurance;
