// Import the Navbar component
import Navbar from './components/Navbar';
import Hero from './components/hero';  // Add this line
import About from './components/About';
import Services from './components/services';
import Contact from './components/contact';


function App() {
  return (
    // min-h-screen = minimum height of full viewport
    // bg-gray-50 = very light gray background
    <div id= "Home"className="min-h-screen bg-gray-50">
      
      {/* Navbar appears here */}
      <Navbar />

      {/* Hero section goes here too lol */}
      <Hero />
      {/* About section */}
      <About/>
     {/* Services */}
     <Services/>
     {/* contact */}
     <Contact/>

    </div>
  );
}

export default App;