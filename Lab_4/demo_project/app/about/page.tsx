import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-3xl">

        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>

        {/* Intro */}
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          Welcome to our project! We are dedicated to creating modern,
          user-friendly applications that solve real-world problems.
          Our goal is to deliver simplicity, reliability, and outstanding
          user experience through every product we build.
        </p>

        {/* Mission */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Our mission is to empower users with innovative and accessible
          digital solutions. We believe technology should be easy to use,
          beautifully designed, and impactful for everyone.
        </p>

        {/* Vision */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Our Vision</h2>
        <p className="text-gray-600 leading-relaxed">
          We envision a future where technology bridges the gap between ideas
          and possibilities. Through continuous improvement, research, and
          dedication, we strive to make that vision a reality.
        </p>

        {/* Team Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Team Member 1 */}
          <div className="p-4 border rounded-xl shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-700">Dhoni</h3>
            <p className="text-gray-500">Founder & Developer</p>
            <p className="text-gray-600 text-sm mt-2">
              Passionate about building fast, simple, and reliable applications
              using modern tools and frameworks.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="p-4 border rounded-xl shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-700">Team Member</h3>
            <p className="text-gray-500">UI/UX Designer</p>
            <p className="text-gray-600 text-sm mt-2">
              Ensures the app looks beautiful and provides a smooth, intuitive user experience.
            </p>
          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>

      </div>
    </div>
  );
}

export default AboutPage;
