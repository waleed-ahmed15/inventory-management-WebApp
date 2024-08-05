import React from "react";
import Navbar from "./(components)/Navbar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`light flex bg-gray-50 text-gray-900 w-full min-h-screen `}>
      sidebar
      <main className="flex flex-col px-10 py-8 gap-2">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
