import { useGetDashboardMetricsQuery } from "@/state/api";
import { TrendingDown, TrendingUp } from "lucide-react";
import numeral from "numeral";
import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import LoadingSpinner from "../(components)/LoadingSpinner";

const CardPurchaseSummary = () => {
  const { data, isLoading, isError } = useGetDashboardMetricsQuery();
  const purchaseData = data?.purchaseSummary;
  const lastDataPoint = purchaseData?.[purchaseData?.length - 1];

  return (
    <div className="bg-white flex flex-col justify-between shadow-md rounded-2xl row-span-2 md:col-span-2 xl:col-span-1 col-span-1 xl:row-span-3">
      {isLoading && (
        <LoadingSpinner/>
      )}
      {isError && <div>Error</div>}
      {/* BODY */}
      {purchaseData && (
        <div className=" flex flex-1 flex-col">
          <div>
            <h2 className="text-lg font-semibold mb-1 px-7 pt-5">
              Purchase Summary
            </h2>
            <hr />
          </div>
          <div className="mt-7 px-7">
            <p className="text-xs text-gray-400">Purchased</p>
            <div className="flex items-center">
              <p className=" text-2xl font-bold">
                {lastDataPoint
                  ? numeral(lastDataPoint.totalPurchased).format("0.0a")
                  : "0"}

                <span
                  className={`${
                    lastDataPoint?.changePercentage! > 0
                      ? "text-green-500"
                      : "text-red-500"
                  } text-sm ml-2`}
                >
                  {lastDataPoint?.changePercentage! > 0 ? (
                    <TrendingUp className=" inline w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="inline w-4 h-4 mr-1" />
                  )}
                  {lastDataPoint?.changePercentage?.toFixed(2)}%
                </span>
              </p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={150} className="-ml-7 flex ">
            <AreaChart data={purchaseData}>
              <XAxis
                tickFormatter={(value: number) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });
                }}
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "transparent" }}
              />

              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: "transparent" }}
              />
              <Tooltip
                formatter={(value: number) => [
                  `$${value.toLocaleString("en")}`,
                ]}
                labelFormatter={(label) => {
                  const date = new Date(label);
                  return date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });
                }}
              />
              <Area
                dot={true}
                stroke="#3182ce"
                type="linear"
                dataKey="totalPurchased"
                fill="#3182ce"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        //CHART
      )}
    </div>
  );
};

export default CardPurchaseSummary;
