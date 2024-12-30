
const Page3 = () => {
    return (
        <div className="md:mt-[80px] px-4 mt-[40px] ">
            <div className="mb-3 px-4">
                <h4 className="sm:text-[38px]  text-[26px] ">Features section</h4>
                <p className="text-[18px]">Discover, plan, and experience unforgettable journeys effortlessly..</p>
            </div>
            {/* grid md:grid-cols-2 lg:grid-cols-3 mt-5 grid-flow-col */}
            <div className="flex flex-wrap justify-center gap-3">
                <div className="border rounded-2xl pl-3 pt-3 max-w-[443px]  md:h-[600px]">
                    <h6 className="text-[16px] font-semibold">Trip Planning</h6>
                    <p className="text-[14px]">Effortlessly create and customize your trip itineraries, ensuring every detail of your journey is perfectly planned and organized.</p>
                    <div>
                        <img src="/Frame 1039927.png" alt="" />
                    </div>
                </div>  
                    <div className="grid gap-2 max-w-[443px] ">
                        <div className="border rounded-2xl pl-3 max-w-[443px] h-[292px]">
                            <img src="public/Frame 1039928.png" className="h-[170px]" alt="" />
                            <h6 className="font-semibold"> Destination Exploration</h6>
                            <p>Discover new destinations and immerse yourself in rich travel guides, uncovering hidden gems and top attractions to explore at every stop.</p>

                        </div>
                        <div className="border rounded-2xl pl-3 max-w-[443px] h-[292px]">
                            <img src="public/Frame 1039929.png" className="h-[170px]" alt="" />
                            <h6 className="font-semibold" >Collaboration and Sharing</h6>
                            <p>Plan trips with friends and family members seamlessly, sharing itineraries, recommendations, and experiences for collaborative travel planning.</p>
                        </div>
                    </div>
                <div className="border rounded-2xl pl-3 pt-3 max-w-[443px] md:h-[600px]">
                    <h6 className="font-semibold">Budget Management</h6><p>Take control of your finances with our intuitive budget management tools, allowing you to set, track, and manage your travel expenses with ease.</p>
                    <div>
                        <img src="/Frame 1039930.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center pt-5 gap-4">
                <div className="border p-[24px] max-w-[450px]  rounded-2xl">
                    <h3 className="font-semibold text-[18px]">Weather Forecast</h3>
                    <p className="text-[14px]">Stay informed about weather conditions at your destinations, enabling you to plan activities and pack accordingly for a hassle-free journey.</p>
                    <div>
                        <img src="public/Frame 1039931.png" alt="" />
                    </div>
                </div>
                <div className="border p-[24px] max-w-[450px]   rounded-2xl">
                    <h3 className="font-semibold text-[18px]">Integration with Booking Platforms</h3>
                    <p className="text-[14px]">Book flights, accommodations, and activities directly within the app, simplifying the booking process and keeping all reservations in one place..</p>
                    <div>
                        <img src="public/Frame 1039931.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page3