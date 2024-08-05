import React from "react";

type Props = {};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      DashboardWrapper
      {children}
    </div>
  );
};

export default DashboardWrapper;
