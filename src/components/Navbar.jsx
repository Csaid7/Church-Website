// Import useState hook to manage mobile menu open/closed state
import { useState } from 'react';

function Navbar() {
  // State to track if mobile menu is open (true) or closed (false)
  // isMenuOpen = current state value
  // setIsMenuOpen = function to update the state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">

          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Success Point Church
            </h1>
          </div>

          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul className="hidden md:flex items-center space-x-6 list-none">
            <li>
              <a
                href="#home"
                className="text-base text-gray-700 hover:text-gray-900 transition font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-base text-gray-700 hover:text-gray-900 transition font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Services"
                className="text-base text-gray-700 hover:text-gray-900 transition font-medium"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-base text-gray-700 hover:text-gray-900 transition font-medium"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#Donate"
                className="bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-gray-800 transition text-sm font-semibold"
              >
                Donate
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/1CUixy4H61/?mibextid=wwXIfr"
                className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition text-sm font-semibold flex items-center gap-1"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Live
              </a>
            </li>
          </ul>

        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-6 space-y-3 pb-4 list-none border-t border-gray-200 pt-4">
            <li>
              <a
                href="#home"
                className="block text-gray-700 hover:text-gray-900 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-gray-700 hover:text-gray-900 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Services"
                className="block text-gray-700 hover:text-gray-900 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-gray-900 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#Donate"
                className="block bg-gray-900 text-white px-4 py-3 rounded-md hover:bg-gray-800 transition text-center font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/1CUixy4H61/?mibextid=wwXIfr"
                className="block bg-red-600 text-white px-4 py-3 rounded-md hover:bg-red-700 transition text-center font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Watch Live
              </a>
            </li>
          </ul>
        )}

      </div>
    </nav>
  );
}

// This makes Navbar available to import in other files
export default Navbar;