'use client';

export default function StyleTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Basic Tailwind Classes Test */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Basic Tailwind Classes</h2>
          <div className="space-y-4">
            <div className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 transition-colors">
              Background and Text Color (Hover me)
            </div>
            <div className="border-2 border-green-500 p-4 rounded-md hover:border-green-600 transition-colors">
              Border Test (Hover me)
            </div>
            <div className="shadow-lg p-4 bg-white rounded-md hover:shadow-xl transition-shadow">
              Shadow Test (Hover me)
            </div>
          </div>
        </section>

        {/* Forms Plugin Test */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Forms Plugin Test</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="test-input" className="block text-sm font-medium text-gray-700 mb-1">
                Default Input
              </label>
              <input
                id="test-input"
                type="text"
                className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Test input"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  id="checkbox-test"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor="checkbox-test" className="ml-2 block text-sm text-gray-900">
                  Checkbox with label
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="radio-test"
                  type="radio"
                  name="radio-group"
                  className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor="radio-test" className="ml-2 block text-sm text-gray-900">
                  Radio button
                </label>
              </div>

              <div>
                <label htmlFor="select-test" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Menu
                </label>
                <select
                  id="select-test"
                  className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </form>
        </section>

        {/* Typography Plugin Test */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typography Plugin Test</h2>
          <div className="prose prose-slate max-w-none">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <p>
              This is a paragraph with <strong>bold text</strong>, <em>italic text</em>, and{' '}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                styled links
              </a>
              . The typography plugin handles proper spacing and styling automatically.
            </p>
            <blockquote>
              This is a blockquote that demonstrates the typography plugin's blockquote styling.
              It should have proper padding, borders, and typography.
            </blockquote>
            <ul>
              <li>First level list item</li>
              <li>
                Second level list item
                <ul>
                  <li>Nested list item</li>
                  <li>Another nested item</li>
                </ul>
              </li>
              <li>Third level list item</li>
            </ul>
            <pre><code>// Code block example
const greeting = 'Hello, world!';
console.log(greeting);</code></pre>
          </div>
        </section>
      </div>
    </div>
  );
} 