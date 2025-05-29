import Header from '../components/Layout/Header'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Product Strategy AI
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Validate your product ideas with AI-powered strategy analysis and simulated focus groups.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/strategy"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </a>
            <a href="/focus-group" className="text-sm font-semibold leading-6 text-gray-900">
              Try Focus Group <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
} 