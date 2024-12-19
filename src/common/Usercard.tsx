
const Usercard = ({place,Userpic}:{place:string, Userpic:string}) => {
    return (
        <>
            <div>

                <img src={place} alt="Photo" />
                <h5>Hidden Gems in Vietnam</h5>
                <div className="flex ">
                    <img src={Userpic} alt="" />
                    <p className="justify-items-center pl-1">Cameron Williamson</p>

                </div>
            </div>
        </>
    )
}

export default Usercard