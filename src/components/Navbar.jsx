import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RocketIcon, MenuIcon, CloseIcon } from './Icons'

const NAV_LINKS = [
  { href: '/#features',     label: 'Features' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#use-cases',    label: 'Use Cases' },
  { href: '/#pricing',      label: 'Dashboard' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-xl py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold no-underline">
          <span className="text-gradient">Vazhitrax</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          <ul className="flex items-center list-none m-0 p-0">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 font-medium text-gray-800 no-underline group inline-block"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 h-0.5 w-0 bg-[#4361ee] transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
                </a>
              </li>
            ))}
          </ul>
          <Link
            to="/plan"
            className="ml-2 inline-flex items-center gap-1.5 bg-gradient-to-r from-[#4361ee] to-[#3a0ca3] text-white px-5 py-2 rounded-full font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg no-underline"
          >
            <RocketIcon size={15} />
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 cursor-pointer border-none bg-transparent text-gray-800"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white px-6 pb-5 shadow-md rounded-b-xl">
          <ul className="list-none m-0 p-0 space-y-1 pt-3">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 font-medium text-gray-800 no-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Link
            to="/plan"
            className="mt-4 inline-flex items-center gap-1.5 bg-gradient-to-r from-[#4361ee] to-[#3a0ca3] text-white px-5 py-2 rounded-full font-medium no-underline"
            onClick={() => setMenuOpen(false)}
          >
            <RocketIcon size={15} />
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
