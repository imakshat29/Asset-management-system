import express from "express";
import { getAssetSummary, getAssignmentStats, getMonthlyAnalytics } from "../controllers/report.controller.js";
import { getDashboardReport } from "../controllers/report.controller.js";


const router = express.Router();
    router.get("/asset-summary", getAssetSummary);
    router.get("/assignment-stats", getAssignmentStats);
    router.get("/monthly-analytics", getMonthlyAnalytics);
    router.get("/dashboard", getDashboardReport);

export default router;