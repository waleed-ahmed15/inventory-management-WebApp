import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

 export const getProducts = async (req: Request, res: Response): Promise<void> => {
  const search = req.query.search?.toString();
  try {
    const products = await prisma.products.findMany({
      where: {
        name: {
          contains: search,
        },
      },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching products",
    });
  }
};
export const  createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { productId, name, price, rating, stockQuantity } = req.body;
    const product = await prisma.products.create({
      data: {
        productId,
        name,
        price,
        rating,
        stockQuantity,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Error creating product",
    });
  }
};
