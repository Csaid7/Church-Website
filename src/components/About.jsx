function About(){

    const leadershipTeam =[
        {
            name:"Blaise Nsaku",
            title:"Main Pastor",

        },
        {
            name:"Amos Kombi",
            title:"Apostle",

        },
        {
            name:"John Kaseya",
            title:"Associate Pastor",

        },
        {
            name:"Placid Namegabe",
            title:"Associate Pastor",

        },
        // {
        //     name:"Kharine Mabadika",
        //     title:"Treasurer",
        //     bio:"Bio goes here"

        // },
    ];
    
    return(
        <section id="about" className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                    About Us
                </h2>

                <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-600 mb-16">
                    What We Believe
                </h3>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-16 max-w-3xl mx-auto">
                    This where we are going to write about what we believe in!!
                    This where we are going to write about what we believe in!!
                    This where we are going to write about what we believe in!!
                    This where we are going to write about what we believe in!!
                    This where we are going to write about what we believe in!!
                    This where we are going to write about what we believe in!!
                    This where we are going to write about what we believe in!!
                    This where we are going to write about what we believe in!!
                    Small
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
                    Our Leadership
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {leadershipTeam.map((person, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition border border-gray-200">
                            <div className="w-28 h-28 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-5 mx-auto flex items-center justify-center">
                                <span className="text-3xl font-bold text-gray-800">
                                    {person.name.charAt(0)}
                                </span>
                            </div>
                            <div className="text-center">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">
                                    {person.name}
                                </h4>
                                <p className="text-base text-gray-600 mb-4">
                                    {person.title}
                                </p>
                                <a
                                    href="#contact"
                                    className="text-sm text-gray-900 hover:text-gray-700 font-medium underline"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );

}
export default About;