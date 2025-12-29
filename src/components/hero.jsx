function Hero() {
  return (
    // Full-width section with gradient background and lots of vertical space
    // bg-gradient-to-r = gradient going left to right
    // from-blue-500 to-blue-700 = blue gradient colors
    // py-20 = lots of padding top and bottom (5rem = 80px)
    <section className="bg-gradient-to-r from-gray-500 to-blue-700 py-20 md:py-32">
      
      {/* Container limits width and centers content */}
      <div className="container mx-auto px-4">
        
        {/* Flex column centers everything vertically and horizontally */}
        {/* flex-col = stack items vertically */}
        {/* items-center = center horizontally */}
        {/* text-center = center all text */}
        <div className="flex flex-col items-center text-center">
          
          {/* Main heading - big welcome text */}
          {/* text-5xl = very large on mobile, text-6xl on desktop */}
          {/* font-bold = bold text */}
          {/* text-white = white color for contrast on blue background */}
          {/* mb-6 = margin bottom for spacing */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to Success Point Church
          </h1>
          
          {/* Subtitle - smaller description text */}
          {/* text-xl = large text */}
          {/* text-blue-100 = very light blue (almost white) */}
          {/* mb-8 = more margin bottom */}
          {/* max-w-2xl = maximum width so text doesn't spread too wide */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
            Join us this Sunday for inspiring worship, powerful teaching, and genuine community.
          </p>
          
          {/* Call-to-action button */}
          {/* bg-white = white background */}
          {/* text-blue-600 = blue text */}
          {/* px-8 py-4 = padding inside button */}
          {/* rounded-lg = rounded corners */}
          {/* font-semibold = semi-bold text */}
          {/* hover:bg-blue-50 = slightly darker white on hover */}
          {/* transition = smooth animation */}
          {/* text-lg = larger text */}
          <a
            href="#services"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-200 text-lg"
          >
            Join Us This Sunday
          </a>
          
        </div>
      </div>
    </section>
  );
}

export default Hero;