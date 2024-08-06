import { Menu } from "lucide-react";
import React from "react";

type Props = {};

function Sidebar({}: Props) {
  return (
    <div>
      {/* header section */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>Logo</div>

        <h1 className="font-extrabold text-xl">WallE Stocks</h1>
        <button className="flex md:hidden bg-gray-100 hover:bg-blue-100 rounded-full px-3 py-3">
          <Menu size={18} />
        </button>
      </div>
      <div className="flex-grow mt-8"></div>
      <div className="text-center text-xs text-gray-500">
        &copy; 2024 WallE Stocks. 
      </div>
    </div>
  );
}

export default Sidebar;
