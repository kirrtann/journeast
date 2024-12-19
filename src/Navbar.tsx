
const Navbar = () => {
    return (
        <>
            <div className="flex  max-w-[1480px] h-[90px] container ">

                <nav className="bg-white  dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                    <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
                        <span className="self-center text-[#EB6123] text-2xl font-semibold whitespace-nowrap dark:text-white">JOURNEASY</span>
                        <div className="flex md:order-2 space-x-3 gap-3 md:space-x-0 rtl:space-x-reverse">
                            <button className="bg-gray-100 px-4 py-3  rounded-3xl">Log In</button>
                            <button type="button" className=" bg-[#EB6123]  rounded-3xl text-white  px-4 py-3 ">Get started</button>

                        </div>
                        <div className="items-center justify-between border px-3 py-2 rounded-[30px]  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4  border border-gray-500 rounded-lg  md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                                <li>
                                    <a href="#" className="block bg-[#232322] text-white rounded-3xl py-2 px-3 ">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-[#8C8988]">Travel Guides</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-[#8C8988]">Go Pro</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-[#8C8988]">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar;