import { Router } from "express";
import { getExpenseSummryByCategory } from "../controllers/expenseController";

const router = Router();

router.get("/", getExpenseSummryByCategory);

export default router;
