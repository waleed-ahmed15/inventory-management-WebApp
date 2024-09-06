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

const CardPurchaseSummary = () => {
  const { data, isLoading, isError } = useGetDashboardMetricsQuery();
  const purchaseData = data?.purchaseSummary;
  const lastDataPoint = purchaseData?.[purchaseData?.length - 1];

  return (
    <div className="bg-white flex flex-col justify-between shadow-md rounded-2xl row-span-2 md:col-span-2 xl:col-span-1 col-span-1 xl:row-span-3">
      {isLoading && (
        <div role="status" className="flex items-center justify-center h-full">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
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

          <ResponsiveContainer width="100%" height={150} className="px-7">
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
