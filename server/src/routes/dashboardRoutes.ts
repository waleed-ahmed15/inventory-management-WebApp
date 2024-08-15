import { Router } from "express";
import { getDasboardMetrics } from "../controllers/dashboardControllers";

const router = Router();

router.get("/", getDasboardMetrics);

export default router;