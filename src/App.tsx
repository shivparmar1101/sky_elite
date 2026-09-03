import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Start', 'Story', 'Rates', 'Benefits', 'FAQ']

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Content Wrapper */}
        <div className="relative z-10 flex h-full flex-col">
          {/* Navigation Bar */}
          <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-6">
            <span className="text-2xl font-semibold text-gray-900">SkyElite</span>

            {/* Desktop Nav */}
            <ul className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-900 transition-colors hover:text-gray-700"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="text-gray-900 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu Dropdown */}
          {mobileOpen && (
            <div className="absolute inset-x-0 top-16 z-20 mx-4 rounded-2xl bg-white/95 p-6 shadow-lg backdrop-blur-sm md:hidden">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={() => setMobileOpen(false)}
                      className="block text-gray-900 transition-colors hover:text-gray-700"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Hero Content */}
          <div className="flex flex-1 items-center justify-center -mt-80">
            <div className="text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-600">
                Private Jets
              </p>

              <h1 className="leading-none tracking-tighter">
                <span className="block text-6xl font-normal text-gray-500 md:text-7xl lg:text-8xl">
                  Premium.
                </span>
                <span
                  className="block text-6xl font-normal md:text-7xl lg:text-8xl"
                  style={{ marginTop: '-12px', color: '#202A36' }}
                >
                  Accessible.
                </span>
              </h1>

              <p className="mx-auto mt-6 mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
                Your dedication deserves recognition.
              </p>

              <div className="flex items-center justify-center gap-4">
                <button className="rounded-full bg-gray-300 px-6 py-3 font-medium text-gray-800 transition-colors hover:bg-gray-400">
                  Discover
                </button>
                <button
                  className="rounded-full px-6 py-3 font-medium text-white transition-colors"
                  style={{ backgroundColor: '#202A36' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = '#1a2229')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = '#202A36')
                  }
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
