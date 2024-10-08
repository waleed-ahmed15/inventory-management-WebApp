import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDasboardMetrics = async (
  req: Request,
  res: Response
): Promise<void> => {
  // add delay of 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));    
  try {
    const popularProducts = await prisma.products.findMany({
      take: 15,
      orderBy: {
        stockQuantity: "desc",
      },
    });
    const salesSummary = await prisma.salesSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });
    const purchaseSummary = await prisma.purchaseSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });
    const expenseSummary = await prisma.expenseSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });
    const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany(
      {
        take: 5,
        orderBy: {
          date: "desc",
        },
      }
    );
    const expenseByCategory = expenseByCategorySummaryRaw.map((item) => {
      console.log(item);
      return {
        ...item,
        amount: Number(item.amount),
      };
    });
    res.json({
      popularProducts,
      salesSummary,
      purchaseSummary,
      expenseSummary,
      expenseByCategory,
    });
  } catch (error: any) {
    res.status(500).json({ message: "Error retrieving dashboard metrics" });
    console.log(error.toString);
  }
};
