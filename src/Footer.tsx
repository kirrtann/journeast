
const Footer = () => {
    return (
        <>
            <div className="bg-black py-[64px] mx-2 rounded-2xl flex gap-y-3 md:mt-[80px] flex-wrap justify-between px-10 text-white">
                <div className="max-w-[290px]">
                    <div className=""><h3 className="text-[24px] text-[#EB6123]">JOURNEASY</h3>
                        <p className="text-[14px] opacity-80 ">Whether you're an experienced wine connoisseur or just beginning your wine journey, we've carefully curated an exceptional selection of wines from around the globe to suit every palate and occasion.</p>
                    </div>
                    <div className="flex mt-5 gap-6">
                        <img src="build/Social icon.png" alt="Social Media" />
                        <img src="build/Vector.png" alt="Social Media" />
                        <img src="build/insta.png" alt="Social Media" />
                        <img src="build/abcd.png" alt="Social Media" />
                    </div>
                </div>
                <div>
                    <h6 className="text-[18px]">Company</h6>
                    <div className="mt-2">
                        <ul className="text-[16px] space-y-2 opacity-70">
                            <li>About us</li>
                            <li>FAQs</li>
                            <li>Contect Us</li>
                            <li>Careers</li>
                            <li>Tearm & Policy</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h6 className="text-[18px]">Explore Guides</h6>
                    <ul className="text-[16px] space-y-1 mt-2 opacity-70"><li>Trip planners by destination</li>
                        <li>Explore cities & countries</li>
                        <li>Road trips by destinations</li>
                        <li>Itinerary guides</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h6>Download App</h6>
                    <div className="space-y-4 ">
                        <img className="w-[150px]" src="build/Google Play.png" alt="" />
                        <img src="build/Group.png" className="w-[150px]" alt="" />
                    </div>
                </div>


            </div>

        </>
    )
}

export default Footer