// Import useState hook to manage mobile menu open/closed state
import { useState } from 'react';

function Navbar() {
  // State to track if mobile menu is open (true) or closed (false)
  // isMenuOpen = current state value
  // setIsMenuOpen = function to update the state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // NAVBAR CONTAINER
    // bg-white = white background
    // shadow-md = medium drop shadow (makes it look elevated)
    // sticky top-0 = sticks to top when scrolling
    // z-10 = appears above other content
    <nav className="bg-white shadow-md sticky top-0 z-10">
      
      {/* INNER CONTAINER */}
      {/* container = max-width responsive container */}
      {/* mx-auto = centers the container horizontally */}
      {/* px-4 = padding left and right (1rem = 16px) */}
      {/* py-4 = padding top and bottom */}
      <div className="container mx-auto px-7 py-7">
        
        {/* FLEX CONTAINER - puts logo left, links right */}
        {/* flex = enables flexbox layout */}
        {/* justify-between = pushes items to opposite ends */}
        {/* items-center = centers items vertically */}
        <div className="flex justify-between items-center">
          
          {/* LEFT SIDE: CHURCH NAME */}
          <div>
            {/* text-2xl = font size 24px */}
            {/* font-bold = bold weight */}
            {/* text-blue-600 = blue color (#2563eb) */}
            {/* cursor-pointer = shows hand cursor on hover */}
            <h1 className="text-5xl font-bold text-yellow-600 cursor-pointer">
              Success Point Church
            </h1>
          </div>

          {/* HAMBURGER MENU BUTTON - only visible on mobile */}
          {/* md:hidden = hidden on medium screens and up (768px+) */}
          {/* onClick toggles menu between open/closed */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* SVG icon for hamburger menu (3 horizontal lines) */}
            {/* w-8 h-8 = width and height of 32px */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {/* Three horizontal lines to make hamburger icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* RIGHT SIDE: NAVIGATION LINKS - Desktop */}
          {/* hidden = hidden on mobile screens */}
          {/* md:flex = shows as flex on medium screens and up (768px+) */}
          {/* space-x-8 = 2rem (32px) space between each item */}
          {/* list-none = removes bullet points */}
          <ul className="hidden md:flex space-x-8 list-none">
            
            {/* HOME LINK */}
            <li>
              {/* text-gray-700 = dark gray color */}
              {/* hover:text-blue-600 = turns blue when mouse hovers */}
              {/* transition = smooth color change animation */}
              {/* duration-200 = animation takes 200 milliseconds */}
              {/* font-medium = slightly bold */}
              <a 
                href="#home" 
                className="text-2xl text-gray-700 hover:text-blue-600 transition duration-200 font-medium"
              >
                Home
              </a>
            </li>

            {/* ABOUT LINK */}
            <li>
              <a 
                href="#about" 
                className="text-2xl text-gray-700 hover:text-blue-600 transition duration-200 font-medium"
              >
                About
              </a>
            </li>

            {/* SERVICES LINK */}
            <li>
              <a 
                href="#services" 
                className="text-2xl text-gray-700 hover:text-blue-600 transition duration-200 font-medium"
              >
                Services
              </a>
            </li>

            {/* CONTACT LINK */}
            <li>
              <a 
                href="#contact" 
                className="text-2xl text-gray-700 hover:text-blue-600 transition duration-200 font-medium"
              >
                Contact
              </a>
            </li>
          </ul>

        </div>

        {/* MOBILE MENU - only shows when hamburger is clicked */}
        {/* Conditional rendering: only shows if isMenuOpen is true */}
        {/* md:hidden = hidden on medium screens and up */}
        {/* mt-4 = margin top 1rem */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 list-none">

            {/* MOBILE HOME LINK */}
            <li>
              <a
                href="#home"
                className="block text-xl text-gray-700 hover:text-blue-600 transition duration-200"
                onClick={() => setIsMenuOpen(false)} // Close menu when link is clicked
              >
                Home
              </a>
            </li>

            {/* MOBILE ABOUT LINK */}
            <li>
              <a
                href="#about"
                className="block text-xl text-gray-700 hover:text-blue-600 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>

            {/* MOBILE SERVICES LINK */}
            <li>
              <a
                href="#services"
                className="block text-xl text-gray-700 hover:text-blue-600 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
            </li>

            {/* MOBILE CONTACT LINK */}
            <li>
              <a
                href="#contact"
                className="block text-xl text-gray-700 hover:text-blue-600 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
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