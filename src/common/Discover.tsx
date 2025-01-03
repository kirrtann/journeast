
const Discover = ({src,Discription,Name}: { Name:string, Discription:string, src:string}) => {
    return (
        <>
            <div className="border  w-fit rounded-2xl p-4">
                <div>
                    <p>{Discription}</p>
                </div>
                <div className="flex mt-3  items-center gap-1">
                    <img src={src} alt="User Photo" />
                    <p>{Name}</p>
                </div>
            </div>

        </>
    )
}

export default Discover