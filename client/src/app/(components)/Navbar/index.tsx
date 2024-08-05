import { BellIcon, MenuIcon } from "lucide-react";
import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="flex flex-row justify-between mb-7 w-full">
      {/* left side of navbar  */}
      <div className="flex justify-between items-center gap-5">
        <button className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100">
          <MenuIcon className="w-5 h-5" />
        </button>

        <div className="relative ">
          <input
            placeholder="Search Items"
            className="px-3 py-3 w-50 pl-7 pr-2 rounded-lg bg-white border-2  md:w-80 border-gray-300 focus:border-blue-300
             focus:outline-none"
          />
          <BellIcon  color="gray "  className="w-5 h-5 focus:red-500 absolute left-2 top-1/2  pointer-events-none  -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
