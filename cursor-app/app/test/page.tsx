'use client';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Typography Test */}
        <section className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Typography Test</h1>
          <div className="prose prose-slate max-w-none">
            <h2>This is a prose section</h2>
            <p>
              This text demonstrates the typography plugin styles. It includes{' '}
              <strong>bold text</strong>, <em>italic text</em>, and{' '}
              <a href="#" className="text-blue-600 hover:text-blue-800 no-underline hover:underline">
                styled links
              </a>
              .
            </p>
            <blockquote>
              This is a blockquote that demonstrates the typography plugin's blockquote styling.
            </blockquote>
            <ul>
              <li>Properly styled lists</li>
              <li>With consistent spacing</li>
              <li>And bullet points</li>
            </ul>
            <pre><code>// Code blocks are styled too
const example = "Hello, World!";</code></pre>
          </div>
        </section>

        {/* Form Elements Test */}
        <section className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Form Elements Test</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Write a description..."
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the terms and conditions
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-900">
                  Subscribe to newsletter
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </section>

        {/* Responsive Grid Test */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Responsive Grid Test</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div 
                key={item}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold mb-2">Card {item}</h3>
                <p className="text-gray-600">This card demonstrates responsive behavior and hover effects.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Elements Test */}
        <section className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Interactive Elements Test</h2>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
                Hover Me
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200">
                Focus Me
              </button>
            </div>
            
            <div className="flex items-center space-x-3">
              <input 
                type="checkbox" 
                id="checkbox" 
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="checkbox" className="text-sm text-gray-700">
                Checkbox with custom styling
              </label>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 