function Services(){
    const ServiceArr=[
        {
            title: "Sunday Service",
            day: "Sunday",
            time: "10:30AM - 12:30PM",
            
        },
        {
            title: "Youth Bible Study",
            day: "Monday",
            time: "6:00PM - 7:30PM",
            
        },
        {
            title: "Adult Bible Study and Prayer",
            day: "Wednesday",
            time: "6:00PM - 7:30PM",
            
        },
        {
            title: "Family Prayer",
            day: "Saturday",
            time: "11:00AM - 12:00PM",
            
        },
    ];
    return(
        <section id="Services" className="py-16 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
                    Service Times
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Join us for worship, fellowship, and spiritual growth throughout the week
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ServiceArr.map((card, index) =>(
                        <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition hover:border-gray-300">
                            <div className="flex items-start gap-4">
                                <div className="text-4xl">{card.icon}</div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-base text-gray-700 font-medium mb-1">
                                        {card.day}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {card.time}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Services;