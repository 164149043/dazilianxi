export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://ext.same-assets.com/3898194439/1442723839.png"
              alt="dazidazi.com"
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/blog/meiri.html"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              每日挑战
            </a>
            <a
              href="/diary-top/list"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              每日挑战数据
            </a>
            <a
              href="/blog/qa.html"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              常见问题
            </a>
            <a
              href="/blog/about.html"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              关于我们
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
