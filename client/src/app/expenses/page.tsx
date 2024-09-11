"use client";
import { useMemo, useState } from "react";
import Header from "../(components)/Header";
import { ExpenseByCategory, useGetExpensesQuery } from "@/state/api";
import LoadingSpinner from "../(components)/LoadingSpinner";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {};
type AggregatedDataItem = {
  name: string;
  color?: string;
  amount: number;
};
type AggregatedData = {
  [category: string]: AggregatedDataItem;
};
const parseDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};
const ExpensePage = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { data: expensesData, isLoading, isError } = useGetExpensesQuery();
  const classNames = {
    label: "block text-sm font-medium text-gray-700",
    input:
      "mt-1  block shadow-sm sm:text-sm border-gray-300 bg-white border w-[300px] rounded-md p-3",
  };

  const filterData = (): ExpenseByCategory[] => {
    if (expensesData) {
      return expensesData.filter(
        (expense) =>
          expense.category === selectedCategory ||
          (selectedCategory === "All" &&
            (startDate === "" || parseDate(expense.date) >= startDate) &&
            (endDate === "" || parseDate(expense.date) <= endDate))
      );
    }
    return [];
  };

  const pieChartData = useMemo(() => {
    const aggregatedData = filterData().reduce(
      (acc: AggregatedData, expense) => {
        const category = expense.category;
        if (!acc[category]) {
          acc[category] = {
            name: category,
            amount: 0,
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          };
        }
        acc[category].amount += parseInt(expense.amount);
        return acc;
      },
      {}
    );
    const data = Object.values(aggregatedData);
    console.log(data);
    return data;
  }, [startDate, endDate, selectedCategory, expensesData]);

  console.log(expensesData);
  if (isLoading)
    return (
      <div className="text-center h-full ">
        <LoadingSpinner />
      </div>
    );
  if (!expensesData || isError) return <div>Error...</div>;

  return (
    <div>
      <div className="mb-5">
        <Header name="Expenses " />
        <p className="text-sm text-gray-500">
          A visual representation of expenses Over time
        </p>
      </div>
      <div className="flex sm:justify-center sm:items-center justify-center items-center max-sm:flex-col gap-10 h-full  ">
        <div className="flex flex-col bg-white w-fit p-5 shadow-md rounded-lg gap-3">
          <div>
            <label htmlFor="category">
              <span className={classNames.label}>Filter By Category</span>
            </label>
            <select
              id="category"
              className={classNames.input}
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
            >
              <option value="All">All</option>
              <option value="Office">Offices</option>
              <option value="Salaries">Salaries</option>
              <option value="Professional">Professional</option>
            </select>
          </div>
          <div>
            <label htmlFor="start-date">
              <span className={classNames.label}>Start Date</span>
            </label>
            <input
              id="start-date"
              type="date"
              className={classNames.input}
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
            />
          </div>
          <div>
            <label htmlFor="end-date">
              <span className={classNames.label}>End Date</span>
            </label>
            <input
              id="end-date"
              type="date"
              className={classNames.input}
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
            />
          </div>
        </div>
        <div className="flex-1 w-full flex-grow bg-white shadow rounded-lg p-4 md:p-6">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieChartData}
                dataKey="amount"
                nameKey="name"
                cx="50%"
                cy="50%"
                label
                labelLine={false}
                fill="#8884d8"
                // onMouseEnter={(data, index) => setActiveIndex(index)}
              >
                {pieChartData.map((entry, index) => {
                  return <Cell key={index} fill={pieChartData[index].color} />;
                })}
              </Pie>
              <Tooltip
                accessibilityLayer={false}
                formatter={(value, name) => [`$${value}`, name]} // Custom formatter to format values
              />
            </PieChart>
          </ResponsiveContainer>
          <ul className="flex justify-center items-center   xl:items-start py-5 gap-3">
            <div className="flex gap-4">
              {pieChartData.map((entry, index) => (
                <li
                  key={`legend-${index}`}
                  className="flex items-center text-xs"
                >
                  <span
                    className="mr-2 w-3 h-3 rounded-full"
                    style={{ backgroundColor: pieChartData[index].color ?? "" }}
                  ></span>
                  {entry.name}
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpensePage;
