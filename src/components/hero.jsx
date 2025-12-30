function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to<br />Success Point Church
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience authentic worship, biblical teaching, and a community that feels like family.
          </p>

          <a
            href="#Services"
            className="inline-block bg-white text-gray-900 px-10 py-4 rounded-md font-semibold hover:bg-gray-100 transition text-lg shadow-lg"
          >
            Plan Your Visit
          </a>

        </div>
      </div>
    </section>
  );
}

export default Hero;