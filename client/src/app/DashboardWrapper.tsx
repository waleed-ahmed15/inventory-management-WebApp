"use client";
import React from "react";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  console;
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  console.log(isDarkMode);
  return (
    <div
      className={`${isDarkMode ? "dark" : "light"} 
      flex bg-gray-50 text-gray-900 w-full min-h-screen `}
    >
      <Sidebar />
      <main
        className={`flex flex-col px-9 py-7 gap-2 w-full  ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <Navbar />
        {children}
      </main>0
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
