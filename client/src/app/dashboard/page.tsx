"use client";
import React from "react";
import CardPopularProducts from "./CardPopularProducts";

const Dashboard = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto  gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <div className="bg-gray-700 row-span-3 xl:row-span-6 " />
      <div className="bg-gray-700 row-span-2 md:col-span-2 xl:col-span-1 col-span-1 xl:row-span-3" />
      <div className="row-span-3 bg-gray-300" />
      <div className="md:row-span-1 xl:row-span-2 bg-amber-400" />
      <div className="md:row-span-1 xl:row-span-2 bg-orange-400" />
      <div className="md:row-span-1 xl:row-span-2 bg-orange-400" />
    </div>
  );
};

export default Dashboard;
