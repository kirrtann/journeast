
const Card = ({src,City}: { City:string, src:string}) => {
  return (
  <div className="">
    <div className="w-[328px] relative h-[409px] ">
        <img src={src} className="" alt="Card" />
        <div className="absolute text-white pl-3 bottom-3">{City}</div>
    </div>
  </div>
  ) 
}

export default Card