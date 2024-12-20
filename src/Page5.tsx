import Usercard from "./common/Usercard"

const Page5 = () => {
    return (
        <>
            <div>
                <div className="flex  px-4 mt-[80px] mb-5 relative ">
                    <div>
                        <h4 className="text-[38px] ">Popular destinations</h4>
                        <p className="text-[18px]">Discover, plan, and experience unforgettable journeys effortlessly..</p>
                    </div>
                    {/* <div className="absolute right-20 place-items-center ">
                        <button><img src="public/Frame 304.png" alt="" /></button>
                    </div> */}
                </div>
                <div className="flex flex-wrap justify-center gap-4"> 
                    <Usercard place={"public/Image (1).png"} Userpic="public/Small.png" />
                    <Usercard place={"public/Image (1).png"} Userpic="public/Small.png" />
                    <Usercard place={"public/Image (1).png"} Userpic="public/Small.png" />
                    <Usercard place={"public/Image (1).png"} Userpic="public/Small.png" />
                </div>
            </div>

        </>
    )
}

export default Page5