import { LucideIcon } from "lucide-react";
import React from "react";

interface StatDetail {
  title: string;
  amount: string;
  changePercentage: number;
  trendingIcon: LucideIcon;
}

type StatsCardProps = {
  title: string;
  statDetail: StatDetail[];
  dateRange: string;
  primaryIcon: JSX.Element;
};

const StatsCard = (props: StatsCardProps) => {
  const formatPercentage = (value: number): string => {
    const signal = value >= 0 ? "+" : "";
    return signal;
  };
  const setIconColor = (value: number): string => {
    return value >= 0 ? "text-green-500" : "text-red-500";
  };
  return (
    <div className="md:row-span-2 xl:row-span-2 col-span-1 flex-col w-full bg-white rounded-2xl shadow-md ">
      <div className="flex justify-between px-5 py-4">
        <p className="font-bold text-gray-700">{props.title}</p>
        <p>{props.dateRange}</p>
      </div>
      <hr />
      <div className="flex mt-2 gap-2 px-10">
        <div className=" flex items-center justify-center w-24 h-20 rounded-full bg-blue-100 border border-blue-200">
          {props.primaryIcon}
        </div>
        <div className="flex flex-col overflow-auto h-32 w-full gap-3">
          {props.statDetail.map((detail, index) => (
            <div className="flex flex-col" key={index}>
              <div key={index} className="flex ">
                <p className="text-sm">{detail.title}</p>
                <p className="flex-1 text-center font-bold">{detail.amount}</p>
                <detail.trendingIcon
                  color={`${
                    detail.changePercentage >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  } `}
                />
                <p className={`${setIconColor(detail.changePercentage)}`}>
                  {formatPercentage(detail.changePercentage)}
                  {detail.changePercentage}%
                </p>
              </div>
              {index != props.statDetail.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
