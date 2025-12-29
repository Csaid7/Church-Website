// Import the Navbar component
import Navbar from './components/Navbar';
import Hero from './components/hero';  // Add this line
import About from './components/About';
// import services from './components/services';


function App() {
  return (
    // min-h-screen = minimum height of full viewport
    // bg-gray-50 = very light gray background
    <div className="min-h-screen bg-gray-50">
      
      {/* Navbar appears here */}
      <Navbar />

      {/* Hero section goes here too lol */}
      <Hero />
      {/* About section */}
      <About/>
     {/* Services */}
     {/* <Services/> */}

    </div>
  );
}

export default App;