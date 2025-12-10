import React from 'react';

function About() {
  return (
    <div className="px-8 py-10 bg-gray-50 min-h-screen font-sans">

      <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">
        About Us
      </h1>

      {/* Founder Intro */}
      <section className="mb-12 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold mb-3">Founder Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          I am an AMFI Registered Mutual Fund Distributor, dedicated to helping clients plan their finances effectively.
        </p>
      </section>

      {/* Vision */}
      <section className="mb-12 max-w-3xl mx-auto bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold mb-3 text-blue-700">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          “Helping families build wealth with discipline & simplicity”
        </p>
      </section>

      {/* Values */}
      <section className="mb-12 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Transparency:</strong> Clear and honest communication with clients at every step.</li>
          <li><strong>Goal-based Planning:</strong> Financial plans designed to meet your specific life goals.</li>
          <li><strong>Long-term Commitment:</strong> Supporting clients throughout their financial journey.</li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="mb-12 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
        <h2 className="text-2xl font-semibold mb-3">Certifications</h2>
        <p className="text-gray-700">
          AMFI ARN Number: <em>To be added later</em>
        </p>
      </section>

    </div>
  );
}

export default About;
