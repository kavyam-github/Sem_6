export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
        <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl max-w-md text-center">
          <h1 className="text-3xl font-bold mb-4">Hello World From Next.js</h1>
          <p className="text-lg text-gray-600">
            Welcome to your first Next.js page styled beautifully with Tailwind CSS.
          </p>

          

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
