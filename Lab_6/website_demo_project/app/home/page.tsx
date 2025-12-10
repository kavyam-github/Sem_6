import React from "react";

function HomePage() {
  return (
    <div className="px-8 py-10 bg-gray-50">

      {/*  Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24 rounded-xl text-center mb-16 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Wealth Creation for a Secure Future
        </h1>
        <p className="text-lg md:text-xl">
          Build, grow, and protect your wealth with expert guidance.
        </p>
        <button className="mt-8 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/*  What is DhanSetu Wealth? */}
      <section className="mb-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">What is DhanSetu Wealth?</h2>
        <p className="text-gray-700 leading-relaxed">
          DhanSetu Wealth is your trusted partner in financial planning.
          We help individuals and families build a strong financial foundation through
          disciplined investing, risk management, and long-term wealth creation strategies.
        </p>
      </section>

      {/*  Services Overview */}
      <section className="mb-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Mutual Fund Investments",
            "Insurance Planning",
            "Retirement Planning",
            "SIP Guidance",
            "Financial Goal Planning"
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">{service}</h3>
              <p className="text-gray-600 text-sm">
                {/* Optional description can go here */}
                Expert guidance to achieve your financial goals.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/*  Key Areas */}
      <section className="mb-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {[
          { title: "Mutual Funds", desc: "Tailored mutual fund solutions to grow your wealth with expert-selected portfolios matched to your goals and risk profile." },
          { title: "Insurance", desc: "Protect your family with life, health, and term insurance plans designed for complete financial security." },
          { title: "Retirement Planning", desc: "Build a stress-free retirement with long-term investment planning and systematic portfolio growth." },
          { title: "SIP Planning", desc: "Start investing with small monthly amounts, benefit from compounding, and reach your financial goals systematically." }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/*  Why Choose Us? */}
      <section className="mb-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          {[
            "Trusted and Transparent Service",
            "Personalized Investment Guidance",
            "Goal-Oriented Wealth Planning",
            "Long-Term Support and Monitoring",
            "Certified Financial Experts"
          ].map((point, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              {point}
            </div>
          ))}
        </div>
      </section>

      {/*  Call to Action */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-semibold mb-4">
          Start Your Investment Journey Today
        </h2>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Plan your investments with us
        </button>
      </section>

    </div>
  );
}

export default HomePage;
