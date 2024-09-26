"use client";
import React from "react";
import Header from "../(components)/Header";
import { useAppDispatch, useAppSelector } from "../redux";
import { setIsDarkMode } from "@/state";

type SettingsProps = {};

const SettingsPage = (props: SettingsProps) => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const toggleDarkMode = () => dispatch(setIsDarkMode(!isDarkMode));

  return (
    <div>
      <Header name="User Settings" />
      <div className="flex  min-w-[400px]">
        <div className="flex flex-col gap-5 border-2 w-full bg-white shadow-md rounded-sm">
          <div className="flex bg-gray-900 text-gray-100 w-full py-3">
            <h1 className="w-[200px] px-3 text-lg font-semibold">Settings</h1>
            <h1 className=" font-semibold text-lg">Value</h1>
          </div>
          <div className="flex items-center">
            <h1 className="w-[200px] px-3 font-medium">Username</h1>
            <input
              className="block w-[200px]  p-2 border   bg-white border-gray-200 dark:border-gray-600 rounded-md"
              disabled
              name="name"
              value="WallE"
              type="text"
              maxLength={100}
            />
          </div>
          <div className="flex items-center">
            <h1 className="w-[200px] px-3 font-medium">Email</h1>
            <input
              className="block w-[200px]  p-2 border dark:bg-white   bg-white  border-gray-200 dark:border-gray-600 rounded-md"
              disabled
              name="name"
              value="waleed.ah755@gmail.com"
              type="text"
              maxLength={100}
            />
          </div>
          <div className="flex items-center">
            <h1 className="w-[200px] px-3 font-medium">Notifiction</h1>
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer "
                // checked={setting.value as boolean}
                // onChange={() => handleToggleChange(index)}
              />
              <div
                className="w-11 h-6 bg-gray-200 rounded-full peer 
                        transition peer-checked:after:translate-x-full peer-checked:after:border-white 
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                        peer-checked:bg-blue-600"
              ></div>
            </label>
          </div>
          <div className="flex items-center">
            <h1 className="w-[200px] px-3 font-medium">Dark Mode</h1>
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                // checked={setting.value as boolean}
                onChange={() => {
                  console.log("dark mode");
                  toggleDarkMode();
                }}
              />
              <div
                className="w-11 h-6 bg-gray-200 rounded-full peer 
                        transition peer-checked:after:translate-x-full peer-checked:after:border-white 
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                        peer-checked:bg-blue-600"
              ></div>
            </label>
          </div>
          <div className="flex mb-5 items-center">
            <h1 className="w-[200px] px-3  font-medium">Language</h1>
            <input
              className="block w-[200px]  p-2 border     dark:bg-white  border-gray-200 dark:border-gray-600 rounded-md"
              disabled
              name="name"
              value="English"
              type="text"
              maxLength={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
