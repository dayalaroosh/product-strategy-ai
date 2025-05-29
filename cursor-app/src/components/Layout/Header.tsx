import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Product Strategy AI</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/strategy" className="text-gray-700 hover:text-gray-900">
              Strategy Council
            </Link>
            <Link href="/focus-group" className="text-gray-700 hover:text-gray-900">
              Focus Group
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 