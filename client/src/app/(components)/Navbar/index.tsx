"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Bell, BellIcon, MenuIcon, Settings, Sun } from "lucide-react";
import React from "react";

type Props = {};

function Navbar({}: Props) {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebarCollapsed = () =>
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  return (
    <div className="flex justify-between mb-7 w-full ">
      {/* left side of navbar  */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebarCollapsed}
        >
          <MenuIcon className="w-5 h-5" />
        </button>

        <div className="relative ">
          <input
            placeholder="Search Items"
            className="px-3 py-3 w-50 pl-7 pr-2 rounded-lg bg-white border-2  md:w-80 border-gray-300 focus:border-blue-300
             focus:outline-none"
          />
          <BellIcon
            color="gray "
            className="w-5 h-5 focus:red-500 absolute left-2 top-1/2  pointer-events-none  -translate-y-1/2"
          />
        </div>
      </div>
      {/* right side of navbar */}
      <div className="flex justify-between gap-5">
        <div className="hidden md:flex gap-3  items-center">
          <div className="">
            <button className="cursor-pointer " onClick={() => {}}>
              <Sun className="cursor-pointer w-6 h-6" />
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer " size={24} />
            <span className="absolute bg-red-500 -top-2 px-[0.4rem] py-[0.2rem] -right-2 rounded-full inline-flex items-center justify-center  text-white text-xs">
              3
            </span>
          </div>
          <div className="w-0 h-10 border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 ">
            <div className="w-10 h-10 bg-gray-100 text-center flex  items-center justify-center rounded-full">
              img
            </div>
            <span className="font-semibold">Ed Roh</span>
          </div>
        </div>
        <div className="flex gap-3 items-center " onClick={() => {}}>
          <Settings className="cursor-pointer w-6 h-6 text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
