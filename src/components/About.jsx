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
            name:"Placid N/A",
            title:"Associate Pastor",

        },
        // {
        //     name:"Kharine Mabadika",
        //     title:"Treasurer",
        //     bio:"Bio goes here"

        // },
    ];
    
    return(
        // py-20 = more vertical padding for breathing room (5rem top and bottom)
        // bg-white = clean white background
        <section className="py-20 bg-white">

            {/* container for the content in the center */}
            {/* max-w-4xl = limits width for better readability */}
            {/* mx-auto = centers the container */}
            {/* px-6 = comfortable horizontal padding */}
            <div className="max-w-4xl mx-auto px-6">

                {/* Section Title */}
                {/* text-5xl = larger, more impactful size (48px) */}
                {/* font-bold = bold weight */}
                {/* text-center = centered alignment */}
                {/* text-gray-900 = very dark gray for strong contrast */}
                {/* mb-8 = more spacing below (2rem) */}
                {/* tracking-tight = tighter letter spacing for modern look */}
                <h2 className="text-5xl font-bold text-center text-gray-900 mb-8 tracking-tight">
                    About Us
                </h2>

                {/* Subtitle */}
                {/* text-3xl = nice size for subtitle (30px) */}
                {/* font-semibold = semi-bold for hierarchy */}
                {/* text-center = centered alignment */}
                {/* text-gray-700 = darker gray for readability */}
                {/* mb-12 = good spacing below (3rem) */}
                {/* leading-relaxed = comfortable line height */}
                <h3 className="text-3xl font-semibold text-center text-gray-700 mb-12 leading-relaxed">
                    What We Believe
                </h3>
                <p className="text-2xl font-semibold mb-10">
                    This where we are going to write about what we believe in!!
                     This where we are going to write about what we believe in!!
                      This where we are going to write about what we believe in!!
                       This where we are going to write about what we believe in!!
                        This where we are going to write about what we believe in!!
                         This where we are going to write about what we believe in!!
                          This where we are going to write about what we believe in!!
                           This where we are going to write about what we believe in!!
                           SMall 
                        
                </p>

                <h3 className="text-3xl font-semibold text-center text-gray-700 mb-12 leading-relaxed">Leadership</h3>
                {/* Map  */}
                {leadershipTeam.map((person) => (

                <div className="flex justify-start gap-80">
                
                <div className="w-40 h-40 bg-gray-300 pb-4"></div>
                <div>
                <h4 className="text-3xl font-bold">{person.name}</h4>
                
                <p className="text-2xl font-semibold">{person.title}</p>
                <p className="text-1xl font-medium">{person.bio}</p>
                <a href="#ContactMe"> Contact Info</a>
                </div>
                </div>


    ))}                

            </div>

        </section>
    );

}
export default About;