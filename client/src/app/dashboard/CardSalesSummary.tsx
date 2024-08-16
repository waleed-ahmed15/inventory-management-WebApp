import { useGetDashboardMetricsQuery } from "@/state/api";
import { Select, Tooltip } from "@mui/material";
import { BarChart, TrendingUp } from "lucide-react";
import React, { useState } from "react";
import { CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

const CardSalesSummary = () => {
  const {
    data: dashboardMetrics,
    isLoading,
    isError,
  } = useGetDashboardMetricsQuery();

  const totalValueSum =
    dashboardMetrics?.salesSummary.reduce(
      (acc, curr) => acc + curr.totalValue,
      0
    ) || 0;
  const averageChangePercentage =
    dashboardMetrics?.salesSummary.reduce(
      (acc, curr) =>
        acc + curr.changePercentage!! / dashboardMetrics.salesSummary.length,
      0
    ) || 0;
  const [timeFrame, setTimeFrame] = useState("Daily");
  if (isError) return <div>Error</div>;
  return (
    <div className="row-span-3 xl:row-span-6 bg-white rounded-2xl pb-16 shadow-md">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
            Sales Summary
          </h2>
          <hr />
          <div className="flex flex-row justify-between px-2 py-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-400">Value</p>

              <p className="text-xl font-semibold items-center text-gray-800 flex gap-2">
                <span>
                  $
                  {(totalValueSum / 1000000).toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
                  m
                </span>
                <span>
                  <TrendingUp className=" w-5 h-6" />
                </span>
                <p className="text-green-500 text-xs">
                  {averageChangePercentage.toLocaleString("en", {
                    maximumFractionDigits: 2,
                  })}
                  %
                </p>
              </p>
            </div>

            <select
              className="shadow-sm border border-gray-300 bg-white p-2 rounded h-10"
              value={timeFrame}
              onChange={(e) => {
                setTimeFrame(e.target.value);
              }}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardSalesSummary;
