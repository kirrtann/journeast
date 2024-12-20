import Card from "./common/Card"

const Page2 = () => {
    return (
        <>
            <div className="flex  px-4 mt-10 mb-5 relative ">
                <div>
                    <h4 className="text-[38px] ">Popular destinations</h4>
                    <p  className="text-[18px]">Discover, plan, and experience unforgettable journeys effortlessly.</p>
                </div>
                {/* <div className="absolute right-20 place-items-center ">
                    <button><img src="public/Frame 304.png" alt="" /></button>
                </div> */}
            </div>
            <div className="flex-wrap flex justify-center gap-4">
                <Card src={"public/Image (5).png"} City={"Dubia"} />
                <Card src={"public/Image (6).png"} City={"Vietnam"} />
                <Card src={"public/Image (7).png"} City={"ja[an"} />
                <Card src={"public/Image (8).png"} City={"Switzerland"} />

            </div>
        </>
    )
}

export default Page2