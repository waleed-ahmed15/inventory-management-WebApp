import { useGetDashboardMetricsQuery } from "@/state/api";
import React from "react";
import LoadingSpinner from "../(components)/LoadingSpinner";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { TrendingUp } from "lucide-react";

type ExpenseSums = {
  [Category: string]: number;
};

const colors = ["#00C49F", "#0088FE", "#FFBB28"];

const CardExpenseSummary = () => {
  const { data, isLoading, isError } = useGetDashboardMetricsQuery();
  const expenseByCategoryData = data?.expenseByCategory || [];

  // this function gets the sum of all the expenses by category
  // and returns an object with the category as key and the sum as value
  const avgExpense =
    expenseByCategoryData.reduce((acc: number, curr) => {
      acc += parseInt(curr.amount);
      return acc;
    }, 0) / expenseByCategoryData.length;

  const expenseSums = expenseByCategoryData?.reduce(
    (acc: ExpenseSums, curr) => {
      console.log(curr);
      const category = curr.category + " Expenses";
      const amount = parseInt(curr.amount);
      if (!acc[category]) acc[category] = 0;
      acc[category] += amount;
      return acc;
    },
    {}
  );
  console.log(expenseByCategoryData);
  const totalExpense = expenseByCategoryData?.reduce((acc: number, curr) => {
    const amount = parseInt(curr.amount);
    acc += amount;
    return acc;
  }, 0);

  //   const expenseSums = expenseByCategoryData.reduce(
  //     (acc: ExpenseSums, item ) => {
  //       const category = item.category + " Expenses";
  //       const amount = parseInt(item.amount, 10);
  //       if (!acc[category]) acc[category] = 0;
  //       acc[category] += amount;
  //       return acc;
  //     },
  //     {}
  //   );
  console.log(expenseSums);

  const expenseCategories = Object.entries(expenseSums!).map(
    ([name, value]) => ({
      name,
      value,
    })
  );
  return (
    <div className="row-span-3 bg-white rounded-2xl flex flex-col justify-between  shadow-md">
      {isLoading && (
        <div className=" flex w-full h-full items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
      {isError && <div className="text-center">Error...</div>}

      {expenseByCategoryData.length !== 0 && (
        <div className="">
          <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
              Expense Summary
            </h2>
            <hr />
          </div>
          <div className=" xl:flex   justify-start pr-7">
            <div className="relative basis-3/5 xl:basis-1/2">
              <ResponsiveContainer width="100%" height={185}>
                <PieChart>
                  <Pie
                    data={expenseCategories}
                    innerRadius={50}
                    outerRadius={60}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    fill="#8884d8"
                  >
                    {expenseCategories.map((entry, index) => {
                      const colorIndex = index % expenseCategories.length;
                      return <Cell key={index} fill={colors[colorIndex]} />;
                    })}
                  </Pie>
                  <Tooltip
                    accessibilityLayer={false}
                    formatter={(value, name) => [`$${value}`, name]} // Custom formatter to format values
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className=" font-bold absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 ">
                ${totalExpense}
              </div>
            </div>
            <ul className="flex flex-col justify-center items-center   xl:items-start py-5 gap-3">
              <div className="flex flex-col gap-4">
                {expenseCategories.map((entry, index) => (
                  <li
                    key={`legend-${index}`}
                    className="flex items-center text-xs"
                  >
                    <span
                      className="mr-2 w-3 h-3 rounded-full"
                      style={{ backgroundColor: colors[index % colors.length] }}
                    ></span>
                    {entry.name}
                  </li>
                ))}
              </div>
            </ul>
          </div>
          {avgExpense && (
            <>
              <hr className="mt-2 lg:invisible "  />
              <div className="flex justify-between px-3 ">
                <div className="flex gap-2">
                  <h3 className=" font-bold">Average: </h3>
                  <p>{avgExpense}</p>
                </div>
                <div className="flex flex-row gap-2 items-center ">
                  <TrendingUp size={20} color="#00C49F" />
                  <p className="text-xs">30%</p>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CardExpenseSummary;
