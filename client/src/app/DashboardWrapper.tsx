import React from "react";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`light flex bg-gray-50 text-gray-900 w-full min-h-screen `}>
      <Sidebar/>
      <main className="flex flex-col px-10 py-8 gap-2 w-full">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
