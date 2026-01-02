import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-start">
      <div className="max-w-4xl w-full">

        {/* Hero Section */}
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We create modern, responsive, and user-friendly applications designed
            to make your life easier. Explore our pages to learn more about who we are
            and how you can contact us.
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition">
            Get Started
          </button>
        </div>

        {/* Features Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">📌 Simple UI</h2>
            <p className="text-gray-600">
              Our platform is designed to be simple, clean, and easy to navigate
              for every user.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">⚡ Fast Performance</h2>
            <p className="text-gray-600">
              Enjoy a fast and responsive experience with optimized performance
              across all devices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">🔒 Secure</h2>
            <p className="text-gray-600">
              We value your security and ensure that your data is protected at all times.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">🌐 Fully Responsive</h2>
            <p className="text-gray-600">
              Access the website from mobile, tablet, or desktop with a consistent experience.
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-10 p-6 bg-blue-100 border border-blue-300 rounded-lg">
          <p className="text-blue-800 text-lg">
            Tip: Use the navigation bar above to explore the About and Contact pages.
          </p>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
