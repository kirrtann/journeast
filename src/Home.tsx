
import Footer from "./Footer"
// import Navbar from "./Navbar"
import Page2 from "./Page2"
import Page3 from "./Page3"
import Page4 from "./Page4"
import Page5 from "./Page5"
import Page6 from "./Page6"
import Page7 from "./Page7"
import Page8 from "./Page8"

const Home = () => {
    return (
        <>
            <div className=" mt-5 max-w-[1480px] font-Uncut  container">
                {/* <Navbar/> */}
                <div className="justify-center mx-2 ">
                    <div className="bg-[url(/Hero.png)] px-1 flex relative bg-center bg-cover rounded-xl  bg-no-repeat max-w-[1408px] h-[509px]">
                        <div className="flex flex-col mx-auto my-0 justify-center   ">
                            <h2 className="text-white sm:text-[28px] text-[24px] font-custom1 ">Plan Your Perfect Trip with Ease</h2>
                            <div>
                                <form className="">
                                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div className="relative ">
                                        <div className="absolute inset-y-0  start-0 flex items-center ps-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input type="search" id="default-search" className="block w-full  rounded-3xl p-4 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 " placeholder="japan, Logos..." required />
                                        <button type="submit" className="text-white absolute end-2.5 bottom-3  sm:bottom-2  bg-[#EB6123] sm:py-2 sm:px-5 py-1 px-2 rounded-3xl sm:text-[16px] text-[14px]">Start Planning</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="text-white w-[261px] h-[84px] text-[18px] absolute bottom-0  right-1">Your ultimate trip planner designed to simplify the way you travel.</div>
                    </div>
                </div>
                <div className="">
                <Page2 />
                <Page3 />
                <Page4 />
                <Page5 />
                <Page6 />
                <Page7 />
                <Page8 />
                <Footer /></div>
            </div>
        </>
    )
}

export default Home