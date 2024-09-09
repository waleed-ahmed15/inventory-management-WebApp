"use client";
import React from "react";
import CardPopularProducts from "./CardPopularProducts";
import CardSalesSummary from "./CardSalesSummary";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardExpenseSummary from "./CardExpenseSummary";
import StatsCard from "./StatsCard";
import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from "lucide-react";

const Dashboard = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto  gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatsCard
        primaryIcon={<Package className="text-blue-300 w-6 h-6" />}
        dateRange="20-29 October 2024"
        title="Customer and Expenses"
        statDetail={[
          {
            title: "Customer Growth",
            amount: "166",
            changePercentage: 231,
            trendingIcon: TrendingUp,
          },
          {
            title: "Expenses",
            amount: "177",
            changePercentage: -31,
            trendingIcon: TrendingDown,
          },
        ]}
      />
      <StatsCard
        primaryIcon={<CheckCircle className="text-blue-300 w-6 h-6" />}
        dateRange="20-29 October 2024"
        title="Dues & Pending Orders"
        statDetail={[
          {
            title: "Dues",
            amount: "166.00",
            changePercentage: 100,
            trendingIcon: TrendingUp,
          },
          {
            title: "Pending Orders",
            amount: "204.05",
            changePercentage: -41,
            trendingIcon: TrendingDown,
          },
        ]}
      />
      <StatsCard
        primaryIcon={<Tag className="text-blue-300 w-6 h-6" />}
        dateRange="20-29 October 2024"
        title="Sales & Discounts"
        statDetail={[
          {
            title: "Sales",
            amount: "166.12",
            changePercentage: 137,
            trendingIcon: TrendingUp,
          },
          {
            title: "Discounts",
            amount: "177.45",
            changePercentage: +44,
            trendingIcon: TrendingUp,
          },
        ]}
      />
    </div>
  );
};

export default Dashboard;
