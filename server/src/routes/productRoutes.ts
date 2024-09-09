import { Router } from "express";
import { createProduct, getProducts } from "../controllers/productsController";

const router = Router();

router.get("/", getProducts);
router.post("/add", createProduct);

export default router;
