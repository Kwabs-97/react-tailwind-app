/** @format */

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="text-white flex justify-between items-center h-24 mx-auto max-w-[1240px] px-4 ">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resource</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500  "
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-6">REACT.</h1>
        <ul className="p-4 text-white">
          <li className="p-4 border-b border-b-gray-700">Home</li>
          <li className="p-4 border-b border-b-gray-700">Company</li>
          <li className="p-4 border-b border-b-gray-700">Resource</li>
          <li className="p-4 border-b border-b-gray-700">About</li>
          <li className="p-4">Contact</li>
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
