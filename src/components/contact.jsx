import { useState } from "react";


function Contact() {
    const [name, setName] = useState('');
    const [phone,setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [messageSent, setMessageSent] = useState(false);

    // This function runs when form submits
  const handleSubmit = (e) => {
    e.preventDefault(); // ← Stops the page refresh!
    
    // Do stuff here (like show success message)
    setMessageSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Contact Us
        </h2>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
  
  {/* NAME INPUT */}
  <div className="mb-6">
    <label className="block text-gray-700 text-lg font-medium mb-2">
      Name
    </label>
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
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
      value ={phone}
      onChange = {(e) => setPhone(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
      placeholder="Enter your phone number"
    />
  </div>

  {/* MESSAGE/NOTE INPUT */}
  <div className="mb-6">
    <label className="block text-gray-700 text-lg font-medium mb-2">
      Message
    </label>
    <textarea
    value ={message}
      onChange = {(e) => setMessage(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32"
      placeholder="Enter your message"
    />
  </div>

  {/* SUBMIT BUTTON */}
  <button
    type="submit"
    className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-gray-800 transition duration-200"
  >
    Send Message
  </button>
</form>

        {/* SUCCESS MESSAGE */}
        {messageSent && (
          <div className="max-w-2xl mx-auto mt-6 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center">
            <p className="text-xl font-medium">Message Sent , {name} ✓</p>
            <p className="text-lg mt-2">A church member will reach out soon!</p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Contact;