import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Menu } from "lucide-react";
import React from "react";

type Props = {};

function Sidebar({}: Props) {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const toggleSidebarCollapsed = () =>
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  const sidebarClassNames = `flex flex-col fixed ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  }  bg-white transition-all duration-300 overflow-hidden  h-full shadow-md z-40 `;
  return (
    <div className={sidebarClassNames}>
      {/* header section */}
      <div className={`${isSidebarCollapsed?"px-5":"px-8"} flex gap-3 justify-between md:justify-normal items-center pt-8`}>
        <div>Logo</div>

        <h1 className="font-extrabold text-xl">WallE Stocks</h1>
        <button
          className="flex md:hidden bg-gray-100 hover:bg-blue-100 rounded-full px-3 py-3"
          onClick={toggleSidebarCollapsed}
        >
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
