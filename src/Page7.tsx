import Discover from "./common/Discover"

const Page7 = () => {
    return (
        <>
            <div className="mt-24 px-4 max-w-[1460px]">
                <div className="flex flex-col items-center">
                    <h3 className="sm:text-[36px] text-[24px] ">Trusted by Travellers Around The Globe</h3>
                    <p className="text-[20px]">Discover, plan, and experience unforgettable journeys effortlessly.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-[28px] mt-6">
                    <div className=" max-   w-[400px] space-y-4">
                        <Discover
                            Discription="I can't imagine planning my trips without JournEasy Pro! The advanced trip planning tools have made organizing my itineraries a breeze. Plus, the unlimited customization options ensure every detail is just right. Highly recommend it to anyone looking for a seamless travel planning experience!"
                            src="/Avatar (7).png"
                            Name="Mayuri Sharma"
                        />
                        <Discover
                            Discription="As a frequent traveler, having access to JournEasy Pro has been a game-changer. The ad-free experience allows me to focus on planning my adventures without any distractions. Plus, the priority customer support ensures I always have assistance whenever I need it. Couldn't be happier with my Pro subscription!"
                            src="/Avatar (1).png"
                            Name="John R."
                        />
                        <Discover
                            Discription="As someone who travels frequently for both work and leisure, I rely heavily on trip planner apps to help me stay organized, and JournEasy Pro has become my go-to tool. The advanced trip planning tools are incredibly robust and make it easy for me to create detailed itineraries for my trips."
                            src="public/Avatar (2).png"
                            Name="Cameron willmtion" />

                    </div>
                    <div className="  max-w-[400px] space-y-4">
                        <Discover Discription="I've been using JournEasy Pro for all my travel planning needs, and it has exceeded my expectations. The advanced trip planning tools have saved me so much time, and the unlimited itinerary customization allows me to tailor my trips exactly how I want. I absolutely love the ad-free experience and the priority customer support is the cherry on top! Highly recommended!"
                            src="public/Avatar (3).png"
                            Name="Emil H." />
                        <Discover
                            Discription="I've tried many trip planner apps before, but none compare to JournEasy Pro. The advanced features make planning my trips a breeze, and the unlimited itinerary customization allows me to plan every detail of my adventures. The ad-free experience is fantastic, and the priority customer support is top-notch. I'm a loyal customer for life!"
                            src="public/Avatar (4).png"
                            Name="Arince McCoy" />
                        <Discover
                            Discription="I've tried several trip planner apps in the past, but JournEasy Pro stands out from the rest."
                            src="public/Avatar (5).png"
                            Name="Tearesa Webb" />

                    </div>
                    <div>
                        <div className="  max-w-[400px] space-y-4">
                            <Discover
                                Discription="Being a travel enthusiast, I'm always on the lookout for tools that can enhance my travel experiences, and JournEasy Pro does just that. The advanced trip planning tools are incredibly intuitive and user-friendly, making it easy for me to create detailed itineraries for my trips. The ad-free experience is a huge plus, and the priority customer support team has been extremely helpful whenever I've had questions. I highly recommend JournEasy Pro to anyone who loves to travel!"
                                src="public/Avatar (6).png"
                                Name="Dinall Ruseell" />
                            <Discover
                                Discription="I've been using JournEasy Pro for a while now, and I'm impressed by how much it has simplified my travel planning process. The advanced trip planning tools have helped me organize my trips more efficiently, and the unlimited itinerary customization feature allows me to tailor my itineraries to suit my preferences perfectly. The ad-free experience is fantastic, and the priority customer support team is always there to assist me whenever I need help. I couldn't be happier with my decision to upgrade to [Your App Name] Pro!"
                                src="public/Avatar (7).png"
                                Name="Guy Hawkins" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Page7