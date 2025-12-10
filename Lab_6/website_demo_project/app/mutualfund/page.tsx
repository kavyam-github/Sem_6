import React from "react";

export default function MutualFundPage() {
  return (
    <div className="px-8 py-10 bg-gray-50 min-h-screen">

      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
        Mutual Funds – Grow Your Wealth Smartly
      </h1>

      {/* What are Mutual Funds */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-3 text-gray-800">What are Mutual Funds?</h2>
        <p className="text-gray-700 leading-relaxed">
          Mutual Funds collect money from multiple investors and invest it into a
          diversified portfolio of stocks, bonds, or other assets.
          Managed by professional fund managers, they are one of the easiest and safest ways to start investing.
        </p>
      </section>

      {/* Why SIP */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-3 text-gray-800">Why SIP (Systematic Investment Plan)?</h2>
        <p className="text-gray-700 leading-relaxed">
          SIP allows you to invest a small amount every month—just like a habit.
          It helps average out market ups and downs and builds wealth steadily.
        </p>
      </section>

      {/* Benefits of Mutual Funds */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Benefits of Mutual Funds</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "Diversification reduces risk",
            "Professional fund management",
            "Low minimum investment",
            "Flexibility (SIP or Lump-sum)",
            "Long-term wealth creation",
            "Highly regulated by SEBI for safety"
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              {benefit}
            </div>
          ))}
        </div>
      </section>

      {/* Power of Compounding */}
      <section className="mb-12 max-w-3xl mx-auto bg-blue-50 p-6 rounded-xl">
        <h2 className="text-3xl font-semibold mb-3 text-blue-700">Power of Compounding</h2>
        <p className="text-gray-700 leading-relaxed">
          Compounding means your returns generate more returns.
          The earlier you start your SIP, the bigger your wealth grows.
          Even small monthly investments can create huge wealth over time.
        </p>
      </section>

      {/* Types of Funds */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Types of Mutual Funds</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Equity Funds", desc: "Invest mainly in stocks. Ideal for long-term wealth creation with higher growth potential." },
            { title: "Debt Funds", desc: "Invest in bonds & fixed income assets. Lower risk and more stable returns." },
            { title: "Hybrid Funds", desc: "Mix of equity + debt. Balanced risk and returns. Good for all-round investing." }
          ].map((fund, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{fund.title}</h3>
              <p className="text-gray-700">{fund.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Our Mutual Fund Services</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          {[
            "SIP Setup and planning",
            "Customized fund selection based on goals",
            "Portfolio review and rebalancing",
            "Risk profiling and guidance",
            "Tax-saving investment options (ELSS)"
          ].map((service, index) => (
            <li key={index} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-semibold mb-4">Start Your SIP With Us Today</h2>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition shadow-lg">
          Begin Your Wealth Journey
        </button>
      </section>

    </div>
  );
}
