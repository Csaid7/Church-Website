function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Contact Us
        </h2>
        
        {<form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
  
  {/* NAME INPUT */}
  <div className="mb-6">
    <label className="block text-gray-700 text-lg font-medium mb-2">
      Name
    </label>
    <input
      type="text"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      placeholder="Enter your name"
    />
  </div>

  {/* PHONE INPUT */}
  <div className="mb-6">
    <label className="block text-gray-700 text-lg font-medium mb-2">
      Phone Number
    </label>
    <input
      type="tel"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      placeholder="Enter your phone number"
    />
  </div>

  {/* MESSAGE/NOTE INPUT */}
  <div className="mb-6">
    <label className="block text-gray-700 text-lg font-medium mb-2">
      Message
    </label>
    <textarea
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32"
      placeholder="Enter your message"
    />
  </div>

  {/* SUBMIT BUTTON */}
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-200"
  >
    Send Message
  </button>
</form>}
        
      </div>
    </section>
  );
}

export default Contact;