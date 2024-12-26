import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  

  return (
    <>
      <div className="flex max-w-[1480px] h-[90px] container">
        <nav className="bg-white w-full z-20 top-0">
          <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <span className="self-center text-[#EB6123] text-2xl font-semibold whitespace-nowrap dark:text-white">JOURNEASY</span>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center text-[#EB6123] focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            <div className={`md:flex md:items-center md:space-x-5 md:border-0 border px-3 py-2 rounded-[30px] w-full md:w-auto ${isOpen ? 'block' : 'hidden'} md:block`}>
              <ul className="flex flex-col p-4 md:p-0 mt-4 md:mt-0 border border-gray-500 rounded-lg md:space-x-5 rtl:space-x-reverse md:flex-row md:border-0 md:bg-white">
                <li>
                  <a href="#" className="block bg-[#232322] text-white rounded-3xl py-2 px-3">Home</a>
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

            <div className="flex md:order-2 space-x-3 gap-3 md:space-x-0 rtl:space-x-reverse">
              <button className="bg-gray-100 px-4 py-3 rounded-3xl">Log In</button>
              <button type="button" className="bg-[#EB6123] rounded-3xl text-white px-4 py-3">Get started</button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
