// Import the Navbar component
import Navbar from './components/Navbar';

function App() {
  return (
    // min-h-screen = minimum height of full viewport
    // bg-gray-50 = very light gray background
    <div className="min-h-screen bg-gray-50">
      
      {/* Navbar appears here */}
      <Navbar />
      
      {/* TEMPORARY CONTENT - we'll replace this with Hero component later */}
      {/* container = max-width responsive container */}
      {/* mx-auto = centers horizontally */}
      {/* px-4 = horizontal padding */}
      {/* py-16 = lots of vertical padding (4rem = 64px) */}
      {/* text-center = centers all text */}
      <div className="container mx-auto px-4 py-16 text-center">
        
        {/* text-4xl = very large text (36px) */}
        {/* font-bold = bold weight */}
        {/* text-gray-800 = dark gray (almost black) */}
        {/* mb-4 = margin bottom 1rem */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Success Point Church
        </h1>
        
        {/* text-xl = large text (20px) */}
        {/* text-gray-600 = medium gray */}
        <h2 className="text-xl text-gray-600 mb-6">
          We're so happy to see you!
        </h2>
        
        {/* text-gray-700 = dark gray text */}
        <p className="text-gray-700">
          Join us this Sunday for worship and fellowship.
        </p>
      </div>

    </div>
  );
}

export default App;